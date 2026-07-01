import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public.functions-DmHx9Fe4.js
async function publicClient() {
	const { createClient } = await import("../_libs/supabase__supabase-js.mjs").then((n) => n.n);
	return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY, { auth: {
		storage: void 0,
		persistSession: false,
		autoRefreshToken: false
	} });
}
var getRooms_createServerFn_handler = createServerRpc({
	id: "1ab5422cac9705762c8c414a3909f0abd4ad4fb32a5b0f0b37c65dae80b6b347",
	name: "getRooms",
	filename: "src/lib/public.functions.ts"
}, (opts) => getRooms.__executeServer(opts));
var getRooms = createServerFn({ method: "GET" }).handler(getRooms_createServerFn_handler, async () => {
	const { data, error } = await (await publicClient()).from("rooms").select("id,name,room_number,category,description,price,weekend_price,capacity,floor,amenities,images,status,sort_order,total_units").eq("is_active", true).order("sort_order", { ascending: true });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var getRoomAvailability_createServerFn_handler = createServerRpc({
	id: "c56bcfdbd31ee48de9f00ad0ef0612ac0365ce8ae950313be9100e6375486750",
	name: "getRoomAvailability",
	filename: "src/lib/public.functions.ts"
}, (opts) => getRoomAvailability.__executeServer(opts));
var getRoomAvailability = createServerFn({ method: "GET" }).validator((data) => data ?? {}).handler(getRoomAvailability_createServerFn_handler, async ({ data }) => {
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const tomorrow = new Date(Date.now() + 864e5).toISOString().slice(0, 10);
	const checkIn = data?.checkIn || today;
	const checkOut = data?.checkOut || tomorrow;
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const { bookedUnitsForRoom } = await import("./booking.server-npsx-oPw.mjs");
	const { data: rooms, error: rErr } = await supabaseAdmin.from("rooms").select("id,name,category,total_units").eq("is_active", true);
	if (rErr) throw new Error(rErr.message);
	const result = [];
	for (const room of rooms ?? []) {
		const total = Number(room.total_units) || 0;
		const booked = await bookedUnitsForRoom(room.id, checkIn, checkOut);
		result.push({
			roomId: room.id,
			name: room.name,
			category: room.category,
			total,
			booked,
			available: Math.max(0, total - booked)
		});
	}
	return result;
});
var getOffers_createServerFn_handler = createServerRpc({
	id: "8394dac5fd53af3a94fc03f13b19f973ce478645c90d4f9f9544c162576d99f2",
	name: "getOffers",
	filename: "src/lib/public.functions.ts"
}, (opts) => getOffers.__executeServer(opts));
var getOffers = createServerFn({ method: "GET" }).handler(getOffers_createServerFn_handler, async () => {
	const { data, error } = await (await publicClient()).from("offers").select("id,title,description,type,code,discount,image").eq("is_active", true).order("created_at", { ascending: false });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var getServices_createServerFn_handler = createServerRpc({
	id: "1728c2fa38d431d1e796130d03ee72c20547ca6964031dad5231e381a1a5c15a",
	name: "getServices",
	filename: "src/lib/public.functions.ts"
}, (opts) => getServices.__executeServer(opts));
var getServices = createServerFn({ method: "GET" }).handler(getServices_createServerFn_handler, async () => {
	const { data, error } = await (await publicClient()).from("services").select("id,title,description,group_name,icon,tags,sort_order").eq("is_active", true).order("sort_order", { ascending: true });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var getEvents_createServerFn_handler = createServerRpc({
	id: "cca395394a7a717c2d5ff8f3d29e71d8a0a580e5ec9689290b207e6bd80406a9",
	name: "getEvents",
	filename: "src/lib/public.functions.ts"
}, (opts) => getEvents.__executeServer(opts));
var getEvents = createServerFn({ method: "GET" }).handler(getEvents_createServerFn_handler, async () => {
	const { data, error } = await (await publicClient()).from("events").select("id,name,subtitle,badge,description,capacity,size,floor,price,image,amenities,coming_soon,sort_order").eq("is_active", true).order("sort_order", { ascending: true });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var getMenu_createServerFn_handler = createServerRpc({
	id: "68bf4a5b734f1fcffe15df3ebcb0e74eebf35f692798f04ec33ee322154a884d",
	name: "getMenu",
	filename: "src/lib/public.functions.ts"
}, (opts) => getMenu.__executeServer(opts));
var getMenu = createServerFn({ method: "GET" }).handler(getMenu_createServerFn_handler, async () => {
	const supabase = await publicClient();
	const { data: cats, error: cErr } = await supabase.from("menu_categories").select("id,name,sort_order").eq("is_active", true).order("sort_order", { ascending: true });
	if (cErr) throw new Error(cErr.message);
	const { data: items, error: iErr } = await supabase.from("menu_items").select("id,category_id,name,price,sort_order").eq("is_available", true).order("sort_order", { ascending: true });
	if (iErr) throw new Error(iErr.message);
	return (cats ?? []).map((c) => ({
		category: c.name,
		items: (items ?? []).filter((i) => i.category_id === c.id).map((i) => ({
			name: i.name,
			price: i.price ?? ""
		}))
	})).filter((c) => c.items.length > 0);
});
//#endregion
export { getEvents_createServerFn_handler, getMenu_createServerFn_handler, getOffers_createServerFn_handler, getRoomAvailability_createServerFn_handler, getRooms_createServerFn_handler, getServices_createServerFn_handler };
