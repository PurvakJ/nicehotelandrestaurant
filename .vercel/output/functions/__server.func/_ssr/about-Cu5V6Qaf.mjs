import { a as ballroomFeatures, c as diningCopy, d as hallPackages, i as amenities, l as diningFeatures, n as aboutStats, p as locationPoints, r as aboutStory, t as aboutHighlights, u as diningHours, y as site } from "./content-B6YhG0K8.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { a as SectionHeading, i as Reveal, n as LuxeButton, r as PageHeader, t as CtaBand } from "./ui-D-dNNAzx.mjs";
import { l as Star } from "../_libs/lucide-react.mjs";
import { t as Icon } from "./Icon-BaywhDpd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Cu5V6Qaf.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "About Us",
			title: "About Nice Hotel",
			sub: "Luxury accommodation, fine dining, and premium events",
			image: site.images.executive
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 items-center gap-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "relative overflow-hidden rounded-2xl shadow-luxe",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: site.images.dining,
						alt: "Nice Hotel exterior",
						className: "h-[30rem] w-full object-cover",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute bottom-4 left-4 rounded-full bg-charcoal/80 px-4 py-1.5 text-xs tracking-wider text-ivory",
						children: "Nice Hotel — Est. 2024"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .15,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Our Story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl text-charcoal md:text-5xl",
							children: "Experience Luxury & Comfort"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-5" }),
						aboutStory.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground",
							children: p
						}, p))
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: aboutHighlights.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-2xl border border-border bg-card p-7 shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: h.icon,
									className: "h-7 w-7"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl text-charcoal",
								children: h.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: h.text
							})
						]
					})
				}, h.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-charcoal py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-luxe grid grid-cols-2 gap-8 md:grid-cols-4",
				children: aboutStats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * .1,
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-5xl text-gold",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm uppercase tracking-wider text-ivory/70",
						children: s.label
					})]
				}, s.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Grand Events & Celebrations",
				title: "Host your special occasions in elegance"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "overflow-hidden rounded-2xl shadow-luxe",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: site.images.hall,
						alt: "Grand ballroom",
						className: "h-full min-h-[24rem] w-full object-cover",
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .15,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-sm text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: "building",
								className: "h-5 w-5"
							}), " 100 Guests Capacity"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-3xl text-charcoal",
							children: "Grand Ballroom"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground",
							children: "Elegant ballroom with crystal chandeliers and sophisticated decor. Perfect for parties, kitty parties, and small celebrations. Whether you are hosting an intimate kitty party, a joyous birthday celebration, or a small, cherished wedding reception, our ballroom provides the perfect, versatile canvas. Our dedicated events team is committed to transforming your vision into reality."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: ballroomFeatures.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-beige px-4 py-1.5 text-xs text-brown",
								children: f
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid grid-cols-2 gap-3",
							children: hallPackages.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-border bg-card px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-charcoal",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl text-gold",
									children: p.price
								})]
							}, p.name))
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-beige py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe grid grid-cols-1 items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Exquisite Dining"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-4xl text-charcoal",
						children: "A culinary journey like no other"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground",
						children: diningCopy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: diningFeatures.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-card px-4 py-1.5 text-xs text-brown",
							children: f
						}, f))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-2",
						children: diningHours.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between border-b border-border/60 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-charcoal",
								children: h.meal
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: h.time
							})]
						}, h.meal))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxeButton, { children: "View Menu" })
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					className: "overflow-hidden rounded-2xl shadow-luxe",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: site.images.dining,
						alt: "Fine dining restaurant",
						className: "h-full min-h-[24rem] w-full object-cover",
						loading: "lazy"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				center: true,
				eyebrow: "Premium Amenities",
				title: "Everything you need for a perfect stay"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-2 gap-4 md:grid-cols-3",
				children: amenities.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								name: a.icon,
								className: "h-6 w-6"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg text-charcoal",
							children: a.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: a.text
						})] })]
					})
				}, a.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-beige py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our Location",
					title: "Conveniently located in the heart of the city"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: locationPoints.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 text-charcoal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-gold text-gold" }), p]
					}, p))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					className: "overflow-hidden rounded-2xl shadow-luxe",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Map of Nice Hotel And Restaurant, Mansa",
						src: "https://www.google.com/maps?q=Mansa,Punjab,151505&output=embed",
						className: "h-80 w-full border-0",
						loading: "lazy"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Ready to Experience Luxury?",
			sub: "Book your stay today and enjoy world-class hospitality at Nice Hotel",
			image: site.images.hall
		})
	] });
}
//#endregion
export { About as component };
