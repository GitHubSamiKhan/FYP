// import React from 'react';
// // import { Link } from 'react-router-dom';
// import './Sidebar.css';
// import logo from './AWKUM-Logo.png'; // Importing the logo image
// import { AiFillDashboard } from "react-icons/ai";
// import { PiStudentFill } from "react-icons/pi";
// import { BsFillGrid3X3GapFill } from 'react-icons/bs';

// import { FaNetworkWired } from "react-icons/fa";
// import { MdEmojiEvents } from "react-icons/md";
// import { MdForum } from "react-icons/md";
// // import { MdRoundaboutRight } from "react-icons/md";
// import { RiListSettingsFill } from "react-icons/ri";
// import { FaSignOutAlt } from "react-icons/fa";

// const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
//     return (
//         <aside className={`main-sidebar sidebar-dark-primary elevation-4 ${openSidebarToggle ? "sidebar-responsive" : ""}`}>

//             <a href="#" className="brand-link">
//                 <span className="brand-text ">AWKUM</span>
//                 <span className='icon close_icon' onClick={OpenSidebar}>X</span>
//             </a>

//             <div className="sidebar" style={{ color: 'gray', borderTop: '1px solid gray' }}>
//                 <div className="text-center">
//                     <img src={logo} className="logo" width="40%" alt="awkum logo" /> {/* Using the imported logo */}
//                 </div>
//                 <nav className="mt-2 text-sm">
//                     <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
//                         <li className="nav-item has-treeview menu-open">
//                             <a href="#" className="nav-link" title="Student main dashboard.">
//                                 {/* <i className="nav-icon fas fa-tachometer-alt"> </i> */}
//                                 <AiFillDashboard className='nav-icon' />
//                                 <span className='nav-text'>Dashboard</span>
//                             </a >
//                         </li>
//                         <li className="nav-item">
//                             <a href="#" className="nav-link">
//                                 {/* <i className="nav-icon fas fa-user-graduate"></i> */}
//                                 <PiStudentFill className='nav-icon' />
//                                 <span className='nav-text'>Alumni</span>
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a href="#" className="nav-link">
//                                 {/* <i className="nav-icon fas fa-user-graduate"></i> */}
//                                 <BsFillGrid3X3GapFill className='nav-icon' />
//                                 <span className='nav-text'>Gallery</span>
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a href="#" className="nav-link">
//                                 {/* <i className="nav-icon fas fa-briefcase"></i> */}
//                                 <FaNetworkWired className='nav-icon' />
//                                 <span className='nav-text'>Jobs</span>
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a href="#" className="nav-link">
//                                 {/* <i className="nav-icon far fa-calendar-alt"></i> */}
//                                 <MdEmojiEvents className='nav-icon' />
//                                 <span className='nav-text'>Events</span>
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a href="#" className="nav-link">
//                                 {/* <i className="nav-icon far fa-comments"></i> */}
//                                 <MdForum className='nav-icon' />
//                                 <span className='nav-text'>Forum</span>
//                             </a>
//                         </li>
//                         {/* <li className="nav-item">
//                             <a href="/" className="nav-link">
//                                 <i className="nav-icon fas fa-info-circle"></i>
//                                 <MdRoundaboutRight className='nav-icon' />
//                                 <span className='nav-text'>About</span>
//                             </a>
//                         </li> */}
//                         <li className="nav-item">
//                             <a href="#" className="nav-link">
//                                 {/* <i className="nav-icon fas fa-info-circle"></i> */}
//                                 <PiStudentFill className='nav-icon' />
//                                 <span className='nav-text'>Users</span>
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a href="#" className="nav-link">
//                                 {/* <i className="nav-icon fas fa-info-circle"></i> */}
//                                 <RiListSettingsFill className='nav-icon' />
//                                 <span className='nav-text'>Site_Setting</span>
//                             </a>
//                         </li>
//                         <li className="nav-item">
//                             <a href="#" className="nav-link">
//                                 {/* <i className="nav-icon fas fa-sign-out-alt"></i> */}
//                                 <FaSignOutAlt className='nav-icon' />
//                                 <span className='nav-text'>Sign Out</span>
//                             </a>
//                         </li>
//                     </ul>
//                 </nav>
//                 <small className="text-center" style={{ color: 'gray', borderTop: '1px solid gray' }}>
//                     Developed by Muhammad Sami Khan, Shamsu Rahman and Salahuddin
//                 </small>
//             </div>
//         </aside >
//     );
// };

// export default Sidebar;


// //////////////////////////////
// ////Sign Out and Router Funcitonality is present here//
///////////////////////////////////////////////////
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from './AWKUM-Logo.png'; // Importing the logo image
import { AiFillDashboard } from "react-icons/ai";
import { PiStudentFill } from "react-icons/pi";
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaNetworkWired } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { MdForum } from "react-icons/md";
import { RiListSettingsFill } from "react-icons/ri";
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
    const handleSignOut = () => {
        // Perform sign-out actions here (e.g., clear session, local storage, etc.)
        localStorage.clear(); // Clear local storage (if needed)
        // Redirect to the login page (you need to implement this logic in your main App component)
        // For example, you can use a state or context to manage authentication and redirect accordingly
        window.location.href = '/login'; // Directly navigate to the login page
    };

    return (
        <aside className={`main-sidebar sidebar-dark-primary elevation-4 ${openSidebarToggle ? "sidebar-responsive" : ""}`}>

            <Link to="#" className="brand-link">
                <span className="brand-text">AWKUM</span>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </Link>

            <div className="sidebar" style={{ color: 'gray', borderTop: '1px solid gray' }}>
                <div className="text-center">
                    <img src={logo} className="logo" width="40%" alt="awkum logo" /> {/* Using the imported logo */}
                </div>
                <nav className="mt-2 text-sm">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item has-treeview menu-open">
                            <Link to="/dashboard" className="nav-link" title="Student main dashboard.">
                                <AiFillDashboard className='nav-icon' />
                                <span className='nav-text'>Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/alumni" className="nav-link">
                                <PiStudentFill className='nav-icon' />
                                <span className='nav-text'>Alumni</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Gallery" className="nav-link">
                                <BsFillGrid3X3GapFill className='nav-icon' />
                                <span className='nav-text'>Gallery</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Jobs" className="nav-link">
                                <FaNetworkWired className='nav-icon' />
                                <span className='nav-text'>Jobs</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Events" className="nav-link">
                                <MdEmojiEvents className='nav-icon' />
                                <span className='nav-text'>Events</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Forum" className="nav-link">
                                <MdForum className='nav-icon' />
                                <span className='nav-text'>Forum</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Users" className="nav-link">
                                <PiStudentFill className='nav-icon' />
                                <span className='nav-text'>Users</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Site_Setting" className="nav-link">
                                <RiListSettingsFill className='nav-icon' />
                                <span className='nav-text'>Site Setting</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* Handle sign-out on click */}
                            <button className="nav-link" onClick={handleSignOut}>
                                <FaSignOutAlt className='nav-icon' />
                                <span className='nav-text'>Sign Out</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                <small className="text-center" style={{ color: 'gray', borderTop: '1px solid gray' }}>
                    Developed by Muhammad Sami Khan, Shamsu Rahman, and Salahuddin
                </small>
            </div>
        </aside>
    );
};

export default Sidebar;
