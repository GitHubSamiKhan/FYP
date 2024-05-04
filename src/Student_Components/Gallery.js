// import React, { useEffect, useState } from 'react';
// import { uni_modal, viewer_modal } from 'your-modal-lib'; // Import modal functions from your modal library

// const Gallery = () => {
//     const [galleryItems, setGalleryItems] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('api/gallery'); // Replace 'api/gallery' with your API endpoint to fetch gallery data
//                 const data = await response.json();
//                 setGalleryItems(data);
//             } catch (error) {
//                 console.error('Error fetching gallery data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleGalleryClick = (id) => {
//         // Handle gallery item click, navigate to a specific route or perform an action
//         // Example: history.push(`/gallery/${id}`);
//         // Replace history.push with your preferred routing method (e.g., React Router)
//         uni_modal('Submit Booking Request', `booking.php?gallery_id=${id}`);
//     };

//     const handleImageClick = (src) => {
//         // Open image viewer modal
//         viewer_modal(src);
//     };

//     return (
//         <>
//             <header className="masthead">
//                 <div className="container-fluid h-100">
//                     <div className="row h-100 align-items-center justify-content-center text-center">
//                         <div className="col-lg-8 align-self-end mb-4 page-title">
//                             <h3 className="text-white">Gallery</h3>
//                             <hr className="divider my-4" />
//                         </div>
//                     </div>
//                 </div>
//             </header>
//             <div className="container-fluid mt-3 pt-2">
//                 <div className="row-items">
//                     <div className="col-lg-12">
//                         <div className="row">
//                             {galleryItems.map((item) => (
//                                 <div key={item.id} className="col-md-6">
//                                     <div
//                                         className={`card gallery-list ${item.id >= 3 ? 'rtl' : ''}`}
//                                         data-id={item.id}
//                                         onClick={() => handleGalleryClick(item.id)}
//                                     >
//                                         <div className="gallery-img card-img-top">
//                                             <img
//                                                 src={`admin/assets/uploads/gallery/${item.image}`}
//                                                 alt=""
//                                                 onClick={() => handleImageClick(`admin/assets/uploads/gallery/${item.image}`)}
//                                             />
//                                         </div>
//                                         <div className="card-body">
//                                             <div className="row align-items-center justify-content-center text-center h-100">
//                                                 <div>
//                                                     <span style={{ fontSize: 'inherit' }}>
//                                                         <small>{item.about}</small>
//                                                     </span>
//                                                     <br />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Gallery;
// /////////////////////////////////////////////////////
import '../components/Gallery.css';
import React from 'react';

const Gallery = () => {
    // Array of gallery items with corrected image paths
    const galleryItems = [
        {
            id: 1,
            image: process.env.PUBLIC_URL + '/1_img.jpg', // Assuming Create React App and images in the public folder
            about: 'Description of image 1',
        },
        {
            id: 2,
            image: process.env.PUBLIC_URL + '/2_img.jpg',
            about: 'Description of image 2',
        },
        {
            id: 3,
            image: process.env.PUBLIC_URL + '/3_img.jpg',
            about: 'Description of image 3',
        },
        {
            id: 4, // Corrected ID to be unique
            image: process.env.PUBLIC_URL + '/4_img.jpg',
            about: 'Description of another image',
        },
        // Add more items as needed...
    ];

    const handleGalleryClick = (id) => {
        // Handle gallery item click
        console.log(`Gallery item clicked: ${id}`);
    };

    const handleImageClick = (src) => {
        // Handle image click
        console.log(`Image clicked: ${src}`);
    };

    return (
        <>
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Gallery</h3>
                            <hr className="divider my-4" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="container-fluid mt-3 pt-2">
                <div className="row-items ">
                    <div className="col-lg-12 ">
                        <div className="row ">
                            {galleryItems.map((item) => (
                                <div key={item.id} className="col-md-6">
                                    <div
                                        className={`card gallery-list ${item.id >= 3 ? 'rtl' : ''}`}
                                        data-id={item.id}
                                        onClick={() => handleGalleryClick(item.id)}
                                    >
                                        <div className="gallery-img card-img-top">
                                            <img
                                                src={item.image}
                                                alt=""
                                                onClick={(e) => { e.stopPropagation(); handleImageClick(item.image); }}
                                            />
                                        </div>
                                        <div className="card-body">
                                            <div className="row align-items-center justify-content-center text-center h-100">
                                                <div>
                                                    <span style={{ fontSize: 'inherit' }}>
                                                        <small>{item.about}</small>
                                                    </span>
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;

