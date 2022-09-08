const Home = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>
                Welcome to
                <span> Bungalook Nursery</span>
              </h2>
              <hr />
              <p>
                The Bungalook Nursery is run by the Whitehorse Community
                Indigenous Plant Project (WCIPP).
              </p>
              <p>
                We are a volunteer-run, not-for-profit group which supplies
                locally indigenous plants to the Whitehorse community, parks and
                City Council.
              </p>

              <a href="#services" className="btn btn-custom btn-lg page-scroll">
                View All Services
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="about-media">
              <img src="/img/about-1.jpg" alt=" " />
            </div>
            <div className="about-desc">
              <h3>Garden Care</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam sedasd commodo nibh ante
                facilisis.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="about-media">
              <img src="/img/about-2.jpg" alt=" " />
            </div>
            <div className="about-desc">
              <h3>Lawn Care</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                sed dapibus leo nec ornare diam sedasd commodo nibh ante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
