import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PlantForm from 'src/components/Plant/PlantForm'

const CREATE_PLANT_MUTATION = gql`
  mutation CreatePlantMutation($input: CreatePlantInput!) {
    createPlant(input: $input) {
      id
    }
  }
`

const NewPlant = () => {
  const [createPlant, { loading, error }] = useMutation(CREATE_PLANT_MUTATION, {
    onCompleted: () => {
      toast.success('Plant created')
      navigate(routes.plants())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, { collectionId: parseInt(input.collectionId), })
    createPlant({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Plant</h2>
      </header>
      <div className="rw-segment-main">
        <PlantForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPlant
