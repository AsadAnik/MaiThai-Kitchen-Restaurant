import { useState, useEffect } from 'react';
import Sidebar from '@/components/dashboard/Sidebar/Sidebar';
import { useDispatch } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import useGetItems from '@/Hooks/useGetItems';
import useUpdateItem, { handleUpdateItem } from '@/Hooks/useUpdateItem';
import useDeleteItem, { handleItemDelete } from '@/Hooks/useDeleteitem';
import useSelectedItem from '@/Hooks/useSelectedItem';
import { primaryColor } from '@/utils/variables';
import SkeletonLaoding from '@/components/widgets/Loading/Skeleton';
import Modal from '@/components/widgets/Modal';
import SearchWithSuggestion from '@/components/dashboard/SearchWithSuggestion';


// User Management Component..
const UsersManage = () => {
    const dispatch = useDispatch();

    const [searchVal, setSearchVal] = useState(null);
    const [dataRow, setDataRow] = useState([]);
    const [modal, setModal] = useState({
        createModal: false,
        updateModal: false,
    });
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedUserData, setSelectedUserData] = useState({ role: '' });


    const [userLoading, user] = useSelectedItem('user', selectedUser);
    const [updatedUserLoading, updatedUser] = useUpdateItem('user', 'updatedUser', user, setSelectedUserData);
    const [deletedUser] = useDeleteItem('user', 'deletedUser');
    const [loading, users] = useGetItems('users', null, updatedUser, deletedUser);


    // Fill the DataRow Row for DataGrid-X..
    useEffect(() => {
        if (users) {
            let row = [];

            if (searchVal?.length > 1) {
                users.filter(user => user.name?.toLowerCase().indexOf(searchVal.toLowerCase()) > -1)
                    .forEach((item) => {
                        row.push({
                            id: item._id,
                            name: item.name,
                            email: item.email,
                            role: item.role,
                        });
                    });
            }

            if (!searchVal) {
                users.forEach((item) => {
                    row.push({
                        id: item._id,
                        name: item.name,
                        email: item.email,
                        role: item.role,
                    });
                });
            }

            setDataRow(row);
        }

        return () => {
            setDataRow([]);
        };
    }, [users, searchVal]);


    // Fill the DataRow Column for DataGrid-X..
    const columns = [
        { field: "id", headerName: "User ID", minWidth: 200, flex: 1, headerClassName: 'custom-header' },
        { field: "name", headerName: "Name", minWidth: 100, flex: 0.5, headerClassName: 'custom-header' },
        { field: "email", headerName: "Email", minWidth: 100, flex: 1, headerClassName: 'custom-header' },
        {
            field: "role", headerName: "Role", minWidth: 100, flex: 0.5, headerClassName: 'custom-header',
            renderCell: (params) => {
                return <div style={{ color: params.value === 'customer' ? 'tomato' : params.value === 'owner' ? 'purple' : 'green' }} dangerouslySetInnerHTML={{ __html: params.value }} />;
            },
        },
        {
            field: "actions", headerName: "Actions", minWidth: 100, type: "number", sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <button onClick={() => {
                            setSelectedUser(params.id);
                            setModal({ ...modal, updateModal: true });
                        }}>
                            <BiEdit color="orange" />
                        </button>

                        <button onClick={(event) => handleItemDelete(event, 'user', dispatch, params.id)}>
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
                    <div className="col-md-6">
                        <h5 className='mb-2' style={{ marginTop: '0.5rem' }}>Users Management</h5>
                    </div>

                    <div className="col-md-6">
                        <SearchWithSuggestion dataRow={dataRow} searchVal={searchVal} setSearchVal={setSearchVal} />
                    </div>

                    {/* ===== Update User ===== */}
                    {selectedUser && !userLoading && (
                        <Modal
                            open={modal.updateModal}
                            title="Edit Food"
                            handleClose={() => setModal({ ...modal, updateModal: false })}
                        >
                            <form onSubmit={(event) => handleUpdateItem(event, "user", dispatch, updatedUserLoading, modal, setModal, selectedUser, selectedUserData)}>
                                <h6 className='text-light text-center bg-dark p-1 mb-2'>{selectedUserData.name}: {selectedUserData.email}</h6>

                                <div className='mb-2'>
                                    <label>Change Role</label>
                                    <select
                                        className='form-control'
                                        onChange={(event) => setSelectedUserData({...selectedUserData, role: event.target.value})}
                                    >
                                        <option value={selectedUserData.role}>{selectedUserData.role}</option>
                                        {['owner', 'admin', 'customer'].filter(roles => roles !== selectedUserData.role).map(role => (
                                            <option value={role}>{role}</option>
                                        ))}
                                    </select>
                                </div>

                                <button type='submit' className='btn btn-warning w-100' disabled={updatedUserLoading && true}>Update</button>
                            </form>
                        </Modal>
                    )}
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

export default UsersManage;