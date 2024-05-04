import './Dashboard.css'
import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'

function Dashboard() {

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>
            <hr />
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>ALUMNI</h3>
                        <BsFillArchiveFill className='card_icon' />
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>FORUM TOPICS</h3>
                        <BsFillGrid3X3GapFill className='card_icon' />
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>POSTED JOBS</h3>
                        <BsPeopleFill className='card_icon' />
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>UPCOMING EVENTS</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>2</h1>
                </div>
            </div>
        </main>
    )
}

export default Dashboard;
// // //////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Assuming you use Axios for AJAX requests in React

// const Dashboard = () => {
//     const [alumniCount, setAlumniCount] = useState(0);
//     const [forumTopicsCount, setForumTopicsCount] = useState(0);
//     const [jobsCount, setJobsCount] = useState(0);
//     const [upcomingEventsCount, setUpcomingEventsCount] = useState(0);
//     const [trackingId, setTrackingId] = useState('');
//     const [personDetails, setPersonDetails] = useState(null);

//     useEffect(() => {
//         // Fetch data for each section when the component mounts
//         fetchAlumniCount();
//         fetchForumTopicsCount();
//         fetchJobsCount();
//         fetchUpcomingEventsCount();
//     }, []);

//     const fetchAlumniCount = async () => {
//         try {
//             const response = await axios.get('/api/alumni/count');
//             setAlumniCount(response.data.count);
//         } catch (error) {
//             console.error('Error fetching alumni count:', error);
//         }
//     };

//     const fetchForumTopicsCount = async () => {
//         try {
//             const response = await axios.get('/api/forum/topics/count');
//             setForumTopicsCount(response.data.count);
//         } catch (error) {
//             console.error('Error fetching forum topics count:', error);
//         }
//     };

//     const fetchJobsCount = async () => {
//         try {
//             const response = await axios.get('/api/jobs/count');
//             setJobsCount(response.data.count);
//         } catch (error) {
//             console.error('Error fetching jobs count:', error);
//         }
//     };

//     const fetchUpcomingEventsCount = async () => {
//         try {
//             const response = await axios.get('/api/events/upcoming/count');
//             setUpcomingEventsCount(response.data.count);
//         } catch (error) {
//             console.error('Error fetching upcoming events count:', error);
//         }
//     };

//     const handleTrackingIdChange = (e) => {
//         setTrackingId(e.target.value);
//     };

//     const handleTrackPerson = async () => {
//         try {
//             const response = await axios.post('/api/person/details', {
//                 tracking_id: trackingId
//             });
//             setPersonDetails(response.data);
//         } catch (error) {
//             console.error('Error fetching person details:', error);
//         }
//     };

//     return (
//         <div className="container-fluid mt-3">
//             <div className="row ml-3 mr-3">
//                 <div className="col-lg-12">
//                     <div className="card">
//                         <div className="card-body">
//                             {`Welcome back ${sessionStorage.getItem('login_name')}!`}
//                             <hr />
//                             <div className="row">
//                                 <DashboardCard bgColor="primary" iconClass="fa fa-users" count={alumniCount} label="Alumni" />
//                                 <DashboardCard bgColor="info" iconClass="fa fa-comments" count={forumTopicsCount} label="Forum Topics" />
//                                 <DashboardCard bgColor="warning" iconClass="fa fa-briefcase" count={jobsCount} label="Posted Jobs" />
//                                 <DashboardCard bgColor="primary" iconClass="fa fa-calendar-day" count={upcomingEventsCount} label="Upcoming Events" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const DashboardCard = ({ bgColor, iconClass, count, label }) => (
//     <div className="col-md-3">
//         <div className={`card bg-${bgColor}`}>
//             <div className="card-body text-white">
//                 <span className="float-right summary_icon"><i className={iconClass}></i></span>
//                 <h4><b>{count}</b></h4>
//                 <p><b>{label}</b></p>
//             </div>
//         </div>
//     </div>
// );

// export default Dashboard;
