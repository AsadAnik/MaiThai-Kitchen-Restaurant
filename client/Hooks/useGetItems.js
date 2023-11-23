import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getAdminProducts } from '@/redux/actions/productActions';
import { getUsers } from '@/redux/actions/userActions';

export const useGetItems = (type, newItem = '', updatedItem, deletedItem) => {
    const dispatch = useDispatch();
    const item = useSelector((state) => state[`${type}`]);

    // Hook for Products Fetching..
    useEffect(() => {
        if (item.error) {
            toast.error(`${item.error}!`, {
                position: "bottom-right",
                autoClose: 2000,
                theme: "colored",
            });
        }

        if (type === 'products') {
            dispatch(getAdminProducts());
        }

        if (type === 'users') {
            dispatch(getUsers());
        }

    }, [dispatch, newItem, updatedItem, deletedItem]);

    return [item?.loading, item[`${type}`]];
};

export default useGetItems;