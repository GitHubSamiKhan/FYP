import './Gallery.css';
import './Events.css';
import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css';

const Events = () => {
    const [events, setEvents] = useState([]);
    const eventsTableRef = useRef(null);

    // Mock data for testing purposes
    const sampleEvents = [
        {
            id: 1,
            schedule: new Date().toISOString(),
            title: 'Sample Event 1',
            description: 'This is a sample event description.',
            commitCount: 5
        },
        {
            id: 2,
            schedule: new Date().toISOString(),
            title: 'Sample Event 2',
            description: 'Another sample event description.',
            commitCount: 10
        }
    ];

    useEffect(() => {
        // For testing, set initial state with sampleEvents
        setEvents(sampleEvents);
    }, []);

    useEffect(() => {
        if (eventsTableRef.current) {
            $(eventsTableRef.current).DataTable({
                searching: true, // Enable search filter
                paging: true // Enable pagination
            });
        }
    }, [events]);

    const deleteEvent = async (eventId) => {
        // Implementation for deleting event via API
        console.log(`Delete event with ID: ${eventId}`);
    };

    return (
        <div className="container-fluid">
            <div className="col-lg-12">
                <div className="row mb-4 mt-4">
                    <div className="col-md-12">
                        {/* Other content can be added here */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <b>List of Events</b>
                                <span className="float-right">
                                    <a className="btn btn-primary btn-block btn-sm float-right" href="index.php?page=manage_event" id="new_event">
                                        <i className="fa fa-plus"></i> New Entry
                                    </a>
                                </span>
                            </div>
                            <div className="card-body">
                                <table ref={eventsTableRef} className="table table-condensed table-bordered table-hover">
                                    <colgroup>
                                        <col width="5%" />
                                        <col width="20%" />
                                        <col width="15%" />
                                        <col width="30%" />
                                        <col width="15%" />
                                        <col width="15%" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th className="text-center">#</th>
                                            <th className="">Schedule</th>
                                            <th className="">Title</th>
                                            <th className="">Description</th>
                                            <th className="">Committed To Participate</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {events.map((event, index) => (
                                            <tr key={event.id}>
                                                <td className="text-center">{index + 1}</td>
                                                <td>
                                                    <p><b>{new Date(event.schedule).toLocaleString()}</b></p>
                                                </td>
                                                <td>
                                                    <p><b>{event.title}</b></p>
                                                </td>
                                                <td>
                                                    <p className="truncate">{event.description}</p>
                                                </td>
                                                <td>
                                                    <p className="text-right">{event.commitCount}</p>
                                                </td>
                                                <td className="text-center">
                                                    <button className="btn btn-sm btn-outline-primary" onClick={() => window.open(`../index.php?page=view_event&id=${event.id}`)}>View</button>
                                                    <button className="btn btn-sm btn-outline-primary" onClick={() => window.location.href = `index.php?page=manage_event&id=${event.id}`}>Edit</button>
                                                    <button className="btn btn-sm btn-outline-danger" onClick={() => deleteEvent(event.id)}>Delete</button>
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

export default Events;

////////////////////////////////////////////////////////////////////////////////////////
// import './Gallery.css'
// import React, { useState, useEffect } from 'react';

// const Events = () => {
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         fetchEvents();
//     }, []);

//     const fetchEvents = async () => {
//         try {
//             const response = await fetch('api/events'); // Assuming API endpoint for events
//             const data = await response.json();
//             setEvents(data); // Assuming the response is an array of event objects
//         } catch (error) {
//             console.error('Error fetching events:', error);
//         }
//     };

//     const deleteEvent = async (eventId) => {
//         try {
//             const response = await fetch(`api/events/${eventId}`, {
//                 method: 'DELETE'
//             });
//             const data = await response.json();
//             if (data.success) {
//                 alert('Event deleted successfully');
//                 fetchEvents(); // Reload events after deletion
//             }
//         } catch (error) {
//             console.error('Error deleting event:', error);
//         }
//     };

//     return (
//         <div className="container-fluid">
//             <div className="col-lg-12">
//                 <div className="row mb-4 mt-4">
//                     <div className="col-md-12">
//                         {/* Other content can be added here */}
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <div className="card">
//                             <div className="card-header">
//                                 <b>List of Events</b>
//                                 <span className="float-right">
//                                     <a className="btn btn-primary btn-block btn-sm   float-right" href="index.php?page=manage_event" id="new_event">
//                                         <i className="fa fa-plus"></i> New Entry
//                                     </a>
//                                 </span>
//                             </div>
//                             <div className="card-body">
//                                 <table className="table table-condensed table-bordered table-hover">
//                                     <colgroup>
//                                         <col width="5%" />
//                                         <col width="20%" />
//                                         <col width="15%" />
//                                         <col width="30%" />
//                                         <col width="15%" />
//                                         <col width="15%" />
//                                     </colgroup>
//                                     <thead>
//                                         <tr>
//                                             <th className="text-center">#</th>
//                                             <th className="">Schedule</th>
//                                             <th className="">Title</th>
//                                             <th className="">Description</th>
//                                             <th className="">Committed To Participate</th>
//                                             <th className="text-center">Action</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {events.map((event, index) => (
//                                             <tr key={event.id}>
//                                                 <td className="text-center">{index + 1}</td>
//                                                 <td>
//                                                     <p><b>{new Date(event.schedule).toLocaleString()}</b></p>
//                                                 </td>
//                                                 <td>
//                                                     <p><b>{event.title}</b></p>
//                                                 </td>
//                                                 <td>
//                                                     <p className="truncate">{event.description}</p>
//                                                 </td>
//                                                 <td>
//                                                     <p className="text-right">{event.commitCount}</p>
//                                                 </td>
//                                                 <td className="text-center">
//                                                     <button className="btn btn-sm btn-outline-primary" onClick={() => window.open(`../index.php?page=view_event&id=${event.id}`)}>View</button>
//                                                     <button className="btn btn-sm btn-outline-primary" onClick={() => window.location.href = `index.php?page=manage_event&id=${event.id}`}>Edit</button>
//                                                     <button className="btn btn-sm btn-outline-danger" onClick={() => deleteEvent(event.id)}>Delete</button>
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

// export default Events;
