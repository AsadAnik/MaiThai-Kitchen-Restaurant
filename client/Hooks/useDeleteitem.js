import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteProduct } from '@/redux/actions/productActions';
import { deleteUser } from '@/redux/actions/userActions';
import { CLEAR_DATA } from '@/redux/constants/productConstants';


const useDeleteItem = (type, typeFor) => {
    const dispatch = useDispatch();
    const item = useSelector((state) => state[`${typeFor}`]);

    // Delete Product Hook..
    useEffect(() => {
        if (item?.error) {
            toast.error(`${item?.error}!`, {
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
            });
        }

        if (item?.deleted) {
            toast.error(`Item Deleted! [${item[`${type}`]._id}]`, {
                position: "top-center",
                autoClose: 2000,
            });
        }

        return () => {
            dispatch({ type: CLEAR_DATA });
        };

    }, [item?.error, item && item[`${type}`]]);

    return [item && item[`${type}`]];
};


// Handle Delete Item..
export const handleItemDelete = (event, type, dispatch, itemId) => {
    event.preventDefault();
    const shouldDelete = window.confirm("Are you sure want to delete?");

    if (shouldDelete) {
        if (type === 'product') {
            dispatch(deleteProduct(itemId));
        }

        if (type === 'user') {
            dispatch(deleteUser(itemId));
        }
    }
};

export default useDeleteItem;