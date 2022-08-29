import type { FindPlantById, FindPlantByIdVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PlantDetail from 'src/components/PlantDetail/PlantDetail/PlantDetail'

export const QUERY = gql`
  query FindPlantDetailQuery($id: Int!) {
    plant: plant(id: $id) {
      id
      name
      description
      price
      media
      collectionId
      information
      tag
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  plant,
}: CellSuccessProps<FindPlantById,FindPlantByIdVariables>) => {
  return <PlantDetail plant={plant}/>
}
