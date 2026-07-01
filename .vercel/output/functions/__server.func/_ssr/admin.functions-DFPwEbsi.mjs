import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { r as useSession$1 } from "./request-response-Bv1MIUlU.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { createHash, timingSafeEqual } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.functions-DFPwEbsi.js
function sessionConfig() {
	return {
		password: process.env.SESSION_SECRET,
		name: "nice-admin",
		maxAge: 3600 * 12,
		cookie: {
			httpOnly: true,
			secure: true,
			sameSite: "none",
			path: "/"
		}
	};
}
function matches(input, expected) {
	return timingSafeEqual(createHash("sha256").update(input, "utf8").digest(), createHash("sha256").update(expected, "utf8").digest());
}
async function assertUnlocked() {
	if (!(await useSession$1(sessionConfig())).data.unlocked) throw new Error("Admin session locked");
}
var ALLOWED = /* @__PURE__ */ new Set([
	"bookings",
	"rooms",
	"menu_categories",
	"menu_items",
	"offers",
	"enquiries",
	"site_settings",
	"services",
	"events",
	"email_logs",
	"notifications"
]);
function table(t) {
	if (!ALLOWED.has(t)) throw new Error("Unknown table");
	return t;
}
var adminUnlock_createServerFn_handler = createServerRpc({
	id: "3ab4aa441ff3d78bf977a2b64ffea69daeb42364c1eada24eaa35980a0936f94",
	name: "adminUnlock",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminUnlock.__executeServer(opts));
var adminUnlock = createServerFn({ method: "POST" }).validator((d) => d).handler(adminUnlock_createServerFn_handler, async ({ data }) => {
	const expected = process.env.ADMIN_PASSWORD;
	if (!expected) throw new Error("Admin password not configured");
	if (!matches(data.password ?? "", expected)) return { ok: false };
	await (await useSession$1(sessionConfig())).update({ unlocked: true });
	return { ok: true };
});
var adminStatus_createServerFn_handler = createServerRpc({
	id: "071c9034ee157920f00ef33d2423b001609d4735aef36265881dffb10297f9d8",
	name: "adminStatus",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminStatus.__executeServer(opts));
var adminStatus = createServerFn({ method: "GET" }).handler(adminStatus_createServerFn_handler, async () => {
	return { unlocked: !!(await useSession$1(sessionConfig())).data.unlocked };
});
var adminLogout_createServerFn_handler = createServerRpc({
	id: "b778199f0067dc3af0626a35537d9640eabb3a694e5f097e062cd440c74c2c03",
	name: "adminLogout",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminLogout.__executeServer(opts));
var adminLogout = createServerFn({ method: "POST" }).handler(adminLogout_createServerFn_handler, async () => {
	await (await useSession$1(sessionConfig())).clear();
	return { ok: true };
});
var adminList_createServerFn_handler = createServerRpc({
	id: "2a1221af605f33de14fcb3129215421dab3d887ea7a54786b11ee6fc22dd2385",
	name: "adminList",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminList.__executeServer(opts));
var adminList = createServerFn({ method: "POST" }).validator((d) => d).handler(adminList_createServerFn_handler, async ({ data }) => {
	await assertUnlocked();
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	let q = supabaseAdmin.from(table(data.table)).select("*");
	if (data.orderBy) q = q.order(data.orderBy, { ascending: data.ascending ?? false });
	const { data: rows, error } = await q;
	if (error) throw new Error(error.message);
	return rows ?? [];
});
var adminUpsert_createServerFn_handler = createServerRpc({
	id: "5cc0279c96364588651386247a894627f23b1528e5a701b5207f2967bcacde82",
	name: "adminUpsert",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminUpsert.__executeServer(opts));
var adminUpsert = createServerFn({ method: "POST" }).validator((d) => d).handler(adminUpsert_createServerFn_handler, async ({ data }) => {
	await assertUnlocked();
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const db = supabaseAdmin;
	if (data.id) {
		const { error } = await db.from(table(data.table)).update(data.values).eq("id", data.id);
		if (error) throw new Error(error.message);
	} else {
		const { error } = await db.from(table(data.table)).insert(data.values);
		if (error) throw new Error(error.message);
	}
	return { ok: true };
});
var adminDelete_createServerFn_handler = createServerRpc({
	id: "b54307ac4d34e95076d59a570cf2390f961b96c0ba131b8afe0ae55ca874601e",
	name: "adminDelete",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminDelete.__executeServer(opts));
var adminDelete = createServerFn({ method: "POST" }).validator((d) => d).handler(adminDelete_createServerFn_handler, async ({ data }) => {
	await assertUnlocked();
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const { error } = await supabaseAdmin.from(table(data.table)).delete().eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminUpload_createServerFn_handler = createServerRpc({
	id: "1ef5d1379ca5da0a5a00b63272372eb57ef53d16c2ff1e76a1aa92eef0d766ad",
	name: "adminUpload",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminUpload.__executeServer(opts));
var adminUpload = createServerFn({ method: "POST" }).validator((d) => d).handler(adminUpload_createServerFn_handler, async ({ data }) => {
	await assertUnlocked();
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const ext = (data.filename.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
	const path = `uploads/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
	const bytes = Buffer.from(data.base64, "base64");
	const { error } = await supabaseAdmin.storage.from("site-images").upload(path, bytes, {
		contentType: data.contentType || "image/jpeg",
		upsert: true
	});
	if (error) throw new Error(error.message);
	const { data: signed, error: signErr } = await supabaseAdmin.storage.from("site-images").createSignedUrl(path, 3600 * 24 * 365 * 10);
	if (signErr) throw new Error(signErr.message);
	return { url: signed.signedUrl };
});
var adminSettingsList_createServerFn_handler = createServerRpc({
	id: "54b03e959c600a4220baf297183aa0cfbec160932ea5456878729d09df280586",
	name: "adminSettingsList",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminSettingsList.__executeServer(opts));
var adminSettingsList = createServerFn({ method: "GET" }).handler(adminSettingsList_createServerFn_handler, async () => {
	await assertUnlocked();
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const { data, error } = await supabaseAdmin.from("site_settings").select("*").order("key", { ascending: true });
	if (error) throw new Error(error.message);
	return data ?? [];
});
var adminSettingSave_createServerFn_handler = createServerRpc({
	id: "4e17e70bd80efa77f39d962ebef58764fd4796beaf8645bf7b5555373fc14950",
	name: "adminSettingSave",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminSettingSave.__executeServer(opts));
var adminSettingSave = createServerFn({ method: "POST" }).validator((d) => d).handler(adminSettingSave_createServerFn_handler, async ({ data }) => {
	await assertUnlocked();
	if (!data.key) throw new Error("Key is required");
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const { error } = await supabaseAdmin.from("site_settings").upsert({
		key: data.key,
		value: data.value,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	}, { onConflict: "key" });
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminSettingDelete_createServerFn_handler = createServerRpc({
	id: "43e32a835cfd8045a9c2dd0092c27c622b0c8b910d87c951ffae74474bb817ab",
	name: "adminSettingDelete",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminSettingDelete.__executeServer(opts));
var adminSettingDelete = createServerFn({ method: "POST" }).validator((d) => d).handler(adminSettingDelete_createServerFn_handler, async ({ data }) => {
	await assertUnlocked();
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const { error } = await supabaseAdmin.from("site_settings").delete().eq("key", data.key);
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminResendEmail_createServerFn_handler = createServerRpc({
	id: "4bf747f8a8186f2a428960f75f38a579b697cfa23b3f0e48cfb77cec089d6536",
	name: "adminResendEmail",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminResendEmail.__executeServer(opts));
var adminResendEmail = createServerFn({ method: "POST" }).validator((d) => d).handler(adminResendEmail_createServerFn_handler, async ({ data }) => {
	await assertUnlocked();
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const { data: log, error } = await supabaseAdmin.from("email_logs").select("*").eq("id", data.id).single();
	if (error) throw new Error(error.message);
	if (!log) throw new Error("Email log not found");
	const { sendEmail } = await import("./email.server-Bk8bA_LU.mjs");
	const { renderEmail } = await import("./email-templates-f7wI1q6q.mjs");
	const payload = log.payload ?? {};
	const type = payload.type || log.type || "generic";
	const rendered = renderEmail(type, payload.data ?? {});
	return { ok: await sendEmail({
		to: log.recipient,
		subject: payload.subject || log.subject || rendered.subject,
		html: rendered.html,
		type,
		payload
	}) };
});
var adminNotificationsMarkRead_createServerFn_handler = createServerRpc({
	id: "fd8728cba9751c500233873ed59ce2d3c12b0b2ec6e2e1f134e4955cdb9bfe05",
	name: "adminNotificationsMarkRead",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminNotificationsMarkRead.__executeServer(opts));
var adminNotificationsMarkRead = createServerFn({ method: "POST" }).validator((d) => d).handler(adminNotificationsMarkRead_createServerFn_handler, async ({ data }) => {
	await assertUnlocked();
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	let q = supabaseAdmin.from("notifications").update({ read: true });
	q = data.all ? q.eq("read", false) : q.eq("id", data.id);
	const { error } = await q;
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminNotificationsClear_createServerFn_handler = createServerRpc({
	id: "b26b8b1451285d48a641d849aa3b7ac1f04de97f127dd76364d4d1049def2bb7",
	name: "adminNotificationsClear",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminNotificationsClear.__executeServer(opts));
var adminNotificationsClear = createServerFn({ method: "POST" }).handler(adminNotificationsClear_createServerFn_handler, async () => {
	await assertUnlocked();
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const { error } = await supabaseAdmin.from("notifications").delete().neq("id", "00000000-0000-0000-0000-000000000000");
	if (error) throw new Error(error.message);
	return { ok: true };
});
var adminBookingRooms_createServerFn_handler = createServerRpc({
	id: "c18671579ff2d89361c1a191f95222d04bd38f7349043613d7410d8388192c9b",
	name: "adminBookingRooms",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminBookingRooms.__executeServer(opts));
var adminBookingRooms = createServerFn({ method: "POST" }).validator((d) => d).handler(adminBookingRooms_createServerFn_handler, async ({ data }) => {
	await assertUnlocked();
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const { data: rows, error } = await supabaseAdmin.from("booking_rooms").select("*").eq("booking_id", data.bookingId).order("created_at", { ascending: true });
	if (error) throw new Error(error.message);
	return rows ?? [];
});
var adminBookingRoomUpdate_createServerFn_handler = createServerRpc({
	id: "4413aab639d4b72b5c39141459f31bbcd2fa96c50a74a4ba2ad72ab310c3a67a",
	name: "adminBookingRoomUpdate",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminBookingRoomUpdate.__executeServer(opts));
var adminBookingRoomUpdate = createServerFn({ method: "POST" }).validator((d) => d).handler(adminBookingRoomUpdate_createServerFn_handler, async ({ data }) => {
	await assertUnlocked();
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const allowed = {};
	for (const k of [
		"room_number",
		"notes",
		"quantity",
		"adults",
		"children",
		"extra_bed"
	]) if (k in data.values) allowed[k] = data.values[k];
	const { error } = await supabaseAdmin.from("booking_rooms").update(allowed).eq("id", data.id);
	if (error) throw new Error(error.message);
	return { ok: true };
});
//#endregion
export { adminBookingRoomUpdate_createServerFn_handler, adminBookingRooms_createServerFn_handler, adminDelete_createServerFn_handler, adminList_createServerFn_handler, adminLogout_createServerFn_handler, adminNotificationsClear_createServerFn_handler, adminNotificationsMarkRead_createServerFn_handler, adminResendEmail_createServerFn_handler, adminSettingDelete_createServerFn_handler, adminSettingSave_createServerFn_handler, adminSettingsList_createServerFn_handler, adminStatus_createServerFn_handler, adminUnlock_createServerFn_handler, adminUpload_createServerFn_handler, adminUpsert_createServerFn_handler };
