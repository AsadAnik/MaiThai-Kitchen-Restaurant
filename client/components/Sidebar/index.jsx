import { useState } from 'react';
import { Slider, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getProducts } from '@/redux/actions/productActions';

const categories = ["All", "Fast Food", "Curry", "Thai", "Vagetable", "Soup"];


export default function Sidebar({ setOnFilter }) {
    const dispatch = useDispatch();
    const [price, setPrice] = useState([0, 3000]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);


    // Range Slider's New Price Setting When Changes..
    const handlePriceChange = (_event, newPrice) => {
        setPrice(newPrice);

        // Price range is greater than or equal to 1
        setOnFilter(true);
        dispatch(getProducts(null, null, null, price));

        // Check if price range is less than 1
        if (newPrice[0] < 1) {
            setOnFilter(false);
        }
    };

    // Handle When Change Category Select..
    const handleCategory = (_, cate) => {
        dispatch(getProducts(null, null, null, null, cate));
    };


    return (
        <>
            <div className="filter-item left-aside col-md-3 col-sm-4 col-xs-12">

                {/*--------- Collapse Bar ---------*/}
                {/* <div className="food-menu-title mb-2">
                    <h3>Food Menu</h3>
                </div> */}


                <div className="filter-box">
                    <fieldset>
                        <Typography>Price</Typography>
                        <Slider
                            value={price}
                            onChangeCommitted={handlePriceChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            min={0}
                            max={3000}
                        />
                    </fieldset>

                    <fieldset>
                        <Typography component="legend">Ratings Above</Typography>

                        <Slider
                            value={ratings}
                            onChange={(_event, newRating) => setRatings(newRating)}
                            valueLabelDisplay="auto"
                            aria-labelledby="continuous-slider"
                            min={0}
                            max={5}
                        />
                    </fieldset>

                    <Typography>Category</Typography>
                    <ul className="category-box">
                        {categories.map(category => (
                            <li
                                className="category-link"
                                key={category}
                                onClick={(event) => handleCategory(event, category)}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* END of Left Side Bar */}
            </div>
        </>
    )
}
