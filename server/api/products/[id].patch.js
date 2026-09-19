import{toggle}from'../../utils/store.js';export default defineEventHandler(async event=>({product:await toggle(getRouterParam(event,'id'))}))
