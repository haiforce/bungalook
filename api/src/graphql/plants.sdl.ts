export const schema = gql`
  type Plant {
    id: Int!
    name: String!
    description: String!
    price: Float!
    media: [JSON]!
    collectionType: Collection
    collectionId: Int!
    size: String!
    soil: String!
    flowers: String!
    foliage: String!
    attracts: [String]!
    flowering: [String]!
    conditions: String!
    plantType: String!
    tag: [String]!
    vicfloraUuid: String!
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
    size: String!
    soil: String!
    flowers: String!
    foliage: String!
    attracts: [String]!
    flowering: [String]!
    conditions: String!
    plantType: String!
    tag: [String]!
    vicfloraUuid: String!
  }

  input UpdatePlantInput {
    name: String
    description: String
    price: Float
    media: [JSON]!
    collectionId: Int
    size: String
    soil: String
    flowers: String
    foliage: String
    attracts: [String]!
    flowering: [String]!
    conditions: String
    plantType: String
    tag: [String]!
    vicfloraUuid: String
  }

  type Mutation {
    createPlant(input: CreatePlantInput!): Plant! @requireAuth
    updatePlant(id: Int!, input: UpdatePlantInput!): Plant! @requireAuth
    deletePlant(id: Int!): Plant! @requireAuth
  }
`
