import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TiltCard-C2TpTaev.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* 3D tilt card — tracks pointer position and rotates the card in 3D space
* with a soft glare highlight. Falls back gracefully (no tilt) on touch.
*/
function TiltCard({ children, className, max = 10, glare = true }) {
	const ref = (0, import_react.useRef)(null);
	const [t, setT] = (0, import_react.useState)({
		rx: 0,
		ry: 0,
		gx: 50,
		gy: 50,
		active: false
	});
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const px = (e.clientX - r.left) / r.width;
		const py = (e.clientY - r.top) / r.height;
		setT({
			rx: (.5 - py) * max * 2,
			ry: (px - .5) * max * 2,
			gx: px * 100,
			gy: py * 100,
			active: true
		});
	};
	const reset = () => setT((s) => ({
		...s,
		rx: 0,
		ry: 0,
		active: false
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		style: { perspective: 1100 },
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			ref,
			onPointerMove: onMove,
			onPointerLeave: reset,
			className: "relative h-full transform-gpu rounded-2xl",
			style: { transformStyle: "preserve-3d" },
			animate: {
				rotateX: t.rx,
				rotateY: t.ry,
				scale: t.active ? 1.02 : 1
			},
			transition: {
				type: "spring",
				stiffness: 220,
				damping: 18,
				mass: .6
			},
			children: [children, glare && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-0 z-30 rounded-2xl transition-opacity duration-300",
				style: {
					opacity: t.active ? 1 : 0,
					background: `radial-gradient(circle at ${t.gx}% ${t.gy}%, rgba(255,255,255,0.35), transparent 55%)`
				}
			})]
		})
	});
}
//#endregion
export { TiltCard as t };
