import { o as __toESM } from "../_runtime.mjs";
import { y as site } from "./content-B6YhG0K8.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { t as AppImage } from "./AppImage-ZFFpQV3a.mjs";
import { D as Lock, Q as CalendarDays, Y as Check, _t as BadgeCheck, at as BedDouble, ct as ArrowRight, d as ShieldCheck, gt as CircleCheck, h as Plus, lt as ArrowLeft, mt as LoaderCircle, o as Trash2 } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as supabase } from "./client-B-IVvH7c.mjs";
import { i as getRoomAvailability } from "./public.functions-CR6yH6DE.mjs";
import { t as Route } from "./book-XnNHgsas.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-z6-x2qYN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var todayStr = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
var EXTRA_BED = 800;
var TAX_RATE = .12;
var fieldCls = "w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-sm text-charcoal outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";
var inr = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;
function loadRazorpay() {
	return new Promise((resolve) => {
		if (typeof window === "undefined") return resolve(false);
		if (window.Razorpay) return resolve(true);
		const s = document.createElement("script");
		s.src = "https://checkout.razorpay.com/v1/checkout.js";
		s.onload = () => resolve(true);
		s.onerror = () => resolve(false);
		document.body.appendChild(s);
	});
}
function nightsBetween(a, b) {
	if (!a || !b) return 0;
	const n = Math.round((new Date(b).getTime() - new Date(a).getTime()) / 864e5);
	return n > 0 ? n : 0;
}
var keyCounter = 0;
var newKey = () => `line-${++keyCounter}-${Date.now()}`;
function BookPage() {
	const rooms = Route.useLoaderData();
	const { room: roomParam } = Route.useSearch();
	const roomTypes = (0, import_react.useMemo)(() => {
		const seen = /* @__PURE__ */ new Map();
		for (const r of rooms) {
			const k = `${r.name}-${r.price}`;
			if (!seen.has(k)) seen.set(k, r);
		}
		return [...seen.values()];
	}, [rooms]);
	const roomById = (0, import_react.useMemo)(() => Object.fromEntries(rooms.map((r) => [r.id, r])), [rooms]);
	const [step, setStep] = (0, import_react.useState)(1);
	const [checkIn, setCheckIn] = (0, import_react.useState)("");
	const [checkOut, setCheckOut] = (0, import_react.useState)("");
	const [lines, setLines] = (0, import_react.useState)([]);
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [requests, setRequests] = (0, import_react.useState)("");
	const [availability, setAvailability] = (0, import_react.useState)([]);
	const [paying, setPaying] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(null);
	const [user, setUser] = (0, import_react.useState)(null);
	const [authMode, setAuthMode] = (0, import_react.useState)("signup");
	const [authEmail, setAuthEmail] = (0, import_react.useState)("");
	const [authPass, setAuthPass] = (0, import_react.useState)("");
	const [authBusy, setAuthBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.auth.getUser().then(({ data }) => {
			if (data.user) {
				setUser({
					id: data.user.id,
					email: data.user.email ?? ""
				});
				setAuthEmail(data.user.email ?? "");
			}
		});
		const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
			if (s?.user) setUser({
				id: s.user.id,
				email: s.user.email ?? ""
			});
			else setUser(null);
		});
		return () => sub.subscription.unsubscribe();
	}, []);
	(0, import_react.useEffect)(() => {
		if (lines.length || !roomTypes.length) return;
		const first = (roomParam ? roomTypes.find((r) => r.name.toLowerCase() === roomParam.toLowerCase()) : null) ?? roomTypes[0];
		setLines([{
			key: newKey(),
			roomId: first.id,
			quantity: 1,
			adults: 2,
			children: 0,
			extraBed: false,
			notes: ""
		}]);
	}, [
		roomParam,
		roomTypes,
		lines.length
	]);
	const nights = nightsBetween(checkIn, checkOut);
	const setStayNights = (days) => {
		if (!Number.isFinite(days) || days < 1) return;
		const base = checkIn || todayStr();
		if (!checkIn) setCheckIn(base);
		setCheckOut(new Date(new Date(base).getTime() + days * 864e5).toISOString().slice(0, 10));
	};
	(0, import_react.useEffect)(() => {
		if (nights <= 0) {
			setAvailability([]);
			return;
		}
		let active = true;
		getRoomAvailability({ data: {
			checkIn,
			checkOut
		} }).then((a) => {
			if (active) setAvailability(a);
		}).catch(() => {
			if (active) setAvailability([]);
		});
		return () => {
			active = false;
		};
	}, [
		checkIn,
		checkOut,
		nights
	]);
	const availFor = (roomId) => availability.find((a) => a.roomId === roomId);
	const priced = (0, import_react.useMemo)(() => {
		const computed = lines.map((l) => {
			const room = roomById[l.roomId];
			const unitPrice = (room ? Number(room.price) * nights : 0) + (l.extraBed ? EXTRA_BED * nights : 0);
			return {
				line: l,
				room,
				unitPrice,
				lineTotal: unitPrice * l.quantity
			};
		});
		const subtotal = computed.reduce((s, c) => s + c.lineTotal, 0);
		const taxes = Math.round(subtotal * TAX_RATE);
		return {
			computed,
			subtotal,
			taxes,
			grandTotal: subtotal + taxes
		};
	}, [
		lines,
		roomById,
		nights
	]);
	const totalRooms = lines.reduce((s, l) => s + l.quantity, 0);
	const totalGuests = lines.reduce((s, l) => s + (l.adults + l.children) * l.quantity, 0);
	const updateLine = (key, patch) => setLines((ls) => ls.map((l) => l.key === key ? {
		...l,
		...patch
	} : l));
	const removeLine = (key) => setLines((ls) => ls.filter((l) => l.key !== key));
	const addLine = () => {
		const first = roomTypes[0];
		if (!first) return;
		setLines((ls) => [...ls, {
			key: newKey(),
			roomId: first.id,
			quantity: 1,
			adults: 2,
			children: 0,
			extraBed: false,
			notes: ""
		}]);
	};
	const auth = async (e) => {
		e.preventDefault();
		setAuthBusy(true);
		try {
			if (authMode === "signup") {
				const { error } = await supabase.auth.signUp({
					email: authEmail,
					password: authPass,
					options: { emailRedirectTo: window.location.origin + "/book" }
				});
				if (error) throw error;
				const { error: e2 } = await supabase.auth.signInWithPassword({
					email: authEmail,
					password: authPass
				});
				if (e2) throw e2;
				toast.success("Account created — you're signed in");
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email: authEmail,
					password: authPass
				});
				if (error) throw error;
				toast.success("Welcome back");
			}
		} catch (err) {
			toast.error(err.message ?? "Authentication failed");
		} finally {
			setAuthBusy(false);
		}
	};
	const validateRooms = () => {
		if (!lines.length) return "Please add at least one room";
		for (const l of lines) {
			const a = availFor(l.roomId);
			if (a && l.quantity > a.available) return `${roomById[l.roomId]?.name ?? "Room"}: only ${a.available} available for these dates`;
		}
		return null;
	};
	const pay = async () => {
		if (!user) return;
		if (nights <= 0) {
			toast.error("Please choose valid dates");
			return;
		}
		const rerr = validateRooms();
		if (rerr) {
			toast.error(rerr);
			return;
		}
		if (!name || !phone) {
			toast.error("Please enter your name and phone");
			return;
		}
		setPaying(true);
		try {
			if (!await loadRazorpay()) throw new Error("Payment SDK failed to load");
			const items = lines.map((l) => ({
				roomId: l.roomId,
				quantity: l.quantity,
				adults: l.adults,
				children: l.children,
				extraBed: l.extraBed,
				notes: l.notes || void 0
			}));
			const orderRes = await fetch("/api/public/razorpay/order", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({
					items,
					checkIn,
					checkOut
				})
			});
			const order = await orderRes.json();
			if (!orderRes.ok) throw new Error(order.error || "Could not start payment");
			const rzp = new window.Razorpay({
				key: order.keyId,
				amount: order.amount,
				currency: order.currency,
				name: "Nice Hotel & Restaurant",
				description: `${totalRooms} room${totalRooms > 1 ? "s" : ""} · ${order.nights} night${order.nights > 1 ? "s" : ""}`,
				order_id: order.orderId,
				prefill: {
					name,
					email: user.email,
					contact: phone
				},
				theme: { color: "#B98A3E" },
				modal: { ondismiss: () => setPaying(false) },
				handler: async (resp) => {
					try {
						const { data: sess } = await supabase.auth.getSession();
						const accessToken = sess.session?.access_token;
						const vr = await fetch("/api/public/razorpay/verify", {
							method: "POST",
							headers: {
								"content-type": "application/json",
								...accessToken ? { authorization: `Bearer ${accessToken}` } : {}
							},
							body: JSON.stringify({
								razorpay_order_id: resp.razorpay_order_id,
								razorpay_payment_id: resp.razorpay_payment_id,
								razorpay_signature: resp.razorpay_signature,
								items,
								checkIn,
								checkOut,
								guests: totalGuests,
								guestName: name,
								guestEmail: user.email,
								guestPhone: phone,
								specialRequests: requests || void 0
							})
						});
						const v = await vr.json();
						if (!vr.ok) throw new Error(v.error || "Verification failed");
						setDone({ id: v.bookingId });
						toast.success("Booking confirmed!");
					} catch (err) {
						toast.error(err.message ?? "We could not confirm your booking. Contact us with your payment ID.");
					} finally {
						setPaying(false);
					}
				}
			});
			rzp.on("payment.failed", () => {
				toast.error("Payment failed. Please try again.");
				setPaying(false);
			});
			rzp.open();
		} catch (err) {
			toast.error(err.message ?? "Could not start payment");
			setPaying(false);
		}
	};
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-luxe flex min-h-[70vh] flex-col items-center justify-center py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-16 w-16 text-gold" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-6 font-display text-4xl text-charcoal",
				children: "Booking Confirmed"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-md text-muted-foreground",
				children: [
					"Thank you, ",
					name,
					". Your reservation for ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
						totalRooms,
						" room",
						totalRooms > 1 ? "s" : ""
					] }),
					" is confirmed and a confirmation email is on its way to ",
					user?.email,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: ["Reference: ", done.id.slice(0, 8).toUpperCase()]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "rounded-full bg-charcoal px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition hover:bg-gold",
					children: "Back to Home"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/rooms",
					className: "rounded-full border border-charcoal px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition hover:bg-charcoal hover:text-ivory",
					children: "View Rooms"
				})]
			})
		]
	});
	const steps = [
		"Dates",
		"Rooms",
		"Account",
		"Pay"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-ivory pb-24 pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Reservations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl text-charcoal sm:text-5xl",
					children: "Book Your Stay"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex items-center gap-2",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium ${step > i + 1 ? "bg-gold text-ivory" : step === i + 1 ? "bg-charcoal text-ivory" : "bg-beige text-muted-foreground"}`,
								children: step > i + 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `hidden text-xs uppercase tracking-wider sm:block ${step === i + 1 ? "text-charcoal" : "text-muted-foreground"}`,
								children: s
							}),
							i < steps.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })
						]
					}, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card p-6 shadow-card sm:p-8",
						children: [
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl text-charcoal",
									children: "Choose your dates"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mb-1.5 flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 text-gold" }), " Check-in"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "date",
											min: todayStr(),
											value: checkIn,
											onChange: (e) => setCheckIn(e.target.value),
											className: fieldCls
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "text-xs text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mb-1.5 flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 text-gold" }), " Check-out"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "date",
											min: checkIn || todayStr(),
											value: checkOut,
											onChange: (e) => setCheckOut(e.target.value),
											className: fieldCls
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "mt-4 block text-xs text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mb-1.5 flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "h-4 w-4 text-gold" }), " Number of nights you want to stay"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "number",
											min: 1,
											max: 60,
											value: nights > 0 ? nights : "",
											placeholder: "e.g. 2",
											onChange: (e) => setStayNights(Number(e.target.value)),
											className: `${fieldCls} max-w-[160px]`
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-1.5",
											children: [
												1,
												2,
												3,
												5,
												7
											].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setStayNights(d),
												className: `rounded-full border px-3 py-1.5 text-[11px] font-medium transition ${nights === d ? "border-gold bg-gold text-ivory" : "border-border text-muted-foreground hover:border-gold hover:text-gold"}`,
												children: [
													d,
													" night",
													d > 1 ? "s" : ""
												]
											}, d))
										})]
									})]
								}),
								nights > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-sm text-charcoal",
									children: [
										nights,
										" night",
										nights > 1 ? "s" : "",
										" selected · ",
										nights + 1,
										" day",
										nights + 1 > 1 ? "s" : ""
									]
								})
							] }),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl text-charcoal",
									children: "Your rooms"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: addLine,
									className: "flex items-center gap-1.5 rounded-full border border-gold px-4 py-2 text-xs font-medium uppercase tracking-wider text-gold transition hover:bg-gold hover:text-ivory",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add another room"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-5",
								children: lines.map((l, idx) => {
									const room = roomById[l.roomId];
									const a = availFor(l.roomId);
									const c = priced.computed.find((x) => x.line.key === l.key);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-2xl border border-border p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
													className: "font-display text-lg text-charcoal",
													children: ["Room ", idx + 1]
												}), lines.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													onClick: () => removeLine(l.key),
													className: "flex items-center gap-1 text-xs text-red-500 hover:text-red-700",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" }), " Remove"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "text-xs text-muted-foreground sm:col-span-2",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "mb-1.5 block",
																children: "Room type"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
																value: l.roomId,
																onChange: (e) => updateLine(l.key, { roomId: e.target.value }),
																className: fieldCls,
																children: roomTypes.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
																	value: r.id,
																	children: [
																		r.name,
																		" — ",
																		inr(Number(r.price)),
																		"/night"
																	]
																}, r.id))
															}),
															a && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: `mt-1.5 inline-flex items-center gap-1 text-[11px] ${a.available > 0 ? "text-emerald-600" : "text-red-500"}`,
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "h-3.5 w-3.5" }), a.available > 0 ? `${a.available} of ${a.total} available` : "Fully booked for these dates"]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "text-xs text-muted-foreground",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "mb-1.5 block",
															children: "Number of rooms"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "number",
															min: 1,
															max: a?.available ?? 10,
															value: l.quantity,
															onChange: (e) => updateLine(l.key, { quantity: Math.max(1, Number(e.target.value)) }),
															className: fieldCls
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "text-xs text-muted-foreground",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "mb-1.5 block",
															children: "Adults"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "number",
															min: 1,
															max: room?.capacity ?? 10,
															value: l.adults,
															onChange: (e) => updateLine(l.key, { adults: Math.max(1, Number(e.target.value)) }),
															className: fieldCls
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "text-xs text-muted-foreground",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "mb-1.5 block",
															children: "Children"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "number",
															min: 0,
															max: 10,
															value: l.children,
															onChange: (e) => updateLine(l.key, { children: Math.max(0, Number(e.target.value)) }),
															className: fieldCls
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "flex items-center gap-2 text-xs text-muted-foreground",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "checkbox",
																checked: l.extraBed,
																onChange: (e) => updateLine(l.key, { extraBed: e.target.checked }),
																className: "h-4 w-4 accent-gold"
															}),
															"Extra bed (+",
															inr(EXTRA_BED),
															"/night)"
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
														className: "text-xs text-muted-foreground sm:col-span-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "mb-1.5 block",
															children: "Special requests for this room (optional)"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															value: l.notes,
															onChange: (e) => updateLine(l.key, { notes: e.target.value }),
															className: fieldCls,
															placeholder: "e.g. high floor, twin beds"
														})]
													})
												]
											}),
											c && nights > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "mt-3 text-right text-sm text-charcoal",
												children: [
													inr(c.unitPrice),
													" × ",
													l.quantity,
													" = ",
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: inr(c.lineTotal) })
												]
											})
										]
									}, l.key);
								})
							})] }),
							step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl text-charcoal",
								children: "Your details"
							}), !user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mb-4 inline-flex rounded-full bg-beige p-1 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setAuthMode("signup"),
											className: `rounded-full px-4 py-1.5 ${authMode === "signup" ? "bg-charcoal text-ivory" : "text-muted-foreground"}`,
											children: "Create account"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setAuthMode("signin"),
											className: `rounded-full px-4 py-1.5 ${authMode === "signin" ? "bg-charcoal text-ivory" : "text-muted-foreground"}`,
											children: "Sign in"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-3 text-xs text-muted-foreground",
										children: "Sign in so we can save your booking and send confirmations."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: auth,
										className: "grid grid-cols-1 gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: "email",
												placeholder: "Email",
												value: authEmail,
												onChange: (e) => setAuthEmail(e.target.value),
												className: fieldCls
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: "password",
												placeholder: "Password (min 6 chars)",
												minLength: 6,
												value: authPass,
												onChange: (e) => setAuthPass(e.target.value),
												className: fieldCls
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "submit",
												disabled: authBusy,
												className: "rounded-full bg-gold px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition hover:bg-charcoal disabled:opacity-60",
												children: authBusy ? "Please wait…" : authMode === "signup" ? "Create account & continue" : "Sign in & continue"
											})
										]
									})
								]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 rounded-xl bg-beige px-4 py-3 text-sm text-charcoal",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-gold" }),
										" Signed in as ",
										user.email
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											placeholder: "Full name",
											value: name,
											onChange: (e) => setName(e.target.value),
											className: fieldCls
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											placeholder: "Phone",
											value: phone,
											onChange: (e) => setPhone(e.target.value),
											className: fieldCls
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											placeholder: "Special requests for the whole booking (optional)",
											rows: 3,
											value: requests,
											onChange: (e) => setRequests(e.target.value),
											className: `${fieldCls} sm:col-span-2`
										})
									]
								})]
							})] }),
							step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-2xl text-charcoal",
									children: "Review & pay"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-6 space-y-3 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Check-in",
											value: checkIn
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Check-out",
											value: checkOut
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Nights",
											value: String(nights)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Guest",
											value: name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
											label: "Phone",
											value: phone
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 space-y-3",
									children: priced.computed.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-xl border border-border p-4 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "font-medium text-charcoal",
												children: [
													"Room ",
													i + 1,
													": ",
													c.room?.name,
													" × ",
													c.line.quantity
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gold",
												children: inr(c.lineTotal)
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-xs text-muted-foreground",
											children: [
												c.line.adults,
												" adult",
												c.line.adults > 1 ? "s" : "",
												c.line.children ? `, ${c.line.children} child` : "",
												c.line.extraBed ? ", extra bed" : "",
												c.line.notes ? ` · ${c.line.notes}` : ""
											]
										})]
									}, c.line.key))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: pay,
									disabled: paying,
									className: "mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-ivory transition hover:bg-gold disabled:opacity-60",
									children: [
										paying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" }),
										"Pay ",
										inr(priced.grandTotal),
										" securely"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5 text-gold" }), " Secured by Razorpay"]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setStep((s) => Math.max(1, s - 1)),
									disabled: step === 1,
									className: "flex items-center gap-1.5 text-sm text-muted-foreground transition hover:text-charcoal disabled:opacity-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
								}), step < 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => {
										if (step === 1 && nights <= 0) return toast.error("Please choose valid dates");
										if (step === 2) {
											const e = validateRooms();
											if (e) return toast.error(e);
										}
										if (step === 3 && !user) return toast.error("Please sign in to continue");
										if (step === 3 && (!name || !phone)) return toast.error("Please enter your name and phone");
										setStep((s) => s + 1);
									},
									className: "flex items-center gap-1.5 rounded-full bg-gold px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition hover:bg-charcoal",
									children: ["Continue ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "h-fit rounded-2xl bg-card p-6 shadow-card lg:sticky lg:top-28",
						children: [lines.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-36 overflow-hidden rounded-xl bg-beige",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppImage, {
									src: roomById[lines[0].roomId]?.images,
									alt: "Your stay",
									className: "h-full w-full object-cover"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl text-charcoal",
								children: "Booking summary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									totalRooms,
									" room",
									totalRooms > 1 ? "s" : "",
									" · ",
									totalGuests,
									" guest",
									totalGuests > 1 ? "s" : "",
									" · ",
									nights || 0,
									" night",
									nights === 1 ? "" : "s"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 space-y-2 border-t border-border pt-4 text-sm",
								children: [
									priced.computed.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
											c.room?.name,
											" ×",
											c.line.quantity
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: inr(c.lineTotal) })]
									}, c.line.key)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground border-t border-border pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: inr(priced.subtotal) })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GST (12%)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: inr(priced.taxes) })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between font-display text-lg text-charcoal",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gold",
											children: inr(priced.grandTotal)
										})]
									})
								]
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center py-10 text-center text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BedDouble, { className: "h-8 w-8 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm",
								children: "Add a room to see your summary."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-[11px] text-muted-foreground",
							children: ["Need help? Call ", site.phone]
						})]
					})]
				})
			]
		})
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between border-b border-border pb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-charcoal",
			children: value
		})]
	});
}
//#endregion
export { BookPage as component };
