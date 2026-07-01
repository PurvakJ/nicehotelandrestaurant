import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { $ as CalendarCheck, B as DoorOpen, E as LogIn, M as IndianRupee, T as LogOut, W as Clock, at as BedDouble, ft as UtensilsCrossed, ut as Activity, y as MessageSquare } from "../_libs/lucide-react.mjs";
import { g as useRows, n as PageTitle } from "./AdminShell-DzKQdGmM.mjs";
import { n as StatusBadge } from "./ResourceManager-BPQfwDwT.mjs";
import { a as CartesianGrid, c as Tooltip, i as Area, n as BarChart, o as Bar, r as XAxis, s as ResponsiveContainer, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-BHxFBGBD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var todayStr = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
function StatCard({ icon: Icon, label, value, tone = "#B98A3E" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:shadow-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex h-9 w-9 items-center justify-center rounded-xl",
				style: {
					background: `${tone}1a`,
					color: tone
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-[18px] w-[18px]" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 font-display text-3xl text-[#161616]",
			children: value
		})]
	});
}
function Dashboard() {
	const { data: bookings = [] } = useRows("bookings");
	const { data: rooms = [] } = useRows("rooms");
	const { data: enquiries = [] } = useRows("enquiries");
	const { data: menuItems = [] } = useRows("menu_items");
	const { data: activity = [] } = useRows("notifications", {
		orderBy: "created_at",
		ascending: false
	});
	const today = todayStr();
	const stats = (0, import_react.useMemo)(() => {
		return {
			checkins: bookings.filter((b) => b.check_in === today).length,
			checkouts: bookings.filter((b) => b.check_out === today).length,
			todays: bookings.filter((b) => (b.created_at ?? "").slice(0, 10) === today).length,
			pending: bookings.filter((b) => b.status === "pending").length,
			occupied: rooms.filter((r) => r.status === "occupied").length,
			available: rooms.filter((r) => r.status === "available").length,
			revenue: bookings.filter((b) => b.payment_status === "paid").reduce((s, b) => s + Number(b.amount || 0), 0)
		};
	}, [
		bookings,
		rooms,
		today
	]);
	const trend = (0, import_react.useMemo)(() => {
		const days = Array.from({ length: 7 }).map((_, i) => {
			const d = /* @__PURE__ */ new Date();
			d.setDate(d.getDate() - (6 - i));
			const key = d.toISOString().slice(0, 10);
			return {
				day: d.toLocaleDateString("en", { weekday: "short" }),
				key,
				bookings: 0,
				revenue: 0
			};
		});
		for (const b of bookings) {
			const k = (b.created_at ?? "").slice(0, 10);
			const slot = days.find((x) => x.key === k);
			if (slot) {
				slot.bookings += 1;
				slot.revenue += Number(b.amount || 0);
			}
		}
		return days;
	}, [bookings]);
	const recent = (0, import_react.useMemo)(() => [...bookings].sort((a, b) => (b.created_at ?? "").localeCompare(a.created_at ?? "")).slice(0, 6), [bookings]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageTitle, {
			title: "Dashboard",
			subtitle: "Live overview of your hotel operations"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-4 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: CalendarCheck,
					label: "Today's Bookings",
					value: stats.todays
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: LogIn,
					label: "Check-ins",
					value: stats.checkins,
					tone: "#2E7D32"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: LogOut,
					label: "Check-outs",
					value: stats.checkouts,
					tone: "#F9A825"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: Clock,
					label: "Pending Requests",
					value: stats.pending,
					tone: "#C62828"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: DoorOpen,
					label: "Available Rooms",
					value: stats.available,
					tone: "#2E7D32"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: BedDouble,
					label: "Occupied Rooms",
					value: stats.occupied,
					tone: "#C62828"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: IndianRupee,
					label: "Revenue (paid)",
					value: `₹${stats.revenue.toLocaleString("en-IN")}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
					icon: UtensilsCrossed,
					label: "Menu Items",
					value: menuItems.length,
					tone: "#F9A825"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-black/5 bg-white p-5 shadow-sm lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 font-display text-xl text-[#161616]",
					children: "Bookings — last 7 days"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: 240,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
						data: trend,
						margin: {
							left: -20,
							right: 8
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "g",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: "#B98A3E",
									stopOpacity: .4
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: "#B98A3E",
									stopOpacity: 0
								})]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "#00000008",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "day",
								tickLine: false,
								axisLine: false,
								fontSize: 12
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								type: "monotone",
								dataKey: "bookings",
								stroke: "#B98A3E",
								strokeWidth: 2,
								fill: "url(#g)"
							})
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-black/5 bg-white p-5 shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-4 font-display text-xl text-[#161616]",
					children: "Revenue trend"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: 240,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: trend,
						margin: {
							left: -20,
							right: 8
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								strokeDasharray: "3 3",
								stroke: "#00000008",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "day",
								tickLine: false,
								axisLine: false,
								fontSize: 12
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "revenue",
								fill: "#161616",
								radius: [
									6,
									6,
									0,
									0
								]
							})
						]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-black/5 bg-white p-5 shadow-sm lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mb-4 flex items-center gap-2 font-display text-xl text-[#161616]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck, { className: "h-5 w-5 text-[#B98A3E]" }), " Recent Bookings"]
					}),
					recent.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-8 text-center text-sm text-muted-foreground",
						children: "No bookings yet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: recent.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between rounded-xl bg-[#FAFAF8] px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: b.guest_name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									b.room_type || "—",
									" · ",
									b.check_in || "—"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: b.status })]
						}, b.id))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-black/5 bg-white p-5 shadow-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mb-4 flex items-center gap-2 font-display text-xl text-[#161616]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "h-5 w-5 text-[#B98A3E]" }), " Latest Enquiries"]
					}),
					enquiries.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-8 text-center text-sm text-muted-foreground",
						children: "No enquiries yet."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2",
						children: [...enquiries].slice(0, 5).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-[#FAFAF8] px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: e.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { value: e.status })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 line-clamp-1 text-xs text-muted-foreground",
								children: e.message
							})]
						}, e.id))
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-center text-xs text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UtensilsCrossed, { className: "mr-1 inline h-3 w-3" }), " Restaurant, events & analytics modules available in the sidebar."]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-2xl border border-black/5 bg-white p-5 shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "mb-4 flex items-center gap-2 font-display text-xl text-[#161616]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-5 w-5 text-[#B98A3E]" }), " Live Activity"]
				}),
				activity.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-8 text-center text-sm text-muted-foreground",
					children: "No activity yet. New bookings, enquiries and payments appear here instantly."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: activity.slice(0, 12).map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex items-start justify-between gap-3 rounded-xl px-4 py-3 ${a.read ? "bg-[#FAFAF8]" : "bg-[#B98A3E]/5"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium text-[#161616]",
								children: a.title
							}), a.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 line-clamp-1 text-xs text-muted-foreground",
								children: a.body
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-[10px] uppercase tracking-wide text-muted-foreground",
							children: new Date(a.created_at).toLocaleString()
						})]
					}, a.id))
				})
			]
		})
	] });
}
//#endregion
export { Dashboard as component };
