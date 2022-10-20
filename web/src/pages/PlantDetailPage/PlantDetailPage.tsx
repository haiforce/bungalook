import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import NavBar from 'src/components/NavBar/NavBar'
import PlantDetailCell from 'src/components/PlantDetail/PlantDetailCell'

type PlantDetailPageProps = {
  id: string
}

const PlantDetailPage = ({ id }: PlantDetailPageProps) => {
  return (
    <>
      <div style={{ marginBottom: '50px' }}>
        <NavBar />
      </div>
      <PlantDetailCell id={Number(id)} />
      <div style={{ marginTop: '20px' }}>
        <Footer />
      </div>
    </>
  )
}

export default PlantDetailPage
