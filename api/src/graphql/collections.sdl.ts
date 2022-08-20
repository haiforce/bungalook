export const schema = gql`
  type Collection {
    id: Int!
    name: String!
    plants: [Plant]!
    createdAt: DateTime!
  }

  type Query {
    collections: [Collection!]! @requireAuth
    collection(id: Int!): Collection @requireAuth
  }

  input CreateCollectionInput {
    name: String!
  }

  input UpdateCollectionInput {
    name: String
  }

  type Mutation {
    createCollection(input: CreateCollectionInput!): Collection! @requireAuth
    updateCollection(id: Int!, input: UpdateCollectionInput!): Collection!
      @requireAuth
    deleteCollection(id: Int!): Collection! @requireAuth
  }
`
