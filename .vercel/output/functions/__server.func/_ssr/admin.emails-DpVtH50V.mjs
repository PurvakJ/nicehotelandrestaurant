import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { R as Download, f as Send, m as RefreshCw, mt as LoaderCircle, p as Search } from "../_libs/lucide-react.mjs";
import { t as Button } from "./input-CEMa6_Eh.mjs";
import { a as adminResendEmail, g as useRows, h as useInvalidate, n as PageTitle } from "./AdminShell-DzKQdGmM.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as StatusBadge } from "./ResourceManager-BPQfwDwT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.emails-DpVtH50V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	"all",
	"sent",
	"pending",
	"failed"
];
function EmailCenter() {
	const { data = [], isLoading } = useRows("email_logs", {
		orderBy: "created_at",
		ascending: false
	});
	const invalidate = useInvalidate();
	const [q, setQ] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [resending, setResending] = (0, import_react.useState)(null);
	const filtered = (0, import_react.useMemo)(() => {
		const lc = q.toLowerCase();
		return data.filter((r) => {
			if (filter !== "all" && r.status !== filter) return false;
			if (!lc) return true;
			return [
				r.recipient,
				r.subject,
				r.type
			].some((v) => String(v ?? "").toLowerCase().includes(lc));
		});
	}, [
		data,
		q,
		filter
	]);
	const counts = (0, import_react.useMemo)(() => ({
		all: data.length,
		sent: data.filter((r) => r.status === "sent").length,
		pending: data.filter((r) => r.status === "pending").length,
		failed: data.filter((r) => r.status === "failed").length
	}), [data]);
	const resend = async (id) => {
		setResending(id);
		try {
			const { ok } = await adminResendEmail({ data: { id } });
			toast[ok ? "success" : "error"](ok ? "Email resent" : "Resend failed");
			invalidate("email_logs");
		} catch (e) {
			toast.error(e.message);
		} finally {
			setResending(null);
		}
	};
	const exportCsv = () => {
		const head = [
			"Recipient",
			"Subject",
			"Type",
			"Status",
			"Retries",
			"Error",
			"Time"
		];
		const rows = filtered.map((r) => [
			r.recipient,
			r.subject,
			r.type,
			r.status,
			r.retries,
			r.error_message ?? "",
			r.created_at
		].map((c) => `"${String(c).replace(/"/g, "\"\"")}"`).join(","));
		const blob = new Blob([[head.join(","), ...rows].join("\n")], { type: "text/csv" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `email-logs-${Date.now()}.csv`;
		a.click();
		URL.revokeObjectURL(url);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			title: "Email Center",
			subtitle: "Monitor, search and resend every email sent by the website",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => invalidate("email_logs"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "mr-1.5 h-4 w-4" }), "Refresh"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					onClick: exportCsv,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1.5 h-4 w-4" }), "Export"]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-wrap items-center gap-2",
			children: [FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setFilter(f),
				className: `rounded-full px-3.5 py-1.5 text-xs capitalize transition ${filter === f ? "bg-[#B98A3E] text-white" : "border border-black/10 text-muted-foreground hover:border-[#B98A3E]"}`,
				children: [
					f,
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "opacity-60",
						children: [
							"(",
							counts[f],
							")"
						]
					})
				]
			}, f)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative ml-auto w-full sm:w-64",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search recipient, subject...",
					className: "w-full rounded-full border border-black/10 bg-white py-2 pl-9 pr-4 text-sm outline-none focus:border-[#B98A3E]"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-2xl border border-black/5 bg-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-black/5 bg-[#FAFAF8] text-left text-[11px] uppercase tracking-wider text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: "Recipient"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: "Subject"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: "Type"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: "Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3",
							children: "Time"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 text-right",
							children: "Action"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 6,
						className: "px-4 py-10 text-center text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto h-5 w-5 animate-spin" })
					}) }),
					!isLoading && filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 6,
						className: "px-4 py-10 text-center text-muted-foreground",
						children: "No emails found."
					}) }),
					filtered.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-black/5 last:border-0 hover:bg-[#FAFAF8]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-medium",
								children: r.recipient
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3 max-w-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "line-clamp-1",
									children: r.subject
								}), r.error_message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block text-[11px] text-red-500 line-clamp-1",
									children: r.error_message
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md bg-black/5 px-2 py-0.5 text-[11px]",
									children: r.type
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: r.status }), r.retries > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "ml-1 text-[10px] text-muted-foreground",
									children: ["×", r.retries]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-xs text-muted-foreground",
								children: new Date(r.created_at).toLocaleString()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 text-right",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "sm",
									variant: "ghost",
									className: "h-8 text-[#B98A3E]",
									disabled: resending === r.id,
									onClick: () => resend(r.id),
									children: resending === r.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "mr-1 h-3.5 w-3.5" }), "Resend"] })
								})
							})
						]
					}, r.id))
				] })]
			})
		})
	] });
}
//#endregion
export { EmailCenter as component };
