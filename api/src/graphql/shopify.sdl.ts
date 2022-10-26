export const schema = gql`
  type Node {
    id: String
    title: String
    handle: String
  }

  type Edges {
    node: Node
  }

  type Products {
    edges: [Edges]
  }

  type Data {
    products: Products
  }

  type Query {
    getProducts(first: String!): Data! @skipAuth
  }
`
