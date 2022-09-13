import { useMemo } from 'react'

import type { Collection } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import useMainAnimation from 'src/hooks/useMainAnimation'

const Categroy = ({ collections }) => {
  useMainAnimation()

  const filterArr = useMemo(() => {
    const result = collections.map((item: Collection, index: number) => {
      return (
        <li>
          <a href="#" data-filter={`.${item.name}`}>
            {item.name}
          </a>
        </li>
      )
    })
    return result
  }, [collections])

  const pictureArr = useMemo(() => {
    const result = collections.map((item: Collection, index: number) => {
      return (
        <div className={`col-sm-6 col-md-4 ${item.name}`}>
          <div className="portfolio-item">
            <div className="hover-bg">
              <Link to={routes.plantlist({ id: String(item.id) })}>
                <div className="hover-text">
                  <h4>{item.name}</h4>
                </div>
                <img
                  src={`/img/portfolio/0${(index % 9) + 1}-small.jpg`}
                  className="img-responsive"
                  alt="Project Title"
                />
              </Link>
            </div>
          </div>
        </div>
      )
    })
    return result
  }, [collections])

  return (
    <div id="portfolio">
      <div className="container">
        <div className="section-title center text-center">
          <h2>Plants</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="categories">
          <ul className="cat">
            <li>
              <ol className="type">
                <li>
                  <a href="#" data-filter="*" className="active">
                    All
                  </a>
                </li>
                {filterArr}{' '}
              </ol>
            </li>
          </ul>
          <div className="clearfix"></div>
        </div>
        <div className="row">
          <div className="portfolio-items">{pictureArr} </div>
        </div>
      </div>
    </div>
  )
}

export default Categroy
