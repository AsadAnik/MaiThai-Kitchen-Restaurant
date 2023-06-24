export default function Banner() {
    return (
        <div id="homeCarouselIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#homeCarouselIndicators" data-slide-to={0} className="active" />
                <li data-target="#homeCarouselIndicators" data-slide-to={1} />
            </ol>

            {/*-------- All Sliders Carousel's Here! -------*/}
            <div className="carousel-inner">
                {/*--------- The Carousels First Item here -----------*/}
                <div className="carousel-item active">
                    <section id="home-cover">
                        <div className="jumbotron">
                            <div className="dark-bg">
                                <div id="intro">
                                    <div id="intro-section" className="mb-4">
                                        <h1 className="intro-title text-uppercase mb-4">
                                            mai thai
                                            <br />
                                            <span>
                                                <small className="small">kitchen</small>
                                            </span>
                                        </h1>
                                        <h5 className="intro-info text-capitalize mb-3">find the best food, cafes &amp; cuisine.
                                        </h5>
                                    </div>

                                    {/* ----- Buttons Of the Banner ------ */}
                                    <a href="aboutUs.html" className="about-btn mt-4">Find Your Favorite Foods!</a>
                                    <a href="foodOrder.html" className="order-btn mt-4 ml-3">Order Food Online!</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/*------ Carousels 2nd Item here ------*/}
                <div className="carousel-item">
                    <section id="home-cover-2">
                        <div className="jumbotron">
                            <div className="dark-bg">
                                <div id="intro">
                                    <div id="intro-section" className="mb-4">
                                        <h1 className="intro-title home-slide-intro-2 mb-4" style={{ fontWeight: 500, fontSize: 50 }}>
                                            <span style={{ fontWeight: 'lighter' }}>
                                                "Short of screaming-hot Thai food,
                                            </span>
                                            <span className="text-light" style={{ fontWeight: 'bold' }}>
                                                everything can be suitable for kids too"
                                            </span>
                                        </h1>
                                    </div>
                                    <a href="aboutUs.html" className="about-btn mt-4">About Our Restaurant</a>
                                    <a href="foodOrder.html" className="order-btn mt-4 ml-3">Find Your Favorite Food Packge!</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Carousel's Arrow Buttons for Next & Previous */}
            <a className="carousel-control-prev home-slide-prev" href="#homeCarouselIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next home-slide-next" href="#homeCarouselIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}
