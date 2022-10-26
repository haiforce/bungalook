import {shopifyRequests} from './client'

export const getProducts = async ({ first }) => {
  const query = gql `
  query {
    products(first: ${first}) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`
  const result = await shopifyRequests(query)
  return result
}
