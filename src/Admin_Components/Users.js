// import './Gallery.css'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DataTable from 'react-data-table-component';

// const UserList = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     const fetchUsers = async () => {
//         try {
//             const response = await axios.get('api/users'); // Change to your actual API endpoint
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };

//     const handleDelete = async (userId) => {
//         try {
//             const response = await axios.post('api/delete_user', { id: userId });
//             if (response.data === 1) {
//                 alert('Data successfully deleted');
//                 fetchUsers();
//             }
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const handleEdit = (userId) => {
//         console.log('Edit user with ID:', userId);
//         // For example, navigate to edit page or show a modal form
//     };

//     const columns = [
//         { name: '#', selector: 'id', sortable: true },
//         { name: 'Name', selector: 'name', sortable: true },
//         { name: 'Username', selector: 'username', sortable: true },
//         { name: 'Type', selector: 'type', sortable: true },
//         {
//             name: 'Action',
//             cell: (row) => (
//                 <div className="btn-group">
//                     <button type="button" className="btn btn-primary">
//                         Action
//                     </button>
//                     <button
//                         type="button"
//                         className="btn btn-primary dropdown-toggle dropdown-toggle-split"
//                         data-toggle="dropdown"
//                         aria-haspopup="true"
//                         aria-expanded="false"
//                     >
//                         <span className="sr-only">Toggle Dropdown</span>
//                     </button>
//                     <div className="dropdown-menu">
//                         <a
//                             className="dropdown-item edit_user"
//                             href="#"
//                             onClick={() => handleEdit(row.id)}
//                         >
//                             Edit
//                         </a>
//                         <div className="dropdown-divider"></div>
//                         <a
//                             className="dropdown-item delete_user"
//                             href="#"
//                             onClick={() => handleDelete(row.id)}
//                         >
//                             Delete
//                         </a>
//                     </div>
//                 </div>
//             ),
//         },
//     ];

//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col-lg-12">
//                     <button className="btn btn-primary float-right btn-sm" id="new_user">
//                         <i className="fa fa-plus"></i> New user
//                     </button>
//                 </div>
//             </div>
//             <br />
//             <div className="row">
//                 <div className="card col-lg-12">
//                     <div className="card-body">
//                         <DataTable
//                             columns={columns}
//                             data={users}
//                             pagination
//                             highlightOnHover
//                             striped
//                             responsive
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserList;
import './Users.css'
import './Gallery.css'
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import 'datatables.net'; // Import DataTables

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState({});


    useEffect(() => {
        const fetchUsers = async () => {
            const data = [
                { id: 1, name: 'John Doe', username: 'johndoe', type: 1 },
                { id: 2, name: 'Jane Smith', username: 'janesmith', type: 2 },
            ];
            setUsers(data);

            // Initialize DataTables within the useEffect callback
            $(document).ready(() => {
                $('table').DataTable(); // Initialize DataTables on the table element
            });
        };

        fetchUsers();
    }, []);

    const type = ['', 'Admin', 'Staff', 'Alumnus/Alumna'];

    const handleEdit = (id) => {
        // Define your edit logic here
        console.log(`Editing user with ID: ${id}`);
    };

    const handleDelete = (id) => {
        // Define your delete logic here
        console.log(`Deleting user with ID: ${id}`);
    };
    const toggleDropdown = (id) => {
        setDropdownOpen(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };
    return (
        <div className="main-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <button className="btn btn-primary float-right btn-sm" id="new_user" onClick={() => console.log('Opening new user modal')}>
                            <i className="fa fa-plus"></i> New user
                        </button>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="card col-lg-12">
                        <div className="card-body">
                            <table className="table-striped table-bordered col-md-12">
                                <thead>
                                    <tr>
                                        <th className=" ">#</th>
                                        <th className=" ">Name</th>
                                        <th className=" ">Username</th>
                                        <th className=" ">Type</th>
                                        <th className=" ">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={user.id}>
                                            <td className=" ">{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{type[user.type]}</td>
                                            <td>
                                                <center>
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-primary" onClick={() => toggleDropdown(user.id)}>
                                                            Action
                                                        </button>
                                                        <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span className="sr-only">Toggle Dropdown</span>
                                                        </button>
                                                        {dropdownOpen[user.id] && (
                                                            <div className="dropdown-menu show">
                                                                <button className="dropdown-item edit_user" onClick={() => handleEdit(user.id)}>
                                                                    Edit
                                                                </button>
                                                                <div className="dropdown-divider"></div>
                                                                <button className="dropdown-item delete_user" onClick={() => handleDelete(user.id)}>
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                </center>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManagement;

// ///////////
