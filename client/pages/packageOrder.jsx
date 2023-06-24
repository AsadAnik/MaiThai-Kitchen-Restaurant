import withLayout from '@/layout';

const PackageOrder = () => {
    return (
        <>
            {/*------------ Food List Section ----------*/}
            <section id="food-list" className="mt-5 mb-5">
                <div className="container">
                    <div className="food-list-header">
                        <h3 className="text-capitalize text-danger">all food list to chooce by flat order some parcentage off</h3>
                    </div>
                    <hr />

                    {/*----- The Main Food List and Food Search, Filtering Section ---------*/}
                    <div className="food-list-body row">
                        <div className="filter-item-food-package col-md-3 col-sm-4 col-xs-12">
                            
                            {/*--------- Collapse Bar ---------*/}
                            <div className="food-menu-title mb-2">
                                <h3 className="text-light">Food Menu</h3>
                            </div>
                            
                            
                            {/* END of Left Side Bar */}
                        </div>
                        {/*END of the Left Side Section*/}
                        {/*----------- Food List Area Here ------------*/}
                        <div className="list-area col-md-9 col-sm-8 col-xs-12">
                            <ul>
                                <li className="d-flex mb-4 all-food-list">
                                    {/* list-image */}
                                    <div className="list-img">
                                        <img src="assets/img/gellary/ma1.jpg" alt="Hotel Logo" />
                                    </div>
                                    {/* list-body */}
                                    <div className="list-body ml-4 mr-2">
                                        <h5>Eagle Boys Village Plaza</h5>
                                        <ul className="list-body-mini-list">
                                            <li><a href="#">Pizza</a></li>
                                            <li><a href="#">American</a></li>
                                            <li><a href="#">Sandwiches</a></li>
                                            <li><a href="#">Steak House</a></li>
                                            <li><a href="#">Pasta</a></li>
                                            <li><a href="#">Wraps</a></li>
                                        </ul>
                                        <p style={{ fontSize: 14 }} className="text-muted mt-2">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi eum aliquam. Accusamus
                                            cupiditate animi.
                                        </p>
                                    </div>
                                    {/* list-footer */}
                                    <div className="list-footer">
                                        <div className="discount-title">
                                            <h5 className="text-danger">$200 / <del>$240</del></h5>
                                        </div>
                                        <div className="list-footer-btn mt-4">
                                            <button className="btn-list-order">
                                                <i className="fas fa-plus-circle" />
                                                <span>Add Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex mb-4 all-food-list">
                                    {/* list-image */}
                                    <div className="list-img">
                                        <img src="assets/img/gellary/ma2.jpg" alt="Hotel Logo" />
                                    </div>
                                    {/* list-body */}
                                    <div className="list-body ml-4 mr-2">
                                        <h5>Eagle Boys Village Plaza</h5>
                                        <ul className="list-body-mini-list">
                                            <li><a href="#">Pizza</a></li>
                                            <li><a href="#">American</a></li>
                                            <li><a href="#">Sandwiches</a></li>
                                            <li><a href="#">Steak House</a></li>
                                            <li><a href="#">Pasta</a></li>
                                            <li><a href="#">Wraps</a></li>
                                        </ul>
                                        <p style={{ fontSize: 14 }} className="text-muted mt-2">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi eum aliquam. Accusamus
                                            cupiditate animi.
                                        </p>
                                    </div>
                                    {/* list-footer */}
                                    <div className="list-footer">
                                        <div className="discount-title">
                                            <h5 className="text-danger">$150 / <del>$240</del></h5>
                                        </div>
                                        <div className="list-footer-btn mt-4">
                                            <button className="btn-list-order">
                                                <i className="fas fa-plus-circle" />
                                                <span>Add Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex mb-4 all-food-list">
                                    {/* list-image */}
                                    <div className="list-img">
                                        <img src="assets/img/gellary/ma3.jpg" alt="Hotel Logo" />
                                    </div>
                                    {/* list-body */}
                                    <div className="list-body ml-4 mr-2">
                                        <h5>Eagle Boys Village Plaza</h5>
                                        <ul className="list-body-mini-list">
                                            <li><a href="#">Pizza</a></li>
                                            <li><a href="#">American</a></li>
                                            <li><a href="#">Sandwiches</a></li>
                                            <li><a href="#">Steak House</a></li>
                                            <li><a href="#">Pasta</a></li>
                                            <li><a href="#">Wraps</a></li>
                                        </ul>
                                        <p style={{ fontSize: 14 }} className="text-muted mt-2">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi eum aliquam. Accusamus
                                            cupiditate animi.
                                        </p>
                                    </div>
                                    {/* list-footer */}
                                    <div className="list-footer">
                                        <div className="discount-title">
                                            <h5 className="text-danger">$550 / <del>$640</del></h5>
                                        </div>
                                        <div className="list-footer-btn mt-4">
                                            <button className="btn-list-order">
                                                <i className="fas fa-plus-circle" />
                                                <span>Add Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex mb-4 all-food-list">
                                    {/* list-image */}
                                    <div className="list-img">
                                        <img src="assets/img/gellary/ma4.jpg" alt="Hotel Logo" />
                                    </div>
                                    {/* list-body */}
                                    <div className="list-body ml-4 mr-2">
                                        <h5>Eagle Boys Village Plaza</h5>
                                        <ul className="list-body-mini-list">
                                            <li><a href="#">Pizza</a></li>
                                            <li><a href="#">American</a></li>
                                            <li><a href="#">Sandwiches</a></li>
                                            <li><a href="#">Steak House</a></li>
                                            <li><a href="#">Pasta</a></li>
                                            <li><a href="#">Wraps</a></li>
                                        </ul>
                                        <p style={{ fontSize: 14 }} className="text-muted mt-2">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi eum aliquam. Accusamus
                                            cupiditate animi.
                                        </p>
                                    </div>
                                    {/* list-footer */}
                                    <div className="list-footer">
                                        <div className="discount-title">
                                            <h5 className="text-danger">$150 / <del>$240</del></h5>
                                        </div>
                                        <div className="list-footer-btn mt-4">
                                            <button className="btn-list-order">
                                                <i className="fas fa-plus-circle" />
                                                <span>Add Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-flex mb-4 all-food-list">
                                    {/* list-image */}
                                    <div className="list-img">
                                        <img src="assets/img/gellary/ma5.jpg" alt="Hotel Logo" />
                                    </div>
                                    {/* list-body */}
                                    <div className="list-body ml-4 mr-2">
                                        <h5>Eagle Boys Village Plaza</h5>
                                        <ul className="list-body-mini-list">
                                            <li><a href="#">Pizza</a></li>
                                            <li><a href="#">American</a></li>
                                            <li><a href="#">Sandwiches</a></li>
                                            <li><a href="#">Steak House</a></li>
                                            <li><a href="#">Pasta</a></li>
                                            <li><a href="#">Wraps</a></li>
                                        </ul>
                                        <p style={{ fontSize: 14 }} className="text-muted mt-2">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi eum aliquam. Accusamus
                                            cupiditate animi.
                                        </p>
                                    </div>
                                    {/* list-footer */}
                                    <div className="list-footer">
                                        <div className="discount-title">
                                            <h5 className="text-danger">$150 / <del>$240</del></h5>
                                        </div>
                                        <div className="list-footer-btn mt-4">
                                            <button className="btn-list-order">
                                                <i className="fas fa-plus-circle" />
                                                <span>Add Cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/*-END of This All Food List ul-*/}
                            {/*----------- Page Pagination Bar -----------*/}
                            <div className="pagination" aria-label="...">
                                <ul className="pagination pagination-sm">
                                    <li className="page-item active" aria-current="page">
                                        <span className="page-link">
                                            1
                                            <span className="sr-only">(current)</span>
                                        </span>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#">5</a></li>
                                    <li className="page-item"><a className="page-link" href="#">6</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default withLayout(PackageOrder);