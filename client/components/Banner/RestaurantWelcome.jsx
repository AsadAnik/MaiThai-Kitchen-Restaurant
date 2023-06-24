export default function RestaurantWelcome() {
    return (
        <>
            <section className="container mb-4">
                <div className="mt-5 row">
                    {/* Aside LeftSide */}
                    <aside className="col-md-6 text-center">
                        <div className="card" style={{ width: '33rem', minHeight: 380 }}>
                            <div className="card-body">
                                <h1 className="card-title text-capitalize m-4" style={{ color: 'tomato' }}>welcome to MAITHAI</h1>
                                <h6 className="card-subtitle mb-2">Get Best, Feel Happy!</h6>
                                <p className="card-text text-muted" style={{ fontSize: 13, wordSpacing: 2, letterSpacing: '0.5px' }}>Mai Thai Delivers
                                    Deliciously Authentic Thai Mai Kitchen &amp; an atmosphere that is friendly and fun for the
                                    whole family. Our authentic Thai Mai Menu balances elements of sweet and sour, salt and
                                    spice to bring the best Thai Flavours
                                    to your Table. Prepared by experienced Thai Chefs, We offer a range of dishes from the
                                    classic Pad Thai to Authentic Thai curries.</p>
                                <a href="aboutUs.html" className="btn btn-custom m-4">
                                    <span className="text-uppercase">more info</span>
                                </a>
                            </div>
                        </div>
                    </aside>
                    {/* Aside RightSide */}
                    <aside className="col-md-6">
                        <img src="/images/mai.png" alt="PIZZAAA" className="img img-fluid" style={{ minHeight: 380 }} />
                    </aside>
                </div>
            </section>
            <br />
            <hr />
        </>
    )
}
