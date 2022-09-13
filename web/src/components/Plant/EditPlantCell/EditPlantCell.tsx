import type { EditPlantById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PlantForm from 'src/components/Plant/PlantForm'

export const QUERY = gql`
  query EditPlantById($id: Int!) {
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
      vicfloraUuid
      createdAt
    }
  }
`
const UPDATE_PLANT_MUTATION = gql`
  mutation UpdatePlantMutation($id: Int!, $input: UpdatePlantInput!) {
    updatePlant(id: $id, input: $input) {
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
      vicfloraUuid
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ plant }: CellSuccessProps<EditPlantById>) => {
  const [updatePlant, { loading, error }] = useMutation(UPDATE_PLANT_MUTATION, {
    onCompleted: () => {
      toast.success('Plant updated')
      navigate(routes.plants())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      collectionId: parseInt(input.collectionId),
    })
    updatePlant({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Plant {plant.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PlantForm
          plant={plant}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
