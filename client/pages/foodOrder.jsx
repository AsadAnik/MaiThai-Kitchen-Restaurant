import { useEffect, useState } from 'react';
import withLayout from '@/layout';
import SearchBanner from '@/components/Search/SearchBanner';
import Sidebar from '@/components/Sidebar';
import FoodCard from '@/components/Foods/FoodCard';
import Pagination from '@/components/widgets/Pagination';
import ShoppingCart from '@/components/widgets/Cart';
import SkeletonLaoding from '@/components/widgets/Loading/Skeleton';
import NotFound from '@/components/widgets/NotFound';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '@/redux/actions/productActions';
import { toast } from 'react-toastify';


// Food Oder Page Component..
const FoodOrder = () => {
  const dispatch = useDispatch();

  const { 
    loading, 
    error, 
    products, 
    searchedProducts, 
    currentPage, 
    perPage, 
    totalPages, 
    totalProducts 
  } = useSelector((state) => state.products);

  const [onSearch, setOnSearch] = useState(false);
  const [onFilter, setOnFilter] = useState(false);
  const [pageNo, setPageNo] = useState(currentPage);

  // Hook for Error Handling..
  useEffect(() => {
    if (error) {
      toast.error(`${error}!`, {
        position: "bottom-right",
        autoClose: 2000,
        theme: "colored",
      });
    }
  }, [error]);

  // Hook for Products Fetching..
  useEffect(() => {
      dispatch(getProducts(6, pageNo));
  }, [dispatch, pageNo]);


  // Render Foods Or Loading Skeleton..
  const renderFoods = (loading, foods) => {
    if (!foods?.length && !loading) {
      return (
        <>
          <NotFound title="Not Found Any Foods!" />
        </>
      )
    }

    if (!loading) {
      return foods?.map(food => (
        <div key={food._id}>
          <FoodCard
            productId={food._id}
            name={food.name}
            category={food.category}
            regularPrice={food.price}
            mainPrice={food.price}
            image={food.image}
          />
        </div>
      ))
    }

    return (
      <>
        <SkeletonLaoding size={6} />
      </>
    );
  };


  // Returning Statement..
  return (
    <>
      {/* ---- Search With Banner ---- */}
      <SearchBanner
        setOnSearch={setOnSearch}
      />

      {/* ----- Shopping Cart ------ */}
      <ShoppingCart />

      {/*------------ Food Grid Section ----------*/}
      <section id="food-list" className="mt-5 mb-5" style={{ minHeight: '50vh' }}>
        <div className="container">
          <div className="food-list-header">
            <h3 className="text-capitalize text-danger">
              {!onSearch ?
                `food grids, food catagories & (${totalProducts}) foods`
              :
                `Search Results Found: (${searchedProducts?.length}) Items`}
            </h3>
          </div>
          <hr />
          {/*----- The Main Food Grid and Food Search, Filtering Section ---------*/}
          <div className="food-list-body row">
            <Sidebar
              setOnFilter={setOnFilter}
            />

            {/*----------- Food List Area Here ------------*/}
            <div className="grid-area col-md-9 col-sm-8 col-xs-12">
              {/*----- Food Grid Cards With Row & Cols -------*/}
              <div className="row row-cols-1 row-cols-md-3">
                  {renderFoods(loading, !onSearch ? products : searchedProducts)}
              </div>

              {/*----------- Page Pagination Bar -----------*/}
              {!onSearch && !onFilter && totalPages > 1 && (
                <Pagination 
                  currentPage={currentPage} 
                  resultPerPage={perPage}
                  totalResultsCount={totalProducts}
                  handleCurrentPageNo={(event) => setPageNo(event)}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default withLayout(FoodOrder);