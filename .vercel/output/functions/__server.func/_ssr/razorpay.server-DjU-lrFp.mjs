//#region node_modules/.nitro/vite/services/ssr/assets/razorpay.server-DjU-lrFp.js
function razorpayCreds() {
	const a = process.env.RAZORPAY_KEY_ID ?? "";
	const b = process.env.RAZORPAY_KEY_SECRET ?? "";
	if (!a || !b) return null;
	if (a.startsWith("rzp_")) return {
		keyId: a,
		keySecret: b
	};
	if (b.startsWith("rzp_")) return {
		keyId: b,
		keySecret: a
	};
	return {
		keyId: a,
		keySecret: b
	};
}
//#endregion
export { razorpayCreds };
