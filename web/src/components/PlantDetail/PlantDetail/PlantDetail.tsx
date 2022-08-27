import type { Plant } from 'types/graphql'

const PlantDetail = ({ plant }: { plant: Plant }) => {
  return (
    <div>
      <h2>{'PlantDetail'}</h2>
      <div>{JSON.stringify(plant)}</div>
    </div>
  )
}

export default PlantDetail
