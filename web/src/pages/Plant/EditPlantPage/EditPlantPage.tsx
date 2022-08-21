import EditPlantCell from 'src/components/Plant/EditPlantCell'

type PlantPageProps = {
  id: number
}

const EditPlantPage = ({ id }: PlantPageProps) => {
  return <EditPlantCell id={id} />
}

export default EditPlantPage
