import { useState, useEffect } from 'react';
import Sidebar from '@/components/dashboard/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import useGetItems from '@/Hooks/useGetItems';
import useCreateItem, { handleCreateItem } from '@/Hooks/useCreateItem';
import useUpdateItem, { handleUpdateItem } from '@/Hooks/useUpdateItem';
import useDeleteItem, { handleItemDelete } from '@/Hooks/useDeleteitem';
import useSelectedItem from '@/Hooks/useSelectedItem';
import { primaryColor } from '@/utils/variables';
import SkeletonLaoding from '@/components/widgets/Loading/Skeleton';
import Modal from '@/components/widgets/Modal';
import SearchWithSuggestion from '@/components/dashboard/SearchWithSuggestion';


// Food Management Component..
const FoodsManage = () => {
    const dispatch = useDispatch();

    const [searchVal, setSearchVal] = useState(null);
    const [dataRow, setDataRow] = useState([]);
    const [modal, setModal] = useState({
        createModal: false,
        updateModal: false,
    });
    const [newProductData, setNewProductData] = useState({
        name: '',
        details: '',
        image: '',
        price: '',
        category: '',
    });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedProductData, setSelectedProductData] = useState({
        name: '',
        details: '',
        image: '',
        price: '',
        category: '',
        stock: 0,
    });

    const [newProductLoading, newProduct] = useCreateItem('product', 'newProduct');
    const [productLoading, product] = useSelectedItem('product', selectedProduct);
    const [updatedProductLoading, updatedProduct] = useUpdateItem('product', 'updatedProduct', product, setSelectedProductData);
    const [deletedProduct] = useDeleteItem('product', 'deletedProduct');
    const [loading, products] = useGetItems('products', newProduct, updatedProduct, deletedProduct);


    // Fill the DataRow Row for DataGrid-X..
    useEffect(() => {
        if (products) {
            let row = [];

            if (searchVal?.length > 1) {
                products.filter(product => product.name?.toLowerCase().indexOf(searchVal.toLowerCase()) > -1)
                    .forEach((item) => {
                        row.push({
                            id: item._id,
                            price: item.price,
                            name: item.name,
                            category: item.category?.toUpperCase(),
                            stock: item?.stock,
                        });
                    });
            }

            if (!searchVal) {
                products.forEach((item) => {
                    row.push({
                        id: item._id,
                        price: item.price,
                        name: item.name,
                        category: item.category?.toUpperCase(),
                        stock: item?.stock,
                    });
                });
            }

            setDataRow(row);
        }

        return () => {
            setDataRow([]);
        };
    }, [products, searchVal]);


    // Fill the DataRow Column for DataGrid-X..
    const columns = [
        { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5, headerClassName: 'custom-header' },
        { field: "name", headerName: "Name", minWidth: 100, flex: 1, headerClassName: 'custom-header' },
        { field: "stock", headerName: "Stock", minWidth: 50, flex: 0.3, headerClassName: 'custom-header' },
        { field: "category", headerName: "Category", minWidth: 100, flex: 0.5, headerClassName: 'custom-header' },
        { field: "price", headerName: "Price", minWidth: 100, flex: 0.5, headerClassName: 'custom-header' },
        {
            field: "actions", headerName: "Actions", minWidth: 100, type: "number", sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <button onClick={() => {
                            setSelectedProduct(params.id);
                            setModal({ ...modal, updateModal: true });
                        }}>
                            <BiEdit color="orange" />
                        </button>

                        <button onClick={(event) => handleItemDelete(event, 'product', dispatch, params.id)}>
                            <AiFillDelete color="red" />
                        </button>
                    </>
                );
            },
            headerClassName: 'custom-header'
        }
    ];

    // Columns for DataGrid-X..
    const customStyles = `
        .custom-header {
            background-color: ${primaryColor};
        }
    `;


    return (
        <Sidebar>
            <div className="container mt-5">
                <div className="row mb-3">
                    <div className="col-md-3">
                        <h5 className='mb-2' style={{ marginTop: '0.5rem' }}>Foods Management</h5>
                    </div>

                    <div className="col-md-6">
                        <SearchWithSuggestion dataRow={dataRow} searchVal={searchVal} setSearchVal={setSearchVal} />
                    </div>

                    <div className="col-md-3">
                        <button
                            className="btn w-100 skyCardButton"
                            style={{ backgroundColor: primaryColor, color: "white", marginTop: '0.5rem' }}
                            onClick={() => setModal({ ...modal, createModal: true })}
                        >
                            Create Food
                        </button>

                        {/* ===== Create Product ===== */}
                        <Modal
                            open={modal.createModal}
                            title="Cook Food"
                            handleClose={() => setModal({ ...modal, createModal: false })}
                        >
                            <form onSubmit={(event) => handleCreateItem(event, "product", dispatch, newProductLoading, newProductData, modal, setModal)}>
                                <div className='mb-2'>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Name'
                                        onChange={(event) => setNewProductData({ ...newProductData, name: event.target.value })}
                                        required
                                    />
                                </div>

                                <div className='mb-2'>
                                    <label>Details</label>
                                    <textarea
                                        type="text"
                                        className='form-control'
                                        placeholder='Details'
                                        onChange={(event) => setNewProductData({ ...newProductData, details: event.target.value })}
                                    />
                                </div>

                                <div className='mb-2'>
                                    <label>Image</label>
                                    <input
                                        type="file"
                                        className='form-control p-1'
                                    />
                                </div>

                                <p>Or,</p>

                                <div className='mb-2'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='image url'
                                        onChange={(event) => setNewProductData({ ...newProductData, image: event.target.value })}
                                    />
                                </div>

                                <div className='mb-2'>
                                    <label>Price</label>
                                    <input
                                        type="number"
                                        className='form-control'
                                        placeholder='120 BDT'
                                        required
                                        onChange={(event) => setNewProductData({ ...newProductData, price: event.target.value })}
                                    />
                                </div>

                                <div className='mb-2'>
                                    <label>Category</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Category'
                                        required
                                        onChange={(event) => setNewProductData({ ...newProductData, category: event.target.value })}
                                    />
                                </div>

                                <button type='submit' className='btn btn-success w-100' disabled={newProductLoading && true}>Cook</button>
                            </form>
                        </Modal>


                        {/* ===== Update Product ===== */}
                        {selectedProduct && !productLoading && (
                            <Modal
                                open={modal.updateModal}
                                title="Edit Food"
                                handleClose={() => setModal({ ...modal, updateModal: false })}
                            >
                                <form onSubmit={(event) => handleUpdateItem(event, "product", dispatch, updatedProductLoading, modal, setModal, selectedProduct, selectedProductData)}>
                                    <h6 className='text-light text-center bg-dark p-1 mb-2'>{selectedProduct}</h6>

                                    <div className='mb-2'>
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder='Name'
                                            value={selectedProductData.name}
                                            onChange={(event) => setSelectedProductData({ ...selectedProductData, name: event.target.value })}
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label>Details</label>
                                        <textarea
                                            type="text"
                                            className='form-control'
                                            placeholder='Details'
                                            value={selectedProductData.details}
                                            onChange={(event) => setSelectedProductData({ ...selectedProductData, details: event.target.value })}
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label>Image</label>
                                        <input
                                            type="file"
                                            className='form-control p-1'
                                        />
                                    </div>

                                    <p>Or,</p>

                                    <div className='mb-2'>
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder='Image'
                                            value={selectedProductData.image}
                                            onChange={(event) => setSelectedProductData({ ...selectedProductData, image: event.target.value })}
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label>Price</label>
                                        <input
                                            type="number"
                                            className='form-control'
                                            placeholder='120 BDT'
                                            value={selectedProductData.price}
                                            onChange={(event) => setSelectedProductData({ ...selectedProductData, price: event.target.value })}
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label>Category</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder='Category'
                                            value={selectedProductData.category}
                                            onChange={(event) => setSelectedProductData({ ...selectedProductData, category: event.target.value })}
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label>Stock</label>
                                        <input
                                            type="number"
                                            className='form-control'
                                            placeholder='Stock'
                                            value={selectedProductData.stock}
                                            onChange={(event) => setSelectedProductData({ ...selectedProductData, stock: event.target.value })}
                                        />
                                    </div>

                                    <button type='submit' className='btn btn-warning w-100' disabled={updatedProductLoading && true}>Update</button>
                                </form>
                            </Modal>
                        )}
                    </div>
                </div>

                {
                    !loading ? (
                        <>
                            <style>{customStyles}</style>
                            <DataGrid
                                className="productListTable"
                                rows={dataRow}
                                columns={columns}
                                pageSize={10}
                                disableSelectionOnClick
                                autoHeight
                            />
                        </>
                    )
                        : (
                            <SkeletonLaoding size={3} inline />
                        )
                }
            </div>
        </Sidebar>
    );
};

export default FoodsManage;