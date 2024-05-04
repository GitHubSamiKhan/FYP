// import React, { useEffect } from 'react';
// import './Alumni.css';
// import $ from 'jquery'; // Import jQuery
// import 'datatables.net'; // Import DataTables library
// //////////// my work ///////////////

// //////////// end my work ///////////////
// const AlumniList = () => {

//     useEffect(() => {
//         // Initialize DataTable
//         $('table').dataTable();

//         // Event listener for view_alumni buttons
//         $('.view_alumni').click(function () {
//             uni_modal("Bio", "view_alumni.php?id=" + $(this).attr('data-id'), 'mid-large');
//         });

//         // Event listener for delete_alumni buttons
//         $('.delete_alumni').click(function () {
//             _conf("Are you sure to delete this alumni?", "deleteAlumni", [$(this).attr('data-id')]);
//         });
//     }, []); // Empty dependency array ensures this effect runs only once

//     // Function to display a confirmation message
//     const _conf = (message, callback, params) => {
//         if (window.confirm(message)) {
//             callback(...params);
//         }
//     };

//     // Function to display a modal
//     const uni_modal = (title, content, size) => {
//         // Implement your modal display logic here
//     };

//     // Function to start loading indicator
//     const start_load = () => {
//         // Implement your loading indicator logic here
//     };

//     // Function to display a toast message
//     const alert_toast = (message, type) => {
//         // Implement your toast message logic here
//     };

//     // Function to handle alumni deletion
//     const deleteAlumni = (id) => {
//         start_load();
//         $.ajax({
//             url: 'ajax.php?action=delete_alumni',
//             method: 'POST',
//             data: { id: id },
//             success: function (resp) {
//                 if (resp == 1) {
//                     alert_toast("Data successfully deleted", 'success');
//                     setTimeout(function () {
//                         window.location.reload(); // Use window.location instead of location
//                     }, 1500);
//                 }
//             }
//         });
//     };

//     return (
//         <div className="container-fluid">
//             <div className="col-lg-12">
//                 <div className="row mb-4 mt-4">
//                     <div className="col-md-12">
//                         {/* Additional content can be added here */}
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="card">
//                             <div className="card-header">
//                                 <b>List of Alumni</b>
//                             </div>
//                             <div className="card-body">
//                                 <table className="table table-condensed table-bordered table-hover">
//                                     <thead>
//                                         <tr>
//                                             <th className="text-center">#</th>
//                                             <th className="">Avatar</th>
//                                             <th className="">Name</th>
//                                             <th className="">Course Graduated</th>
//                                             <th className="">Status</th>
//                                             <th className="text-center">Action</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {[{ id: 1, name: 'John Doe', course: 'Computer Science', status: 1, avatar: 'john_doe.jpg' },
//                                         { id: 2, name: 'Jane Smith', course: 'Mathematics', status: 0, avatar: 'jane_smith.jpg' }].map((row, index) => (
//                                             <tr key={index}>
//                                                 <td className="text-center">{index + 1}</td>
//                                                 <td className="text-center">
//                                                     <div className="avatar">
//                                                         <img src={`assets/uploads/${row.avatar}`} className="" alt="" />
//                                                     </div>
//                                                 </td>
//                                                 <td className="">
//                                                     <p><b>{row.name}</b></p>
//                                                 </td>
//                                                 <td className="">
//                                                     <p><b>{row.course}</b></p>
//                                                 </td>
//                                                 <td className="text-center">
//                                                     <span className={`badge ${row.status === 1 ? 'badge-primary' : 'badge-secondary'}`}>
//                                                         {row.status === 1 ? 'Verified' : 'Not Verified'}
//                                                     </span>
//                                                 </td>
//                                                 <td className="text-center">
//                                                     <button className="btn btn-sm btn-outline-primary view_alumni" type="button" data-id={row.id}>View</button>

//                                                     <button className="btn btn-sm btn-outline-danger delete_alumni" type="button" data-id={row.id}>Delete</button>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AlumniList;
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////






import React, { useState } from 'react';
import { useEffect } from 'react';
import './Alumni.css';
import $ from 'jquery'; // Import jQuery
import 'datatables.net'; // Import DataTables library
//////////// my work ///////////////
import View_alumni from './View_alumni';
//////////// end my work ///////////////
const AlumniList = () => {
    //////////// my work ///////////////
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    //////////// end my work ///////////////
    useEffect(() => {
        // Initialize DataTable
        $('table').dataTable();

        // Event listener for view_alumni buttons
        $('.view_alumni').click(function () {
            uni_modal("Bio", "view_alumni.php?id=" + $(this).attr('data-id'), 'mid-large');
        });

        // Event listener for delete_alumni buttons
        $('.delete_alumni').click(function () {
            _conf("Are you sure to delete this alumni?", "deleteAlumni", [$(this).attr('data-id')]);
        });
    }, []); // Empty dependency array ensures this effect runs only once

    // Function to display a confirmation message
    const _conf = (message, callback, params) => {
        if (window.confirm(message)) {
            callback(...params);
        }
    };

    // Function to display a modal
    const uni_modal = (title, content, size) => {
        // Implement your modal display logic here
    };

    // Function to start loading indicator
    const start_load = () => {
        // Implement your loading indicator logic here
    };

    // Function to display a toast message
    const alert_toast = (message, type) => {
        // Implement your toast message logic here
    };

    // Function to handle alumni deletion
    const deleteAlumni = (id) => {
        start_load();
        $.ajax({
            url: 'ajax.php?action=delete_alumni',
            method: 'POST',
            data: { id: id },
            success: function (resp) {
                if (resp == 1) {
                    alert_toast("Data successfully deleted", 'success');
                    setTimeout(function () {
                        window.location.reload(); // Use window.location instead of location
                    }, 1500);
                }
            }
        });
    };

    return (
        // <div className="main-container">
        <div className="container-fluid">
            <div className="col-lg-12">
                <div className="row mb-4 mt-4">
                    <div className="col-md-12">
                        {/* Additional content can be added here */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <b>List of Alumni</b>
                            </div>
                            <div className="card-body">
                                <table className="table table-condensed table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="  ">#</th>
                                            <th className="">Avatar</th>
                                            <th className="">Name</th>
                                            <th className="">Course Graduated</th>
                                            <th className="">Status</th>
                                            <th className=" ">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[{ id: 1, name: 'John Doe', course: 'Computer Science', status: 1, avatar: 'john_doe.jpg' },
                                        { id: 2, name: 'Jane Smith', course: 'Mathematics', status: 0, avatar: 'jane_smith.jpg' }].map((row, index) => (
                                            <tr key={index}>
                                                <td className="t ">{index + 1}</td>
                                                <td className=" ">
                                                    <div className="avatar">
                                                        <img src={`assets/uploads/${row.avatar}`} className="" alt="" />
                                                    </div>
                                                </td>
                                                <td className="">
                                                    <p><b>{row.name}</b></p>
                                                </td>
                                                <td className="">
                                                    <p><b>{row.course}</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <span className={`badge ${row.status === 1 ? 'badge-primary' : 'badge-secondary'}`}>
                                                        {row.status === 1 ? 'Verified' : 'Not Verified'}
                                                    </span>
                                                </td>
                                                <td className=" ">
                                                    <button className="btn btn-sm btn-outline-primary view_alumni" type="button" data-id={row.id} onClick={openModal}>View</button>
                                                    {/* mywork */}
                                                    {isModalOpen && <View_alumni onClose={closeModal} />}
                                                    {/* end mywork */}
                                                    <button className="btn btn-sm btn-outline-danger delete_alumni" type="button" data-id={row.id}>Delete</button>
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
            {/* </div> */}
        </div>
    );
};

export default AlumniList;
