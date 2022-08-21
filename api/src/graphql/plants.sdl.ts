export const schema = gql`
  type Plant {
    id: Int!
    name: String!
    description: String!
    price: Float!
    media: [JSON]!
    collectionType: Collection
    collectionId: Int!
    information: JSON!
    tag: [String]!
    createdAt: DateTime!
  }

  type Query {
    plants: [Plant!]! @requireAuth
    plant(id: Int!): Plant @requireAuth
  }

  input CreatePlantInput {
    name: String!
    description: String!
    price: Float!
    media: [JSON]!
    collectionId: Int!
    information: JSON!
    tag: [String]!
  }

  input UpdatePlantInput {
    name: String
    description: String
    price: Float
    media: [JSON]!
    collectionId: Int
    information: JSON
    tag: [String]!
  }

  type Mutation {
    createPlant(input: CreatePlantInput!): Plant! @requireAuth
    updatePlant(id: Int!, input: UpdatePlantInput!): Plant! @requireAuth
    deletePlant(id: Int!): Plant! @requireAuth
  }
`
