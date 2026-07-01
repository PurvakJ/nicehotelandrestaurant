import { o as __toESM } from "../_runtime.mjs";
import { y as site } from "./content-B6YhG0K8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { i as Reveal, r as PageHeader } from "./ui-D-dNNAzx.mjs";
import { C as MapPin, W as Clock, f as Send, g as Phone, j as Instagram, w as Mail } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { r as useServerFn, t as sendContactEmail } from "./email.functions-wYUC0y6I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-2xir6nGL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var details = (s = site) => [
	{
		icon: MapPin,
		label: "Address",
		value: s.address,
		href: "https://www.google.com/maps?q=Mansa,Punjab,151505"
	},
	{
		icon: Phone,
		label: "Phone",
		value: s.phone,
		href: `tel:${s.phoneRaw}`
	},
	{
		icon: Mail,
		label: "Email",
		value: s.email,
		href: `mailto:${s.email}`
	},
	{
		icon: Clock,
		label: "Hours",
		value: s.hours
	},
	{
		icon: Instagram,
		label: "Instagram",
		value: "@nice_hotel_and_resturant",
		href: s.instagram
	}
];
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [sending, setSending] = (0, import_react.useState)(false);
	const submitContact = useServerFn(sendContactEmail);
	const onSubmit = async (e) => {
		e.preventDefault();
		const form = e.target;
		const fd = new FormData(form);
		setSending(true);
		try {
			await submitContact({ data: {
				name: String(fd.get("name") || ""),
				email: String(fd.get("email") || ""),
				phone: String(fd.get("phone") || ""),
				message: String(fd.get("message") || "")
			} });
			setSent(true);
			form.reset();
			toast.success("Thank you! A confirmation email is on its way.");
		} catch {
			toast.error("Could not send your message", { description: `Please call us at ${site.phone}.` });
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "Get In Touch",
		title: "Contact Us",
		sub: "We'd love to hear from you — reach out anytime",
		image: site.images.hall
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-luxe grid grid-cols-1 gap-12 py-24 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-charcoal",
				children: "Reach Us"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-5",
				children: details().map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-beige text-gold",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-wider text-muted-foreground",
						children: d.label
					}), d.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: d.href,
						target: "_blank",
						rel: "noreferrer",
						className: "text-charcoal transition hover:text-gold",
						children: d.value
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-charcoal",
						children: d.value
					})] })]
				}, d.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 overflow-hidden rounded-2xl shadow-luxe",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: "Map",
					src: "https://www.google.com/maps?q=Mansa,Punjab,151505&output=embed",
					className: "h-72 w-full border-0",
					loading: "lazy"
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .15,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "rounded-2xl border border-border bg-card p-8 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-charcoal",
						children: "Send a Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-4",
						children: [
							[
								[
									"Name",
									"text",
									"name",
									"name"
								],
								[
									"Email",
									"email",
									"email",
									"email"
								],
								[
									"Phone",
									"tel",
									"tel",
									"phone"
								]
							].map(([l, t, ac, nm]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: l
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								name: nm,
								type: t,
								autoComplete: ac,
								className: "mt-1 w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-sm outline-none focus:border-gold"
							})] }, l)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-xs uppercase tracking-wider text-muted-foreground",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								required: true,
								name: "message",
								rows: 4,
								className: "mt-1 w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-sm outline-none focus:border-gold"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: sending,
								className: "flex w-full items-center justify-center gap-2 rounded-full bg-charcoal py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition hover:bg-gold disabled:opacity-60",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), sending ? "Sending…" : sent ? "Message Sent" : "Send Message"]
							})
						]
					})
				]
			})
		})]
	})] });
}
//#endregion
export { Contact as component };
