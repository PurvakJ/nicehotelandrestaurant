import { supabaseAdmin } from "./client.server-Bw6iWMJ-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking.server-npsx-oPw.js
function nightsBetween(checkIn, checkOut) {
	const a = (/* @__PURE__ */ new Date(checkIn + "T00:00:00Z")).getTime();
	const b = (/* @__PURE__ */ new Date(checkOut + "T00:00:00Z")).getTime();
	const n = Math.round((b - a) / 864e5);
	return n > 0 ? n : 0;
}
/** Returns an existing booking id for a Razorpay payment/order (idempotency), or null. */
async function findExistingBooking(orderId, paymentId) {
	const { data } = await supabaseAdmin.from("bookings").select("id").or(`razorpay_payment_id.eq.${paymentId},razorpay_order_id.eq.${orderId}`).limit(1);
	return data && data.length > 0 ? data[0].id : null;
}
var EXTRA_BED_PER_NIGHT = 800;
/** Count how many units of a room are already booked over an overlapping date range. */
async function bookedUnitsForRoom(roomId, checkIn, checkOut) {
	const { data: lines } = await supabaseAdmin.from("booking_rooms").select("quantity, bookings!inner(status, check_in, check_out)").eq("room_id", roomId).neq("bookings.status", "cancelled").lt("bookings.check_in", checkOut).gt("bookings.check_out", checkIn);
	let units = 0;
	const countedBookingIds = /* @__PURE__ */ new Set();
	for (const l of lines ?? []) units += Number(l.quantity) || 1;
	const { data: legacy } = await supabaseAdmin.from("bookings").select("id").eq("room_id", roomId).neq("status", "cancelled").lt("check_in", checkOut).gt("check_out", checkIn);
	if (legacy && legacy.length) {
		const ids = legacy.map((b) => b.id);
		const { data: hasChildren } = await supabaseAdmin.from("booking_rooms").select("booking_id").in("booking_id", ids);
		const withChildren = new Set((hasChildren ?? []).map((r) => r.booking_id));
		for (const b of legacy) if (!withChildren.has(b.id) && !countedBookingIds.has(b.id)) units += 1;
	}
	return units;
}
async function getRoomsByIds(ids) {
	const unique = [...new Set(ids)];
	const { data, error } = await supabaseAdmin.from("rooms").select("id,name,price,weekend_price,capacity,images,category,total_units").in("id", unique).eq("is_active", true);
	if (error) throw new Error("Could not load rooms");
	const map = {};
	for (const r of data ?? []) map[r.id] = r;
	for (const id of unique) if (!map[id]) throw new Error("Room not found");
	return map;
}
/** Build a priced quote for multiple room lines. */
async function computeMultiQuote(items, checkIn, checkOut) {
	const nights = nightsBetween(checkIn, checkOut);
	if (nights <= 0) throw new Error("Invalid date range");
	if (!items.length) throw new Error("No rooms selected");
	const rooms = await getRoomsByIds(items.map((i) => i.roomId));
	const lines = items.map((i) => {
		const room = rooms[i.roomId];
		const qty = Math.max(1, Number(i.quantity) || 1);
		const extraBed = !!i.extraBed;
		const unitPrice = Number(room.price) * nights + (extraBed ? EXTRA_BED_PER_NIGHT * nights : 0);
		return {
			room,
			quantity: qty,
			adults: Math.max(1, Number(i.adults) || 1),
			children: Math.max(0, Number(i.children) || 0),
			extraBed,
			notes: i.notes?.trim() || null,
			unitPrice,
			lineTotal: unitPrice * qty
		};
	});
	const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
	const taxRate = .12;
	const taxes = Math.round(subtotal * taxRate);
	return {
		nights,
		lines,
		subtotal,
		taxRate,
		taxes,
		grandTotal: subtotal + taxes
	};
}
/** Throws if any room line cannot be fulfilled for the date range. */
async function assertMultiAvailable(items, checkIn, checkOut) {
	const rooms = await getRoomsByIds(items.map((i) => i.roomId));
	const requested = {};
	for (const i of items) requested[i.roomId] = (requested[i.roomId] ?? 0) + Math.max(1, Number(i.quantity) || 1);
	for (const roomId of Object.keys(requested)) {
		const room = rooms[roomId];
		const available = (Number(room.total_units) || 1) - await bookedUnitsForRoom(roomId, checkIn, checkOut);
		if (requested[roomId] > available) throw new Error(`${room.name}: only ${Math.max(0, available)} room(s) available for these dates`);
	}
}
//#endregion
export { assertMultiAvailable, bookedUnitsForRoom, computeMultiQuote, findExistingBooking };
