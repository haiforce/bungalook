// import PlantsListCell from 'src/components/PlantsList/PlantsListCell'
import ShopifyProductsCell from 'src/components/ShopifyProductsCell/ShopifyProductsCell'
import NavBar from 'src/components/NavBar/NavBar'
import Footer from 'src/components/Footer/Footer'

type PlantlistPageProps = {
  id: string
}

const PlantlistPage = ({ id }: PlantlistPageProps) => {
  return (
    <>
      <div style={{ marginBottom: '50px' }}>
        <NavBar />
      </div>
      {/* <PlantsListCell id={Number(id)} /> */}
      <ShopifyProductsCell first={'10'}/>
      <div style={{ marginTop: '20px' }}>
        <Footer />
      </div>
    </>
  )
}

export default PlantlistPage
