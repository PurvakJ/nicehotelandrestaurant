import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as AppImage } from "./AppImage-ZFFpQV3a.mjs";
import { F as FileText, _ as Pencil, h as Plus, mt as LoaderCircle, o as Trash2 } from "../_libs/lucide-react.mjs";
import { n as Input, t as Button } from "./input-CEMa6_Eh.mjs";
import { c as adminSettingsList, n as PageTitle, o as adminSettingDelete, s as adminSettingSave } from "./AdminShell-DzKQdGmM.mjs";
import { a as DialogHeader, i as DialogFooter, n as DialogContent, o as DialogTitle, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as AlertDialogDescription, c as AlertDialogTitle, d as Select, f as SelectContent, g as Textarea, h as SelectValue, i as AlertDialogContent, l as AlertDialogTrigger, m as SelectTrigger, n as AlertDialogAction, o as AlertDialogFooter, p as SelectItem, r as AlertDialogCancel, s as AlertDialogHeader, t as AlertDialog, u as ImageUpload } from "./ImageUpload-0TcWixhv.mjs";
import { t as Label } from "./label-DBD1bRRP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.cms-Gf079ASL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Cms() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [editingKey, setEditingKey] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)({
		key: "",
		label: "",
		type: "text",
		value: ""
	});
	const load = async () => {
		setLoading(true);
		try {
			setRows(await adminSettingsList());
		} catch (e) {
			toast.error(e.message);
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		load();
	}, []);
	const openNew = () => {
		setEditingKey(null);
		setForm({
			key: "",
			label: "",
			type: "text",
			value: ""
		});
		setOpen(true);
	};
	const openEdit = (b) => {
		setEditingKey(b.key);
		setForm({
			key: b.key,
			label: b.value?.label ?? "",
			type: b.value?.type ?? "text",
			value: b.value?.value ?? ""
		});
		setOpen(true);
	};
	const save = async () => {
		if (!form.key.trim()) {
			toast.error("Key is required");
			return;
		}
		setSaving(true);
		try {
			await adminSettingSave({ data: {
				key: form.key.trim(),
				value: {
					label: form.label,
					type: form.type,
					value: form.value
				}
			} });
			toast.success("Saved");
			setOpen(false);
			load();
		} catch (e) {
			toast.error(e.message);
		} finally {
			setSaving(false);
		}
	};
	const remove = async (key) => {
		try {
			await adminSettingDelete({ data: { key } });
			toast.success("Deleted");
			load();
		} catch (e) {
			toast.error(e.message);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			title: "Site CMS",
			subtitle: "Create & manage reusable site content blocks — text & images, saved instantly"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: openNew,
				className: "bg-[#B98A3E] text-white hover:bg-[#a2772f]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-1.5 h-4 w-4" }), " New Block"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-black/5 bg-[#FAFAF8] text-left text-xs uppercase tracking-wider text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Content Block"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Type"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: "Value"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 text-right font-medium",
							children: "Actions"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
					loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 4,
						className: "px-4 py-12 text-center text-muted-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mx-auto h-5 w-5 animate-spin" })
					}) }),
					!loading && rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						colSpan: 4,
						className: "px-4 py-12 text-center text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "mx-auto mb-2 h-5 w-5" }), "No content blocks yet. Create your first one."]
					}) }),
					rows.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-black/5 last:border-0 hover:bg-[#FAFAF8]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: b.value?.label || b.key
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: b.key
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 capitalize",
								children: b.value?.type ?? "text"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: b.value?.type === "image" && b.value?.value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppImage, {
									src: b.value.value,
									alt: b.key,
									className: "h-12 w-16 rounded object-cover"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "line-clamp-1 max-w-xs text-xs text-muted-foreground",
									children: b.value?.value || "—"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-end gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "icon",
										variant: "ghost",
										className: "h-8 w-8",
										onClick: () => openEdit(b),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTrigger, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											size: "icon",
											variant: "ghost",
											className: "h-8 w-8 text-[#C62828]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: "Delete this block?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: "This action cannot be undone." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: "Cancel" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
										className: "bg-[#C62828] hover:bg-[#a51f1f]",
										onClick: () => remove(b.key),
										children: "Delete"
									})] })] })] })]
								})
							})
						]
					}, b.key))
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open,
			onOpenChange: setOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "sm:max-w-lg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [editingKey ? "Edit" : "New", " content block"] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "mb-1.5 block text-xs font-medium",
								children: "Key (unique id)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.key,
								disabled: !!editingKey,
								placeholder: "e.g. home_hero_title",
								onChange: (e) => setForm({
									...form,
									key: e.target.value
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "mb-1.5 block text-xs font-medium",
								children: "Label"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.label,
								placeholder: "Friendly name",
								onChange: (e) => setForm({
									...form,
									label: e.target.value
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "mb-1.5 block text-xs font-medium",
								children: "Type"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: form.type,
								onValueChange: (v) => setForm({
									...form,
									type: v,
									value: ""
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "text",
									children: "Text"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: "image",
									children: "Image"
								})] })]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								className: "mb-1.5 block text-xs font-medium",
								children: "Value"
							}), form.type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageUpload, {
								value: form.value,
								onChange: (url) => setForm({
									...form,
									value: url
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: form.value,
								onChange: (e) => setForm({
									...form,
									value: e.target.value
								})
							})] })
						]
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
//#endregion
export { Cms as component };
