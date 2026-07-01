import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { _ as Pencil, h as Plus, mt as LoaderCircle, o as Trash2, p as Search } from "../_libs/lucide-react.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { n as Input, t as Button } from "./input-CEMa6_Eh.mjs";
import { d as deleteRow, g as useRows, h as useInvalidate, m as upsertRow } from "./AdminShell-DzKQdGmM.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as AlertDialogDescription, c as AlertDialogTitle, d as Select, f as SelectContent, g as Textarea, h as SelectValue, i as AlertDialogContent, l as AlertDialogTrigger, m as SelectTrigger, n as AlertDialogAction, o as AlertDialogFooter, p as SelectItem, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog, u as ImageUpload } from "./ImageUpload-0TcWixhv.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ResourceManager-BPQfwDwT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
function emptyForm(fields) {
	const o = {};
	for (const f of fields) o[f.name] = f.default ?? (f.type === "boolean" ? false : f.type === "tags" ? [] : "");
	return o;
}
function ResourceManager({ table, columns, fields, orderBy = "created_at", ascending = false, searchKeys = [], rowActions, canEdit = true }) {
	const { data = [], isLoading } = useRows(table, {
		orderBy,
		ascending
	});
	const invalidate = useInvalidate();
	const reload = () => invalidate(table);
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)(emptyForm(fields));
	const [saving, setSaving] = (0, import_react.useState)(false);
	const filtered = (0, import_react.useMemo)(() => {
		if (!q) return data;
		const lc = q.toLowerCase();
		return data.filter((row) => searchKeys.some((k) => String(row[k] ?? "").toLowerCase().includes(lc)));
	}, [
		data,
		q,
		searchKeys
	]);
	const openNew = () => {
		setEditing(null);
		setForm(emptyForm(fields));
		setOpen(true);
	};
	const openEdit = (row) => {
		const f = {};
		for (const fl of fields) {
			const v = row[fl.name];
			f[fl.name] = fl.type === "datetime" && v ? String(v).slice(0, 16) : fl.type === "date" && v ? String(v).slice(0, 10) : fl.type === "imagelist" ? Array.isArray(v) ? v[0] ?? "" : v ?? "" : v ?? (fl.type === "tags" ? [] : fl.type === "boolean" ? false : "");
		}
		setEditing(row);
		setForm(f);
		setOpen(true);
	};
	const save = async () => {
		setSaving(true);
		try {
			const payload = {};
			for (const f of fields) {
				let v = form[f.name];
				if (f.type === "number") v = v === "" || v === null ? null : Number(v);
				if (f.type === "tags") v = Array.isArray(v) ? v : String(v || "").split(",").map((s) => s.trim()).filter(Boolean);
				if (f.type === "imagelist") v = v ? [v] : [];
				if ((f.type === "date" || f.type === "datetime") && v === "") v = null;
				payload[f.name] = v;
			}
			await upsertRow(table, payload, editing?.id);
			toast.success(editing ? "Updated" : "Created");
			setOpen(false);
			reload();
		} catch (e) {
			toast.error(e.message ?? "Failed to save");
		} finally {
			setSaving(false);
		}
	};
	const remove = async (id) => {
		try {
			await deleteRow(table, id);
			toast.success("Deleted");
			reload();
		} catch (e) {
			toast.error(e.message ?? "Failed to delete");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
			children: [searchKeys.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full sm:max-w-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: q,
					onChange: (e) => setQ(e.target.value),
					placeholder: "Search...",
					className: "pl-9"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}), canEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: openNew,
				className: "bg-[#B98A3E] text-white hover:bg-[#a2772f]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1.5 h-4 w-4" }), " New"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-black/5 bg-[#FAFAF8] text-left text-xs uppercase tracking-wider text-muted-foreground",
						children: [columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "whitespace-nowrap px-4 py-3 font-medium",
							children: c.label
						}, c.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 text-right font-medium",
							children: "Actions"
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
						isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: columns.length + 1,
							className: "px-4 py-12 text-center text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto h-5 w-5 animate-spin" })
						}) }),
						!isLoading && filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: columns.length + 1,
							className: "px-4 py-12 text-center text-muted-foreground",
							children: "No records yet."
						}) }),
						filtered.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-black/5 last:border-0 hover:bg-[#FAFAF8]",
							children: [columns.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 align-top",
								children: c.render ? c.render(row) : String(row[c.name] ?? "—")
							}, c.name)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-end gap-1",
									children: [rowActions?.(row, reload), canEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										className: "h-8 w-8",
										onClick: () => openEdit(row),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "icon",
											variant: "ghost",
											className: "h-8 w-8 text-[#C62828]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Delete this record?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "This action cannot be undone." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
										className: "bg-[#C62828] hover:bg-[#a51f1f]",
										onClick: () => remove(row.id),
										children: "Delete"
									})] })] })] })] })]
								})
							})]
						}, row.id))
					] })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "max-h-[90vh] overflow-y-auto sm:max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [editing ? "Edit" : "New", " record"] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
						children: fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: f.fullWidth || f.type === "textarea" ? "sm:col-span-2" : "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "mb-1.5 block text-xs font-medium",
								children: f.label
							}), f.type === "textarea" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: String(form[f.name] ?? ""),
								placeholder: f.placeholder,
								onChange: (e) => setForm({
									...form,
									[f.name]: e.target.value
								})
							}) : f.type === "boolean" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
									checked: !!form[f.name],
									onCheckedChange: (v) => setForm({
										...form,
										[f.name]: v
									})
								})
							}) : f.type === "select" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: String(form[f.name] ?? ""),
								onValueChange: (v) => setForm({
									...form,
									[f.name]: v
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Select" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: (f.options ?? []).map((o) => {
									const val = typeof o === "string" ? o : o.value;
									const lbl = typeof o === "string" ? o : o.label;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: val || "_none",
										children: lbl || "—"
									}, val || "_");
								}) })]
							}) : f.type === "tags" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: Array.isArray(form[f.name]) ? form[f.name].join(", ") : String(form[f.name] ?? ""),
								placeholder: "Comma separated",
								onChange: (e) => setForm({
									...form,
									[f.name]: e.target.value
								})
							}) : f.type === "image" || f.type === "imagelist" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUpload, {
								value: String(form[f.name] ?? ""),
								onChange: (url) => setForm({
									...form,
									[f.name]: url
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: f.type === "number" ? "number" : f.type === "date" ? "date" : f.type === "datetime" ? "datetime-local" : "text",
								value: String(form[f.name] ?? ""),
								placeholder: f.placeholder,
								onChange: (e) => setForm({
									...form,
									[f.name]: e.target.value
								})
							})]
						}, f.name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setOpen(false),
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "bg-[#B98A3E] text-white hover:bg-[#a2772f]",
						onClick: save,
						disabled: saving,
						children: [saving && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-1.5 h-4 w-4 animate-spin" }), "Save"]
					})] })
				]
			})
		})
	] });
}
function StatusBadge({ value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${{
			confirmed: "bg-[#2E7D32]/10 text-[#2E7D32]",
			completed: "bg-[#2E7D32]/10 text-[#2E7D32]",
			approved: "bg-[#2E7D32]/10 text-[#2E7D32]",
			resolved: "bg-[#2E7D32]/10 text-[#2E7D32]",
			paid: "bg-[#2E7D32]/10 text-[#2E7D32]",
			available: "bg-[#2E7D32]/10 text-[#2E7D32]",
			active: "bg-[#2E7D32]/10 text-[#2E7D32]",
			pending: "bg-[#F9A825]/15 text-[#a37800]",
			unpaid: "bg-[#F9A825]/15 text-[#a37800]",
			cleaning: "bg-[#F9A825]/15 text-[#a37800]",
			reserved: "bg-[#F9A825]/15 text-[#a37800]",
			checked_in: "bg-[#1565C0]/10 text-[#1565C0]",
			checked_out: "bg-[#6A1B9A]/10 text-[#6A1B9A]",
			cancelled: "bg-[#C62828]/10 text-[#C62828]",
			rejected: "bg-[#C62828]/10 text-[#C62828]",
			spam: "bg-[#C62828]/10 text-[#C62828]",
			maintenance: "bg-[#C62828]/10 text-[#C62828]",
			blocked: "bg-[#C62828]/10 text-[#C62828]",
			occupied: "bg-[#C62828]/10 text-[#C62828]"
		}[value] ?? "bg-black/5 text-muted-foreground"}`,
		children: String(value ?? "").replace(/_/g, " ")
	});
}
//#endregion
export { StatusBadge as n, ResourceManager as t };
