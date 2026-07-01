import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as PageTitle } from "./AdminShell-DzKQdGmM.mjs";
import { t as ResourceManager } from "./ResourceManager-BPQfwDwT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.events-BqngAO62.js
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "name",
		label: "Venue Name",
		type: "text",
		required: true
	},
	{
		name: "subtitle",
		label: "Subtitle",
		type: "text"
	},
	{
		name: "badge",
		label: "Badge",
		type: "text"
	},
	{
		name: "capacity",
		label: "Capacity",
		type: "text"
	},
	{
		name: "size",
		label: "Size",
		type: "text"
	},
	{
		name: "floor",
		label: "Floor",
		type: "text"
	},
	{
		name: "price",
		label: "Price",
		type: "text"
	},
	{
		name: "amenities",
		label: "Amenities",
		type: "tags"
	},
	{
		name: "sort_order",
		label: "Display Order",
		type: "number",
		default: 0
	},
	{
		name: "coming_soon",
		label: "Coming Soon",
		type: "boolean",
		default: false
	},
	{
		name: "is_active",
		label: "Published",
		type: "boolean",
		default: true
	},
	{
		name: "image",
		label: "Image",
		type: "image",
		fullWidth: true
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
		name: "name",
		label: "Venue"
	},
	{
		name: "subtitle",
		label: "Subtitle"
	},
	{
		name: "capacity",
		label: "Capacity"
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
function Events() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		title: "Venue & Events",
		subtitle: "Manage party halls, meeting rooms and event spaces"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceManager, {
		table: "events",
		fields,
		columns,
		searchKeys: ["name", "subtitle"]
	})] });
}
//#endregion
export { Events as component };
