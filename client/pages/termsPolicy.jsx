import withLayout from '@/layout';

const TermsPolicy = () => {
    return (
        <>
            {/*----------- SECTION of Banners Page ---------------*/}
            <section id="about-cover">
                <div className="jumbotron">
                    <div className="about-text-section">
                        <div className="about-cover text-light text-capitalize text-center">
                            <h1 className="display-3">terms<br />policy</h1>
                            <p>MaiThai is a restaurant.</p>
                            <p>Ordering Food &amp; Delivery from restaurants of choice.</p>
                            <p>Table booking &amp; Restaurants.</p>
                            <p>Deals &amp; Discounts</p>
                            <p>Party Halls online booking</p>
                        </div>
                    </div>
                </div>
            </section>


            {/*------------- All Terms and The Policies --------------*/}
            <section id="about-content" className="mb-5 mt-5">
                <div className="container text-center">
                    <h3 className="text-capitalize text-center mb-4">General</h3>
                    <p className="text-muted">
                        The terms <span className="headline-p">“Mai Thai Kitchen”</span> is Significant of our customer. The terms
                        "you" &amp; "your" refer to a visitor
                        or customer.
                        <br /> <br />
                        We reserve the right to access and to disclose personal information to comply with applicable laws and
                        lawful government requests or requests by applicable regulatory bodies, to operate our systems properly
                        or to protect either ourselves or our other users.
                        <br /> <br />
                        We may transfer, sell or assign any of the information described in this policy to our <span className="headline-p">"Mai Thai
                            Kitchen"</span> as a result of a sale, merger, consolidation, change of control, transfer of assets
                        or
                        reorganisation.
                        <br /> <br />
                        You consent to the transfer of your personal information outside of the european economic area (which
                        may not provide the same protection for such information as the united kingdom provides) in the event
                        that the processing of your information involves such a transfer
                    </p>
                    <br />
                    <hr />
                    <h3 className="text-capitalize text-center mb-4 mt-5">Monitoring Emails</h3>
                    <p className="text-muted">
                        We may monitor and keep records of email communications which you send to us and other communications
                        with you in accordance with this policy and our other business interests.
                    </p>
                    <br />
                    <hr />
                    <h3 className="text-capitalize text-center mb-4 mt-5">Safeguards and Security</h3>
                    <p className="text-muted">
                        No data transmission over the internet can be entirely secure, and therefore we cannot guarantee the
                        security of your personal information and/or use of our sites. however we use our reasonable endeavours
                        to protect the security of your personal information from unauthorised access or use by using secure
                        sockets layer 120-bit encryption.
                    </p>
                    <br />
                    <hr />
                    <h3 className="text-capitalize text-center mb-4 mt-5">Card Method </h3>
                    <p className="text-muted">
                        Mai Thai Kitchen takes great care to ensure your PayPal card information is safe. we use a secure
                        connection (secure transaction (https)) and once your transaction is completed, <span className="headline-p">"Mai Thai Kitchen"</span> does
                        not keep a record of your Paypal card number nor do we share customer details with any 3rd parties. the
                        only record <span className="headline-p">"Mai Thai Kitchen"</span> keeps is the authorisation number
                        received from the bank. this is to
                        ensure against the use of stolen cards.
                    </p>
                    <br />
                    <hr />
                    <h3 className="text-capitalize text-center mb-4 mt-5">Email Alerts</h3>
                    <p className="text-muted">
                        Emails may contain ids and information that are unique to each user. please do not divulge your password
                        or forward sensitive emails onto others as they could access your personal details stored in mango tree
                        systems.
                        <br /> <br />
                        In addition to our safeguards your personal information is protected in the uk by the data protection
                        act. this provides that the information which we hold about you should be processed fairly and lawfully
                        and should be accurate, relevant and not excessive. the information should, where necessary, be kept up
                        to date and not retained for longer than is necessary. please help us to keep your personal information
                        accurate by updating your registration details on the website.
                    </p>
                    <br />
                    <hr />
                    <h3 className="text-capitalize text-center mb-4 mt-5">Cancellation Policy</h3>
                    <p className="text-muted">
                        A 50% deposit of the total food bill is required once you have confirmed your group booking with us,
                        please note this need to be done via bank transfer or online. please note that the deposit is
                        non-refundable in the event of late cancellation or not re-booked.
                        <br /> <br />
                        Please note that a 48hrs notice is required if you want to cancel or drop the number of booking,
                        otherwise, you will be charged £20/person. we will only hold the table for 30 minutes from your
                        reservation time and if the party is not complete within the 30 minutes, your table will be released
                    </p>
                    <br />
                    <hr />
                    <h3 className="text-capitalize text-center mb-4 mt-5">More Information</h3>
                    <p className="text-muted">
                        For more information on the data protection act and the information commissioner please see
                        <mark><a href="http://www.informationcommissioner.gov.uk">http://www.informationcommissioner.gov.uk</a></mark>
                    </p>
                    <br />
                    <hr />
                    <h3 className="text-capitalize text-center mb-4 mt-5">Changing or accessing your information</h3>
                    <p className="text-muted">
                        You can inspect your personal details at any time and modify them by contacting the mango tree. should
                        you no longer wish to receive newsletters or services you have signed up for, or if you wish to review
                        or receive copies of the personal information we hold about you, or have any other queries please email
                        registration <mark><a href="register.html">registration@Maithai.uk</a></mark> including full details of
                        your request.
                        <br /> <br />
                        We may charge a small administration fee in relation to fulfilling a request for access to personal
                        information.
                    </p>
                </div>
            </section>

        </>
    );
};

export default withLayout(TermsPolicy);