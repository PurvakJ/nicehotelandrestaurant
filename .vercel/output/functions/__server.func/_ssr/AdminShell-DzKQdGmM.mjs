import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as useNavigate, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { $ as CalendarCheck, F as FileText, H as ConciergeBell, N as Hotel, T as LogOut, V as CreditCard, X as CheckCheck, at as BedDouble, c as Tag, ft as UtensilsCrossed, k as LayoutDashboard, o as Trash2, p as Search, rt as Bell, t as X, v as PartyPopper, w as Mail, x as Menu, y as MessageSquare, z as Dot } from "../_libs/lucide-react.mjs";
import { t as nice_logo_default } from "./nice-logo-hYSaAEbh.mjs";
import { t as Button } from "./input-CEMa6_Eh.mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-nAltcnKV.mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AdminShell-DzKQdGmM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var adminUnlock = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("3ab4aa441ff3d78bf977a2b64ffea69daeb42364c1eada24eaa35980a0936f94"));
var adminStatus = createServerFn({ method: "GET" }).handler(createSsrRpc("071c9034ee157920f00ef33d2423b001609d4735aef36265881dffb10297f9d8"));
var adminLogout = createServerFn({ method: "POST" }).handler(createSsrRpc("b778199f0067dc3af0626a35537d9640eabb3a694e5f097e062cd440c74c2c03"));
var adminList = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("2a1221af605f33de14fcb3129215421dab3d887ea7a54786b11ee6fc22dd2385"));
var adminUpsert = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("5cc0279c96364588651386247a894627f23b1528e5a701b5207f2967bcacde82"));
var adminDelete = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("b54307ac4d34e95076d59a570cf2390f961b96c0ba131b8afe0ae55ca874601e"));
var adminUpload = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("1ef5d1379ca5da0a5a00b63272372eb57ef53d16c2ff1e76a1aa92eef0d766ad"));
var adminSettingsList = createServerFn({ method: "GET" }).handler(createSsrRpc("54b03e959c600a4220baf297183aa0cfbec160932ea5456878729d09df280586"));
var adminSettingSave = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("4e17e70bd80efa77f39d962ebef58764fd4796beaf8645bf7b5555373fc14950"));
var adminSettingDelete = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("43e32a835cfd8045a9c2dd0092c27c622b0c8b910d87c951ffae74474bb817ab"));
var adminResendEmail = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("4bf747f8a8186f2a428960f75f38a579b697cfa23b3f0e48cfb77cec089d6536"));
var adminNotificationsMarkRead = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("fd8728cba9751c500233873ed59ce2d3c12b0b2ec6e2e1f134e4955cdb9bfe05"));
var adminNotificationsClear = createServerFn({ method: "POST" }).handler(createSsrRpc("b26b8b1451285d48a641d849aa3b7ac1f04de97f127dd76364d4d1049def2bb7"));
var adminBookingRooms = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("c18671579ff2d89361c1a191f95222d04bd38f7349043613d7410d8388192c9b"));
var adminBookingRoomUpdate = createServerFn({ method: "POST" }).validator((d) => d).handler(createSsrRpc("4413aab639d4b72b5c39141459f31bbcd2fa96c50a74a4ba2ad72ab310c3a67a"));
function useRows(table, opts) {
	return useQuery({
		queryKey: [
			table,
			opts?.orderBy,
			opts?.ascending
		],
		queryFn: async () => {
			return await adminList({ data: {
				table,
				orderBy: opts?.orderBy,
				ascending: opts?.ascending
			} }) ?? [];
		},
		staleTime: 0,
		refetchInterval: 12e3,
		refetchOnWindowFocus: true
	});
}
function useInvalidate() {
	const qc = useQueryClient();
	return (table) => qc.invalidateQueries({ queryKey: [table] });
}
async function upsertRow(table, values, id) {
	await adminUpsert({ data: {
		table,
		values,
		id
	} });
}
async function deleteRow(table, id) {
	await adminDelete({ data: {
		table,
		id
	} });
}
async function setStatus(table, id, patch) {
	await adminUpsert({ data: {
		table,
		values: patch,
		id
	} });
}
function fileToBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(String(reader.result).split(",")[1] ?? "");
		reader.onerror = reject;
		reader.readAsDataURL(file);
	});
}
async function uploadImage(file) {
	const base64 = await fileToBase64(file);
	return (await adminUpload({ data: {
		filename: file.name,
		contentType: file.type,
		base64
	} })).url;
}
var ICONS = {
	booking: CalendarCheck,
	enquiry: MessageSquare,
	venue: PartyPopper,
	payment: CreditCard
};
function timeAgo(iso) {
	const s = Math.floor((Date.now() - new Date(iso).getTime()) / 1e3);
	if (s < 60) return "just now";
	if (s < 3600) return `${Math.floor(s / 60)}m ago`;
	if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
	return `${Math.floor(s / 86400)}d ago`;
}
function NotificationBell() {
	const { data = [] } = useRows("notifications", {
		orderBy: "created_at",
		ascending: false
	});
	const invalidate = useInvalidate();
	const [open, setOpen] = (0, import_react.useState)(false);
	const unread = (0, import_react.useMemo)(() => data.filter((n) => !n.read).length, [data]);
	const markAll = async () => {
		await adminNotificationsMarkRead({ data: { all: true } });
		invalidate("notifications");
	};
	const markOne = async (id) => {
		await adminNotificationsMarkRead({ data: { id } });
		invalidate("notifications");
	};
	const clearAll = async () => {
		await adminNotificationsClear();
		invalidate("notifications");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen((o) => !o),
			className: "relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-black/5",
			title: "Notifications",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-[18px] w-[18px]" }), unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#B98A3E] px-1 text-[10px] font-semibold text-white",
				children: unread > 9 ? "9+" : unread
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-40",
			onClick: () => setOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute right-0 z-50 mt-2 w-80 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-black/5 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Notifications"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-[#B98A3E]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: markAll,
						title: "Mark all read",
						className: "hover:opacity-70",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckCheck, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: clearAll,
						title: "Clear all",
						className: "hover:opacity-70",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-96 overflow-y-auto",
				children: [data.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 py-10 text-center text-sm text-muted-foreground",
					children: "No notifications yet."
				}), data.slice(0, 30).map((n) => {
					const Ico = ICONS[n.type] ?? Bell;
					const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `flex gap-3 px-4 py-3 transition hover:bg-[#FAFAF8] ${n.read ? "" : "bg-[#B98A3E]/5"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-beige text-[#B98A3E]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ico, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-1 text-sm font-medium text-[#161616]",
									children: [!n.read && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dot, { className: "-ml-1 h-4 w-4 text-[#B98A3E]" }), n.title]
								}),
								n.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 line-clamp-2 text-xs text-muted-foreground",
									children: n.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[10px] uppercase tracking-wide text-muted-foreground",
									children: timeAgo(n.created_at)
								})
							]
						})]
					});
					return n.link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.link,
						onClick: () => {
							markOne(n.id);
							setOpen(false);
						},
						className: "block",
						children: inner
					}, n.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => markOne(n.id),
						className: "block w-full text-left",
						children: inner
					}, n.id);
				})]
			})]
		})] })]
	});
}
var NAV = [
	{
		section: "Overview",
		items: [{
			to: "/admin",
			label: "Dashboard",
			icon: LayoutDashboard
		}]
	},
	{
		section: "Operations",
		items: [
			{
				to: "/admin/bookings",
				label: "Bookings",
				icon: CalendarCheck
			},
			{
				to: "/admin/rooms",
				label: "Rooms",
				icon: BedDouble
			},
			{
				to: "/admin/services",
				label: "Services",
				icon: ConciergeBell
			},
			{
				to: "/admin/events",
				label: "Venue & Events",
				icon: PartyPopper
			},
			{
				to: "/admin/enquiries",
				label: "Enquiries",
				icon: MessageSquare
			}
		]
	},
	{
		section: "Restaurant",
		items: [
			{
				to: "/admin/menu",
				label: "Menu Builder",
				icon: UtensilsCrossed
			},
			{
				to: "/admin/offers",
				label: "Offers",
				icon: Tag
			},
			{
				to: "/admin/cms",
				label: "Site CMS",
				icon: FileText
			}
		]
	},
	{
		section: "Communications",
		items: [{
			to: "/admin/emails",
			label: "Email Center",
			icon: Mail
		}]
	}
];
function AdminShell({ children }) {
	const navigate = useNavigate();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [openMobile, setOpenMobile] = (0, import_react.useState)(false);
	const canSee = (_item) => true;
	const handleSignOut = async () => {
		await adminLogout();
		navigate({
			to: "/",
			replace: true
		});
		if (typeof window !== "undefined") window.location.reload();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#FAFAF8] text-[#1a1a1a]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: `fixed inset-y-0 left-0 z-50 w-64 transform bg-[#161616] text-white/80 transition-transform duration-300 lg:translate-x-0 ${openMobile ? "translate-x-0" : "-translate-x-full"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-16 items-center gap-2.5 border-b border-white/5 px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: nice_logo_default,
							alt: "Nice Hotel",
							className: "h-8 w-8 rounded-md object-contain"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-base text-white",
								children: "Nice Hotel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-[0.2em] text-[#B98A3E]",
								children: "Admin Suite"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "ml-auto lg:hidden",
							onClick: () => setOpenMobile(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "h-[calc(100vh-4rem)] overflow-y-auto px-3 py-5 [scrollbar-width:thin]",
					children: NAV.map((group) => {
						const items = group.items.filter(canSee);
						if (items.length === 0) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 px-3 text-[10px] uppercase tracking-[0.18em] text-white/30",
								children: group.section
							}), items.map((item) => {
								const active = pathname === item.to;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: item.to,
									onClick: () => setOpenMobile(false),
									className: `mb-0.5 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${active ? "bg-[#B98A3E] text-white shadow-lg shadow-[#B98A3E]/20" : "text-white/70 hover:bg-white/5 hover:text-white"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-[18px] w-[18px]" }), item.label]
								}, item.to);
							})]
						}, group.section);
					})
				})]
			}),
			openMobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-40 bg-black/40 lg:hidden",
				onClick: () => setOpenMobile(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:pl-64",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-black/5 bg-white/70 px-4 backdrop-blur-xl lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden",
							onClick: () => setOpenMobile(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative hidden flex-1 sm:block sm:max-w-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: "Search bookings, rooms, guests...",
								className: "w-full rounded-full border border-black/10 bg-[#FAFAF8] py-2 pl-9 pr-4 text-sm outline-none focus:border-[#B98A3E]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ml-auto flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/",
									className: "hidden items-center gap-1.5 rounded-full border border-black/10 px-3 py-1.5 text-xs text-muted-foreground hover:border-[#B98A3E] sm:flex",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotel, { className: "h-3.5 w-3.5" }), " View Site"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationBell, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right leading-tight",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium",
										children: "Administrator"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] text-[#B98A3E]",
										children: "Full Access"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									size: "icon",
									variant: "ghost",
									className: "h-9 w-9",
									onClick: handleSignOut,
									title: "Sign out",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" })
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "px-4 py-6 lg:px-8 lg:py-8",
					children
				})]
			})
		]
	});
}
function PageTitle({ title, subtitle, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl text-[#161616]",
			children: title
		}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-0.5 text-sm text-muted-foreground",
			children: subtitle
		})] }), action]
	});
}
//#endregion
export { adminResendEmail as a, adminSettingsList as c, deleteRow as d, setStatus as f, useRows as g, useInvalidate as h, adminBookingRooms as i, adminStatus as l, upsertRow as m, PageTitle as n, adminSettingDelete as o, uploadImage as p, adminBookingRoomUpdate as r, adminSettingSave as s, AdminShell as t, adminUnlock as u };
