import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { a as objectType, n as arrayType, o as recordType, s as stringType, t as anyType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/email.functions-Cy4f5aq8.js
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
var sendBookingEmail_createServerFn_handler = createServerRpc({
	id: "3019a7809836eb29baf6a23ad43b959385a819228c2bbcd489ba851934c042ee",
	name: "sendBookingEmail",
	filename: "src/lib/email.functions.ts"
}, (opts) => sendBookingEmail.__executeServer(opts));
var sendBookingEmail = createServerFn({ method: "POST" }).validator((d) => bookingSchema.parse(d)).handler(sendBookingEmail_createServerFn_handler, async ({ data }) => {
	const { sendEmails, adminEmail } = await import("./email.server-Bk8bA_LU.mjs");
	const t = await import("./email-templates-f7wI1q6q.mjs");
	const { notify } = await import("./notifications.server-1NPu9KdC.mjs");
	await notify({
		type: "booking",
		title: `New booking request — ${data.name}`,
		body: `${data.roomType ?? "Room"} · ${data.checkIn ?? "?"} → ${data.checkOut ?? "?"} · ${data.guests ?? "?"} guest(s)`,
		link: "/admin/bookings"
	});
	await sendEmails([{
		to: data.email,
		subject: "Your reservation request — Nice Hotel & Restaurant",
		html: t.bookingGuestEmail(data),
		type: "booking_confirmation",
		payload: {
			type: "booking_confirmation",
			to: data.email,
			data
		}
	}, {
		to: adminEmail(),
		subject: `New booking: ${data.name}`,
		html: t.bookingAdminEmail(data),
		reply: data.email,
		type: "admin_alert",
		payload: {
			type: "admin_alert",
			to: adminEmail(),
			data
		}
	}]);
	return { ok: true };
});
var sendContactEmail_createServerFn_handler = createServerRpc({
	id: "e36975127bf4afc4d5eb40bc3002f362da0141ed51b7d97636174b5fbfb951a4",
	name: "sendContactEmail",
	filename: "src/lib/email.functions.ts"
}, (opts) => sendContactEmail.__executeServer(opts));
var sendContactEmail = createServerFn({ method: "POST" }).validator((d) => contactSchema.parse(d)).handler(sendContactEmail_createServerFn_handler, async ({ data }) => {
	try {
		const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
		await supabaseAdmin.from("enquiries").insert({
			name: data.name,
			email: data.email,
			phone: data.phone ?? null,
			subject: "Website contact form",
			message: data.message,
			status: "pending"
		});
	} catch (e) {
		console.error("Enquiry save error", e);
	}
	try {
		const { notify } = await import("./notifications.server-1NPu9KdC.mjs");
		await notify({
			type: "enquiry",
			title: `New contact message — ${data.name}`,
			body: data.message.slice(0, 140),
			link: "/admin/enquiries"
		});
	} catch (e) {
		console.error("notify error", e);
	}
	try {
		const { sendEmails, adminEmail } = await import("./email.server-Bk8bA_LU.mjs");
		const t = await import("./email-templates-f7wI1q6q.mjs");
		await sendEmails([{
			to: data.email,
			subject: "We received your message — Nice Hotel & Restaurant",
			html: t.contactGuestEmail(data),
			type: "contact",
			payload: {
				type: "contact",
				to: data.email,
				data
			}
		}, {
			to: adminEmail(),
			subject: `New contact enquiry: ${data.name}`,
			html: t.contactAdminEmail(data),
			reply: data.email,
			type: "admin_alert"
		}]);
	} catch (e) {
		console.error("Contact email error", e);
	}
	return { ok: true };
});
var sendPaymentReceiptEmail_createServerFn_handler = createServerRpc({
	id: "e512a9bc97b9e3b7728c8ad0f549a28ca76f3134815b4d3817cb63896cd8e0ef",
	name: "sendPaymentReceiptEmail",
	filename: "src/lib/email.functions.ts"
}, (opts) => sendPaymentReceiptEmail.__executeServer(opts));
var sendPaymentReceiptEmail = createServerFn({ method: "POST" }).validator((d) => receiptSchema.parse(d)).handler(sendPaymentReceiptEmail_createServerFn_handler, async ({ data }) => {
	const { sendEmails, adminEmail } = await import("./email.server-Bk8bA_LU.mjs");
	const t = await import("./email-templates-f7wI1q6q.mjs");
	const { notify } = await import("./notifications.server-1NPu9KdC.mjs");
	await notify({
		type: "payment",
		title: `Payment received — ${data.name}`,
		body: `₹${data.amount}${data.reference ? ` · ${data.reference}` : ""}`,
		link: "/admin/bookings"
	});
	await sendEmails([{
		to: data.email,
		subject: "Payment receipt — Nice Hotel & Restaurant",
		html: t.paymentReceiptEmail(data),
		type: "payment",
		payload: {
			type: "payment",
			to: data.email,
			data
		}
	}, {
		to: adminEmail(),
		subject: `Payment received: ${data.name}`,
		html: t.paymentAdminEmail(data),
		reply: data.email,
		type: "admin_alert"
	}]);
	return { ok: true };
});
var sendVenueEnquiry_createServerFn_handler = createServerRpc({
	id: "dbff347271b29c73d3474b31159159f38feb9fb3db6a8aeb034a20f7a2877c61",
	name: "sendVenueEnquiry",
	filename: "src/lib/email.functions.ts"
}, (opts) => sendVenueEnquiry.__executeServer(opts));
var sendVenueEnquiry = createServerFn({ method: "POST" }).validator((d) => venueSchema.parse(d)).handler(sendVenueEnquiry_createServerFn_handler, async ({ data }) => {
	const summary = [
		`Venue: ${data.venue ?? "—"}`,
		`Event type: ${data.eventType}`,
		`Event date: ${data.eventDate}`,
		`Expected guests: ${data.guests}`,
		data.requests ? `Special request: ${data.requests}` : null
	].filter(Boolean).join("\n");
	try {
		const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
		await supabaseAdmin.from("enquiries").insert({
			name: data.name,
			email: data.email,
			phone: data.phone,
			subject: `Venue booking — ${data.venue ?? data.eventType}`,
			message: summary,
			status: "pending"
		});
	} catch (e) {
		console.error("Venue enquiry save error", e);
	}
	try {
		const { notify } = await import("./notifications.server-1NPu9KdC.mjs");
		await notify({
			type: "venue",
			title: `New venue booking — ${data.name}`,
			body: `${data.eventType} · ${data.eventDate} · ${data.guests} guests${data.venue ? ` · ${data.venue}` : ""}`,
			link: "/admin/enquiries"
		});
	} catch (e) {
		console.error("notify error", e);
	}
	try {
		const { sendEmails, adminEmail } = await import("./email.server-Bk8bA_LU.mjs");
		const t = await import("./email-templates-f7wI1q6q.mjs");
		const guestMsg = {
			name: data.name,
			email: data.email,
			phone: data.phone,
			message: summary
		};
		await sendEmails([{
			to: data.email,
			subject: "We received your venue booking request — Nice Hotel & Restaurant",
			html: t.contactGuestEmail(guestMsg),
			type: "venue",
			payload: {
				type: "venue",
				to: data.email,
				data
			}
		}, {
			to: adminEmail(),
			subject: `New venue booking: ${data.name} (${data.eventType})`,
			html: t.contactAdminEmail(guestMsg),
			reply: data.email,
			type: "admin_alert"
		}]);
	} catch (e) {
		console.error("Venue enquiry email error", e);
	}
	return { ok: true };
});
var sendEmailSchema = objectType({
	type: stringType().min(1).max(60),
	to: stringType().email(),
	data: recordType(stringType(), anyType()).optional(),
	cc: stringType().email().optional(),
	subject: stringType().max(200).optional()
});
var sendEmail_createServerFn_handler = createServerRpc({
	id: "766b2e2d7fad7b029750d0559af7fde845fd4e9c63a33a8ea2ccba8919938648",
	name: "sendEmail",
	filename: "src/lib/email.functions.ts"
}, (opts) => sendEmail.__executeServer(opts));
var sendEmail = createServerFn({ method: "POST" }).validator((d) => sendEmailSchema.parse(d)).handler(sendEmail_createServerFn_handler, async ({ data }) => {
	const { sendEmail: send } = await import("./email.server-Bk8bA_LU.mjs");
	const { renderEmail } = await import("./email-templates-f7wI1q6q.mjs");
	const rendered = renderEmail(data.type, data.data ?? {});
	return { ok: await send({
		to: data.to,
		subject: data.subject || rendered.subject,
		html: rendered.html,
		type: data.type,
		payload: {
			type: data.type,
			to: data.to,
			data: data.data ?? {},
			subject: data.subject
		}
	}) };
});
var newsletterSchema = objectType({
	subject: stringType().min(1).max(200),
	body: stringType().min(1).max(2e4),
	title: stringType().max(200).optional(),
	recipients: arrayType(stringType().email()).min(1).max(2e3),
	ctaUrl: stringType().max(300).optional(),
	ctaLabel: stringType().max(60).optional()
});
var sendNewsletter_createServerFn_handler = createServerRpc({
	id: "df0992d47b7ad7842d34645641cc39cc29a0171d56dc000e087cd76602e60ae9",
	name: "sendNewsletter",
	filename: "src/lib/email.functions.ts"
}, (opts) => sendNewsletter.__executeServer(opts));
var sendNewsletter = createServerFn({ method: "POST" }).validator((d) => newsletterSchema.parse(d)).handler(sendNewsletter_createServerFn_handler, async ({ data }) => {
	const { sendEmail: send } = await import("./email.server-Bk8bA_LU.mjs");
	const { renderEmail } = await import("./email-templates-f7wI1q6q.mjs");
	let sent = 0;
	for (const to of data.recipients) {
		const r = renderEmail("newsletter", {
			subject: data.subject,
			title: data.title,
			body: data.body,
			ctaUrl: data.ctaUrl,
			ctaLabel: data.ctaLabel
		});
		if (await send({
			to,
			subject: data.subject,
			html: r.html,
			type: "newsletter",
			payload: {
				type: "newsletter",
				to,
				data: {
					...data,
					recipients: void 0
				}
			}
		})) sent += 1;
	}
	return {
		ok: true,
		sent,
		total: data.recipients.length
	};
});
//#endregion
export { sendBookingEmail_createServerFn_handler, sendContactEmail_createServerFn_handler, sendEmail_createServerFn_handler, sendNewsletter_createServerFn_handler, sendPaymentReceiptEmail_createServerFn_handler, sendVenueEnquiry_createServerFn_handler };
