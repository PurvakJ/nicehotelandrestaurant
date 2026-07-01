import { o as __toESM } from "../_runtime.mjs";
import { m as nav, y as site } from "./content-B6YhG0K8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { F as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as useBooking, t as BookingProvider } from "./booking-CpaFv2A4.mjs";
import { t as AppImage } from "./AppImage-ZFFpQV3a.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { C as MapPin, W as Clock, b as MessageCircle, c as Tag, g as Phone, j as Instagram, t as X, w as Mail, x as Menu } from "../_libs/lucide-react.mjs";
import { t as nice_logo_default } from "./nice-logo-hYSaAEbh.mjs";
import { n as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { r as getOffers } from "./public.functions-CR6yH6DE.mjs";
import { t as Route$19 } from "./book-XnNHgsas.mjs";
import { a as objectType, i as numberType, n as arrayType, r as booleanType, s as stringType } from "../_libs/zod.mjs";
import { t as breadcrumbLd } from "./seo-BZCJj_H5.mjs";
import { t as Route$20 } from "./menu-8Qn5I1a1.mjs";
import { t as Route$21 } from "./rooms-BqMRM2Pa.mjs";
import { t as Route$22 } from "./venue-C6JuPLaH.mjs";
import { t as Route$23 } from "./services-Ck0JVkZc.mjs";
import { t as Route$24 } from "./routes-DpZIoVi-.mjs";
import { createHmac, timingSafeEqual } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C4-d8x-q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Bkdg4XbR.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const { open } = useBooking();
	const isHome = useRouterState({ select: (s) => s.location.pathname }) === "/";
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const solid = scrolled || !isHome;
	const textColor = solid ? "text-charcoal" : "text-ivory";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${solid ? "bg-ivory/92 shadow-sm backdrop-blur-md py-3" : "bg-transparent py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					"aria-label": site.name,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: nice_logo_default,
						alt: `${site.name} logo`,
						className: "h-11 w-11 rounded-full object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden sm:block leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `block font-display text-lg ${textColor}`,
							children: "The Nice"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `block text-[0.6rem] uppercase tracking-[0.3em] ${solid ? "text-gold" : "text-gold-soft"}`,
							children: "Hotel & Restaurant"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					"aria-label": "Primary",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: `link-underline text-sm tracking-wide transition-colors ${textColor} hover:text-gold`,
						activeProps: { className: "text-gold" },
						activeOptions: { exact: n.to === "/" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => open(),
						className: "hidden rounded-full bg-gold px-6 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition hover:bg-charcoal sm:block",
						children: "Book Now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `lg:hidden ${textColor}`,
						onClick: () => setMobileOpen(true),
						"aria-label": "Open menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
					})]
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[110] bg-charcoal text-ivory lg:hidden",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe flex items-center justify-between py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-2xl",
				children: "The Nice"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setMobileOpen(false),
				"aria-label": "Close menu",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-7 w-7" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "container-luxe mt-10 flex flex-col gap-2",
			"aria-label": "Mobile",
			children: [nav.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					x: -20
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: { delay: .05 * i },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setMobileOpen(false),
					className: "block border-b border-ivory/10 py-4 font-display text-3xl",
					children: n.label
				})
			}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					setMobileOpen(false);
					open();
				},
				className: "mt-8 rounded-full bg-gold px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-ivory",
				children: "Book Now"
			})]
		})]
	}) })] });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-charcoal text-ivory/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe grid grid-cols-1 gap-12 py-16 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: nice_logo_default,
								alt: `${site.name} logo`,
								className: "h-12 w-12 rounded-full object-contain"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl text-ivory",
								children: "The Nice"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-relaxed text-ivory/60",
							children: site.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.instagram,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "Instagram",
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 transition hover:border-gold hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.whatsapp,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "WhatsApp",
								className: "flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 transition hover:border-gold hover:text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" })
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-xs uppercase tracking-[0.25em] text-gold",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3 text-sm",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "text-ivory/70 transition hover:text-gold",
						children: n.label
					}) }, n.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-xs uppercase tracking-[0.25em] text-gold",
					children: "Contact Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-4 text-sm text-ivory/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 shrink-0 text-gold" }), site.address]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `tel:${site.phoneRaw}`,
								className: "hover:text-gold",
								children: site.phone
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${site.email}`,
								className: "break-all hover:text-gold",
								children: site.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 shrink-0 text-gold" }), site.hours]
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "text-xs uppercase tracking-[0.25em] text-gold",
						children: "Newsletter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm text-ivory/60",
						children: "Subscribe to get updates on new arrivals and special offers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-4 flex overflow-hidden rounded-full border border-ivory/20",
						onSubmit: (e) => e.preventDefault(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							placeholder: "Your email",
							"aria-label": "Email for newsletter",
							className: "w-full bg-transparent px-4 py-2.5 text-sm text-ivory placeholder:text-ivory/40 outline-none"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "bg-gold px-5 text-xs font-medium uppercase tracking-wider text-ivory",
							children: "Subscribe"
						})]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ivory/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/50 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Nice Hotel & Restaurant. All Rights Reserved." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Crafted with ♥ for premium hospitality" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin",
						className: "hover:text-gold",
						children: "Admin Login"
					})
				]
			})
		})]
	});
}
function OffersPopup() {
	const [offers, setOffers] = (0, import_react.useState)([]);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (sessionStorage.getItem("offers_popup_seen")) return;
		let active = true;
		getOffers().then((data) => {
			if (!active || !data || data.length === 0) return;
			setOffers(data);
			setOpen(true);
		}).catch(() => {});
		return () => {
			active = false;
		};
	}, []);
	const close = () => {
		setOpen(false);
		if (typeof window !== "undefined") sessionStorage.setItem("offers_popup_seen", "1");
	};
	if (!open || offers.length === 0) return null;
	const main = offers[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm",
		onClick: close,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md overflow-hidden rounded-3xl bg-ivory shadow-2xl",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: close,
					"aria-label": "Close offers",
					className: "absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}),
				main.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppImage, {
					src: main.image,
					alt: main.title,
					className: "h-44 w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-7 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex items-center justify-center gap-1.5 text-xs uppercase tracking-[0.3em] text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3.5 w-3.5" }), " Special Offers"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl text-charcoal",
							children: main.title
						}),
						main.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: main.description
						}),
						main.discount && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-2xl text-gold",
							children: main.discount
						}),
						main.code && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 inline-block rounded-lg border border-dashed border-gold/60 bg-gold/10 px-4 py-2 text-sm font-medium tracking-wider text-charcoal",
							children: ["Code: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-gold",
								children: main.code
							})]
						}),
						offers.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 space-y-2 border-t border-black/5 pt-4 text-left",
							children: offers.slice(1, 4).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-charcoal",
									children: o.title
								}), o.discount && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-gold",
									children: o.discount
								})]
							}, o.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: close,
							className: "mt-6 w-full rounded-full bg-charcoal px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition hover:bg-gold",
							children: "Explore Now"
						})
					]
				})
			]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$18 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Nice Hotel And Restaurant in Mansa — Best Hotel, Stay & Restaurant" },
			{
				name: "description",
				content: "Looking for a hotel, stay or restaurant in Mansa, Punjab? Nice Hotel And Restaurant offers luxury rooms, fine dining and elegant event venues. Book your stay online."
			},
			{
				name: "keywords",
				content: "hotel in Mansa, restaurant in Mansa, stay in Mansa, best hotel Mansa Punjab, luxury hotel Mansa, rooms in Mansa, Mansa restaurant, banquet hall Mansa, Nice Hotel And Restaurant"
			},
			{
				name: "author",
				content: "Nice Hotel And Restaurant"
			},
			{
				name: "geo.region",
				content: "IN-PB"
			},
			{
				name: "geo.placename",
				content: "Mansa, Punjab"
			},
			{
				name: "geo.position",
				content: "29.9988;75.3933"
			},
			{
				name: "ICBM",
				content: "29.9988, 75.3933"
			},
			{
				property: "og:title",
				content: "Nice Hotel And Restaurant in Mansa — Best Hotel, Stay & Restaurant"
			},
			{
				property: "og:description",
				content: "Luxury rooms, fine dining and elegant event venues in Mansa, Punjab. Book your stay at Nice Hotel And Restaurant online."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Nice Hotel And Restaurant"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Nice Hotel And Restaurant in Mansa — Best Hotel, Stay & Restaurant"
			},
			{
				name: "twitter:description",
				content: "Luxury rooms, fine dining and elegant event venues in Mansa, Punjab. Book your stay online."
			},
			{
				name: "robots",
				content: "index, follow"
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b55bbedf-cf74-435f-aa22-aa3bf59d3cc0/id-preview-f6b2f266--3c9f6921-e98b-43a2-9494-43b0e0a89b83.lovable.app-1782816871375.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b55bbedf-cf74-435f-aa22-aa3bf59d3cc0/id-preview-f6b2f266--3c9f6921-e98b-43a2-9494-43b0e0a89b83.lovable.app-1782816871375.png"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Hotel",
				name: "Nice Hotel And Restaurant",
				url: "https://www.nicehotelandrestaurant.online/",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Near Chugli Ghar",
					addressLocality: "Mansa",
					addressRegion: "Punjab",
					postalCode: "151505",
					addressCountry: "IN"
				},
				telephone: "+91 9216400005",
				email: "nicehotelandrestaurant@gmail.com",
				priceRange: "₹₹",
				openingHours: "Mo-Su 00:00-23:59",
				sameAs: ["https://www.instagram.com/nice_hotel_and_resturant/?hl=en"],
				servesCuisine: [
					"Indian",
					"Punjabi",
					"Chinese",
					"Continental"
				],
				starRating: {
					"@type": "Rating",
					ratingValue: "5"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$18.useRouteContext();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const isAdmin = pathname.startsWith("/admin") || pathname === "/auth" || pathname === "/reset-password";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BookingProvider, { children: [
			!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			!isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OffersPopup, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })
		] })
	});
}
var $$splitComponentImporter$15 = () => import("./reset-password-Y7k82F3p.mjs");
var Route$17 = createFileRoute("/reset-password")({
	ssr: false,
	head: () => ({ meta: [{ title: "Reset Password" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./contact-2xir6nGL.mjs");
var Route$16 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Nice Hotel And Restaurant, Mansa, Punjab" },
			{
				name: "description",
				content: "Contact Nice Hotel And Restaurant, Near Chugli Ghar, Mansa 151505. Call +91 9216400005 or email nicehotelandrestaurant@gmail.com for bookings."
			},
			{
				property: "og:title",
				content: "Contact Nice Hotel And Restaurant"
			},
			{
				property: "og:url",
				content: "/contact"
			},
			{
				property: "og:image",
				content: site.images.dining
			},
			{
				name: "twitter:image",
				content: site.images.dining
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}],
		scripts: [breadcrumbLd([{
			name: "Home",
			path: "/"
		}, {
			name: "Contact",
			path: "/contact"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./auth-C6RMvVbR.mjs");
var Route$15 = createFileRoute("/auth")({
	ssr: false,
	head: () => ({ meta: [{ title: "Admin Login — Nice Hotel & Restaurant" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./about-Cu5V6Qaf.mjs");
var Route$14 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Nice Hotel And Restaurant, Mansa" },
			{
				name: "description",
				content: "Discover Nice Hotel & Restaurant in Mansa, Punjab — 9 luxury rooms, fine dining and a grand ballroom for 100 guests. Established 2024."
			},
			{
				property: "og:title",
				content: "About Nice Hotel And Restaurant"
			},
			{
				property: "og:url",
				content: "/about"
			},
			{
				property: "og:image",
				content: site.images.executive
			},
			{
				name: "twitter:image",
				content: site.images.executive
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}],
		scripts: [breadcrumbLd([{
			name: "Home",
			path: "/"
		}, {
			name: "About",
			path: "/about"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./route-Di7iQBCH.mjs");
var Route$13 = createFileRoute("/_authenticated")({
	ssr: false,
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./admin-BLmhvU9B.mjs");
var Route$12 = createFileRoute("/_authenticated/admin")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./admin.index-BHxFBGBD.mjs");
var Route$11 = createFileRoute("/_authenticated/admin/")({ component: lazyRouteComponent($$splitComponentImporter$9, "component") });
var $$splitComponentImporter$8 = () => import("./admin.services-CJ8Vwi4k.mjs");
var Route$10 = createFileRoute("/_authenticated/admin/services")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./admin.rooms-D4cuuWiS.mjs");
var Route$9 = createFileRoute("/_authenticated/admin/rooms")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./admin.offers-CGunOH_E.mjs");
var Route$8 = createFileRoute("/_authenticated/admin/offers")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
var $$splitComponentImporter$5 = () => import("./admin.menu-R7pxUxbY.mjs");
var Route$7 = createFileRoute("/_authenticated/admin/menu")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./admin.events-BqngAO62.mjs");
var Route$6 = createFileRoute("/_authenticated/admin/events")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./admin.enquiries-DaAA1C1E.mjs");
var Route$5 = createFileRoute("/_authenticated/admin/enquiries")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./admin.emails-DpVtH50V.mjs");
var Route$4 = createFileRoute("/_authenticated/admin/emails")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./admin.cms-Gf079ASL.mjs");
var Route$3 = createFileRoute("/_authenticated/admin/cms")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./admin.bookings-XgGn_Au2.mjs");
var Route$2 = createFileRoute("/_authenticated/admin/bookings")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var itemSchema$1 = objectType({
	roomId: stringType().uuid(),
	quantity: numberType().int().min(1).max(20).default(1),
	adults: numberType().int().min(1).max(20).default(1),
	children: numberType().int().min(0).max(20).default(0),
	extraBed: booleanType().default(false),
	notes: stringType().max(2e3).optional()
});
var schema$1 = objectType({
	razorpay_order_id: stringType().min(3),
	razorpay_payment_id: stringType().min(3),
	razorpay_signature: stringType().min(3),
	items: arrayType(itemSchema$1).min(1).max(30).optional(),
	roomId: stringType().uuid().optional(),
	checkIn: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
	checkOut: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
	guests: numberType().int().min(1).max(60),
	guestName: stringType().min(1).max(120),
	guestEmail: stringType().email(),
	guestPhone: stringType().min(3).max(40),
	specialRequests: stringType().max(2e3).optional()
});
var Route$1 = createFileRoute("/api/public/razorpay/verify")({ server: { handlers: { POST: async ({ request }) => {
	const { razorpayCreds } = await import("./razorpay.server-DjU-lrFp.mjs");
	const creds = razorpayCreds();
	if (!creds) return Response.json({ error: "Payment gateway not configured" }, { status: 500 });
	const keySecret = creds.keySecret;
	let body;
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: "Invalid body" }, { status: 400 });
	}
	const parsed = schema$1.safeParse(body);
	if (!parsed.success) return Response.json({ error: "Invalid input" }, { status: 400 });
	const d = parsed.data;
	const expected = createHmac("sha256", keySecret).update(`${d.razorpay_order_id}|${d.razorpay_payment_id}`).digest("hex");
	const sig = Buffer.from(d.razorpay_signature);
	const exp = Buffer.from(expected);
	if (sig.length !== exp.length || !timingSafeEqual(sig, exp)) return Response.json({ error: "Payment verification failed" }, { status: 400 });
	const { computeMultiQuote, assertMultiAvailable, findExistingBooking } = await import("./booking.server-npsx-oPw.mjs");
	const { supabaseAdmin } = await import("./client.server-Bw6iWMJ-.mjs");
	const items = d.items ?? (d.roomId ? [{
		roomId: d.roomId,
		quantity: 1,
		adults: d.guests,
		children: 0,
		extraBed: false
	}] : null);
	if (!items) return Response.json({ error: "No rooms selected" }, { status: 400 });
	try {
		const existing = await findExistingBooking(d.razorpay_order_id, d.razorpay_payment_id);
		if (existing) return Response.json({
			ok: true,
			bookingId: existing
		});
	} catch {}
	let userId = null;
	const authHeader = request.headers.get("authorization");
	const token = authHeader?.toLowerCase().startsWith("bearer ") ? authHeader.slice(7) : null;
	if (token) try {
		const { data: u } = await supabaseAdmin.auth.getUser(token);
		userId = u?.user?.id ?? null;
	} catch {
		userId = null;
	}
	let quote;
	try {
		quote = await computeMultiQuote(items, d.checkIn, d.checkOut);
	} catch (e) {
		return Response.json({ error: e?.message ?? "Quote failed" }, { status: 400 });
	}
	try {
		await assertMultiAvailable(items, d.checkIn, d.checkOut);
	} catch (e) {
		return Response.json({
			error: e?.message ?? "Not available",
			paymentId: d.razorpay_payment_id
		}, { status: 409 });
	}
	const totalGuests = quote.lines.reduce((s, l) => s + (l.adults + l.children) * l.quantity, 0) || d.guests;
	const first = quote.lines[0];
	const roomSummary = quote.lines.map((l) => `${l.room.name} ×${l.quantity}`).join(", ");
	const { data: booking, error } = await supabaseAdmin.from("bookings").insert({
		user_id: userId,
		guest_name: d.guestName,
		guest_email: d.guestEmail,
		guest_phone: d.guestPhone,
		room_id: first.room.id,
		room_type: quote.lines.length === 1 ? first.room.name : roomSummary,
		check_in: d.checkIn,
		check_out: d.checkOut,
		nights: quote.nights,
		guests: totalGuests,
		amount: quote.grandTotal,
		status: "confirmed",
		payment_status: "paid",
		source: "website",
		special_requests: d.specialRequests ?? null,
		razorpay_order_id: d.razorpay_order_id,
		razorpay_payment_id: d.razorpay_payment_id
	}).select("id").single();
	if (error) {
		console.error("Booking insert error", error);
		return Response.json({ error: "Could not save booking" }, { status: 500 });
	}
	try {
		const rows = quote.lines.map((l) => ({
			booking_id: booking.id,
			room_id: l.room.id,
			room_type: l.room.name,
			quantity: l.quantity,
			adults: l.adults,
			children: l.children,
			extra_bed: l.extraBed,
			unit_price: l.unitPrice,
			price: l.lineTotal,
			notes: l.notes
		}));
		await supabaseAdmin.from("booking_rooms").insert(rows);
	} catch (e) {
		console.error("booking_rooms insert error", e);
	}
	try {
		const { notify } = await import("./notifications.server-1NPu9KdC.mjs");
		await notify({
			type: "booking",
			title: `New paid booking — ${d.guestName}`,
			body: `${roomSummary} · ${d.checkIn} → ${d.checkOut} · ₹${quote.grandTotal.toLocaleString("en-IN")}`,
			link: "/admin/bookings"
		});
	} catch (e) {
		console.error("notify error", e);
	}
	try {
		const { sendEmails, adminEmail } = await import("./email.server-Bk8bA_LU.mjs");
		const t = await import("./email-templates-f7wI1q6q.mjs");
		const roomsBreakdown = quote.lines.map((l) => `${l.room.name} ×${l.quantity} (${l.adults} adult${l.adults > 1 ? "s" : ""}${l.children ? `, ${l.children} child` : ""}${l.extraBed ? ", extra bed" : ""}) — ₹${l.lineTotal.toLocaleString("en-IN")}`).join("; ");
		const data = {
			name: d.guestName,
			email: d.guestEmail,
			phone: d.guestPhone,
			checkIn: d.checkIn,
			checkOut: d.checkOut,
			guests: String(totalGuests),
			roomType: quote.lines.length === 1 ? first.room.name : roomSummary,
			requests: `${d.specialRequests ?? ""}${d.specialRequests ? " · " : ""}Rooms: ${roomsBreakdown} · Subtotal ₹${quote.subtotal.toLocaleString("en-IN")} + GST ₹${quote.taxes.toLocaleString("en-IN")} = ₹${quote.grandTotal.toLocaleString("en-IN")} (${quote.nights} night${quote.nights > 1 ? "s" : ""}) · Payment ID ${d.razorpay_payment_id}`
		};
		await sendEmails([{
			to: d.guestEmail,
			subject: "Booking confirmed — Nice Hotel & Restaurant",
			html: t.bookingGuestEmail(data)
		}, {
			to: adminEmail(),
			subject: `New paid booking: ${d.guestName}`,
			html: t.bookingAdminEmail(data),
			reply: d.guestEmail
		}]);
	} catch (e) {
		console.error("Booking email error", e);
	}
	return Response.json({
		ok: true,
		bookingId: booking.id
	});
} } } });
var schema = objectType({
	items: arrayType(objectType({
		roomId: stringType().uuid(),
		quantity: numberType().int().min(1).max(20).default(1),
		adults: numberType().int().min(1).max(20).default(1),
		children: numberType().int().min(0).max(20).default(0),
		extraBed: booleanType().default(false),
		notes: stringType().max(2e3).optional()
	})).min(1).max(30).optional(),
	roomId: stringType().uuid().optional(),
	checkIn: stringType().regex(/^\d{4}-\d{2}-\d{2}$/),
	checkOut: stringType().regex(/^\d{4}-\d{2}-\d{2}$/)
});
var Route = createFileRoute("/api/public/razorpay/order")({ server: { handlers: { POST: async ({ request }) => {
	const { razorpayCreds } = await import("./razorpay.server-DjU-lrFp.mjs");
	const creds = razorpayCreds();
	if (!creds) return Response.json({ error: "Payment gateway not configured" }, { status: 500 });
	const { keyId, keySecret } = creds;
	let body;
	try {
		body = await request.json();
	} catch {
		return Response.json({ error: "Invalid body" }, { status: 400 });
	}
	const parsed = schema.safeParse(body);
	if (!parsed.success) return Response.json({ error: "Invalid input" }, { status: 400 });
	const { checkIn, checkOut } = parsed.data;
	const items = parsed.data.items ?? (parsed.data.roomId ? [{
		roomId: parsed.data.roomId,
		quantity: 1,
		adults: 1,
		children: 0,
		extraBed: false
	}] : null);
	if (!items) return Response.json({ error: "No rooms selected" }, { status: 400 });
	const { computeMultiQuote, assertMultiAvailable } = await import("./booking.server-npsx-oPw.mjs");
	let quote;
	try {
		quote = await computeMultiQuote(items, checkIn, checkOut);
	} catch (e) {
		return Response.json({ error: e?.message ?? "Quote failed" }, { status: 400 });
	}
	try {
		await assertMultiAvailable(items, checkIn, checkOut);
	} catch (e) {
		return Response.json({ error: e?.message ?? "Not available" }, { status: 409 });
	}
	const amountPaise = Math.round(quote.grandTotal * 100);
	const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
	const res = await fetch("https://api.razorpay.com/v1/orders", {
		method: "POST",
		headers: {
			"content-type": "application/json",
			authorization: `Basic ${auth}`
		},
		body: JSON.stringify({
			amount: amountPaise,
			currency: "INR",
			receipt: `rcpt_${Date.now()}`,
			notes: {
				rooms: String(items.length),
				checkIn,
				checkOut
			}
		})
	});
	if (!res.ok) {
		const txt = await res.text();
		console.error("Razorpay order error", txt);
		return Response.json({ error: "Could not create payment order" }, { status: 502 });
	}
	const order = await res.json();
	const roomName = quote.lines.length === 1 ? `${quote.lines[0].room.name}${quote.lines[0].quantity > 1 ? ` ×${quote.lines[0].quantity}` : ""}` : `${quote.lines.reduce((s, l) => s + l.quantity, 0)} rooms`;
	return Response.json({
		orderId: order.id,
		amount: amountPaise,
		currency: "INR",
		keyId,
		nights: quote.nights,
		roomName,
		subtotal: quote.subtotal,
		taxes: quote.taxes,
		amountInr: quote.grandTotal
	});
} } } });
var VenueRoute = Route$22.update({
	id: "/venue",
	path: "/venue",
	getParentRoute: () => Route$18
});
var ServicesRoute = Route$23.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$18
});
var RoomsRoute = Route$21.update({
	id: "/rooms",
	path: "/rooms",
	getParentRoute: () => Route$18
});
var ResetPasswordRoute = Route$17.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$18
});
var MenuRoute = Route$20.update({
	id: "/menu",
	path: "/menu",
	getParentRoute: () => Route$18
});
var ContactRoute = Route$16.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$18
});
var BookRoute = Route$19.update({
	id: "/book",
	path: "/book",
	getParentRoute: () => Route$18
});
var AuthRoute = Route$15.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$18
});
var AboutRoute = Route$14.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$18
});
var AuthenticatedRouteRoute = Route$13.update({
	id: "/_authenticated",
	getParentRoute: () => Route$18
});
var IndexRoute = Route$24.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$18
});
var AuthenticatedAdminRoute = Route$12.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminIndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminServicesRoute = Route$10.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminRoomsRoute = Route$9.update({
	id: "/rooms",
	path: "/rooms",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminOffersRoute = Route$8.update({
	id: "/offers",
	path: "/offers",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminMenuRoute = Route$7.update({
	id: "/menu",
	path: "/menu",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminEventsRoute = Route$6.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminEnquiriesRoute = Route$5.update({
	id: "/enquiries",
	path: "/enquiries",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminEmailsRoute = Route$4.update({
	id: "/emails",
	path: "/emails",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminCmsRoute = Route$3.update({
	id: "/cms",
	path: "/cms",
	getParentRoute: () => AuthenticatedAdminRoute
});
var AuthenticatedAdminBookingsRoute = Route$2.update({
	id: "/bookings",
	path: "/bookings",
	getParentRoute: () => AuthenticatedAdminRoute
});
var ApiPublicRazorpayVerifyRoute = Route$1.update({
	id: "/api/public/razorpay/verify",
	path: "/api/public/razorpay/verify",
	getParentRoute: () => Route$18
});
var ApiPublicRazorpayOrderRoute = Route.update({
	id: "/api/public/razorpay/order",
	path: "/api/public/razorpay/order",
	getParentRoute: () => Route$18
});
var AuthenticatedAdminRouteChildren = {
	AuthenticatedAdminBookingsRoute,
	AuthenticatedAdminCmsRoute,
	AuthenticatedAdminEmailsRoute,
	AuthenticatedAdminEnquiriesRoute,
	AuthenticatedAdminEventsRoute,
	AuthenticatedAdminMenuRoute,
	AuthenticatedAdminOffersRoute,
	AuthenticatedAdminRoomsRoute,
	AuthenticatedAdminServicesRoute,
	AuthenticatedAdminIndexRoute
};
var AuthenticatedRouteRouteChildren = { AuthenticatedAdminRoute: AuthenticatedAdminRoute._addFileChildren(AuthenticatedAdminRouteChildren) };
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AboutRoute,
	AuthRoute,
	BookRoute,
	ContactRoute,
	MenuRoute,
	ResetPasswordRoute,
	RoomsRoute,
	ServicesRoute,
	VenueRoute,
	ApiPublicRazorpayOrderRoute,
	ApiPublicRazorpayVerifyRoute
};
var routeTree = Route$18._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error }) {
	console.error(error);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: {
			minHeight: "60vh",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center",
			padding: "2rem",
			fontFamily: "Inter, system-ui, sans-serif"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				style: {
					fontSize: "1.75rem",
					color: "#2b2b2b",
					marginBottom: "0.75rem"
				},
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				style: {
					color: "#6b6b6b",
					maxWidth: "28rem"
				},
				children: "We hit an unexpected error. Please refresh the page or call us at +91 9216400005."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => window.location.reload(),
				style: {
					marginTop: "1.5rem",
					borderRadius: "999px",
					background: "#2b2b2b",
					color: "#fff",
					padding: "0.65rem 1.75rem",
					fontSize: "0.75rem",
					letterSpacing: "0.2em",
					textTransform: "uppercase",
					border: "none",
					cursor: "pointer"
				},
				children: "Refresh"
			})
		]
	});
}
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0,
		defaultErrorComponent: DefaultErrorComponent
	});
};
//#endregion
export { getRouter };
