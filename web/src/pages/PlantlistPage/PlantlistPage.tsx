import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

type PlantlistPageProps = {
  id: string
}

const PlantlistPage = ({ id }: PlantlistPageProps) => {
  return (
    <>
      <MetaTags title="Plantlist" description="Plantlist page" />

      <h1>PlantlistPage</h1>
      <p>
        Find me in <code>./web/src/pages/PlantlistPage/PlantlistPage.tsx</code>
      </p>
      <p>
        My default route is named <code>plantlist</code>, link to me with `
        <Link to={routes.plantlist({ id: '42' })}>Plantlist 42</Link>`
      </p>
      <p>The parameter passed to me is {id}</p>
    </>
  )
}

export default PlantlistPage
