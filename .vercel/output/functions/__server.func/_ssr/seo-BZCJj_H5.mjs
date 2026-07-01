//#region node_modules/.nitro/vite/services/ssr/assets/seo-BZCJj_H5.js
var SITE_URL = "https://www.nicehotelandrestaurant.online";
/** JSON-LD BreadcrumbList script entry for a leaf route. */
function breadcrumbLd(trail) {
	return {
		type: "application/ld+json",
		children: JSON.stringify({
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: trail.map((t, i) => ({
				"@type": "ListItem",
				position: i + 1,
				name: t.name,
				item: `${SITE_URL}${t.path === "/" ? "" : t.path}`
			}))
		})
	};
}
//#endregion
export { breadcrumbLd as t };
