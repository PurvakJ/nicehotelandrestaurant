//#region node_modules/.nitro/vite/services/ssr/assets/notifications.server-1NPu9KdC.js
async function notify(input) {
	try {
		const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
		await supabaseAdmin.from("notifications").insert({
			type: input.type,
			title: input.title,
			body: input.body ?? null,
			link: input.link ?? null
		});
	} catch (e) {
		console.error("notify() failed", e);
	}
}
//#endregion
export { notify };
