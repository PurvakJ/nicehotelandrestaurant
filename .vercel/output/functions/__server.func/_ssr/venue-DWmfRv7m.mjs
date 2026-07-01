import { o as __toESM } from "../_runtime.mjs";
import { b as venues, d as hallPackages, x as whyBookVenue, y as site } from "./content-B6YhG0K8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as AppImage } from "./AppImage-ZFFpQV3a.mjs";
import { a as SectionHeading, i as Reveal, r as PageHeader, t as CtaBand } from "./ui-D-dNNAzx.mjs";
import { C as MapPin, S as Maximize, i as Users, l as Star } from "../_libs/lucide-react.mjs";
import { t as Icon } from "./Icon-BaywhDpd.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, r as DialogDescription, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as sendVenueEnquiry, r as useServerFn } from "./email.functions-wYUC0y6I.mjs";
import { t as Route } from "./venue-C6JuPLaH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/venue-DWmfRv7m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EVENT_TYPES = [
	"Wedding",
	"Kitty Party",
	"Birthday Party",
	"Social Gathering",
	"Corporate Event",
	"Meeting / Training",
	"Other"
];
var field = "w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-charcoal outline-none transition focus:border-gold";
var labelCls = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-brown";
function VenueBookingDialog({ venue, onClose }) {
	const submit = useServerFn(sendVenueEnquiry);
	const [loading, setLoading] = (0, import_react.useState)(false);
	async function handleSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;
		const fd = new FormData(form);
		const payload = {
			venue: venue ?? void 0,
			eventType: String(fd.get("eventType") || ""),
			eventDate: String(fd.get("eventDate") || ""),
			guests: String(fd.get("guests") || ""),
			name: String(fd.get("name") || ""),
			email: String(fd.get("email") || ""),
			phone: String(fd.get("phone") || ""),
			requests: String(fd.get("requests") || "") || void 0
		};
		setLoading(true);
		try {
			await submit({ data: payload });
			toast.success("Booking request sent! Our team will contact you shortly.");
			onClose();
		} catch {
			toast.error("Could not send your request. Please call +91 9216400005.");
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: venue !== null,
		onOpenChange: (o) => !o && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-h-[90vh] overflow-y-auto sm:max-w-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
				className: "font-display text-2xl text-charcoal",
				children: ["Book ", venue]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Share your event details and we'll get back to you. No payment required." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "mt-2 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelCls,
						htmlFor: "eventType",
						children: "Event Type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "eventType",
						name: "eventType",
						required: true,
						className: field,
						defaultValue: "",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: "Select event type"
						}), EVENT_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: t,
							children: t
						}, t))]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelCls,
							htmlFor: "eventDate",
							children: "Event Date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "eventDate",
							name: "eventDate",
							type: "date",
							required: true,
							className: field
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelCls,
							htmlFor: "guests",
							children: "Expected Guests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "guests",
							name: "guests",
							type: "number",
							min: 1,
							required: true,
							placeholder: "e.g. 50",
							className: field
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelCls,
						htmlFor: "name",
						children: "Full Name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "name",
						name: "name",
						required: true,
						placeholder: "Your full name",
						className: field
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelCls,
							htmlFor: "email",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							name: "email",
							type: "email",
							required: true,
							placeholder: "you@email.com",
							className: field
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: labelCls,
							htmlFor: "phone",
							children: "Phone Number"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "phone",
							name: "phone",
							required: true,
							placeholder: "+91 ...",
							className: field
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: labelCls,
						htmlFor: "requests",
						children: "Special Request"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "requests",
						name: "requests",
						rows: 3,
						placeholder: "Catering, decor, timings...",
						className: field
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: "w-full rounded-full bg-charcoal px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition hover:bg-gold disabled:opacity-60",
						children: loading ? "Sending..." : "Send Booking Request"
					})
				]
			})]
		})
	});
}
function Venue() {
	const [bookingVenue, setBookingVenue] = (0, import_react.useState)(null);
	const { dbEvents } = Route.useLoaderData();
	const venueList = dbEvents.length ? dbEvents.map((v) => {
		const match = venues.find((s) => s.name.toLowerCase() === String(v.name ?? "").toLowerCase());
		return {
			slug: v.id,
			name: v.name,
			sub: v.subtitle ?? "",
			badge: v.badge ?? "",
			rating: 4.8,
			capacity: v.capacity ?? "",
			size: v.size ?? "",
			floor: v.floor ?? "",
			image: v.image || match?.image || site.images.hall,
			comingSoon: Boolean(v.coming_soon),
			description: v.description ?? "",
			amenities: Array.isArray(v.amenities) ? v.amenities : []
		};
	}) : venues;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Events",
			title: "Party & Event Halls",
			sub: "Elegant venues for your special occasions",
			image: site.images.hall
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxe grid grid-cols-1 gap-8 py-24 lg:grid-cols-3",
			children: venueList.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-card transition hover:shadow-luxe",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-56 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppImage, {
								src: v.image,
								alt: v.name,
								className: "h-full w-full object-cover transition duration-700 group-hover:scale-110",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `absolute left-4 top-4 rounded-full px-3 py-1 text-xs uppercase tracking-wider text-ivory ${v.comingSoon ? "bg-brown" : "bg-gold"}`,
								children: v.badge
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute right-4 top-4 flex items-center gap-1 rounded-full bg-ivory/90 px-3 py-1 text-xs text-charcoal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-gold text-gold" }), v.rating]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.2em] text-gold",
								children: v.sub
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl text-charcoal",
								children: v.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: v.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-2 text-sm text-brown",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4 text-gold" }), v.capacity]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { className: "h-4 w-4 text-gold" }), v.size]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }), v.floor]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: v.amenities.slice(0, 4).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-beige px-3 py-1 text-xs text-brown",
									children: a
								}, a))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-auto pt-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									disabled: v.comingSoon,
									onClick: () => setBookingVenue(v.name),
									className: `w-full rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] transition ${v.comingSoon ? "cursor-not-allowed bg-beige text-muted-foreground" : "bg-charcoal text-ivory hover:bg-gold"}`,
									children: v.comingSoon ? "Coming Soon" : "Book This Venue"
								})
							})
						]
					})]
				})
			}, v.slug))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-beige py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Hall Packages",
					title: "Transparent, all-inclusive pricing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-4 md:grid-cols-4",
					children: hallPackages.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-card p-7 text-center shadow-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-charcoal",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-3xl text-gold",
								children: p.price
							})]
						})
					}, p.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				center: true,
				eyebrow: "Why Book With Us",
				title: "Experience unforgettable events at Nice Hotel"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: whyBookVenue.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-2xl border border-border bg-card p-7 text-center",
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
				}, w.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Plan Your Perfect Event",
			sub: "Book your stay now and enjoy world-class hospitality at Nice Hotel",
			image: site.images.meeting
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VenueBookingDialog, {
			venue: bookingVenue,
			onClose: () => setBookingVenue(null)
		})
	] });
}
//#endregion
export { Venue as component };
