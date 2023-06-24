import withLayout from '@/layout';

const ContactUs = () => {

    return (
        <>
            <div>
                {/*--------- Contact Section ---------*/}
                <section id="contact-us">
                    <div id="add-restaurant" className="add-restaurant mb-5 mt-5 container">
                        <form action>
                            <div className="row mb-5">
                                <div className="col-md-12 text-center mt-5 d-block">
                                    <h2 className="text-capitalize contact-title">To Get contact with MaiThai add your message...</h2>
                                    <p className="text-capitalize">come &amp; contact with us</p>
                                    <div className="underline mt-3 m-auto" style={{ borderBottom: '4px solid tomato', width: '5rem', paddingTop: 15 }} />
                                </div>
                            </div>
                            {/* First Name, Last Name & Email */}
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="text" placeholder="Last Name" className="form-control" />
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="email" placeholder="Email" className="form-control" />
                                </div>
                            </div>
                            {/* Phone No, City, Address */}
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text" className="form-control" placeholder="Phone No." />
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="text" placeholder="City" className="form-control" />
                                </div>
                                <div className="col-md-4 form-group">
                                    <input type="text" placeholder="Address" className="form-control" />
                                </div>
                            </div>
                            {/* Describe About Restaurant TextArea */}
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <textarea name="description" id="description" cols rows={10} placeholder="Your Message..." className="form-control" defaultValue={""} />
                                </div>
                            </div>
                            {/* Submit Detail Button */}
                            <div className="row d-flex justify-content-center">
                                <div>
                                    <button type="submit" className="btn btn-lg text-light text-uppercase">submit your details</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <br />
                <hr />
            </div>


            <div>
                {/*------------- CONTACT US --------------*/}
                <section className="jumbotron contact-jumbo mb-4">
                    <div className="container">
                        {/* 1st Row */}
                        <div className="row">
                            <div className="col-md-12 text-center mb-5 d-block">
                                <h2 className="text-capitalize contact-title">contact us</h2>
                                <p className="text-capitalize">for any queries or concerns</p>
                                <div className="underline mt-3 m-auto" style={{ borderBottom: '4px solid tomato', width: '5rem', paddingTop: 15 }} />
                            </div>
                        </div>
                        {/* 2nd Row */}
                        <div className="row text-center">
                            <div className="col-md-4 d-block contact-col">
                                <div className="rounded-contact-icon m-auto">
                                    <i className="fas fa-map-marker-alt" />
                                </div>
                                <h6 className="font-weight-bold">Address</h6>
                                <p className="text-muted">
                                    37 High street Cheshunt, Waltham Cross, EN80BS, UK
                                </p>
                                <br />
                            </div>
                            <div className="col-md-4 d-block contact-col">
                                <div className="rounded-contact-icon m-auto">
                                    <i className="fas fa-phone" />
                                </div>
                                <h6 className="font-weight-bold">Telephone</h6>
                                <p className="text-muted">
                                    01992 641133
                                </p>
                                <br />
                            </div>
                            <div className="col-md-4 d-block contact-col">
                                <div className="rounded-contact-icon m-auto">
                                    <i className="fas fa-envelope" />
                                </div>
                                <h6 className="font-weight-bold">Email</h6>
                                <p className="text-muted">
                                    maithaikitchen@hotmail.com
                                </p>
                                <br />
                            </div>
                        </div>
                    </div>
                </section>
                <br />
            </div>



            {/*---------------------- Google Map API ---------------------*/}
            <div id="googleMap" className="map-container">
                <div id="map" style={{ height: 500, width: '100%', overflow: 'hidden !important' }} />
            </div>
        </>
    );
};

export default withLayout(ContactUs);