import { request } from 'graphql-request'

const authHeaders = {
  'X-Shopify-Access-Token': process.env.SHOPIFY_TOKEN,
}

export const shopifyRequests = async (query:string) => {
    return await request({
      url: process.env.SHOPIFY_API_URL,
      document: query,
      requestHeaders: authHeaders,
    })
}
