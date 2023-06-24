import React from 'react';

export default function SpecialOffers() {
    return (
        <section className="jumbotron special-food-menu">
            <div className="dark-bg-opacity">
                <div className="container">
                    <div className="carousel-title mb-5">
                        <h1 className="text-light no-margin-top text-center-sm text-center-xs">Special Offers</h1>
                    </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    {/* Carousel One */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center cards-group">
                                <div className="card ml-2 mr-2 special-card">
                                    <img src="/images/card1.jpg" class="card-img-top card-img" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Food Paradise</h3>
                                        <p className="card-text text-muted">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.</p>
                                        <h6 className="text-danger mt-2 font-weight-bold">About 20% Off</h6>
                                    </div>
                                </div>
                                <div className="card ml-2 mr-2 special-card">
                                    <img src="/images/card2.jpg" class="card-img-top card-img" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Vanilla Food</h3>
                                        <p className="card-text text-muted">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.</p>
                                        <h6 className="text-danger mt-2 font-weight-bold">About 20% Off</h6>
                                    </div>
                                </div>
                                <div className="card ml-2 mr-2 special-card">
                                    <img src="/images/card3.jpg" class="card-img-top card-img" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Food Basera</h3>
                                        <p className="card-text text-muted">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.</p>
                                        <h6 className="text-danger mt-2 font-weight-bold">About 50% Off</h6>
                                    </div>
                                </div>
                                <div className="card ml-2 mr-2 special-card">
                                    <img src="/images/card4.jpg" class="card-img-top card-img" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Thai Food</h3>
                                        <p className="card-text text-muted">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.</p>
                                        <h6 className="text-danger mt-2 font-weight-bold">About 30% Off</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Carousel Two */}
                        <div className="carousel-item">
                            <div className="d-flex justify-content-center cards-group">
                                <div className="card ml-2 mr-2 special-card">
                                    <img src="/images/card5.jpg" class="card-img-top card-img" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Taj Mahal Food</h3>
                                        <p className="card-text text-muted">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.</p>
                                        <h6 className="text-danger mt-2 font-weight-bold">About 20% Off</h6>
                                    </div>
                                </div>
                                <div className="card ml-2 mr-2 special-card">
                                    <img src="/images/indian-biriyani.jpg" className="card-img-top card-img" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Indian Biriyani</h3>
                                        <p className="card-text text-muted">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.</p>
                                        <h6 className="text-danger mt-2 font-weight-bold">About 10% Off</h6>
                                    </div>
                                </div>
                                <div className="card ml-2 mr-2 special-card">
                                    <img src="/images/kacchi.jpg" class="card-img-top card-img" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Green Bawarchi</h3>
                                        <p className="card-text text-muted">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.</p>
                                        <h6 className="text-danger mt-2 font-weight-bold">About 20% Off</h6>
                                    </div>
                                </div>
                                <div className="card ml-2 mr-2 special-card">
                                    <img src="/images/card6.jpg" class="card-img-top card-img" alt="..." />
                                    <div className="card-body">
                                        <h3 className="card-title">Chineese</h3>
                                        <p className="card-text text-muted">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.</p>
                                        <h6 className="text-danger mt-2 font-weight-bold">About 5% Off</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Carousel Buttons To Control */}
                    <a className="carousel-control-prev offer-slide" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next offer-slide" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
