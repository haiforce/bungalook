import type { FindPlantById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Plant from 'src/components/Plant/Plant'

export const QUERY = gql`
  query FindPlantById($id: Int!) {
    plant: plant(id: $id) {
      id
      name
      description
      price
      media
      collectionId
      size
      soil
      flowers
      foliage
      attracts
      flowering
      conditions
      plantType
      tag
      vicfloraUid
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Plant not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ plant }: CellSuccessProps<FindPlantById>) => {
  return <Plant plant={plant} />
}
