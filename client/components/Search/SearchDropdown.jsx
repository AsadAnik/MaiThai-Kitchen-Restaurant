import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import SkeletonLaoding from '@/components/widgets/Loading/Skeleton';

// Search Suggestions Component..
export default function SearchDropdown({ show, searchProducts }) {
    const { loading, error, searchedProducts } = useSelector((state) => state.products);

    // Hook for Error Handling..
    useEffect(() => {
        if (error) {
            toast.error(`${error}`, {
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
            });
        }
    }, [error]);

    // Render Foods For Search Suggestions List..
    const renderFoodsToSuggestion = (foods) => {
        if (!foods?.length) {
            return (
                <>
                    <SkeletonLaoding size={2} inline />
                </>
            );
        }

        if (foods?.length > 0) {
            return foods.map(food => (
                <>
                    <li className="search-item mt-2" key={food._id}><a href="#">
                        <div className="image">
                            <img src={`${food.image}`} alt="card1" className="search-bar-image" />
                        </div>
                        <div className="nameAndPrice">
                            <div className="name">{food.name}</div>
                            <div className="price">{food.price} BDT</div>
                        </div>
                    </a></li>
                    <hr />
                </>
            ))
        }
    };


    if (loading) {
        return (
            <>
                Loading..
            </>
        );
    }

    return (
        <ul className="search-dropdown-menu" style={{ display: !show ? 'none' : 'block' }}>
            {renderFoodsToSuggestion(searchProducts)}
        </ul>
    )
}
