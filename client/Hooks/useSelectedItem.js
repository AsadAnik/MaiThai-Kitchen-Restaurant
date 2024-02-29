import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { getOneProduct } from '@/redux/actions/productActions';
import { getOneUser } from '@/redux/actions/userActions';
import { getOnePackage } from '@/redux/actions/packageActions';

const useSelectedItem = (type, selectedItem) => {
    const dispatch = useDispatch();
    const item = useSelector((state) => state[`${type}`]);

    // Selected Items Error Handle and Dispatch for Item..
    useEffect(() => {
        if (item?.error) {
            toast.error(`${item?.error}!`, {
                position: "top-center",
                autoClose: 2000,
                theme: "colored",
            });
        }

        if (selectedItem) {
            if (type === 'product') {
                dispatch(getOneProduct(selectedItem));
            }

            if(type === 'package'){
                dispatch(getOnePackage(selectedItem));
            }

            if (type === 'user') {
                dispatch(getOneUser(selectedItem));
            }
        }
    }, [selectedItem, item?.error]);

    return [item?.loading, item && item[`${type}`]];
};

export default useSelectedItem;