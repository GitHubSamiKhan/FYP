import '../components/Gallery.css'
import React, { useState } from 'react';

const ManageEventForm = () => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [schedule, setSchedule] = useState('');
    const [content, setContent] = useState('');
    const [bannerSrc, setBannerSrc] = useState('');
    const [images, setImages] = useState([]);

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const newImage = {
                    name: file.name,
                    dataUrl: e.target.result
                };
                setImages(prevImages => [...prevImages, newImage]);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your AJAX request here to save event data
        // Use images and other form data to submit to the server
    };

    return (
        <div className="container-fluid">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="id" value={id} />
                            <div className="form-group row">
                                <div className="col-md-5">
                                    <label htmlFor="title" className="control-label">Event</label>
                                    <input type="text" className="form-control" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-5">
                                    <label htmlFor="schedule" className="control-label">Schedule</label>
                                    <input type="text" className="form-control datetimepicker" name="schedule" value={schedule} onChange={(e) => setSchedule(e.target.value)} required autoComplete="off" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-10">
                                    <label htmlFor="content" className="control-label">Description</label>
                                    <textarea name="content" id="content" className="form-control" cols="30" rows="5" value={content} onChange={(e) => setContent(e.target.value)} required />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-5">
                                    <label htmlFor="banner" className="control-label">Banner Image</label>
                                    <input type="file" className="form-control" name="banner" onChange={handleFileChange} />
                                </div>
                                <div className="col-md-5">
                                    <img src={bannerSrc} alt="" id="banner-field" style={{ maxHeight: '15vh', maxWidth: '8vw' }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-sm btn-block btn-primary col-sm-2"> Save</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="drop" style={{ minHeight: '15vh', maxHeight: '30vh', overflow: 'auto', width: 'calc(100%)', border: '5px solid #929292', margin: '10px', borderStyle: 'dashed', padding: '10px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                {images.map((image, index) => (
                    <div key={index} className="img-holder" style={{ position: 'relative', margin: '1em', cursor: 'pointer' }}>
                        <img src={image.dataUrl} className="imgDropped" style={{ height: '39vh', width: '22vw', margin: '.5em' }} />
                        <span className="rem badge badge-primary" style={{ position: 'absolute', top: '-.5em', left: '-.5em', cursor: 'pointer' }} onClick={() => setImages(prevImages => prevImages.filter((_, i) => i !== index))}>
                            <i className="fa fa-times"></i>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageEventForm;
