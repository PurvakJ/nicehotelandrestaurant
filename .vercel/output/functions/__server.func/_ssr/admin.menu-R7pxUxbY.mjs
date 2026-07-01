import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { g as useRows, n as PageTitle } from "./AdminShell-DzKQdGmM.mjs";
import { n as StatusBadge, t as ResourceManager } from "./ResourceManager-BPQfwDwT.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.menu-R7pxUxbY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var categoryFields = [
	{
		name: "name",
		label: "Category Name",
		type: "text",
		required: true
	},
	{
		name: "sort_order",
		label: "Sort Order",
		type: "number",
		default: 0
	},
	{
		name: "is_active",
		label: "Active",
		type: "boolean",
		default: true
	}
];
var categoryColumns = [
	{
		name: "name",
		label: "Category"
	},
	{
		name: "sort_order",
		label: "Order"
	},
	{
		name: "is_active",
		label: "Active",
		render: (r) => r.is_active ? "Yes" : "No"
	}
];
function Menu() {
	const { data: cats = [] } = useRows("menu_categories", {
		orderBy: "sort_order",
		ascending: true
	});
	const [tab, setTab] = (0, import_react.useState)("items");
	const itemFields = [
		{
			name: "name",
			label: "Dish Name",
			type: "text",
			required: true
		},
		{
			name: "category_id",
			label: "Category",
			type: "select",
			options: cats.map((c) => ({
				value: c.id,
				label: c.name
			}))
		},
		{
			name: "price",
			label: "Price (e.g. ₹120)",
			type: "text"
		},
		{
			name: "is_veg",
			label: "Vegetarian",
			type: "boolean",
			default: true
		},
		{
			name: "is_available",
			label: "Available",
			type: "boolean",
			default: true
		},
		{
			name: "badges",
			label: "Badges",
			type: "tags"
		},
		{
			name: "sort_order",
			label: "Sort Order",
			type: "number",
			default: 0
		},
		{
			name: "image",
			label: "Dish Image",
			type: "image",
			fullWidth: true
		},
		{
			name: "description",
			label: "Description",
			type: "textarea"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		title: "Restaurant & Menu Builder",
		subtitle: "Categories, dishes, pricing & badges"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
		value: tab,
		onValueChange: setTab,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
				className: "mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "items",
					children: "Menu Items"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
					value: "categories",
					children: "Categories"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "items",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceManager, {
					table: "menu_items",
					fields: itemFields,
					columns: [
						{
							name: "name",
							label: "Dish",
							render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: r.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: cats.find((c) => c.id === r.category_id)?.name || "—"
							})] })
						},
						{
							name: "price",
							label: "Price",
							render: (r) => r.price || "—"
						},
						{
							name: "is_veg",
							label: "Type",
							render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: r.is_veg ? "text-[#2E7D32]" : "text-[#C62828]",
								children: r.is_veg ? "Veg" : "Non-veg"
							})
						},
						{
							name: "badges",
							label: "Badges",
							render: (r) => Array.isArray(r.badges) && r.badges.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: r.badges[0] }) : "—"
						},
						{
							name: "is_available",
							label: "Available",
							render: (r) => r.is_available ? "Yes" : "No"
						}
					],
					orderBy: "sort_order",
					ascending: true,
					searchKeys: ["name", "description"]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
				value: "categories",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceManager, {
					table: "menu_categories",
					fields: categoryFields,
					columns: categoryColumns,
					orderBy: "sort_order",
					ascending: true,
					searchKeys: ["name"]
				})
			})
		]
	})] });
}
//#endregion
export { Menu as component };
