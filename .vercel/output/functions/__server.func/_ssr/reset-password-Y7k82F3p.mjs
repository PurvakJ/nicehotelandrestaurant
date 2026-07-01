import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { mt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as Input, t as Button } from "./input-CEMa6_Eh.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { t as supabase } from "./client-B-IVvH7c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-Y7k82F3p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ResetPassword() {
	const navigate = useNavigate();
	const [password, setPassword] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const { error } = await supabase.auth.updateUser({ password });
			if (error) throw error;
			toast.success("Password updated");
			navigate({
				to: "/admin",
				replace: true
			});
		} catch (err) {
			toast.error(err.message ?? "Failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#161616] px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mb-6 text-center font-display text-2xl text-white",
					children: "Set a new password"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					className: "mb-1.5 block text-xs text-white/70",
					children: "New password"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					type: "password",
					required: true,
					value: password,
					onChange: (e) => setPassword(e.target.value),
					className: "border-white/15 bg-white/5 text-white"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "submit",
					disabled: loading,
					className: "mt-5 w-full bg-[#B98A3E] text-white hover:bg-[#a2772f]",
					children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Update Password"]
				})
			]
		})
	});
}
//#endregion
export { ResetPassword as component };
