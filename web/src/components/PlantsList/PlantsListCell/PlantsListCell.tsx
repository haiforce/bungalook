import type { Collection, FindCollectionById, FindCollectionByIdVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import PlantsList from 'src/components/PlantsList/PlantsList/PlantsList'

export const QUERY = gql`
  query FindPlants($id: Int!) {
    collection: collection(id: $id) {
      id
      name
      createdAt
      plants {
        id
        name
        description
        price
        media
        information
        tag
      }
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
  collection,
}:  CellSuccessProps<FindCollectionById,FindCollectionByIdVariables> ) => {
  return <PlantsList collection={collection as Collection} />
}
