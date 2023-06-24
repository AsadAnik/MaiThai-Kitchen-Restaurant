import { useEffect, useState } from 'react';

const useProductFilter = (products, searchTerm) => {
    const [searchProducts, setSearchProducts] = useState([]);

    useEffect(() => {
        if (products?.length) {
            const searchedProducts = products.filter(product => {
                const productName = product.name?.toLowerCase();
                const userVal = searchTerm?.toLowerCase();
                return productName.indexOf(userVal) > -1;
            });
            setSearchProducts(searchedProducts);
        }

        return () => {
            setSearchProducts([]);
        };
    }, [searchTerm]);

    return [searchProducts];
};

export default useProductFilter;