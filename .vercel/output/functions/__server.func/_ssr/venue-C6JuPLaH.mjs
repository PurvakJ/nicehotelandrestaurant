import { y as site } from "./content-B6YhG0K8.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getEvents } from "./public.functions-CR6yH6DE.mjs";
import { t as breadcrumbLd } from "./seo-BZCJj_H5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/venue-C6JuPLaH.js
var $$splitComponentImporter = () => import("./venue-DWmfRv7m.mjs");
var $$splitErrorComponentImporter = () => import("./venue-D_L9Xt9s.mjs");
var Route = createFileRoute("/venue")({
	loader: async () => {
		try {
			return { dbEvents: await getEvents() };
		} catch {
			return { dbEvents: [] };
		}
	},
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	head: () => ({
		meta: [
			{ title: "Party & Event Halls — Nice Hotel And Restaurant, Mansa" },
			{
				name: "description",
				content: "Elegant party hall and meeting room for weddings, kitty parties and corporate events in Mansa. Capacity up to 100 guests with catering and decor."
			},
			{
				property: "og:title",
				content: "Party & Event Halls"
			},
			{
				property: "og:url",
				content: "/venue"
			},
			{
				property: "og:image",
				content: site.images.hall
			},
			{
				name: "twitter:image",
				content: site.images.hall
			}
		],
		links: [{
			rel: "canonical",
			href: "/venue"
		}],
		scripts: [breadcrumbLd([{
			name: "Home",
			path: "/"
		}, {
			name: "Venue",
			path: "/venue"
		}])]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
