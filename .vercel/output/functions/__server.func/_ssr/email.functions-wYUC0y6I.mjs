import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { E as isRedirect, F as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-nAltcnKV.mjs";
import { a as objectType, n as arrayType, o as recordType, s as stringType, t as anyType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/email.functions-wYUC0y6I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var bookingSchema = objectType({
	name: stringType().min(1).max(120),
	email: stringType().email(),
	phone: stringType().min(3).max(40),
	checkIn: stringType().max(40).optional(),
	checkOut: stringType().max(40).optional(),
	guests: stringType().max(10).optional(),
	roomType: stringType().max(80).optional(),
	requests: stringType().max(2e3).optional()
});
var contactSchema = objectType({
	name: stringType().min(1).max(120),
	email: stringType().email(),
	phone: stringType().max(40).optional(),
	message: stringType().min(1).max(2e3)
});
var venueSchema = objectType({
	venue: stringType().max(120).optional(),
	eventType: stringType().min(1).max(80),
	eventDate: stringType().min(1).max(40),
	guests: stringType().min(1).max(20),
	name: stringType().min(1).max(120),
	email: stringType().email(),
	phone: stringType().min(3).max(40),
	requests: stringType().max(2e3).optional()
});
var receiptSchema = objectType({
	name: stringType().min(1).max(120),
	email: stringType().email(),
	amount: stringType().min(1).max(40),
	reference: stringType().max(120).optional(),
	description: stringType().max(500).optional()
});
createServerFn({ method: "POST" }).validator((d) => bookingSchema.parse(d)).handler(createSsrRpc("3019a7809836eb29baf6a23ad43b959385a819228c2bbcd489ba851934c042ee"));
var sendContactEmail = createServerFn({ method: "POST" }).validator((d) => contactSchema.parse(d)).handler(createSsrRpc("e36975127bf4afc4d5eb40bc3002f362da0141ed51b7d97636174b5fbfb951a4"));
createServerFn({ method: "POST" }).validator((d) => receiptSchema.parse(d)).handler(createSsrRpc("e512a9bc97b9e3b7728c8ad0f549a28ca76f3134815b4d3817cb63896cd8e0ef"));
var sendVenueEnquiry = createServerFn({ method: "POST" }).validator((d) => venueSchema.parse(d)).handler(createSsrRpc("dbff347271b29c73d3474b31159159f38feb9fb3db6a8aeb034a20f7a2877c61"));
var sendEmailSchema = objectType({
	type: stringType().min(1).max(60),
	to: stringType().email(),
	data: recordType(stringType(), anyType()).optional(),
	cc: stringType().email().optional(),
	subject: stringType().max(200).optional()
});
createServerFn({ method: "POST" }).validator((d) => sendEmailSchema.parse(d)).handler(createSsrRpc("766b2e2d7fad7b029750d0559af7fde845fd4e9c63a33a8ea2ccba8919938648"));
var newsletterSchema = objectType({
	subject: stringType().min(1).max(200),
	body: stringType().min(1).max(2e4),
	title: stringType().max(200).optional(),
	recipients: arrayType(stringType().email()).min(1).max(2e3),
	ctaUrl: stringType().max(300).optional(),
	ctaLabel: stringType().max(60).optional()
});
createServerFn({ method: "POST" }).validator((d) => newsletterSchema.parse(d)).handler(createSsrRpc("df0992d47b7ad7842d34645641cc39cc29a0171d56dc000e087cd76602e60ae9"));
//#endregion
export { sendVenueEnquiry as n, useServerFn as r, sendContactEmail as t };
