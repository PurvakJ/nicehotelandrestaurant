import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { E as LogIn, T as LogOut, Y as Check, at as BedDouble, mt as LoaderCircle, t as X } from "../_libs/lucide-react.mjs";
import { t as Button } from "./input-CEMa6_Eh.mjs";
import { f as setStatus, i as adminBookingRooms, n as PageTitle, r as adminBookingRoomUpdate } from "./AdminShell-DzKQdGmM.mjs";
import { a as DialogHeader, n as DialogContent, o as DialogTitle, s as DialogTrigger, t as Dialog } from "./dialog-DIo89e4g.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as StatusBadge, t as ResourceManager } from "./ResourceManager-BPQfwDwT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.bookings-XgGn_Au2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BookingRoomsCell({ bookingId, fallback }) {
	const [rows, setRows] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const load = () => {
		adminBookingRooms({ data: { bookingId } }).then((r) => setRows(r)).catch(() => setRows([]));
	};
	(0, import_react.useEffect)(() => {
		load();
	}, [bookingId]);
	const summary = rows && rows.length ? rows.map((r) => `${r.room_type} ×${r.quantity}`).join(", ") : fallback || "—";
	const saveNumber = async (id, room_number) => {
		setSaving(true);
		try {
			await adminBookingRoomUpdate({ data: {
				id,
				values: { room_number }
			} });
			toast.success("Room number saved");
		} catch (e) {
			toast.error(e.message);
		} finally {
			setSaving(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: (o) => {
			setOpen(o);
			if (o) load();
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "text-left text-xs hover:text-gold",
				title: "Manage rooms",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "line-clamp-2",
					children: summary
				}), rows && rows.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[10px] text-muted-foreground",
					children: [
						" (",
						rows.length,
						" types)"
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "max-w-lg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "h-4 w-4" }), " Rooms in this booking"]
			}) }), !rows ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 py-6 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), " Loading…"]
			}) : rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "py-4 text-sm text-muted-foreground",
				children: [
					"This is a single-room booking (",
					fallback || "—",
					"). No detailed room lines recorded."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3",
				children: [
					rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border p-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium",
									children: [
										r.room_type,
										" ×",
										r.quantity
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-gold",
									children: ["₹", Number(r.price).toLocaleString("en-IN")]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: [
									r.adults,
									" adult",
									r.adults > 1 ? "s" : "",
									r.children ? `, ${r.children} child` : "",
									r.extra_bed ? ", extra bed" : "",
									r.notes ? ` · ${r.notes}` : ""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs text-muted-foreground",
									children: "Room no."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									defaultValue: r.room_number ?? "",
									onBlur: (e) => e.target.value !== (r.room_number ?? "") && saveNumber(r.id, e.target.value),
									placeholder: "e.g. 204",
									className: "w-28 rounded border px-2 py-1 text-xs"
								})]
							})
						]
					}, r.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground",
						children: saving ? "Saving…" : "Room numbers save automatically when you click away."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "outline",
							onClick: () => window.print(),
							children: "Print"
						})
					})
				]
			})]
		})]
	});
}
var fields = [
	{
		name: "guest_name",
		label: "Guest Name",
		type: "text",
		required: true
	},
	{
		name: "guest_email",
		label: "Email",
		type: "text"
	},
	{
		name: "guest_phone",
		label: "Phone",
		type: "text"
	},
	{
		name: "room_type",
		label: "Room / Type",
		type: "text"
	},
	{
		name: "check_in",
		label: "Check-in",
		type: "date"
	},
	{
		name: "check_out",
		label: "Check-out",
		type: "date"
	},
	{
		name: "guests",
		label: "Guests",
		type: "number",
		default: 1
	},
	{
		name: "amount",
		label: "Amount (₹)",
		type: "number"
	},
	{
		name: "status",
		label: "Status",
		type: "select",
		options: [
			"pending",
			"confirmed",
			"checked_in",
			"checked_out",
			"completed",
			"cancelled"
		],
		default: "pending"
	},
	{
		name: "payment_status",
		label: "Payment",
		type: "select",
		options: [
			"unpaid",
			"paid",
			"refunded"
		],
		default: "unpaid"
	},
	{
		name: "source",
		label: "Source",
		type: "select",
		options: [
			"website",
			"walk-in",
			"phone",
			"online"
		],
		default: "website"
	},
	{
		name: "special_requests",
		label: "Special Requests",
		type: "textarea"
	},
	{
		name: "notes",
		label: "Internal Notes",
		type: "textarea"
	}
];
var columns = [
	{
		name: "guest_name",
		label: "Guest",
		render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium",
			children: r.guest_name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted-foreground",
			children: r.guest_phone || r.guest_email || "—"
		})] })
	},
	{
		name: "room_type",
		label: "Rooms",
		render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingRoomsCell, {
			bookingId: r.id,
			fallback: r.room_type
		})
	},
	{
		name: "check_in",
		label: "Dates",
		render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				r.check_in || "—",
				" → ",
				r.check_out || "—"
			] }), nightsBetween(r.check_in, r.check_out) > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-muted-foreground",
				children: [
					nightsBetween(r.check_in, r.check_out),
					" night",
					nightsBetween(r.check_in, r.check_out) > 1 ? "s" : ""
				]
			})]
		})
	},
	{
		name: "amount",
		label: "Amount",
		render: (r) => r.amount ? `₹${Number(r.amount).toLocaleString("en-IN")}` : "—"
	},
	{
		name: "payment_status",
		label: "Payment",
		render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: r.payment_status })
	},
	{
		name: "status",
		label: "Status",
		render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: r.status })
	},
	{
		name: "source",
		label: "Source",
		render: (r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs capitalize",
			children: r.source
		})
	}
];
function nightsBetween(a, b) {
	if (!a || !b) return 0;
	const n = Math.round((new Date(b).getTime() - new Date(a).getTime()) / 864e5);
	return n > 0 ? n : 0;
}
function Bookings() {
	const quick = async (id, status, reload) => {
		try {
			await setStatus("bookings", id, { status });
			toast.success(`Marked ${status}`);
			reload();
		} catch (e) {
			toast.error(e.message);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
		title: "Booking Management",
		subtitle: "Walk-ins, online & website reservations"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResourceManager, {
		table: "bookings",
		fields,
		columns,
		searchKeys: [
			"guest_name",
			"guest_email",
			"guest_phone",
			"room_type"
		],
		rowActions: (row, reload) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			row.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon",
				variant: "ghost",
				className: "h-8 w-8 text-[#2E7D32]",
				title: "Confirm",
				onClick: () => quick(row.id, "confirmed", reload),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
			}),
			(row.status === "confirmed" || row.status === "pending") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon",
				variant: "ghost",
				className: "h-8 w-8 text-[#1565C0]",
				title: "Check in",
				onClick: () => quick(row.id, "checked_in", reload),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { className: "h-4 w-4" })
			}),
			row.status === "checked_in" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon",
				variant: "ghost",
				className: "h-8 w-8 text-[#6A1B9A]",
				title: "Check out",
				onClick: () => quick(row.id, "checked_out", reload),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" })
			}),
			row.status !== "cancelled" && row.status !== "checked_out" && row.status !== "completed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "icon",
				variant: "ghost",
				className: "h-8 w-8 text-[#C62828]",
				title: "Cancel",
				onClick: () => quick(row.id, "cancelled", reload),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
			})
		] })
	})] });
}
//#endregion
export { Bookings as component };
