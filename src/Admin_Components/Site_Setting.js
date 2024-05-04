// import './Gallery.css'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // You may use axios for AJAX requests in React

// const Settings = () => {
//     const [meta, setMeta] = useState({});

//     useEffect(() => {
//         // Fetch initial system settings from the API
//         const fetchSettings = async () => {
//             try {
//                 const response = await axios.get('/api/system/settings'); // Example API endpoint
//                 if (response.data) {
//                     setMeta(response.data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching system settings:', error);
//             }
//         };

//         fetchSettings();
//     }, []); // Run once on component mount

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         const reader = new FileReader();
//         reader.onload = (e) => {
//             setMeta((prevMeta) => ({
//                 ...prevMeta,
//                 cover_img: e.target.result,
//             }));
//         };
//         reader.readAsDataURL(file);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const formData = new FormData(e.target);
//             await axios.post('/api/system/settings', formData);
//             alert('Data successfully saved.');
//             window.location.reload();
//         } catch (error) {
//             console.error('Error saving settings:', error);
//         }
//     };

//     return (
//         <div className="container-fluid">
//             <div className="card col-lg-12">
//                 <div className="card-body">
//                     <form onSubmit={handleSubmit} id="manage-settings">
//                         <div className="form-group">
//                             <label htmlFor="name" className="control-label">
//                                 System Name
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="name"
//                                 name="name"
//                                 value={meta.name || ''}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="email" className="control-label">
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 className="form-control"
//                                 id="email"
//                                 name="email"
//                                 value={meta.email || ''}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="contact" className="control-label">
//                                 Contact
//                             </label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="contact"
//                                 name="contact"
//                                 value={meta.contact || ''}
//                                 required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="about" className="control-label">
//                                 About Content
//                             </label>
//                             <textarea
//                                 name="about"
//                                 className="text-jqte"
//                                 value={meta.about_content || ''}
//                             ></textarea>
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="img" className="control-label">
//                                 Image
//                             </label>
//                             <input
//                                 type="file"
//                                 className="form-control"
//                                 name="img"
//                                 onChange={handleFileChange}
//                             />
//                         </div>
//                         <div className="form-group">
//                             <img
//                                 src={meta.cover_img ? `assets/uploads/${meta.cover_img}` : ''}
//                                 alt=""
//                                 id="cimg"
//                                 style={{ maxHeight: '10vh', maxWidth: '6vw' }}
//                             />
//                         </div>
//                         <center>
//                             <button className="btn btn-info btn-primary btn-block col-md-2">
//                                 Save
//                             </button>
//                         </center>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Settings;
// ///////////////////////////////////////////////////////////////////////////////////////
import './Gallery.css'
import React, { useState, useEffect } from 'react';

const Site_Setting = () => {
    const [meta, setMeta] = useState({});

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const response = await fetch('/api/system/settings');
                if (response.ok) {
                    const data = await response.json();
                    setMeta(data);
                } else {
                    throw new Error('Failed to fetch system settings');
                }
            } catch (error) {
                console.error('Error fetching system settings:', error);
            }
        };

        fetchSettings();
    }, []); // Run once on component mount

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setMeta((prevMeta) => ({
                ...prevMeta,
                cover_img: e.target.result,
            }));
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const response = await fetch('/api/system/settings', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('Data successfully saved.');
                window.location.reload();
            } else {
                throw new Error('Failed to save settings');
            }
        } catch (error) {
            console.error('Error saving settings:', error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="card col-lg-12">
                <div className="card-body">
                    <form onSubmit={handleSubmit} id="manage-settings">
                        <div className="form-group">
                            <label htmlFor="name" className="control-label">
                                System Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={meta.name || ''}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="control-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={meta.email || ''}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact" className="control-label">
                                Contact
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="contact"
                                name="contact"
                                value={meta.contact || ''}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="about" className="control-label">
                                About Content
                            </label>
                            <textarea
                                name="about"
                                className="text-jqte"
                                value={meta.about_content || ''}
                                onChange={(e) =>
                                    setMeta((prevMeta) => ({
                                        ...prevMeta,
                                        about_content: e.target.value,
                                    }))
                                }
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="img" className="control-label">
                                Image
                            </label>
                            <input
                                type="file"
                                className="form-control"
                                name="img"
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className="form-group">
                            <img
                                src={meta.cover_img ? `assets/uploads/${meta.cover_img}` : ''}
                                alt=""
                                id="cimg"
                                style={{ maxHeight: '10vh', maxWidth: '6vw' }}
                            />
                        </div>
                        <center>
                            <button className="btn btn-info btn-primary btn-block col-md-2">
                                Save
                            </button>
                        </center>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Site_Setting;