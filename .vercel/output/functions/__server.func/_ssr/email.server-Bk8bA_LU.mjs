//#region node_modules/.nitro/vite/services/ssr/assets/email.server-Bk8bA_LU.js
/**
* Email sending layer — Resend (via the Lovable connector gateway).
*
* Sends are routed through the gateway using LOVABLE_API_KEY + RESEND_API_KEY,
* so no SMTP/TCP is required and it runs on the edge runtime. Every attempt is
* recorded in `email_logs`. Failures never throw so booking / contact / venue
* flows continue uninterrupted.
*/
var GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
var FROM_NAME = process.env.HOTEL_NAME || "Nice Hotel & Restaurant";
function fromAddress() {
	return `${FROM_NAME} <${process.env.FROM_EMAIL || "onboarding@resend.dev"}>`;
}
function adminEmail() {
	return process.env.ADMIN_EMAIL || process.env.GMAIL_USER || process.env.SMTP_USER || "";
}
async function db() {
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	return supabaseAdmin;
}
async function logMessage(m, status, error_message) {
	try {
		await (await db()).from("email_logs").insert({
			recipient: String(m.to),
			subject: m.subject,
			type: m.type ?? "generic",
			status,
			error_message,
			payload: m.payload ?? null
		});
	} catch (e) {
		console.error("email_logs insert failed", e);
	}
}
/**
* Sends an email through the Resend gateway. Never throws — callers stay
* resilient so the booking / contact flow is never broken by email handling.
*/
async function sendEmail(m) {
	const lovableKey = process.env.LOVABLE_API_KEY;
	const resendKey = process.env.RESEND_API_KEY;
	if (!lovableKey || !resendKey) {
		await logMessage(m, "failed", "Email provider not configured (missing API key)");
		return false;
	}
	try {
		const res = await fetch(`${GATEWAY_URL}/emails`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${lovableKey}`,
				"X-Connection-Api-Key": resendKey
			},
			body: JSON.stringify({
				from: fromAddress(),
				to: Array.isArray(m.to) ? m.to : [m.to],
				subject: m.subject,
				html: m.html,
				...m.reply ? { reply_to: m.reply } : {}
			})
		});
		if (!res.ok) {
			const body = await res.text().catch(() => "");
			await logMessage(m, "failed", `Resend ${res.status}: ${body.slice(0, 500)}`);
			return false;
		}
		await logMessage(m, "sent", null);
		return true;
	} catch (e) {
		await logMessage(m, "failed", e?.message ?? "Unknown send error");
		return false;
	}
}
/** Record a batch of emails; best-effort, each logged independently. */
async function sendEmails(messages) {
	const results = await Promise.all(messages.map((m) => sendEmail(m)));
	return {
		ok: results.every(Boolean),
		sent: results.filter(Boolean).length,
		total: messages.length
	};
}
//#endregion
export { adminEmail, sendEmail, sendEmails };
