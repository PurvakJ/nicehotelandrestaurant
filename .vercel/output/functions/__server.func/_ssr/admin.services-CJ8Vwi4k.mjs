import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as PageTitle } from "./AdminShell-DzKQdGmM.mjs";
import { t as ResourceManager } from "./ResourceManager-BPQfwDwT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.services-CJ8Vwi4k.js
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "title",
		label: "Service Name",
		type: "text",
		required: true
	},
	{
		name: "group_name",
		label: "Group",
		type: "select",
		options: [
			"Accommodation & Events",
			"Amenities & Services",
			"Dining & Bars"
		],
		default: "Amenities & Services"
	},
	{
		name: "icon",
		label: "Icon",
		type: "select",
		options: [
			"bed",
			"building",
			"car",
			"wifi",
			"sparkles",
			"bell",
			"utensils",
			"shield",
			"accessibility",
			"star",
			"home"
		],
		default: "sparkles"
	},
	{
		name: "tags",
		label: "Tags",
		type: "tags"
	},
	{
		name: "sort_order",
		label: "Display Order",
		type: "number",
		default: 0
	},
	{
		name: "is_active",
		label: "Published",
		type: "boolean",
		default: true
	},
	{
		name: "description",
		label: "Description",
		type: "textarea",
		fullWidth: true
	}
];
var columns = [
	{
		name: "title",
		label: "Service"
	},
	{
		name: "group_name",
		label: "Group"
	},
	{
		name: "sort_order",
		label: "Order"
	},
	{
		name: "is_active",
		label: "Live",
		render: (r) => r.is_active ? "Yes" : "No"
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		title: "Hotel Services",
		subtitle: "Manage amenities, dining and the services shown on the site"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceManager, {
		table: "services",
		fields,
		columns,
		searchKeys: ["title", "group_name"]
	})] });
}
//#endregion
export { Services as component };
