import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AppImage-ZFFpQV3a.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Normalises any image value into a usable absolute/relative URL string.
* Handles plain strings, arrays (first usable entry), and legacy storage
* objects such as { url, signedUrl, publicUrl, src, path, name }.
* Returns null when nothing usable is found.
*/
function resolveImageUrl(input) {
	if (input == null) return null;
	if (typeof input === "string") {
		const s = input.trim();
		return s.length ? s : null;
	}
	if (Array.isArray(input)) {
		for (const item of input) {
			const r = resolveImageUrl(item);
			if (r) return r;
		}
		return null;
	}
	if (typeof input === "object") {
		const o = input;
		return resolveImageUrl(o.url ?? o.signedUrl ?? o.publicUrl ?? o.src ?? o.path ?? null);
	}
	return null;
}
/** Tiny inline SVG used when an image is missing or fails to load. */
var IMAGE_FALLBACK = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='400' height='300'>
      <rect width='100%' height='100%' fill='#efe9dd'/>
      <text x='50%' y='50%' fill='#b98a3e' font-family='serif' font-size='20'
        text-anchor='middle' dominant-baseline='middle'>Nice Hotel</text>
    </svg>`);
/**
* Resilient image renderer used across the site. Resolves any image shape,
* lazy-loads by default, shows a subtle placeholder while loading and swaps
* to a branded fallback on error.
*/
function AppImage({ src, fallback = IMAGE_FALLBACK, alt = "", className, loading = "lazy", ...rest }) {
	const resolved = resolveImageUrl(src) ?? fallback;
	const [current, setCurrent] = (0, import_react.useState)(resolved);
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setCurrent(resolved);
		setLoaded(false);
	}, [resolved]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		...rest,
		src: current,
		alt,
		loading,
		decoding: "async",
		onLoad: () => setLoaded(true),
		onError: () => {
			if (current !== fallback) setCurrent(fallback);
		},
		"data-loaded": loaded,
		className: [
			className,
			"bg-[#efe9dd] transition-opacity duration-500",
			loaded ? "opacity-100" : "opacity-0"
		].filter(Boolean).join(" ")
	});
}
//#endregion
export { AppImage as t };
