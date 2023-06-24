
export default function FoodsContent() {
    return (
        <>
            <section className="container mt-5">
                <div className="text-center mb-4 d-block">
                    <h1 style={{ color: 'tomato', textAlign: 'center' }} className="text-shadow our-food-style-title">Our Food Styles</h1>
                    <div className="underline mt-2" style={{ borderBottom: '4px solid tomato', width: '5rem', position: 'absolute', left: '50%', transform: 'translate(-50%, 0)' }}>
                    </div>
                </div>
                {/* Top Sale Foods 1st ROW */}
                <div className="row mb-5 mt-5 top-sales-food">
                    <div className="col-md-4">
                        <div className="card special-food-card" style={{ width: '20rem' }}>
                            <div className="cart-top-banner" />
                            <img src="/images/gellary/ma7.jpg" className="card-img-top cart-img food-style-cart" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase font-weight-bold">big 8</h5>
                                <p className="text-danger mb-2 font-weight-bold">$800.00</p>
                                <p className="text-muted mb-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit blanditiis libero
                                    debitis!
                                </p>
                                <a href="#" className="btn btn-custom">
                                    <i className="fas fa-plus-circle" />
                                    <span className="text-capitalize">add cart</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* COL */}
                    <div className="col-md-4">
                        <div className="card special-food-card" style={{ width: '20rem' }}>
                            <div className="cart-top-banner" />
                            <img src="/images/gellary/ma8.jpg" className="card-img-top cart-img food-style-cart" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase font-weight-bold">triple treat meal</h5>
                                <p className="text-danger mb-2 font-weight-bold">$999.00</p>
                                <p className="text-muted mb-2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum omnis id, ut cumque.
                                </p>
                                <a href="#" className="btn btn-custom">
                                    <i className="fas fa-plus-circle" />
                                    <span className="text-capitalize">add cart</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* COL */}
                    <div className="col-md-4">
                        <div className="card special-food-card" style={{ width: '20rem' }}>
                            <div className="cart-top-banner" />
                            <img src="/images/gellary/ma9.jpg" className="card-img-top cart-img food-style-cart" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase font-weight-bold">Buddy Rice Combo</h5>
                                <p className="text-danger mb-2 font-weight-bold">$899.00</p>
                                <p className="text-muted mb-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente tenetur repellendus
                                    necessitatibus.
                                </p>
                                <a href="#" className="btn btn-custom">
                                    <i className="fas fa-plus-circle" />
                                    <span className="text-capitalize">add cart</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Top Sale Foods 2nd ROW */}
                <div className="row mb-5">
                    <div className="col-md-4">
                        <div className="card special-food-card" style={{ width: '20rem' }}>
                            <div className="cart-top-banner" />
                            <img src="/images/gellary/ma10.jpg" className="card-img-top cart-img food-style-cart" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase font-weight-bold">Buddy Zinger Combo</h5>
                                <p className="text-danger mb-2 font-weight-bold">$800.00</p>
                                <p className="text-muted mb-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit blanditiis libero
                                    debitis!
                                </p>
                                <a href="#" className="btn btn-custom">
                                    <i className="fas fa-plus-circle" />
                                    <span className="text-capitalize">add cart</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* COL */}
                    <div className="col-md-4">
                        <div className="card special-food-card" style={{ width: '20rem' }}>
                            <div className="cart-top-banner" />
                            <img src="/images/gellary/ma5.jpg" className="card-img-top cart-img food-style-cart" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase font-weight-bold">Zing N Fries Meal</h5>
                                <p className="text-danger mb-2 font-weight-bold">$999.00</p>
                                <p className="text-muted mb-2">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum omnis id, ut cumque.
                                </p>
                                <a href="#" className="btn btn-custom">
                                    <i className="fas fa-plus-circle" />
                                    <span className="text-capitalize">add cart</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* COL */}
                    <div className="col-md-4">
                        <div className="card special-food-card" style={{ width: '20rem' }}>
                            <div className="cart-top-banner" />
                            <img src="/images/gellary/ma6.jpg" className="card-img-top cart-img food-style-cart" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase font-weight-bold">Stay at Home Bucket</h5>
                                <p className="text-danger mb-2 font-weight-bold">$899.00</p>
                                <p className="text-muted mb-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sapiente tenetur repellendus
                                    necessitatibus.
                                </p>
                                <a href="#" className="btn btn-custom">
                                    <i className="fas fa-plus-circle" />
                                    <span className="text-capitalize">add cart</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}
