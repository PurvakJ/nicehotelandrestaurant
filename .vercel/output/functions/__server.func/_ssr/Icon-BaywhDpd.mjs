import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { A as KeyRound, C as MapPin, O as Leaf, P as Handshake, U as Coffee, W as Clock, Z as Car, dt as Accessibility, et as Building2, ft as UtensilsCrossed, ht as House, i as Users, it as Bed, l as Star, n as Wifi, pt as Sparkles, r as Wallet, rt as Bell, s as Target, st as Award, tt as Briefcase, u as Shield } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Icon-BaywhDpd.js
var import_jsx_runtime = require_jsx_runtime();
var map = {
	bed: Bed,
	utensils: UtensilsCrossed,
	building: Building2,
	star: Star,
	award: Award,
	handshake: Handshake,
	"map-pin": MapPin,
	wallet: Wallet,
	target: Target,
	briefcase: Briefcase,
	sparkles: Sparkles,
	car: Car,
	wifi: Wifi,
	bell: Bell,
	shield: Shield,
	accessibility: Accessibility,
	coffee: Coffee,
	clock: Clock,
	home: House,
	leaf: Leaf,
	key: KeyRound,
	users: Users
};
function Icon({ name, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(map[name] ?? Sparkles, {
		className,
		strokeWidth: 1.5,
		"aria-hidden": true
	});
}
//#endregion
export { Icon as t };
