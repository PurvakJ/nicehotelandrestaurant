import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as PageTitle } from "./AdminShell-DzKQdGmM.mjs";
import { t as ResourceManager } from "./ResourceManager-BPQfwDwT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.offers-CGunOH_E.js
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "title",
		label: "Title",
		type: "text",
		required: true
	},
	{
		name: "code",
		label: "Promo Code",
		type: "text"
	},
	{
		name: "type",
		label: "Type",
		type: "select",
		options: [
			"room",
			"restaurant",
			"homepage",
			"seasonal",
			"flash"
		]
	},
	{
		name: "discount",
		label: "Discount (%/₹)",
		type: "text"
	},
	{
		name: "starts_at",
		label: "Starts",
		type: "date"
	},
	{
		name: "ends_at",
		label: "Expires",
		type: "date"
	},
	{
		name: "is_active",
		label: "Published",
		type: "boolean",
		default: true
	},
	{
		name: "image",
		label: "Banner Image",
		type: "image",
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
		name: "title",
		label: "Offer"
	},
	{
		name: "code",
		label: "Code"
	},
	{
		name: "type",
		label: "Type",
		render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "capitalize",
			children: r.type
		})
	},
	{
		name: "discount",
		label: "Discount"
	},
	{
		name: "ends_at",
		label: "Expires"
	},
	{
		name: "is_active",
		label: "Live",
		render: (r) => r.is_active ? "Yes" : "No"
	}
];
function Offers() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		title: "Offer Management",
		subtitle: "Coupons, banners, flash sales & seasonal packages"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceManager, {
		table: "offers",
		fields,
		columns,
		searchKeys: ["title", "code"]
	})] });
}
//#endregion
export { Offers as component };
