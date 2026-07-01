import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as useBooking } from "./booking-CpaFv2A4.mjs";
import { t as AppImage } from "./AppImage-ZFFpQV3a.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-D-dNNAzx.js
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, y = 28, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .8,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function LuxeButton({ children, variant = "solid", onClick, type }) {
	const base = "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300";
	const styles = {
		solid: "bg-gold text-ivory hover:bg-charcoal",
		outline: "border border-current text-current hover:bg-gold hover:border-gold hover:text-ivory",
		ghost: "bg-ivory text-charcoal hover:bg-gold hover:text-ivory"
	}[variant];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: type ?? "button",
		onClick,
		className: `${base} ${styles}`,
		children
	});
}
function SectionHeading({ eyebrow, title, sub, center, light }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: center ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `mt-3 font-display text-4xl leading-tight md:text-5xl ${light ? "text-ivory" : "text-charcoal"}`,
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `gold-rule mt-5 ${center ? "mx-auto" : ""}` }),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-5 text-base ${light ? "text-ivory/70" : "text-muted-foreground"}`,
				children: sub
			})
		]
	});
}
function PageHeader({ eyebrow, title, sub, image }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[58vh] items-end overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppImage, {
				src: image,
				alt: title,
				className: "absolute inset-0 h-full w-full object-cover",
				loading: "eager"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/45 to-charcoal/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-luxe relative z-10 pb-16 pt-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold-soft",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 display-hero text-5xl text-ivory md:text-7xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gold-rule mt-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-xl text-lg text-ivory/80",
						children: sub
					})
				] })
			})
		]
	});
}
function CtaBand({ title, sub, image }) {
	const { open } = useBooking();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppImage, {
				src: image,
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
						children: "Your Perfect Stay Begins Here"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mx-auto mt-4 max-w-3xl font-display text-4xl text-ivory md:text-6xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl text-ivory/70",
						children: sub
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxeButton, {
							onClick: () => open(),
							children: "Reserve Your Stay"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LuxeButton, {
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-ivory",
									children: "Contact Us"
								})
							})
						})]
					})
				] })
			})
		]
	});
}
//#endregion
export { SectionHeading as a, Reveal as i, LuxeButton as n, PageHeader as r, CtaBand as t };
