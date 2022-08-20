import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type PlantLayoutProps = {
  children: React.ReactNode
}

const PlantsLayout = ({ children }: PlantLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.plants()}
            className="rw-link"
          >
            Plants
          </Link>
        </h1>
        <Link
          to={routes.newPlant()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Plant
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default PlantsLayout
