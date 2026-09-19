import{list}from'../utils/store.js';export default defineEventHandler(async event=>({products:await list(getQuery(event).all==='true')}))
