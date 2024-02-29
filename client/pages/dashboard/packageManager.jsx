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
const PackageManage = () => {
    const dispatch = useDispatch();

    const [searchVal, setSearchVal] = useState(null);
    const [dataRow, setDataRow] = useState([]);
    const [modal, setModal] = useState({
        createModal: false,
        updateModal: false,
    });
    const [newPackageData, setNewPackageData] = useState({
        name: "",
        price: '',
        category: "",
        details: "",
        image: "",
        package: [],
    });
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [selectedPackageData, setSelectedPackageData] = useState({
        name: '',
        details: '',
        image: '',
        price: '',
        category: '',
        stock: 0,
        package: []
    });


    const [newPackageLoading, newPackage] = useCreateItem('package', 'newPackage');
    const [packageLoading, packageReq] = useSelectedItem('package', selectedPackage);
    const [updatedPackageLoading, updatedPackage] = useUpdateItem('package', 'updatedPackage', packageReq, setSelectedPackageData);
    const [deletedPackage] = useDeleteItem('package', 'deletedPackage');
    const [loading, packages] = useGetItems('packages', newPackage, updatedPackage, deletedPackage);


    // Fill the DataRow Row for DataGrid-X..
    useEffect(() => {
        if (packages) {
            let row = [];

            if (searchVal?.length > 1) {
                packages.filter(pack => pack.name?.toLowerCase().indexOf(searchVal.toLowerCase()) > -1)
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
                packages.forEach((item) => {
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
    }, [packages, searchVal]);


    // Fill the DataRow Column for DataGrid-X..
    const columns = [
        { field: "id", headerName: "Package ID", minWidth: 200, flex: 0.5, headerClassName: 'custom-header' },
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
                            setSelectedPackage(params.id);
                            setModal({ ...modal, updateModal: true });
                        }}>
                            <BiEdit color="orange" />
                        </button>

                        <button onClick={(event) => handleItemDelete(event, 'package', dispatch, params.id)}>
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
                        <h5 className='mb-2' style={{ marginTop: '0.5rem' }}>Package Management</h5>
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
                            Create Package
                        </button>

                        {/* ===== Create Product ===== */}
                        <Modal
                            open={modal.createModal}
                            title="Cook Package"
                            handleClose={() => setModal({ ...modal, createModal: false })}
                        >
                            <form onSubmit={(event) => handleCreateItem(event, "package", dispatch, newPackageLoading, newPackageData, modal, setModal)}>
                                <div className='mb-2'>
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Name'
                                        onChange={(event) => setNewPackageData({ ...newPackageData, name: event.target.value })}
                                        required
                                    />
                                </div>

                                <div className='mb-2'>
                                    <label>Details</label>
                                    <textarea
                                        type="text"
                                        className='form-control'
                                        placeholder='Details'
                                        onChange={(event) => setNewPackageData({ ...newPackageData, details: event.target.value })}
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
                                        onChange={(event) => setNewPackageData({ ...newPackageData, image: event.target.value })}
                                    />
                                </div>

                                <div className='mb-2'>
                                    <label>Price</label>
                                    <input
                                        type="number"
                                        className='form-control'
                                        placeholder='120 BDT'
                                        required
                                        onChange={(event) => setNewPackageData({ ...newPackageData, price: event.target.value })}
                                    />
                                </div>

                                {/* <div className='mb-2'>
                                    <label>Stock</label>
                                    <input
                                        type="number"
                                        className='form-control'
                                        placeholder='120 stock'
                                        required
                                        onChange={(event) => setNewPackageData({ ...newPackageData, stock: event.target.value })}
                                    />
                                </div> */}

                                <div className='mb-2'>
                                    <label>Category</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Category'
                                        required
                                        onChange={(event) => setNewPackageData({ ...newPackageData, category: event.target.value })}
                                    />
                                </div>

                                {/* <div className='mb-2'>
                                    <label>Package</label>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Category'
                                        required
                                        onChange={(event) => setNewPackageData({ ...newPackageData, package: event.target.value })}
                                    />
                                </div> */}

                                <div className='mb-2'>
                                    <label>Packages</label>
                                        <div  className='mb-2'>
                                            <input
                                                type="text"
                                                className='form-control'
                                                placeholder={`Package`}
                                            />
                                        </div>
                                    <button type="button" className="btn btn-primary" >
                                        Add Package
                                    </button>
                                </div>

                                <button type='submit' className='btn btn-success w-100' disabled={newPackageLoading && true}>Cook</button>
                            </form>
                        </Modal>


                        {/* ===== Update Product ===== */}
                        {selectedPackage && !packageLoading && (
                            <Modal
                                open={modal.updateModal}
                                title="Edit Package"
                                handleClose={() => setModal({ ...modal, updateModal: false })}
                            >
                                <form onSubmit={(event) => handleUpdateItem(event, "package", dispatch, updatedPackageLoading, modal, setModal, selectedPackage, selectedPackageData)}>
                                    <h6 className='text-light text-center bg-dark p-1 mb-2'>{selectedPackage}</h6>

                                    <div className='mb-2'>
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder='Name'
                                            value={selectedPackageData.name}
                                            onChange={(event) => setSelectedPackageData({ ...selectedPackageData, name: event.target.value })}
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label>Details</label>
                                        <textarea
                                            type="text"
                                            className='form-control'
                                            placeholder='Details'
                                            value={selectedPackageData.details}
                                            onChange={(event) => setSelectedPackageData({ ...selectedPackageData, details: event.target.value })}
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
                                            value={selectedPackageData.image}
                                            onChange={(event) => setSelectedPackageData({ ...selectedPackageData, image: event.target.value })}
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label>Price</label>
                                        <input
                                            type="number"
                                            className='form-control'
                                            placeholder='120 BDT'
                                            value={selectedPackageData.price}
                                            onChange={(event) => setSelectedPackageData({ ...selectedPackageData, price: event.target.value })}
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label>Category</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder='Category'
                                            value={selectedPackageData.category}
                                            onChange={(event) => setSelectedPackageData({ ...selectedPackageData, category: event.target.value })}
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label>Package</label>
                                        <input
                                            type="text"
                                            className='form-control'
                                            placeholder='Package'
                                            required
                                            onChange={(event) => setSelectedPackageData({ ...selectedPackageData, package: event.target.value })}
                                        />
                                    </div>

                                    <div className='mb-2'>
                                        <label>Stock</label>
                                        <input
                                            type="number"
                                            className='form-control'
                                            placeholder='Stock'
                                            value={selectedPackageData.stock}
                                            onChange={(event) => setSelectedPackageData({ ...selectedPackageData, stock: event.target.value })}
                                        />
                                    </div>

                                    <button type='submit' className='btn btn-warning w-100' disabled={updatedPackageLoading && true}>Update</button>
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

export default PackageManage;