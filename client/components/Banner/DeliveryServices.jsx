import { FaShippingFast, FaDollarSign, FaCcApplePay, FaHandsHelping } from 'react-icons/fa';

export default function DeliveryServices() {
    return (
        <section className="jumbotron jumbo-one mt-0 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-jumbo-one">
                        <div className="rounded-icon">
                            <FaShippingFast />
                        </div>
                        <p>Fast Delivery</p>
                    </div>
                    <div className="col-md-3 col-jumbo-one">
                        <div className="rounded-icon">
                            <FaDollarSign />
                        </div>
                        <p>Minimum order £10</p>
                    </div>
                    <div className="col-md-3 col-jumbo-one">
                        <div className="rounded-icon">
                            <FaCcApplePay />
                        </div>
                        <p>Pay via Card/Cash</p>
                    </div>
                    <div className="col-md-3 col-jumbo-one">
                        <div className="rounded-icon">
                            <FaHandsHelping />
                        </div>
                        <p>Deals Discounts</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
