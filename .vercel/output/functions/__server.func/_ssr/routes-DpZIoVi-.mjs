import { y as site } from "./content-B6YhG0K8.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getRooms } from "./public.functions-CR6yH6DE.mjs";
import { t as breadcrumbLd } from "./seo-BZCJj_H5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DpZIoVi-.js
var $$splitComponentImporter = () => import("./routes-BLun2bVL.mjs");
var $$splitNotFoundComponentImporter = () => import("./routes-DK9U60h4.mjs");
var $$splitErrorComponentImporter = () => import("./routes-BYWkeHdz.mjs");
var Route = createFileRoute("/")({
	loader: async () => {
		try {
			return { dbRooms: await getRooms() };
		} catch {
			return { dbRooms: [] };
		}
	},
	head: () => ({
		meta: [
			{ title: "Nice Hotel And Restaurant — Luxury Hotel & Fine Dining in Mansa, Punjab" },
			{
				name: "description",
				content: "Welcome to Nice Hotel And Restaurant in Mansa, Punjab — 9 luxury rooms, a fine dining restaurant and an elegant party hall. Where luxury meets comfort."
			},
			{
				property: "og:title",
				content: "Nice Hotel And Restaurant"
			},
			{
				property: "og:description",
				content: "Where luxury meets comfort — world-class hospitality in Mansa, Punjab."
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:image",
				content: site.images.executive
			},
			{
				name: "twitter:image",
				content: site.images.executive
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [breadcrumbLd([{
			name: "Home",
			path: "/"
		}])]
	}),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
