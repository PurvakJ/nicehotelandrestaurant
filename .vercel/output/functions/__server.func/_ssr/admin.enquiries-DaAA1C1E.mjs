import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { Y as Check, ot as Ban } from "../_libs/lucide-react.mjs";
import { t as Button } from "./input-CEMa6_Eh.mjs";
import { f as setStatus, n as PageTitle } from "./AdminShell-DzKQdGmM.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as StatusBadge, t as ResourceManager } from "./ResourceManager-BPQfwDwT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.enquiries-DaAA1C1E.js
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "name",
		label: "Name",
		type: "text",
		required: true
	},
	{
		name: "email",
		label: "Email",
		type: "text"
	},
	{
		name: "phone",
		label: "Phone",
		type: "text"
	},
	{
		name: "subject",
		label: "Subject",
		type: "text"
	},
	{
		name: "status",
		label: "Status",
		type: "select",
		options: [
			"pending",
			"resolved",
			"spam"
		],
		default: "pending"
	},
	{
		name: "message",
		label: "Message",
		type: "textarea"
	},
	{
		name: "notes",
		label: "Internal Notes",
		type: "textarea"
	}
];
var columns = [
	{
		name: "name",
		label: "From",
		render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium",
			children: r.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: r.email || r.phone
		})] })
	},
	{
		name: "subject",
		label: "Subject"
	},
	{
		name: "message",
		label: "Message",
		render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "line-clamp-2 max-w-xs text-xs text-muted-foreground",
			children: r.message
		})
	},
	{
		name: "status",
		label: "Status",
		render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: r.status })
	}
];
function Enquiries() {
	const quick = async (id, status, reload) => {
		try {
			await setStatus("enquiries", id, { status });
			toast.success(`Marked ${status}`);
			reload();
		} catch (e) {
			toast.error(e.message);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		title: "Contact & Enquiries",
		subtitle: "Guest messages from the website"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceManager, {
		table: "enquiries",
		fields,
		columns,
		searchKeys: [
			"name",
			"email",
			"subject",
			"message"
		],
		rowActions: (row, reload) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "icon",
			variant: "ghost",
			className: "h-8 w-8 text-[#2E7D32]",
			title: "Resolve",
			onClick: () => quick(row.id, "resolved", reload),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			size: "icon",
			variant: "ghost",
			className: "h-8 w-8 text-[#C62828]",
			title: "Spam",
			onClick: () => quick(row.id, "spam", reload),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ban, { className: "h-4 w-4" })
		})] })
	})] });
}
//#endregion
export { Enquiries as component };
