import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-nAltcnKV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/public.functions-CR6yH6DE.js
var getRooms = createServerFn({ method: "GET" }).handler(createSsrRpc("1ab5422cac9705762c8c414a3909f0abd4ad4fb32a5b0f0b37c65dae80b6b347"));
/**
* Live room availability. For each active room type it returns how many units
* are free for the given date range, derived from real bookings that overlap
* those dates (cancelled bookings are ignored). Defaults to tonight's stay.
*/
var getRoomAvailability = createServerFn({ method: "GET" }).validator((data) => data ?? {}).handler(createSsrRpc("c56bcfdbd31ee48de9f00ad0ef0612ac0365ce8ae950313be9100e6375486750"));
var getOffers = createServerFn({ method: "GET" }).handler(createSsrRpc("8394dac5fd53af3a94fc03f13b19f973ce478645c90d4f9f9544c162576d99f2"));
var getServices = createServerFn({ method: "GET" }).handler(createSsrRpc("1728c2fa38d431d1e796130d03ee72c20547ca6964031dad5231e381a1a5c15a"));
var getEvents = createServerFn({ method: "GET" }).handler(createSsrRpc("cca395394a7a717c2d5ff8f3d29e71d8a0a580e5ec9689290b207e6bd80406a9"));
var getMenu = createServerFn({ method: "GET" }).handler(createSsrRpc("68bf4a5b734f1fcffe15df3ebcb0e74eebf35f692798f04ec33ee322154a884d"));
//#endregion
export { getRooms as a, getRoomAvailability as i, getMenu as n, getServices as o, getOffers as r, getEvents as t };
