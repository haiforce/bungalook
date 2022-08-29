import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PlantDetailCell from 'src/components/PlantDetail/PlantDetailCell'

type PlantDetailPageProps = {
  id: string
}

const PlantDetailPage = ({ id }: PlantDetailPageProps) => {
  return (
    <>
      <MetaTags title="PlantDetail" description="PlantDetail page" />

      <h1>PlantDetailPage</h1>
      <p>
        Find me in <code>./web/src/pages/PlantDetailPage/PlantDetailPage.tsx</code>
      </p>
      <p>
        My default route is named <code>plantDetail</code>, link to me with `
        <Link to={routes.plantDetail({ id: '42' })}>PlantDetail 42</Link>`
      </p>
      <p>The parameter passed to me is {id}</p>
      <PlantDetailCell id={Number(id)}/>
    </>
  )
}

export default PlantDetailPage
