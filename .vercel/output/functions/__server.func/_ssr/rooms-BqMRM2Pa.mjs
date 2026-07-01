import { y as site } from "./content-B6YhG0K8.mjs";
import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getRooms, i as getRoomAvailability } from "./public.functions-CR6yH6DE.mjs";
import { t as breadcrumbLd } from "./seo-BZCJj_H5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rooms-BqMRM2Pa.js
var $$splitComponentImporter = () => import("./rooms-CNLcHlDG.mjs");
var $$splitErrorComponentImporter = () => import("./rooms-9bFxZO9z.mjs");
var Route = createFileRoute("/rooms")({
	loader: async () => {
		try {
			const [dbRooms, availability] = await Promise.all([getRooms(), getRoomAvailability()]);
			return {
				dbRooms,
				availability
			};
		} catch {
			return {
				dbRooms: [],
				availability: []
			};
		}
	},
	head: () => ({
		meta: [
			{ title: "Luxury Rooms & Suites — Nice Hotel And Restaurant, Mansa" },
			{
				name: "description",
				content: "Executive and Deluxe suites at Nice Hotel And Restaurant, Mansa. Premium amenities, king beds, smart TVs and city views from ₹1500/night."
			},
			{
				property: "og:title",
				content: "Luxury Rooms & Suites"
			},
			{
				property: "og:url",
				content: "/rooms"
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
			href: "/rooms"
		}],
		scripts: [breadcrumbLd([{
			name: "Home",
			path: "/"
		}, {
			name: "Rooms",
			path: "/rooms"
		}])]
	}),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
