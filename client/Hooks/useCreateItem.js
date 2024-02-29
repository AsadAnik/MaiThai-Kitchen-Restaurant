import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { createProduct } from '@/redux/actions/productActions';
import { CLEAR_DATA } from '@/redux/constants/productConstants';
import { createPackage } from '@/redux/actions/packageActions';


const useCreateItem = (type, typeFor) => {
    const dispatch = useDispatch();
    const item = useSelector((state) =>  state[`${typeFor}`]);

    // Create Prodcut Hook..
    useEffect(() => {
        if (item?.error) {
            toast.error(`${item.error}!`, {
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
            });
        }

        if (item?.success) {
            toast.success(`Item Added!`, {
                position: "top-center",
                autoClose: 2000,
            });
        }

        return () => {
            dispatch({ type: CLEAR_DATA });
        };

    }, [item?.error, item && item[`${type}`]]);

    return [item?.loading, item && item[`${type}`]];
};


// Handle Create Item..
export const handleCreateItem = (event, type, dispatch, newItemLoading, newItemData, modal, setModal) => {
    event.preventDefault();

    switch (type) {
        case "product":
            // Dispatch to Create Product..
            dispatch(createProduct(newItemData));
            break;
        
        case 'package': 
            // Dispatch to create package
            dispatch(createPackage(newItemData));
            break;
        default:
            return null;
    }

    if (!newItemLoading) {
        setModal({ ...modal, createModal: false });
    }
};

export default useCreateItem;