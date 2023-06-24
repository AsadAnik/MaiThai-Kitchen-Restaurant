import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/actions/cartActions';
import { toast } from 'react-toastify';


export default function FoodCard({ productId, name, category, regularPrice, mainPrice, image }) {
    const dispatch = useDispatch();

    // AddToCart Button Handler..
    const changeAddToCartButton = () => {
        dispatch(addToCart(productId, 1));

        toast.success(`Added To Cart!`, {
            position: "top-center",
            autoClose: 2000,
            theme: "colored",
        });
    };

    return (
        <div className="col mb-4">
            <div className="card h-100">
                {/* <img src={`/images/${image}`} className="card-img-top img-thumbnail grid-card-img" alt="..." /> */}
                <img src={`${image}`} className="card-img-top img-thumbnail grid-card-img" alt="..." />
                <div className="card-body grid-body">
                    <h5 className="card-title">{name}</h5>
                    <ul className="list-body-mini-list">
                        <p className="text-muted">{category}</p>
                    </ul>
                    <hr />

                    <div className="d-grid grid-footer text-center">
                        <div className="discount-title">
                            <h5 className="text-danger">${regularPrice} / <del>${mainPrice}</del></h5>
                        </div>
                        <div className="grid-footer-btn mt-2">
                            <button
                                className="btn-grid-order text-capitalize"
                                onClick={changeAddToCartButton}
                            >
                                <i className="fas fa-plus-circle" />
                                <span>add cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
