export default function Subscription() {
    return (
        <section className="subcription mt-5" >
            <div className="container">
                <div className="row">
                    {/* Col-1 */}
                    <div className="col-md-3 col-xs-12 col-md-offset-1 col-md-pull-8 mr-5">
                        <div className="newsletters-phone">
                            <img src="/logo/mobile.png" alt="Mobilee" />
                        </div>
                    </div>
                    {/* Col-2 */}
                    <div className="col-md-8 col-xs-12 col-md-push-4 ml-4">
                        <div className="mt-5 subcription-to-phone-only">
                            <h2 style={{ color: '#ff6347' }}>The Best MAITHAI Delivery App!</h2>
                            <h5 className="mt-4">Download our free iOS, Windows phone and Android App and order food online the
                                fastest way possible.</h5>
                            {/* Buttons For Android, Apple, Microsoft */}
                            <div className="d-flex mt-4">
                                <a href="https://apps.apple.com/in/app/mai-thai/id1524480953"><img src="/logo/apple-badge.png" alt="Download on app store" className="img img-fluid" /></a>
                                <a href="https://play.google.com/store/apps/details?id=com.eposhybrid.maithai&gl=GB" className="ml-4"><img src="/logo/google-play-badge.png" alt="Get it on Google Play" className="img img-fluid" /></a>
                                {/* <a href="#" class="ml-4"><img src="assets/logo/windows-badge.png"
                          alt="Download from windows phone store" class="img img-fluid"></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
