import React, { useState, useEffect } from 'react';
import SearchDropdown from './SearchDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '@/redux/actions/productActions';
import useProductFilter from '@/Hooks/useProductFilter';

// Search Component..
export default function SearchBanner({ setOnSearch }) {
    const dispatch = useDispatch();
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [searchVal, setSearchVal] = useState('');
    const { error, allProducts } = useSelector((state) => state.products);
    const [searchProducts] = useProductFilter(allProducts, searchVal);

    useEffect(() => {
        if (error) {
            toast.error(`${error}!`, {
                position: "bottom-right",
                autoClose: 2000,
                theme: "colored",
            });
        }
    }, [error]);

    // To Handle Input Search Bar..
    const handleChange = (event) => {
        const { value } = event.target;

        if (value.length > 1) {
            setShowSuggestion(true);
        } else {
            setShowSuggestion(false);
            setOnSearch(false);
        }

        if (value.length === 0) {
            dispatch(getProducts(6, 1));
        }

        setSearchVal(value);
    };

    // Handle When Search Button Pressed..
    const handleSearchBtn = (event) => {
        event.preventDefault();

        if (showSuggestion) {
            setOnSearch(true);
        } else {
            setOnSearch(false);
        }

        dispatch(getProducts(null, null, searchVal));
        setShowSuggestion(false);
    };

    // Return Statement..
    return (
        <section id="home-cover" className="food-list-home-banner">
            <div className="jumbotron">
                <div className="dark-bg">
                    <div id="intro">
                        <div id="intro-section" className="mb-4">
                            <h5 className="intro-title text-uppercase mb-4">stock food grid combo</h5>
                        </div>

                        <div className="search-food mb-5">
                            <input
                                type="text"
                                placeholder="Find Your Choice!"
                                className="form-control"
                                onChange={(event) => handleChange(event)}
                            />

                            <button type="button" onClick={handleSearchBtn} className="btn btn-danger btn-custom text-uppercase">
                                <i className="fas fa-search" />
                                <span> </span>
                                <span>Search</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <SearchDropdown show={showSuggestion} searchProducts={searchProducts} />
        </section>
    )
}
