import PlantsListCell from 'src/components/PlantsList/PlantsListCell'

type PlantlistPageProps = {
  id: string
}

const PlantlistPage = ({ id }: PlantlistPageProps) => {
  return (
    <>
      <div
        className="container-fluid page-header wow fadeIn mb-5"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <h1 className="display-3 animated slideInDown mb-3">Plants</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a className="text-body" href="/">
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item text-dark active"
                aria-current="page"
              >
                Plants
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <PlantsListCell id={Number(id)} />

      {/* <MetaTags title="Plantlist" description="Plantlist page"/>

      <h1>PlantlistPage</h1>
      <p>
        Find me in
        <code>./web/src/pages/PlantlistPage/PlantlistPage.tsx</code>
      </p>
      <p>
        My default route is named
        <code>plantlist</code>, link to me with `
        <Link to={
          routes.plantlist({id: '42'})
        }>Plantlist 42</Link>`
      </p>
      <p>The parameter passed to me is {id}</p> */}
    </>
  )
}

export default PlantlistPage
