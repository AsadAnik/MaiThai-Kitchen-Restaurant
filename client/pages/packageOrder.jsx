import withLayout from '@/layout';
import { useGetItems } from '@/Hooks/useGetItems';
import PackageCard from '@/components/Foods/PackageCard';
import RenderItems from '@/Hooks/useRenderItems';

const PackageOrder = () => {
    const [loading, packages] = useGetItems('packages');

    // RENDER PACKAGES LIST..
    const renderPackages = (items) => {
        return items?.length && items.map((item) => (
            <div key={item._id}>
                <PackageCard item={item} />
            </div>
        ));
    };

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
                                <RenderItems loading={loading} items={packages}>
                                    {renderPackages(packages)}
                                </RenderItems>
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