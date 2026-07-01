import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as getRooms } from "./public.functions-CR6yH6DE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-XnNHgsas.js
var $$splitComponentImporter = () => import("./book-z6-x2qYN.mjs");
var $$splitNotFoundComponentImporter = () => import("./book-CGZ1WdrW.mjs");
var $$splitErrorComponentImporter = () => import("./book-BD_oJnIQ.mjs");
var Route = createFileRoute("/book")({
	validateSearch: (s) => ({ room: typeof s.room === "string" ? s.room : void 0 }),
	loader: () => getRooms(),
	head: () => ({ meta: [
		{ title: "Book Your Stay — Nice Hotel And Restaurant, Mansa" },
		{
			name: "description",
			content: "Reserve one or more luxury rooms at Nice Hotel And Restaurant, Mansa. Choose dates, guests and pay securely online."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
