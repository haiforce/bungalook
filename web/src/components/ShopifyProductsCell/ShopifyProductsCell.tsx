import type { Query, ShopifyProductsQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'


export const QUERY = gql`
  query ShopifyProductsQuery($first: String!) {
    products: getProducts(first: $first) {
      products{
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ products }: CellSuccessProps<Query['getProducts'], ShopifyProductsQueryVariables>) => {
  return (
    <p>
      {JSON.stringify(products)}
    </p>
  )
}
