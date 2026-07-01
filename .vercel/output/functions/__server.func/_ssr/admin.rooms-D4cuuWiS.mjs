import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as PageTitle } from "./AdminShell-DzKQdGmM.mjs";
import { n as StatusBadge, t as ResourceManager } from "./ResourceManager-BPQfwDwT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.rooms-D4cuuWiS.js
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "name",
		label: "Room Name",
		type: "text",
		required: true
	},
	{
		name: "room_number",
		label: "Room Number",
		type: "text"
	},
	{
		name: "category",
		label: "Category",
		type: "select",
		options: [
			"Executive",
			"Deluxe",
			"Suite",
			"Standard"
		]
	},
	{
		name: "price",
		label: "Price / night (₹)",
		type: "number"
	},
	{
		name: "weekend_price",
		label: "Weekend Price (₹)",
		type: "number"
	},
	{
		name: "capacity",
		label: "Capacity",
		type: "number",
		default: 2
	},
	{
		name: "floor",
		label: "Floor",
		type: "text"
	},
	{
		name: "status",
		label: "Status",
		type: "select",
		options: [
			"available",
			"occupied",
			"reserved",
			"cleaning",
			"maintenance",
			"blocked"
		],
		default: "available"
	},
	{
		name: "is_active",
		label: "Active (visible)",
		type: "boolean",
		default: true
	},
	{
		name: "sort_order",
		label: "Sort Order",
		type: "number",
		default: 0
	},
	{
		name: "amenities",
		label: "Amenities",
		type: "tags",
		fullWidth: true
	},
	{
		name: "images",
		label: "Room Image",
		type: "imagelist",
		fullWidth: true
	},
	{
		name: "description",
		label: "Description",
		type: "textarea"
	}
];
var columns = [
	{
		name: "name",
		label: "Room",
		render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium",
			children: r.name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-xs text-muted-foreground",
			children: [
				r.category || "—",
				" · #",
				r.room_number || "—"
			]
		})] })
	},
	{
		name: "price",
		label: "Price",
		render: (r) => r.price ? `₹${Number(r.price).toLocaleString("en-IN")}` : "—"
	},
	{
		name: "capacity",
		label: "Cap."
	},
	{
		name: "status",
		label: "Status",
		render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: r.status })
	},
	{
		name: "is_active",
		label: "Active",
		render: (r) => r.is_active ? "Yes" : "No"
	}
];
function Rooms() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		title: "Room Management",
		subtitle: "Inventory, pricing, status & SEO"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceManager, {
		table: "rooms",
		fields,
		columns,
		orderBy: "sort_order",
		ascending: true,
		searchKeys: [
			"name",
			"category",
			"room_number"
		]
	})] });
}
//#endregion
export { Rooms as component };
