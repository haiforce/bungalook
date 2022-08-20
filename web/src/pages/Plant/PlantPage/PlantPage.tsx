import PlantCell from 'src/components/Plant/PlantCell'

type PlantPageProps = {
  id: number
}

const PlantPage = ({ id }: PlantPageProps) => {
  return <PlantCell id={id} />
}

export default PlantPage
