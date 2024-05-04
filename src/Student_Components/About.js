// import '../components/Gallery.css'
// import React from 'react';

// const AboutUs = ({ aboutContent }) => {
//     return (
//         <>
//             {/* Masthead */}
//             <header className="masthead">
//                 <div className="container h-100">
//                     <div className="row h-100 align-items-center justify-content-center text-center">
//                         <div className="col-lg-10 align-self-end mb-4" style={{ background: '#0000002e' }}>
//                             <h1 className="text-uppercase text-white font-weight-bold">About Us</h1>
//                             <hr className="divider my-4" />
//                         </div>
//                     </div>
//                 </div>
//             </header>

//             {/* About Content Section */}
//             <section className="page-section">
//                 <div className="container">
//                     {/* Render the about content safely */}
//                     <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
//                 </div>
//             </section>
//         </>
//     );
// };

// export default AboutUs;
// //////////////////////////////////////////////////////////////
import React from 'react';
import '../components/Gallery.css';

const AboutUs = () => {
    // Define the about content directly within the component
    const aboutContent = `
        <p>This is the about us section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac semper est. Phasellus ut nulla at risus rutrum ullamcorper. Donec auctor fringilla elit, in molestie lacus volutpat id.</p>
        <p>Nullam sit amet orci libero. Vestibulum congue, lorem eu faucibus ultrices, magna felis tempor nisi, quis eleifend neque justo a arcu. Proin interdum blandit eros, et auctor eros auctor nec.</p>
    `;

    return (
        <>
            {/* Masthead */}
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end mb-4" style={{ background: '#0000002e' }}>
                            <h1 className="text-uppercase text-white font-weight-bold">About Us</h1>
                            <hr className="divider my-4" />
                        </div>
                    </div>
                </div>
            </header>

            {/* About Content Section */}
            <section className="page-section">
                <div className="container">
                    {/* Render the about content safely */}
                    <div dangerouslySetInnerHTML={{ __html: aboutContent }} />
                </div>
            </section>
        </>
    );
};

export default AboutUs;
