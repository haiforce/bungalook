

const HomePage = () => {

    return (
        <>
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand page-scroll" href="#page-top">Landscaper</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#about" className="page-scroll">About</a>
                            </li>
                            <li>
                                <a href="#services" className="page-scroll">Services</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="page-scroll">Gallery</a>
                            </li>
                            <li>
                                <a href="#testimonials" className="page-scroll">Testimonials</a>
                            </li>
                            <li>
                                <a href="#contact" className="page-scroll">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header id="header">
                <div className="intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 intro-text">
                                    <h1>Landscaping Services</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                                        Duis sed dapibus leo nec ornare diam.</p>
                                    <a href="#about" className="btn btn-custom btn-lg page-scroll">More Info</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <div className="about-text">
                                <h2>Welcome to
                                    <span>Landscaper</span>
                                </h2>
                                <hr/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                                <a href="#services" className="btn btn-custom btn-lg page-scroll">View All Services</a>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <div className="about-media">
                                <img src="/img/about-1.jpg" alt=" "/></div>
                            <div className="about-desc">
                                <h3>Garden Care</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis.</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <div className="about-media">
                                <img src="/img/about-2.jpg" alt=" "/>
                            </div>
                            <div className="about-desc">
                                <h3>Lawn Care</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="services">
                <div className="container">
                    <div className="col-md-10 col-md-offset-1 section-title text-center">
                        <h2>Our Services</h2>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-3 text-center">
                            <div className="service-media">
                                <img src="/img/services/service-1.jpg" alt=" "/>
                            </div>
                            <div className="service-desc">
                                <h3>Lawn Care</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="service-media">
                                <img src="img/services/service-2.jpg" alt=" "/>

                            </div>
                            <div className="service-desc">
                                <h3>Landscape Design</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="service-media">
                                <img src="img/services/service-3.jpg" alt=" "/>
                            </div>
                            <div className="service-desc">
                                <h3>Tree Care</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="service-media">
                                <img src="img/services/service-4.jpg" alt=" "/>
                            </div>
                            <div className="service-desc">
                                <h3>Spring and Fall Cleanup</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="portfolio">
                <div className="container">
                    <div className="section-title text-center center">
                        <h2>Project Gallery</h2>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                    </div>
                    <div className="categories">
                        <ul className="cat">
                            <li>
                                <ol className="type">
                                    <li>
                                        <a href="#" data-filter="*" className="active">All</a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".lawn">Lawn Care</a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".garden">Garden Care</a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".planting">Planting</a>
                                    </li>
                                </ol>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="row">
                        <div className="portfolio-items">
                            <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="/img/portfolio/01-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>Lorem Ipsum</h4>
                                            </div>
                                            <img src="/img/portfolio/01-small.jpg" className="img-responsive" alt="Project Title"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 planting">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="/img/portfolio/02-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>Adipiscing Elit</h4>
                                            </div>
                                            <img src="/img/portfolio/02-small.jpg" className="img-responsive" alt="Project Title"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="/img/portfolio/03-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>Lorem Ipsum</h4>
                                            </div>
                                            <img src="/img/portfolio/03-small.jpg" className="img-responsive" alt="Project Title"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="/img/portfolio/04-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>Lorem Ipsum</h4>
                                            </div>
                                            <img src="/img/portfolio/04-small.jpg" className="img-responsive" alt="Project Title"/>

                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 planting">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="/img/portfolio/05-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>Adipiscing Elit</h4>
                                            </div>
                                            <img src="/img/portfolio/05-small.jpg" className="img-responsive" alt="Project Title"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 garden">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="/img/portfolio/06-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>Dolor Sit</h4>
                                            </div>
                                            <img src="/img/portfolio/06-small.jpg" className="img-responsive" alt="Project Title"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 garden">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="/img/portfolio/07-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>Dolor Sit</h4>
                                            </div>
                                            <img src="/img/portfolio/07-small.jpg" className="img-responsive" alt="Project Title"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 lawn">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="/img/portfolio/08-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>Lorem Ipsum</h4>
                                            </div>
                                            <img src="/img/portfolio/08-small.jpg" className="img-responsive" alt="Project Title"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 planting">
                                <div className="portfolio-item">
                                    <div className="hover-bg">
                                        <a href="/img/portfolio/09-large.jpg" title="Project Title" data-lightbox-gallery="gallery1">
                                            <div className="hover-text">
                                                <h4>Adipiscing Elit</h4>
                                            </div>
                                            <img src="/img/portfolio/09-small.jpg" className="img-responsive" alt="Project Title"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="testimonials" className="text-center">
                <div className="overlay">
                    <div className="container">
                        <div className="section-title">
                            <h2>Testimonials</h2>
                            <hr/>
                        </div>
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div id="testimonial" className="owl-carousel owl-theme">
                                    <div className="item">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
                                        <p>- John DOE, Parker County, TX</p>
                                    </div>
                                    <div className="item">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
                                        <p>- Jenny DOE, Parker County, TX</p>
                                    </div>
                                    <div className="item">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
                                        <p>- John DOE, Parker County, TX</p>
                                    </div>
                                    <div className="item">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at duis sed dapibus leo nec ornare diam."</p>
                                        <p>- John DOE, Parker County, TX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="contact" className="text-center">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Contact Us</h2>
                        <hr/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
                    </div>
                    <div className="col-md-10 col-md-offset-1 contact-info">
                        <div className="col-md-4">
                            <h3>Address</h3>
                            <hr/>
                            <div className="contact-item">
                                <p>4321 California St,</p>
                                <p>San Francisco, CA 12345</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>Working Hours</h3>
                            <hr/>
                            <div className="contact-item">
                                <p>Monday-Saturday: 07:00 - 18:00</p>
                                <p>Sunday: CLOSED</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h3>Contact Info</h3>
                            <hr/>
                            <div className="contact-item">
                                <p>Phone: +1 123 456 1234</p>
                                <p>Email: info@company.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-md-offset-2">
                        <h3>Leave us a message</h3>
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" id="name" className="form-control" placeholder="Name" required/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" id="email" className="form-control" placeholder="Email" required/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea name="message" id="message" className="form-control"
                                    rows={4}
                                    placeholder="Message"
                                    required></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div id="success"></div>
                            <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            <div id="footer">
                <div className="container text-center">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="social">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                            </ul>
                        </div>
                        <p>&copy; 2016 Landscaper. Designed by
                            <a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
