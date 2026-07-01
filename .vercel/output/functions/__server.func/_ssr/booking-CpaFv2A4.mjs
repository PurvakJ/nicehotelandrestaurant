import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/booking-CpaFv2A4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BookingCtx = (0, import_react.createContext)({ open: () => {} });
var useBooking = () => (0, import_react.useContext)(BookingCtx);
function BookingProvider({ children }) {
	const navigate = useNavigate();
	const open = (room) => {
		navigate({
			to: "/book",
			search: room ? { room } : {}
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingCtx.Provider, {
		value: { open },
		children
	});
}
//#endregion
export { useBooking as n, BookingProvider as t };
