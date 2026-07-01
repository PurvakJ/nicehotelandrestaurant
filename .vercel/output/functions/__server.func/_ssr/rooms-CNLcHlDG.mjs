import { S as whyChooseRooms, _ as rooms, y as site } from "./content-B6YhG0K8.mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as useBooking } from "./booking-CpaFv2A4.mjs";
import { t as AppImage } from "./AppImage-ZFFpQV3a.mjs";
import { a as SectionHeading, i as Reveal, r as PageHeader, t as CtaBand } from "./ui-D-dNNAzx.mjs";
import { I as Eye, S as Maximize, Y as Check, i as Users, l as Star } from "../_libs/lucide-react.mjs";
import { t as Icon } from "./Icon-BaywhDpd.mjs";
import { t as Route } from "./rooms-BqMRM2Pa.mjs";
import { t as TiltCard } from "./TiltCard-C2TpTaev.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rooms-CNLcHlDG.js
var import_jsx_runtime = require_jsx_runtime();
function fallbackImage(category) {
	return /deluxe/i.test(category ?? "") ? site.images.deluxe : site.images.executive;
}
function mapDbRooms(dbRooms) {
	const seen = /* @__PURE__ */ new Set();
	const result = [];
	for (const r of dbRooms) {
		const key = `${(r.name ?? "").toLowerCase()}|${(r.category ?? "").toLowerCase()}`;
		if (seen.has(key)) continue;
		seen.add(key);
		const fallback = rooms.find((s) => s.category?.toLowerCase() === (r.category ?? "").toLowerCase());
		result.push({
			slug: r.id,
			name: r.name ?? "Suite",
			category: r.category ?? "Room",
			badge: r.category ? `${r.category} Suite` : "Signature Stay",
			rating: 4.8,
			price: Number(r.price) || fallback?.price || 0,
			image: Array.isArray(r.images) && r.images[0] || fallback?.image || fallbackImage(r.category),
			size: r.floor ? `Floor ${r.floor}` : fallback?.size || "Spacious",
			occupancy: r.capacity ? `${r.capacity} Guest${r.capacity > 1 ? "s" : ""}` : fallback?.occupancy || "2 Adults",
			view: fallback?.view || "City View",
			description: r.description || fallback?.description || "A refined retreat with premium comforts.",
			amenities: (Array.isArray(r.amenities) && r.amenities.length ? r.amenities : fallback?.amenities) || []
		});
	}
	return result;
}
function Rooms() {
	const { open } = useBooking();
	const { dbRooms, availability } = Route.useLoaderData();
	const mapped = mapDbRooms(dbRooms);
	const list = mapped.length ? mapped : rooms;
	const availByRoom = new Map((availability ?? []).map((a) => [a.roomId, a]));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Accommodations",
			title: "Luxury Rooms & Suites",
			sub: "Experience elegance and comfort in our premium accommodations",
			image: site.images.deluxe
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxe space-y-12 py-24",
			children: list.map((r, i) => {
				const avail = availByRoom.get(r.slug);
				const soldOut = avail ? avail.available <= 0 : false;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `grid grid-cols-1 overflow-hidden rounded-2xl bg-card shadow-luxe lg:grid-cols-2 ${i % 2 ? "lg:[direction:rtl]" : ""}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-72 overflow-hidden lg:h-auto [direction:ltr]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppImage, {
									src: r.image,
									alt: r.name,
									className: "h-full w-full object-cover transition duration-700 hover:scale-105",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs uppercase tracking-wider text-ivory",
									children: r.badge
								}),
								avail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider ${soldOut ? "bg-charcoal/80 text-ivory" : "bg-emerald-600 text-ivory"}`,
									children: soldOut ? "Fully Booked" : `${avail.available} of ${avail.total} available`
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-8 lg:p-12 [direction:ltr]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-gold text-gold" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-charcoal",
											children: r.rating
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 text-xs uppercase tracking-[0.2em] text-gold",
											children: r.category
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-4xl text-charcoal",
									children: r.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted-foreground",
									children: r.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 flex flex-wrap gap-6 text-sm text-brown",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { className: "h-4 w-4 text-gold" }), r.size]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-gold" }), r.occupancy]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4 text-gold" }), r.view]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 grid grid-cols-2 gap-2",
									children: r.amenities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2 text-sm text-charcoal",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-gold" }), a]
									}, a))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex items-end justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-3xl text-gold",
										children: [
											"₹",
											r.price,
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm text-muted-foreground",
												children: "/night"
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => open(r.name),
										disabled: soldOut,
										"aria-label": `Book ${r.name}`,
										className: "rounded-full bg-charcoal px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition hover:bg-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-charcoal",
										children: soldOut ? "Fully Booked" : "Book Now"
									})]
								})
							]
						})]
					})
				}, r.slug);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-beige py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Why Choose Nice Hotel",
					title: "Experience the best in hospitality"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: whyChooseRooms.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
							className: "h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-full rounded-2xl bg-card p-7 text-center shadow-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-beige text-gold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											name: w.icon,
											className: "h-6 w-6"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 font-display text-xl text-charcoal",
										children: w.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: w.text
									})
								]
							})
						})
					}, w.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Reserve Your Suite Today",
			sub: "Book your stay today and enjoy world-class hospitality at Nice Hotel",
			image: site.images.executive
		})
	] });
}
//#endregion
export { Rooms as component };
