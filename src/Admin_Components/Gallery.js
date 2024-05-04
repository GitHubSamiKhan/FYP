// import './Gallery.css';
// import React, { useState, useEffect } from 'react';
// import $ from 'jquery';
// import 'datatables.net-dt/css/dataTables.dataTables.css';

// import 'datatables.net';

// const GalleryComponent = () => {
//     const [gallery, setGallery] = useState([]);
//     const [formData, setFormData] = useState({
//         id: '',
//         img: '',
//         about: ''
//     });

//     useEffect(() => {
//         // Fetch gallery data from API or database on component mount
//         fetchGalleryData();
//     }, []);

//     const fetchGalleryData = () => {
//         // Mocked gallery data for demonstration
//         const mockedGalleryData = [
//             { id: 1, img: 'img1.jpg', about: 'Description 1' },
//             { id: 2, img: 'img2.jpg', about: 'Description 2' }
//         ];

//         setGallery(mockedGalleryData);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add your form submission logic here
//     };

//     useEffect(() => {
//         // Initialize DataTable
//         $('#galleryTable').DataTable();
//     }, [gallery]);

//     return (
//         <div className="container-fluid">
//             <div className="col-lg-12">
//                 <div className="row">
//                     <div className="col-md-4">
//                         {/* Form goes here */}
//                     </div>
//                     <div className="col-md-8">
//                         <div className="card">
//                             <div className="card-header">
//                                 <b>gallery List</b>
//                             </div>
//                             <div className="card-body">
//                                 <table id="galleryTable" className="table table-bordered table-hover">
//                                     <thead>
//                                         <tr>
//                                             <th className="text-center">#</th>
//                                             <th className="text-center">IMG</th>
//                                             <th className="text-center">Gallery</th>
//                                             <th className="text-center">Action</th>
//                                         </tr>
//                                     </thead>
// <tbody>
//     {gallery.map((item, index) => (
//         <tr key={index}>
//             <td className="text-center">{index + 1}</td>
//             <td className="">
//                 <img src={`assets/uploads/gallery/${item.img}`} className="gimg" alt="" />
//             </td>
//             <td className="">{item.about}</td>
//             <td className="text-center">
//                 <button className="btn btn-sm btn-primary edit_gallery" type="button" onClick={() => console.log('Edit', item.id)}>Edit</button>
//                 <button className="btn btn-sm btn-danger delete_gallery" type="button" onClick={() => console.log('Delete', item.id)}>Delete</button>
//             </td>
//         </tr>
//     ))}
// </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default GalleryComponent;


// ////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from 'react';
// import $ from 'jquery';
// import 'datatables.net';
// import 'datatables.net-dt/css/dataTables.dataTables.css';
// import './Gallery.css'; // Make sure Gallery.css contains necessary styles
// const Gallery = () => {
//     const [gallery, setGallery] = useState([]);
//     const [formData, setFormData] = useState({
//         id: '',
//         img: '',
//         about: ''
//     });

//     useEffect(() => {
//         fetchGalleryData();
//     }, []);

//     const fetchGalleryData = () => {
//         // Mocked gallery data for demonstration
//         const mockedGalleryData = [
//             { id: 1, img: 'img1.jpg', about: 'Description 1' },
//             { id: 2, img: 'img2.jpg', about: 'Description 2' }
//         ];
//         setGallery(mockedGalleryData);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (formData.id) {
//             // Edit mode
//             const updatedGallery = gallery.map(item => (item.id === formData.id ? { ...item, ...formData } : item));
//             setGallery(updatedGallery);
//         } else {
//             // Add new item
//             const newEntry = {
//                 id: gallery.length + 1,
//                 img: formData.img,
//                 about: formData.about
//             };
//             setGallery([...gallery, newEntry]);
//         }
//         resetFormData();
//     };

//     const resetFormData = () => {
//         setFormData({ id: '', img: '', about: '' });
//     };

//     useEffect(() => {
//         $(document).ready(function () {
//             $('#galleryTable').DataTable().clear().rows.add(gallery).draw();
//         });
//     }, [gallery]);

//     return (
//         <div className="main-container">
//             <div className="container-fluid">
//                 <div className="row">
//                     {/* Upload Panel */}
//                     <div className="col-md-4">
//                         <div className="card">
//                             <div className="card-header">
//                                 <b>Upload Image</b>
//                             </div>
//                             <div className="card-body">
//                                 <form onSubmit={handleSubmit}>
//                                     <div className="form-group">
//                                         <label>Image</label>
//                                         <input
//                                             type="file"
//                                             className="form-control"
//                                             name="img"
//                                             onChange={handleInputChange}
//                                         />
//                                         <img src={`assets/uploads/gallery/${formData.img}`} alt="" className="form-image" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label>Short Description</label>
//                                         <textarea
//                                             className="form-control"
//                                             name="about"
//                                             value={formData.about}
//                                             onChange={handleInputChange}
//                                         ></textarea>
//                                     </div>
//                                     <button type="submit" className="btn btn-primary">Save</button>
//                                     <button type="button" className="btn btn-default" onClick={resetFormData}>Cancel</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Gallery Display Panel */}
//                     <div className="col-md-8">
//                         <div className="card">
//                             <div className="card-header">
//                                 <b>Gallery List</b>
//                             </div>
//                             <div className="card-body">
//                                 <table id="galleryTable" className="table table-bordered table-hover">
//                                     <thead>
//                                         <tr>
//                                             <th className=" ">#</th>
//                                             <th className=" ">IMG</th>
//                                             <th className=" ">Gallery</th>
//                                             <th className=" ">Action</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {gallery.map((item, index) => (
//                                             <tr key={index}>
//                                                 <td className="text-center">{item.id}</td>
//                                                 <td className="text-center">
//                                                     <img src={`assets/uploads/gallery/${item.img}`} className="gimg" alt="" />
//                                                 </td>
//                                                 <td>{item.about}</td>
//                                                 <td className="text-center">
//                                                     <button className="btn btn-sm btn-primary" onClick={() => setFormData(item)}>Edit</button>
//                                                     <button className="btn btn-sm btn-danger" onClick={() => setGallery(gallery.filter(g => g.id !== item.id))}>Delete</button>
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

// export default Gallery;
/* global $ */
import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery'
import 'datatables.net';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import './Gallery.css'; // Ensure Gallery.css contains necessary styles

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [formData, setFormData] = useState({ img: '', about: '' });
    const galleryTableRef = useRef(null);

    useEffect(() => {
        // Mocked gallery data for demonstration
        const mockedGalleryData = [
            { id: 1, img: 'img1.jpg', about: 'Description 1' },
            { id: 2, img: 'img2.jpg', about: 'Description 2' }
        ];
        setGallery(mockedGalleryData);
    }, []);

    useEffect(() => {
        if (galleryTableRef.current) {
            $(galleryTableRef.current).DataTable({
                searching: true,
                paging: true
            });
        }
    }, [gallery]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            id: gallery.length + 1,
            img: formData.img,
            about: formData.about
        };
        setGallery([...gallery, newEntry]);
        resetFormData();
    };

    const resetFormData = () => {
        setFormData({ img: '', about: '' });
    };

    return (
        <div className="main-container">
            <div className="container-fluid">
                <div className="row">
                    {/* Upload Panel */}
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <b>Upload Image</b>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            name="img"
                                            onChange={handleInputChange}
                                        />
                                        <img src={`assets/uploads/gallery/${formData.img}`} alt="" className="form-image" />
                                    </div>
                                    <div className="form-group">
                                        <label>Short Description</label>
                                        <textarea
                                            className="form-control"
                                            name="about"
                                            value={formData.about}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Save</button>
                                    <button type="button" className="btn btn-default" onClick={resetFormData}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Gallery Display Panel */}
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <b>Gallery List</b>
                            </div>
                            <div className="card-body">
                                <table ref={galleryTableRef} id="galleryTable" className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className=" ">#</th>
                                            <th className=" ">IMG</th>
                                            <th className=" ">Gallery</th>
                                            <th className=" ">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {gallery.map((item, index) => (
                                            <tr key={index}>
                                                <td className="text-center">{item.id}</td>
                                                <td className="text-center">
                                                    <img src={`assets/uploads/gallery/${item.img}`} className="gimg" alt="" />
                                                </td>
                                                <td>{item.about}</td>
                                                <td className="text-center">
                                                    <button className="btn btn-sm btn-primary" onClick={() => console.log('Edit action')}>Edit</button>
                                                    <button className="btn btn-sm btn-danger" onClick={() => setGallery(gallery.filter(g => g.id !== item.id))}>Delete</button>
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

export default Gallery;
