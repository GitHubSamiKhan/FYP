// import './Gallery.css'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Assuming you use Axios for HTTP requests

// const Forum = () => {
//     const [forums, setForums] = useState([]);

//     useEffect(() => {
//         fetchForumData();
//     }, []);

//     const fetchForumData = async () => {
//         try {
//             const response = await axios.get('/api/forum/topics'); // Example API endpoint
//             setForums(response.data);
//         } catch (error) {
//             console.error('Error fetching forum data:', error);
//         }
//     };

//     const handleDeleteForum = async (id) => {
//         try {
//             const response = await axios.post('/api/forum/delete', { id });
//             if (response.data === 1) {
//                 alert('Data successfully deleted');
//                 fetchForumData(); // Refresh the forum list after deletion
//             }
//         } catch (error) {
//             console.error('Error deleting forum:', error);
//         }
//     };

//     return (
//         <div className="container-fluid">
//             <div className="col-lg-12">
//                 <div className="card">
//                     <div className="card-header">
//                         <b>Forum List</b>
//                         <button
//                             className="btn btn-primary btn-block btn-sm col-sm-2 float-right"
//                             type="button"
//                             onClick={() => {
//                                 // Handle new forum creation here
//                                 console.log('Create new forum');
//                             }}
//                         >
//                             <i className="fa fa-plus"></i> New
//                         </button>
//                     </div>
//                     <div className="card-body">
//                         <table className="table table-bordered table-condensed table-hover">
//                             <colgroup>
//                                 <col width="5%" />
//                                 <col width="20%" />
//                                 <col width="30%" />
//                                 <col width="20%" />
//                                 <col width="10%" />
//                                 <col width="15%" />
//                             </colgroup>
//                             <thead>
//                                 <tr>
//                                     <th className="text-center">#</th>
//                                     <th>Topic</th>
//                                     <th>Description</th>
//                                     <th>Created By</th>
//                                     <th>Comments</th>
//                                     <th className="text-center">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {forums.map((forum, index) => (
//                                     <tr key={forum.id}>
//                                         <td className="text-center">{index + 1}</td>
//                                         <td>
//                                             <p>
//                                                 <b>{forum.title}</b>
//                                             </p>
//                                         </td>
//                                         <td>
//                                             <p className="truncate">
//                                                 <b>{forum.description}</b>
//                                             </p>
//                                         </td>
//                                         <td>
//                                             <p>
//                                                 <b>{forum.name}</b>
//                                             </p>
//                                         </td>
//                                         <td className="text-right">
//                                             <p>
//                                                 <b>{forum.commentCount}</b>
//                                             </p>
//                                         </td>
//                                         <td className="text-center">
//                                             <a
//                                                 className="btn btn-sm btn-outline-primary"
//                                                 href={`/forum/${forum.id}`}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                             >
//                                                 View
//                                             </a>
//                                             <button
//                                                 className="btn btn-sm btn-outline-primary"
//                                                 onClick={() => {
//                                                     // Handle edit forum action
//                                                     console.log(`Edit forum ${forum.id}`);
//                                                 }}
//                                             >
//                                                 Edit
//                                             </button>
//                                             <button
//                                                 className="btn btn-sm btn-outline-danger"
//                                                 onClick={() => handleDeleteForum(forum.id)}
//                                             >
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Forum;
// ///////////////////////////////////////////////////////////////////
// import './Gallery.css'
// import React, { useState, useEffect, useRef } from 'react';
// import $ from 'jquery'; // Import jQuery for DataTables
// import 'datatables.net'; // Import DataTables library
// import axios from 'axios'; // Assuming you use Axios for HTTP requests

// const ForumList = () => {
//     const [forums, setForums] = useState([]);
//     const tableRef = useRef(null);

//     useEffect(() => {
//         fetchForumData();
//     }, []);

//     useEffect(() => {
//         if (forums.length > 0) {
//             // Initialize DataTable when forums data updates
//             $(tableRef.current).DataTable({
//                 searching: true, // Enable search feature
//                 paging: true, // Enable pagination
//             });
//         }
//     }, [forums]);

//     const fetchForumData = async () => {
//         try {
//             const response = await axios.get('/api/forum/topics'); // Example API endpoint
//             setForums(response.data);
//         } catch (error) {
//             console.error('Error fetching forum data:', error);
//         }
//     };

//     const handleDeleteForum = async (id) => {
//         try {
//             const response = await axios.post('/api/forum/delete', { id });
//             if (response.data === 1) {
//                 alert('Data successfully deleted');
//                 fetchForumData(); // Refresh the forum list after deletion
//             }
//         } catch (error) {
//             console.error('Error deleting forum:', error);
//         }
//     };

//     const applySearchFilter = () => {
//         // Get DataTable instance and apply search filter
//         const dataTable = $(tableRef.current).DataTable();
//         dataTable.search($('#searchInput').val()).draw();
//     };

//     return (
//         <div className="container-fluid">
//             <div className="col-lg-12">
//                 <div className="card">
//                     <div className="card-header">
//                         <b>Forum List</b>
//                         <div className="float-right">
//                             <input
//                                 type="text"
//                                 id="searchInput"
//                                 placeholder="Search topics..."
//                                 className="form-control"
//                                 onChange={applySearchFilter}
//                             />
//                         </div>
//                         <button
//                             className="btn btn-primary btn-sm ml-2"
//                             type="button"
//                             onClick={() => {
//                                 // Handle new forum creation here
//                                 console.log('Create new forum');
//                             }}
//                         >
//                             <i className="fa fa-plus"></i> New
//                         </button>
//                     </div>
//                     <div className="card-body">
//                         <table
//                             className="table table-bordered table-condensed table-hover"
//                             ref={tableRef}
//                         >
//                             <colgroup>
//                                 <col width="5%" />
//                                 <col width="20%" />
//                                 <col width="30%" />
//                                 <col width="20%" />
//                                 <col width="10%" />
//                                 <col width="15%" />
//                             </colgroup>
//                             <thead>
//                                 <tr>
//                                     <th className="text-center">#</th>
//                                     <th>Topic</th>
//                                     <th>Description</th>
//                                     <th>Created By</th>
//                                     <th>Comments</th>
//                                     <th className="text-center">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {forums.map((forum, index) => (
//                                     <tr key={forum.id}>
//                                         <td className="text-center">{index + 1}</td>
//                                         <td>
//                                             <p>
//                                                 <b>{forum.title}</b>
//                                             </p>
//                                         </td>
//                                         <td>
//                                             <p className="truncate">
//                                                 <b>{forum.description}</b>
//                                             </p>
//                                         </td>
//                                         <td>
//                                             <p>
//                                                 <b>{forum.name}</b>
//                                             </p>
//                                         </td>
//                                         <td className="text-right">
//                                             <p>
//                                                 <b>{forum.commentCount}</b>
//                                             </p>
//                                         </td>
//                                         <td className="text-center">
//                                             <a
//                                                 className="btn btn-sm btn-outline-primary"
//                                                 href={`/forum/${forum.id}`}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                             >
//                                                 View
//                                             </a>
//                                             <button
//                                                 className="btn btn-sm btn-outline-primary"
//                                                 onClick={() => {
//                                                     // Handle edit forum action
//                                                     console.log(`Edit forum ${forum.id}`);
//                                                 }}
//                                             >
//                                                 Edit
//                                             </button>
//                                             <button
//                                                 className="btn btn-sm btn-outline-danger"
//                                                 onClick={() => handleDeleteForum(forum.id)}
//                                             >
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ForumList;
// ///////////////////////////////////////////////////////////////////
import './Gallery.css'
import './Forum.css'
import React, { useState, useEffect } from 'react';

const Forum = () => {
    const [forumTopics, setForumTopics] = useState([]);

    // Simulating componentDidMount with useEffect
    useEffect(() => {
        fetchForumTopics();
    }, []);

    const fetchForumTopics = async () => {
        try {
            const response = await fetch('/api/forum/topics'); // Assuming API endpoint for fetching forum topics
            const data = await response.json();
            setForumTopics(data);
        } catch (error) {
            console.error('Error fetching forum topics:', error);
        }
    };


    const handleEditTopic = (topicId) => {
        // Implement the logic to handle editing the topic
        console.log(`Editing topic with ID: ${topicId}`);
        // You can open a modal or navigate to an edit page here
    };


    const handleDeleteTopic = async (topicId) => {
        try {
            const response = await fetch(`/api/forum/topics/${topicId}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            if (data.success) {
                alert('Topic deleted successfully');
                fetchForumTopics(); // Refresh topics after deletion
            }
        } catch (error) {
            console.error('Error deleting topic:', error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="col-lg-12">
                <div className="row mb-4 mt-4">
                    <div className="col-md-12">
                        {/* Any content for the header can go here */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <b>Forum List</b>
                                <button className="btn btn-primary btn-block btn-sm col-sm-2 float-right">
                                    <i className="fa fa-plus"></i> New
                                </button>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-condensed table-hover">
                                    <colgroup>
                                        <col width="5%" />
                                        <col width="20%" />
                                        <col width="30%" />
                                        <col width="20%" />
                                        <col width="10%" />
                                        <col width="15%" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className=" ">#</th>
                                            <th className="">Topic</th>
                                            <th className="">Description</th>
                                            <th className="">Created By</th>
                                            <th className="">Comments</th>
                                            <th className=" ">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {forumTopics.map((topic, index) => (
                                            <tr key={topic.id}>
                                                <td className="text-center">{index + 1}</td>
                                                <td className="">
                                                    <p><b>{topic.title}</b></p>
                                                </td>
                                                <td className="">
                                                    <p className="truncate"><b>{topic.description}</b></p>
                                                </td>
                                                <td className="">
                                                    <p><b>{topic.createdBy}</b></p>
                                                </td>
                                                <td className="text-right">
                                                    <p><b>{topic.commentCount}</b></p>
                                                </td>
                                                <td className="text-center">
                                                    <a className="btn btn-sm btn-outline-primary" href={`/forum/${topic.id}`} target="_blank">View</a>
                                                    <button className="btn btn-sm btn-outline-primary" onClick={() => handleEditTopic(topic.id)}>Edit</button>
                                                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDeleteTopic(topic.id)}>Delete</button>
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
        </div>
    );
};

export default Forum;
