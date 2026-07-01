import { y as site } from "./content-B6YhG0K8.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as getServices, r as getOffers } from "./public.functions-CR6yH6DE.mjs";
import { t as breadcrumbLd } from "./seo-BZCJj_H5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-Ck0JVkZc.js
var $$splitComponentImporter = () => import("./services-BwMg3caD.mjs");
var $$splitErrorComponentImporter = () => import("./services-7KG9FA_V.mjs");
var Route = createFileRoute("/services")({
	loader: async () => {
		try {
			const [dbServices, dbOffers] = await Promise.all([getServices(), getOffers()]);
			return {
				dbServices,
				dbOffers
			};
		} catch {
			return {
				dbServices: [],
				dbOffers: []
			};
		}
	},
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	head: () => ({
		meta: [
			{ title: "Services & Amenities — Nice Hotel And Restaurant, Mansa" },
			{
				name: "description",
				content: "Premium services at Nice Hotel And Restaurant, Mansa — luxury rooms, event venues, fine dining, valet parking, free WiFi, housekeeping and 24/7 concierge."
			},
			{
				property: "og:title",
				content: "Services & Amenities"
			},
			{
				property: "og:url",
				content: "/services"
			},
			{
				property: "og:image",
				content: site.images.meeting
			},
			{
				name: "twitter:image",
				content: site.images.meeting
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}],
		scripts: [breadcrumbLd([{
			name: "Home",
			path: "/"
		}, {
			name: "Services",
			path: "/services"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
