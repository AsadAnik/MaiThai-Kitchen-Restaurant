import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateProduct } from '@/redux/actions/productActions';
import { updateUser } from '@/redux/actions/userActions';
import { CLEAR_DATA } from '@/redux/constants/productConstants';


const useUpdateItem = (type, typeFor, selectedItem, setSelectedItemData) => {
    const dispatch = useDispatch();
    const item = useSelector((state) => state[`${typeFor}`]);

    // Update Product Hook...
    useEffect(() => {
        if (item?.error) {
            toast.error(`${item?.error}!`, {
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
            });
        }

        if (item?.updated) {
            toast.warn(`Item Updated! [${item[`${type}`]._id}]`, {
                position: "top-center",
                autoClose: 2000,
            });
        }

        return () => {
            dispatch({ type: CLEAR_DATA });
        };

    }, [item?.error, item && item[`${type}`]]);


    // One Item Set For Update..
    useEffect(() => {
        if (selectedItem._id) {
            if (type === 'product') {
                setSelectedItemData({
                    name: selectedItem.name,
                    details: selectedItem.details,
                    price: selectedItem.price,
                    image: selectedItem.image,
                    category: selectedItem.category,
                    stock: selectedItem.stock,
                });
            }

            if (type === 'user') {
                setSelectedItemData({
                    name: selectedItem.name,
                    email: selectedItem.email,
                    role: selectedItem.role,
                });
            }
        }

        return () => {
            setSelectedItemData({});
        };
    }, [selectedItem]);

    return [item?.loading, item && item[`${type}`]];
};


// Update Item Handler..
export const handleUpdateItem = (event, type, dispatch, updatedItemLoading, modal, setModal, selectedItem, selectedItemData) => {
    event.preventDefault();

    // Dispatch to Update Product..
    if (selectedItem && selectedItemData) {
        switch (type) {
            case "product":
                dispatch(updateProduct(selectedItem, selectedItemData));
                break;

            case "user":
                dispatch(updateUser(selectedItem, selectedItemData));
                break;

            default:
                return null;
        }
    }

    if (!updatedItemLoading) {
        setModal({ ...modal, updateModal: false });
    }
};

export default useUpdateItem;