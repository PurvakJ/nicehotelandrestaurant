import { o as __toESM } from "../_runtime.mjs";
import { y as site } from "./content-B6YhG0K8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { t as CtaBand } from "./ui-D-dNNAzx.mjs";
import { K as ChevronRight, L as Drumstick, O as Leaf, nt as BookOpen, q as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as menu_default, t as Route } from "./menu-8Qn5I1a1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-DWnIrREE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NONVEG = /chicken|mutton|fish|prawn|egg|lamb|keema|kheema|murg|tangri|lollipop|kalami|drumstick|seekh|tikka chicken|chick /i;
function isNonVeg(name, cat) {
	if (/non-?veg/i.test(cat)) return true;
	if (/^(veg|tandoori veg|chinese veg)/i.test(cat)) return NONVEG.test(name);
	return NONVEG.test(name);
}
function Menu() {
	const { dbMenu } = Route.useLoaderData();
	const categories = dbMenu.length ? dbMenu : menu_default;
	const totalPages = categories.length + 2;
	const [page, setPage] = (0, import_react.useState)(0);
	const [dir, setDir] = (0, import_react.useState)(1);
	const go = (next) => {
		if (next < 0 || next >= totalPages) return;
		setDir(next > page ? 1 : -1);
		setPage(next);
	};
	const cat = (0, import_react.useMemo)(() => page >= 1 && page <= categories.length ? categories[page - 1] : null, [page]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-charcoal py-12 md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 opacity-20",
				style: {
					backgroundImage: `url(${site.images.dining})`,
					backgroundSize: "cover",
					backgroundPosition: "center"
				},
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/90 to-charcoal",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.4em] text-gold",
							children: "Fine Dining"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-4xl text-ivory md:text-5xl",
							children: "The Menu Book"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mx-auto mt-2 max-w-xl text-sm text-ivory/60",
							children: [
								"Flip through every page — ",
								categories.length,
								" chapters, 300+ dishes."
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl",
					style: { perspective: "2000px" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[3/4] w-full overflow-hidden rounded-r-2xl rounded-l-md border border-gold/30 bg-ivory shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)] md:aspect-[4/3]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-y-0 left-0 z-20 w-3 bg-gradient-to-r from-charcoal/40 to-transparent",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								custom: dir,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									custom: dir,
									variants: {
										enter: (d) => ({
											rotateY: d > 0 ? -75 : 75,
											opacity: 0,
											transformOrigin: d > 0 ? "left center" : "right center"
										}),
										center: {
											rotateY: 0,
											opacity: 1
										},
										exit: (d) => ({
											rotateY: d > 0 ? 75 : -75,
											opacity: 0,
											transformOrigin: d > 0 ? "right center" : "left center"
										})
									},
									initial: "enter",
									animate: "center",
									exit: "exit",
									transition: {
										duration: .5,
										ease: "easeInOut"
									},
									className: "absolute inset-0",
									style: { transformStyle: "preserve-3d" },
									children: page === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverPage, {}) : cat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryPage, {
										cat,
										index: page,
										total: categories.length
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoPage, {})
								}, page)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center justify-center gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => go(page - 1),
									disabled: page === 0,
									className: "flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold transition hover:bg-gold hover:text-charcoal disabled:opacity-30",
									"aria-label": "Previous page",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-[90px] text-center text-sm tracking-widest text-ivory/70",
									children: [
										page + 1,
										" / ",
										totalPages
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => go(page + 1),
									disabled: page === totalPages - 1,
									className: "flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 text-gold transition hover:bg-gold hover:text-charcoal disabled:opacity-30",
									"aria-label": "Next page",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go(0),
								className: `rounded-full border px-3 py-1 text-xs transition ${page === 0 ? "border-gold bg-gold text-charcoal" : "border-ivory/25 text-ivory/70 hover:border-gold"}`,
								children: "Cover"
							}), categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => go(i + 1),
								className: `rounded-full border px-3 py-1 text-xs transition ${page === i + 1 ? "border-gold bg-gold text-charcoal" : "border-ivory/25 text-ivory/70 hover:border-gold"}`,
								children: c.category
							}, c.category))]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBand, {
					title: "Reserve Your Table",
					sub: "Book your stay now and enjoy world-class hospitality at Nice Hotel",
					image: site.images.dining
				})
			})
		]
	});
}
function CoverPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col items-center justify-center text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: {
					backgroundImage: `url(${site.images.dining})`,
					backgroundSize: "cover",
					backgroundPosition: "center"
				},
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-charcoal/55",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "mx-auto h-10 w-10 text-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs uppercase tracking-[0.4em] text-gold",
						children: "Nice Hotel & Restaurant"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-5xl text-ivory md:text-6xl",
						children: "À La Carte"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-sm text-sm text-ivory/80",
						children: "Authentic flavours crafted with passion. Turn the page to begin."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-xs uppercase tracking-[0.3em] text-ivory/60",
						children: "Mansa, Punjab"
					})
				]
			})
		]
	});
}
function CategoryPage({ cat, index, total }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col bg-ivory px-7 py-8 md:px-12 md:py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between border-b border-gold/40 pb-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[10px] uppercase tracking-[0.3em] text-gold",
				children: [
					"Chapter ",
					index,
					" of ",
					total
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl text-charcoal md:text-4xl",
				children: cat.category
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs uppercase tracking-[0.2em] text-gold",
				children: [cat.items.length, " dishes"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 grid flex-1 grid-cols-1 gap-x-10 gap-y-3 overflow-y-auto pr-1 md:grid-cols-2 [scrollbar-width:thin]",
			children: cat.items.map((it, i) => {
				const nv = isNonVeg(it.name, cat.category);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm border ${nv ? "border-red-700 text-red-700" : "border-green-700 text-green-700"}`,
							"aria-label": nv ? "Non-vegetarian" : "Vegetarian",
							children: nv ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drumstick, { className: "h-2 w-2" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-2 w-2" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-body text-sm text-charcoal",
							children: it.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-1 flex-1 translate-y-[-3px] border-b border-dotted border-charcoal/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-base text-gold",
							children: it.price
						})
					]
				}, it.name + i);
			})
		})]
	});
}
function InfoPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col items-center justify-center bg-ivory px-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-[0.4em] text-gold",
				children: "Bon Appétit"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-4xl text-charcoal",
				children: "Thank You"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 max-w-sm space-y-2 text-sm text-brown",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "GST Extra · Please wait 30 minutes after placing an order." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Room Service: ", site.roomService] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Suggestions: ", site.suggestions] })
				]
			})
		]
	});
}
//#endregion
export { Menu as component };
