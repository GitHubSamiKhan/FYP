// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Assuming you're using axios for AJAX requests

// const View_alumni = ({ id }) => {
//     const [alumnus, setAlumnus] = useState(null);

//     useEffect(() => {
//         // Fetch alumnus data when component mounts
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`api/alumnus/${id}`); // Example API endpoint
//                 setAlumnus(response.data);
//             } catch (error) {
//                 console.error('Error fetching alumnus data:', error);
//             }
//         };

//         fetchData();

//         // Clean up function (if needed)
//         return () => {
//             // Any cleanup logic can go here
//         };
//     }, [id]);

//     const handleStatusUpdate = async (newStatus) => {
//         try {
//             await axios.post('api/update_alumni_acc', { id, status: newStatus });
//             alert('Alumnus/Alumna account status successfully updated.');
//             // Reload the page after a brief delay
//             setTimeout(() => {
//                 window.location.reload();
//             }, 1000);
//         } catch (error) {
//             console.error('Error updating status:', error);
//         }
//     };

//     if (!alumnus) {
//         return <p>Loading...</p>;
//     }

//     const { name, email, batch, course, gender, status, avatar } = alumnus;

//     return (
//         <div className="container-field">
//             <div className="col-lg-12">
//                 <div>
//                     <center>
//                         <div className="avatar">
//                             <img src={`assets/uploads/${avatar}`} className="" alt="" />
//                         </div>
//                     </center>
//                 </div>
//                 <hr />
//                 <div className="row">
//                     <div className="col-md-6">
//                         <p>
//                             Name: <b>{name}</b>
//                         </p>
//                         <p>
//                             Email: <b>{email}</b>
//                         </p>
//                         <p>
//                             Batch: <b>{batch}</b>
//                         </p>
//                         <p>
//                             Course: <b>{course}</b>
//                         </p>
//                     </div>
//                     <div className="col-md-6">
//                         <p>
//                             Gender: <b>{gender}</b>
//                         </p>
//                         <p>
//                             Account Status:{' '}
//                             <b>
//                                 {status === 1 ? (
//                                     <span className="badge badge-primary">Verified</span>
//                                 ) : (
//                                     <span className="badge badge-secondary">Unverified</span>
//                                 )}
//                             </b>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <div className="modal-footer display">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         <button className="btn float-right btn-secondary" type="button" data-dismiss="modal">
//                             Close
//                         </button>
//                         <button
//                             className="btn float-right btn-primary update mr-2"
//                             onClick={() => handleStatusUpdate(status === 1 ? 0 : 1)}
//                             data-dismiss="modal"
//                         >
//                             {status === 1 ? 'Unverify Account' : 'Verify Account'}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <h1>hello</h1>
//         </div>
//     );
// };

// export default View_alumni;
// //////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////


// import '../Style.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for AJAX requests

// const View_alumni = ({ id }) => {
const View_alumni = ({ onClose }) => {
    const [alumnus, setAlumnus] = useState(null);

    useEffect(() => {
        // Fetch alumnus data when component mounts
        const fetchData = async () => {
            try {
                const response = await axios.get(`api/alumnus/123`); // Example API endpoint
                setAlumnus(response.data);
            } catch (error) {
                console.error('Error fetching alumnus data:', error);
            }
        };

        fetchData();

        // Clean up function (if needed)
        return () => {
            // Any cleanup logic can go here
        };
    }, []);

    // const handleStatusUpdate = async (newStatus) => {
    //     try {
    //         await axios.post('api/update_alumni_acc', { id, status: newStatus });
    //         alert('Alumnus/Alumna account status successfully updated.');
    //         // Reload the page after a brief delay
    //         setTimeout(() => {
    //             window.location.reload();
    //         }, 1000);
    //     } catch (error) {
    //         console.error('Error updating status:', error);
    //     }
    // };

    if (!alumnus) {
        return <p>Loading...</p>;
    }

    const { name, email, batch, course, gender, status, avatar } = alumnus;

    return (
        <div className="container-field">
            <div className="col-lg-12">
                <div className="modal-header">
                    <h2>Alumnus Details</h2>
                    <button className="close" onClick={onClose}>&times;</button>
                </div>
                <div>
                    <center>
                        <div className="avatar">
                            <img src={`assets/uploads/${avatar}`} className="" alt="" />
                        </div>
                    </center>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            Name: <b>{name}</b>
                        </p>
                        <p>
                            Email: <b>{email}</b>
                        </p>
                        <p>
                            Batch: <b>{batch}</b>
                        </p>
                        <p>
                            Course: <b>{course}</b>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <p>
                            Gender: <b>{gender}</b>
                        </p>
                        <p>
                            Account Status:{' '}
                            <b>
                                {status === 1 ? (
                                    <span className="badge badge-primary">Verified</span>
                                ) : (
                                    <span className="badge badge-secondary">Unverified</span>
                                )}
                            </b>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer display">
                <div className="row">
                    <div className="col-lg-12">
                        <button className="btn float-right btn-secondary" type="button" data-dismiss="modal" onClick={onClose}>
                            Close
                        </button>
                        <button
                            className="btn float-right btn-primary update mr-2"
                            // onClick={() => handleStatusUpdate(status === 1 ? 0 : 1)}
                            data-dismiss="modal"
                        >
                            {status === 1 ? 'Unverify Account' : 'Verify Account'}
                        </button>
                    </div>
                </div>
            </div>
            <h1>hello</h1>
        </div>
    );
};

export default View_alumni;
