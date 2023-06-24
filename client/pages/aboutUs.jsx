import withLayout from '@/layout';

const AboutUs = () => {
    return (
        <>
            {/*----------- SECTION of Banners Page ---------------*/}
            <section id="about-cover">
                <div className="jumbotron">
                    <div className="about-text-section">
                        <div className="about-cover text-light text-capitalize text-center">
                            <h1 className="display-3">about <br /> maiThai!</h1>
                            <p>MaiThai is a restaurant.</p>
                            <p>Ordering Food &amp; Delivery from restaurants of choice.</p>
                            <p>Table booking &amp; Restaurants.</p>
                            <p>Deals &amp; Discounts</p>
                            <p>Party Halls online booking</p>
                        </div>
                    </div>
                </div>
            </section>


            {/*------------- About Pages Content --------------*/}
            <section id="about-content" className="mb-5 mt-5">
                <div className="container text-center">
                    <h1 className="text-capitalize text-center display-4 mb-4">What Does MaiThai do</h1>
                    <p className="text-muted">
                        At mai thai, we follow strict standard codes on service, quality and presentation. We always use the finest
                        ingredients in all of our delicacies to ensure that every dish we serve is delicious and nutritious.
                    </p>
                    <br />
                    <p className="text-muted">
                        Authentic traditional Thai dishes are prepared by our experienced chef using only excellent ingredients, making
                        every dish from our kitchen full of the true flavor’s of original Thai food.
                    </p>
                </div>
            </section>


            {/*------------ About pages 2nd Content ------------*/}
            <section id="about-content-2nd" className="mb-5">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <ul>
                                <li>Email, call or message us – 24 hours a day, every day.</li>
                                <li>A service that's 100% free and insanely intuitive to use.</li>
                                <li>A 100% free and insanely intuitive mobile site.</li>
                                <li>Easy re-ordering and pre-ordering for users.</li>
                                <li>Cash back for future orders through Paytmm.</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img src="/images/mai.png" alt className="img img-fluid img-thumbnail" style={{ height: 280, width: 450 }} />
                        </div>
                    </div>
                    <br />
                    <hr />
                </div>
            </section>


            <div>
                {/*--------- About pages 3rd Content ----------*/}
                <section id="about-content" className="mb-5">
                    <div className="container text-center">
                        {/* About Many Contents */}
                        <h3 className="text-capitalize text-center mb-4">"Authentic Meal for Every Man Jack"</h3>
                        <p className="text-muted">
                            <span className="headline-p">"Mai Thai Kitchen”</span> are more famous from UK at a celebration of the all variety
                            and abundance offered by the
                            seas, mountains, valleys and central plains. This wondrous bounty of fish, meats, vegetables, fruits, flowers
                            and spices have been meticulously utilized to create the 'traditionally modern' cuisine of Mai Thai Kitchen.
                            At Mai Thai kitchen, authentic traditional Thai dishes are prepared by our experienced chef using only excellent
                            ingredients, making every dish from our kitchen full of the true flavor’s of original Thai food.
                            We offer seasonal tasting menus that offer a journey throughout the different regions of the country, as well as
                            our chef’s creative versions of traditional favourite dishes.
                            <br /> <br />
                            The seasonal menus feature the freshest and most flavorful offerings of the spring, summer, fall, and winter
                            times of the year. The crops these changing season's produce vary due to the temperatures and rainfall of the
                            country. Mai Thai kitchen celebrates all the wonderful foods from all the regions of the country that UK offers.
                            If you are looking for an exquisite Thai restaurant to welcome your friends from overseas, Mai Thai kitchen is
                            the best choice to impress your friends with Traditional Thai Dishes.
                        </p>
                        <br />
                        <h3 className="text-capitalize text-center mb-4 mt-5">"Banquet Theory"</h3>
                        <p className="text-muted">
                            <span className="headline-p">"Short of screaming-hot Thai food, Everything can be suitable for kids too"</span>. We
                            believe that the distinct delicacy, refinement, and elegance is the charm and uniqueness of the Thai culture
                            echoed in Thai food. At Mai Thai Kitchen, only the best quality of seasonal ingredients are selected to create
                            our distinctive Thai dishes that capture the essence of the traditional charm, so that each dish reflects
                            authentic Thai culture.
                        </p>
                        <br />
                        <h3 className="text-capitalize text-center mb-4 mt-5">“Private VIP Events”</h3>
                        <p className="text-muted">
                            We will deliver bites that spark conversation and bring people together. Whatever your event, be it a special
                            occasion, a wedding, a birthday, or just that evening with family and friends, we are there for you. Our private
                            catering service takes into account all the factors that you consider when planning your party: the budget (big
                            or small), the size, the setting, and what you want to achieve for your special get- together.
                        </p>
                        <br />
                        <h3 className="text-capitalize text-center mb-4 mt-5">“Special Events”</h3>
                        <p className="text-muted">
                            Thai Rice Spoon knows you want your party to be talked about. We will bring our creativity to provide you with a
                            totally unique service. Tell us your plans and we'll go to the kitchen and create a fun and delicious menu
                            experience for your event.
                            <br /> <br />
                            You've been meaning to do for months and we are here for you.
                        </p>
                        <br />
                        <h3 className="text-capitalize text-center mb-4 mt-5">“Wedding Receptions”</h3>
                        <p className="text-muted">
                            You've said, 'I do'. Now we will too.
                            <br /> <br />
                            Thai Rice Spoon are true romantics. We understand that your big day is one of the most important days in your
                            life.
                            <br /> <br />
                            Thai Food is one of the best treats for your guests.
                        </p>
                        <br />
                        <h3 className="text-capitalize text-center mb-4 mt-5">“Beyond Pad Thai”</h3>
                        <p className="text-muted">
                            Thai food has been popular in the United States for decades. But recently there has been a renaissance in
                            regional Thai. What were once greasy and sugary pad Thais, coconut-heavy curries and bland chicken satay dishes
                            have become green papaya salads from the Northeast, rich and complex noodle dishes from around Bangkok, and
                            mouth-searing Indian-influenced curries from the South. Looking to go beyond the old takeout? Here’s where to
                            find great regional Thai across the country.
                        </p>
                    </div>
                </section>
                <br /><br />
            </div>



            {/*------- Founders Section of About Page ----------*/}
            <section id="about-founders">
                <div className="jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-capitalize text-center display-4 mb-5">founder of maiThai</h1>
                            </div>
                        </div>
                        <div className="row">
                            {/* Col-1 */}
                            <div className="col-md-4">
                                <div className="image middle">
                                    <img src="/images/founder.jpg" alt className="img img-fluid img-thumbnail" />
                                    {/*-----------The Image-Content Area-----------*/}
                                    {/* Founders Hover Social Icons Here */}
                                    {/* <div class="image-content">
            <div class="icons">
              <a href="#" class="icon fab fa-facebook"></a>
              <a href="#" class="icon fab fa-twitter"></a>
              <a href="#" class="icon fab fa-instagram"></a>
            </div>
          </div> */}
                                </div>
                            </div>
                            {/* Col-2 */}
                            <div className="col-md-8">
                                <div className="image-title content">
                                    <p className="text-capitalize">founder</p>
                                    <div className="underline-hr" />
                                    <p className="text-body-muted founders-some-talk-text">
                                        I Moved from BURIRAM to UK 2008. When I Focus on Thai Restaurant i try to maintain Proper Service and
                                        Well Food and also Dream to open own Thai cuisine. I'm food lover, Chef, and Tradeswoman. I was
                                        looking for open up my own shop for a while Excited got an opportunity to open at CHESHUNT, Broxbourne
                                        And Mai Thai Kitchen. I'm Super Excited to meet all my new customers and working with them
                                        Tasty's great Meal. By the way, All my customers are important to me, i like to know thier thought,
                                        Feedback and Suggestion. Please Don't Hesitate to let us know.
                                        Regards
                                        BEE
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default withLayout(AboutUs);