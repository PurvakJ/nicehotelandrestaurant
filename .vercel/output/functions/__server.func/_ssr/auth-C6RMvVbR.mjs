import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { N as Hotel, Y as Check, mt as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as nice_logo_default } from "./nice-logo-hYSaAEbh.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as Input, t as Button } from "./input-CEMa6_Eh.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { t as supabase } from "./client-B-IVvH7c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-C6RMvVbR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [remember, setRemember] = (0, import_react.useState)(true);
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then(({ data }) => {
			if (data.user) navigate({
				to: "/admin",
				replace: true
			});
		});
	}, [navigate]);
	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			if (mode === "signin") {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				toast.success("Welcome back");
				navigate({
					to: "/admin",
					replace: true
				});
			} else if (mode === "signup") {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: { emailRedirectTo: window.location.origin + "/admin" }
				});
				if (error) throw error;
				toast.success("Account created — signing you in");
				navigate({
					to: "/admin",
					replace: true
				});
			} else {
				const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + "/reset-password" });
				if (error) throw error;
				toast.success("Password reset link sent to your email");
				setMode("signin");
			}
		} catch (err) {
			toast.error(err.message ?? "Authentication failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen items-center justify-center bg-[#161616] px-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-[0.07]",
			style: { backgroundImage: "radial-gradient(circle at 30% 20%, #B98A3E 0, transparent 45%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-7 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: nice_logo_default,
							alt: "Nice Hotel",
							className: "mx-auto h-14 w-14 rounded-xl object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-2xl text-white",
							children: "Nice Hotel Admin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs uppercase tracking-[0.25em] text-[#B98A3E]",
							children: mode === "signin" ? "Sign in to your suite" : mode === "signup" ? "Create your account" : "Reset password"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "mb-1.5 block text-xs text-white/70",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "email",
							required: true,
							value: email,
							onChange: (e) => setEmail(e.target.value),
							placeholder: "admin@nicehotel.com",
							className: "border-white/15 bg-white/5 text-white placeholder:text-white/30"
						})] }),
						mode !== "forgot" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							className: "mb-1.5 block text-xs text-white/70",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "password",
							required: true,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							placeholder: "••••••••",
							className: "border-white/15 bg-white/5 text-white placeholder:text-white/30"
						})] }),
						mode === "signin" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs text-white/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
									checked: remember,
									onCheckedChange: (v) => setRemember(!!v),
									className: "border-white/30"
								}), " Remember me"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setMode("forgot"),
								className: "text-[#B98A3E] hover:underline",
								children: "Forgot password?"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							disabled: loading,
							className: "w-full bg-[#B98A3E] text-white hover:bg-[#a2772f]",
							children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), mode === "signin" ? "Sign In" : mode === "signup" ? "Create Account" : "Send Reset Link"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 text-center text-xs text-white/50",
					children: mode === "signin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["First time? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMode("signup"),
						className: "text-[#B98A3E] hover:underline",
						children: "Create an account"
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setMode("signin"),
						className: "text-[#B98A3E] hover:underline",
						children: "Back to sign in"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/",
					className: "mt-4 flex items-center justify-center gap-1.5 text-[11px] text-white/40 hover:text-white/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotel, { className: "h-3 w-3" }), " Back to website"]
				})
			]
		})]
	});
}
//#endregion
export { AuthPage as component };
