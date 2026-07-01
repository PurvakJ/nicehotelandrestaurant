import { h as offers, v as services, y as site } from "./content-B6YhG0K8.mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { a as SectionHeading, i as Reveal, r as PageHeader, t as CtaBand } from "./ui-D-dNNAzx.mjs";
import { Y as Check } from "../_libs/lucide-react.mjs";
import { t as Icon } from "./Icon-BaywhDpd.mjs";
import { t as Route } from "./services-Ck0JVkZc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-BwMg3caD.js
var import_jsx_runtime = require_jsx_runtime();
function Services() {
	const { dbServices, dbOffers } = Route.useLoaderData();
	const grouped = {};
	if (dbServices.length) for (const s of dbServices) {
		const g = s.group_name || "Services";
		(grouped[g] ??= []).push({
			title: s.title,
			text: s.description ?? "",
			icon: s.icon ?? "sparkles",
			tags: Array.isArray(s.tags) ? s.tags : []
		});
	}
	const serviceGroups = Object.keys(grouped).length ? Object.entries(grouped) : Object.entries(services);
	const offerList = dbOffers.length ? dbOffers.map((o) => ({
		title: o.title,
		text: o.description ?? "",
		tag: o.type ?? "Offer"
	})) : offers.map((o) => ({
		title: o.title,
		text: o.text,
		tag: o.tag
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "What We Offer",
			title: "Services & Amenities",
			sub: "World-class hospitality services crafted for your comfort",
			image: site.images.meeting
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxe space-y-20 py-24",
			children: serviceGroups.map(([group, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Premium Offering",
				title: group
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-1 gap-6 md:grid-cols-2",
				children: items.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full gap-5 rounded-2xl border border-border bg-card p-7 shadow-card transition hover:shadow-luxe",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-beige text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: s.icon,
								className: "h-6 w-6"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl text-charcoal",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-muted-foreground",
								children: s.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: s.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5 rounded-full bg-beige px-3 py-1 text-xs text-brown",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3 text-gold" }), t]
								}, t))
							})
						] })]
					})
				}, s.title))
			})] }, group))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-beige py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Special Offers",
					title: "Exclusive packages for a memorable stay"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: offerList.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full flex-col rounded-2xl bg-card p-7 shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-fit rounded-full bg-gold/15 px-3 py-1 text-xs uppercase tracking-wider text-gold capitalize",
									children: o.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-2xl text-charcoal",
									children: o.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: o.text
								})
							]
						})
					}, o.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Experience Premium Hospitality",
			sub: "Book your stay now and enjoy world-class hospitality at Nice Hotel",
			image: site.images.executive
		})
	] });
}
//#endregion
export { Services as component };
