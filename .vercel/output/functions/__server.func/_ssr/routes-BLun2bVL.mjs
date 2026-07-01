import { _ as rooms, f as hospitality, g as realComfortStats, o as breakfastFeature, s as curatedPrivileges, y as site } from "./content-B6YhG0K8.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as useBooking } from "./booking-CpaFv2A4.mjs";
import { t as AppImage } from "./AppImage-ZFFpQV3a.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { a as SectionHeading, i as Reveal, n as LuxeButton, t as CtaBand } from "./ui-D-dNNAzx.mjs";
import { ct as ArrowRight, l as Star } from "../_libs/lucide-react.mjs";
import { t as Icon } from "./Icon-BaywhDpd.mjs";
import { t as TiltCard } from "./TiltCard-C2TpTaev.mjs";
import { t as Route } from "./routes-DpZIoVi-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BLun2bVL.js
var import_jsx_runtime = require_jsx_runtime();
function BookingWidget() {
	const { open } = useBooking();
	const field = "w-full rounded-xl border border-border bg-white/60 px-4 py-3 text-sm text-charcoal outline-none focus:border-gold";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		delay: .3,
		className: "container-luxe relative z-20 -mt-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass grid grid-cols-1 gap-3 rounded-2xl p-5 shadow-luxe sm:grid-cols-2 lg:grid-cols-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-[0.65rem] uppercase tracking-wider text-muted-foreground",
					children: ["Check-in", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						className: `${field} mt-1`,
						"aria-label": "Check-in"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-[0.65rem] uppercase tracking-wider text-muted-foreground",
					children: ["Check-out", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "date",
						className: `${field} mt-1`,
						"aria-label": "Check-out"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-[0.65rem] uppercase tracking-wider text-muted-foreground",
					children: ["Guests", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "number",
						min: 1,
						defaultValue: 2,
						className: `${field} mt-1`,
						"aria-label": "Guests"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-[0.65rem] uppercase tracking-wider text-muted-foreground",
					children: ["Room Type", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: `${field} mt-1`,
						"aria-label": "Room type",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Executive Suite" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Deluxe Suite" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => open(),
					className: "mt-auto rounded-xl bg-charcoal px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition hover:bg-gold",
					children: "Search Availability"
				})
			]
		})
	});
}
function Home() {
	const { open } = useBooking();
	const { dbRooms } = Route.useLoaderData();
	const seen = /* @__PURE__ */ new Set();
	const teaser = dbRooms.filter((r) => {
		const k = `${(r.name ?? "").toLowerCase()}|${(r.category ?? "").toLowerCase()}`;
		if (seen.has(k)) return false;
		seen.add(k);
		return true;
	}).slice(0, 2).map((r) => {
		const fb = rooms.find((s) => s.category?.toLowerCase() === (r.category ?? "").toLowerCase()) ?? rooms[0];
		return {
			slug: r.id,
			name: r.name ?? fb.name,
			badge: r.category ? `${r.category} Suite` : fb.badge,
			rating: fb.rating,
			price: Number(r.price) || fb.price,
			image: Array.isArray(r.images) && r.images[0] || fb.image,
			description: r.description || fb.description
		};
	});
	const roomTeaser = teaser.length ? teaser : rooms;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-screen items-center justify-center overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: site.images.executive,
					alt: "Nice Hotel And Restaurant — luxury executive room",
					className: "absolute inset-0 h-full w-full object-cover",
					initial: { scale: 1.15 },
					animate: { scale: 1 },
					transition: {
						duration: 6,
						ease: "easeOut"
					},
					loading: "eager"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-charcoal/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-luxe relative z-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .2,
								duration: .8
							},
							className: "eyebrow text-gold-soft",
							children: "Premium Hospitality · Mansa, Punjab"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 30
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .35,
								duration: 1
							},
							className: "mx-auto mt-5 max-w-6xl whitespace-nowrap display-hero text-[2.6rem] text-ivory [text-shadow:0_2px_24px_rgba(0,0,0,0.55)] sm:text-6xl md:text-7xl lg:text-8xl",
							children: [
								"Nice Hotel",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-gold-soft",
									children: " & "
								}),
								"Restaurant"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .6,
								duration: .9
							},
							className: "mx-auto mt-6 max-w-xl text-lg text-ivory/80",
							children: "Premium Accommodation — Luxury Rooms & Suites. Experience refined hospitality where comfort, elegance and unforgettable memories come together."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .8,
								duration: .8
							},
							className: "mt-9 flex flex-wrap justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxeButton, {
								onClick: () => open(),
								children: "Book Your Stay"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/rooms",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxeButton, {
									variant: "outline",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-ivory",
										children: "Explore Our Rooms"
									})
								})
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingWidget, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxe py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 items-center gap-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Welcome"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-display text-4xl leading-tight text-charcoal md:text-5xl",
						children: [
							"Real Comfort,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Warm Service"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-5" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground",
						children: "Nice Hotel & Restaurant is where elegance meets comfort. With beautifully designed luxury rooms, a fine dining restaurant and an elegant party hall, we bring world-class hospitality to the heart of Mansa."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Located in the centre of the city, we offer personalized service to make your stay truly memorable."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-9 grid grid-cols-3 gap-6 border-t border-border pt-8",
						children: realComfortStats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl text-gold md:text-4xl",
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground",
							children: s.label
						})] }, s.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxeButton, {
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-charcoal",
									children: "Discover More"
								})
							})
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .2,
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl shadow-luxe",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: site.images.executive,
							alt: "Executive suite",
							className: "h-[28rem] w-full object-cover transition duration-700 hover:scale-105",
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -bottom-8 -left-6 hidden w-56 overflow-hidden rounded-2xl border-4 border-ivory shadow-luxe sm:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: site.images.hall,
							alt: "Party hall",
							className: "h-40 w-full object-cover",
							loading: "lazy"
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-beige py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						center: true,
						eyebrow: "Why Choose Us",
						title: "The Mark of True Hospitality",
						sub: "Everything you need for a perfect, effortless stay"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3",
						children: hospitality.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .05,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex h-full items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gold",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
										name: a.icon,
										className: "h-6 w-6"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl text-charcoal",
									children: a.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm leading-relaxed text-muted-foreground",
									children: a.text
								})] })]
							})
						}, a.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						className: "mt-12 border-t border-border/60 pt-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									name: breakfastFeature.icon,
									className: "h-6 w-6"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-charcoal",
								children: breakfastFeature.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted-foreground",
								children: breakfastFeature.text
							})] })]
						})
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Stay",
					title: "Rooms & Suites",
					sub: "Choose from our executive and deluxe accommodations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-1 gap-8 md:grid-cols-2",
					children: roomTeaser.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .12,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
							className: "group h-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group overflow-hidden rounded-2xl bg-ivory shadow-luxe",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-64 overflow-hidden",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppImage, {
											src: r.image,
											alt: r.name,
											className: "h-full w-full object-cover transition duration-700 group-hover:scale-110",
											loading: "lazy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-medium uppercase tracking-wider text-ivory",
											children: r.badge
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute right-4 top-4 flex items-center gap-1 rounded-full bg-ivory/90 px-3 py-1 text-xs font-medium text-charcoal",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-gold text-gold" }), r.rating]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-7",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-3xl text-charcoal",
											children: r.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm text-muted-foreground",
											children: r.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-5 flex items-end justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-display text-2xl text-gold",
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
												"aria-label": `Book ${r.name}`,
												className: "text-xs font-medium uppercase tracking-[0.2em] text-charcoal link-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
												children: "Book This Room"
											})]
										})
									]
								})]
							})
						})
					}, r.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/rooms",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxeButton, { children: "View All Rooms" })
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-luxe py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 items-center gap-14 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "order-2 lg:order-1 overflow-hidden rounded-2xl shadow-luxe",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: site.images.hall,
						alt: "Grand party hall",
						className: "h-[26rem] w-full object-cover transition duration-700 hover:scale-105",
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .15,
					className: "order-1 lg:order-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Grand Event Venues"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-4xl leading-tight text-charcoal md:text-5xl",
							children: "Spaces for Every Gathering"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground",
							children: "From intimate functions to lively celebrations, our elegant party hall and flexible spaces are tailored to suit every occasion. Perfect for kitty parties, birthdays and social gatherings of up to 100 guests."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: [
								"Stage",
								"Sound System",
								"Chandeliers",
								"Dance Floor",
								"Catering"
							].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-beige px-4 py-1.5 text-xs text-brown",
								children: f
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/venue",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxeButton, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Explore Venues" }) })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxeButton, {
								variant: "outline",
								onClick: () => open(),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-charcoal",
									children: "Inquire Now"
								})
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: site.images.meeting,
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-charcoal/80" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-luxe relative z-10 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold-soft",
							children: "Celebrate With Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mx-auto mt-4 max-w-3xl font-display text-4xl text-ivory md:text-6xl",
							children: "Private Events, Meetings & Family Functions"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-5 max-w-xl text-ivory/70",
							children: "Let us host your most cherished moments with impeccable service and elegant spaces."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxeButton, {
								onClick: () => open(),
								children: "Plan Your Event"
							})
						})
					] })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-luxe py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				center: true,
				eyebrow: "Exclusive",
				title: "Curated Privileges",
				sub: "Thoughtful touches that elevate every stay"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 gap-8 md:grid-cols-3",
				children: curatedPrivileges.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TiltCard, {
						className: "group h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-card transition hover:shadow-luxe",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-48 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppImage, {
									src: p.image,
									alt: p.title,
									className: "h-full w-full object-cover transition duration-700 group-hover:scale-110",
									loading: "lazy"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs uppercase tracking-[0.2em] text-gold",
										children: p.tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 font-display text-2xl text-charcoal",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 flex-1 text-sm text-muted-foreground",
										children: p.text
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => open(),
										className: "mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-charcoal",
										children: ["Enquire ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })]
									})
								]
							})]
						})
					})
				}, p.title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
			title: "Experience Luxury Today",
			sub: "Book your stay now and enjoy world-class hospitality at Nice Hotel",
			image: site.images.deluxe
		})
	] });
}
//#endregion
export { Home as component };
