import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { D as Lock, mt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as nice_logo_default } from "./nice-logo-hYSaAEbh.mjs";
import { n as Input, t as Button } from "./input-CEMa6_Eh.mjs";
import { l as adminStatus, t as AdminShell, u as adminUnlock } from "./AdminShell-DzKQdGmM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BLmhvU9B.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Gate() {
	const [state, setState] = (0, import_react.useState)("loading");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		adminStatus().then((r) => setState(r.unlocked ? "open" : "locked")).catch(() => setState("locked"));
	}, []);
	const submit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		setError(false);
		try {
			const { ok } = await adminUnlock({ data: { password } });
			if (ok) setState("open");
			else setError(true);
		} catch {
			setError(true);
		} finally {
			setSubmitting(false);
		}
	};
	if (state === "loading") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#FAFAF8]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-[#B98A3E]" })
	});
	if (state === "locked") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#161616] px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-[0.07]",
			style: { backgroundImage: "radial-gradient(circle at 30% 20%, #B98A3E 0, transparent 45%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "relative w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: nice_logo_default,
					alt: "Nice Hotel",
					className: "mx-auto h-14 w-14 rounded-xl object-contain"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 font-display text-2xl text-white",
					children: "Admin Panel"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs uppercase tracking-[0.25em] text-[#B98A3E]",
					children: "Restricted Access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "password",
						autoFocus: true,
						required: true,
						value: password,
						onChange: (e) => setPassword(e.target.value),
						placeholder: "Enter admin password",
						className: "border-white/15 bg-white/5 text-white placeholder:text-white/30"
					}), error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-red-400",
						children: "Incorrect password. Please try again."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					disabled: submitting,
					className: "mt-5 w-full bg-[#B98A3E] text-white hover:bg-[#a2772f]",
					children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "mr-2 h-4 w-4" }), "Unlock"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "mt-4 inline-block text-[11px] text-white/40 hover:text-white/70",
					children: "Back to website"
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
export { Gate as component };
