import React from 'react'
import './Navbar.css'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
    from 'react-icons/bs'

function Navbar({ OpenSidebar }) {
    return (
        <nav className="navbar navbar-light fixed-top bg-primary" style={{ padding: '0', minHeight: '3.5rem' }}>

            {/* <div className="container-fluid mt-2 mb-2"> */}
            {/* <div className="col-lg-12"> */}
            <div className="col-md-1 float-left" style={{ display: 'flex' }}>

                <BsJustify className='icon' onClick={OpenSidebar} />

                {/* </div> */}
            </div>
            {/* </div> */}
            <div className='nav-left'>
                {/* <BsSearch className='icon' /> */}
                <span className='icon'>Alumni Tracking Platfrom</span>
            </div>
            <div className='nav-right'>
                {/* <BsFillBellFill className='icon' />
                <BsFillEnvelopeFill className='icon' />
                <BsPersonCircle className='icon' /> */}
                <span className='icon' >You are logged in as : Yourname</span>
            </div>
        </nav >
    )
}

export default Navbar;


// import React from 'react';

// function Header({ session }) {
//     return (
//         <nav className="navbar navbar-light fixed-top bg-primary" style={{ padding: 0, minHeight: '3.5rem' }}>
//             <div className="container-fluid mt-2 mb-2">
//                 <div className="col-lg-12">
//                     <div className="col-md-1 float-left" style={{ display: 'flex' }}>
//                         {/* You can add content here if needed */}
//                     </div>
//                     <div className="col-md-4 float-left text-white">
//                         <span><b>{session.system.name || ''}</b></span>
//                     </div>
//                     <div className="float-right">
//                         <div className="dropdown mr-4">
//                             <a href="#" className="text-white dropdown-toggle" id="account_settings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{session.login_name}</a>
//                             <div className="dropdown-menu" aria-labelledby="account_settings" style={{ left: '-2.5em' }}>
//                                 <a className="dropdown-item" href="javascript:void(0)" id="manage_my_account"><i className="fa fa-cog"></i> Manage Account</a>
//                                 <a className="dropdown-item" href="ajax.php?action=logout"><i className="fa fa-power-off"></i> Logout</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Header;



