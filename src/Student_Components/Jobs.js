import '../components/Gallery.css'
import React, { useState, useEffect } from 'react';

const CareerDetails = ({ id }) => {
    const [career, setCareer] = useState(null);
    const [filterText, setFilterText] = useState('');

    // Example of hard-coded data you might use
    const simulatedData = {
        company: 'Example Company',
        job_title: 'Software Developer',
        location: 'New York, NY',
        description: '<p>Responsible for developing and maintaining software applications.</p>'
    };

    useEffect(() => {
        // Simulate fetching data from a server by using setTimeout
        setTimeout(() => {
            setCareer(simulatedData);
        }, 1000); // Simulate an async operation
    }, [id]);

    const handleSearch = () => {
        // Implement search functionality here based on 'filterText'
        console.log('Search:', filterText);
    };

    if (!career) {
        return <div>Loading...</div>;
    }

    const { company, job_title, location, description } = career;

    return (
        <div>
            {/* Header Section */}
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Jobs</h3>
                            <hr className="divider my-4" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Search/Filter Section */}
            <div className="container">
                <div className="card mb-4 mt-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-search"></i></span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Filter name, course, etc."
                                        value={filterText}
                                        onChange={(e) => setFilterText(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-primary btn-block btn-sm" onClick={handleSearch}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Career Details Section */}
            <div className="container-fluid">
                <p>Company: <b><span style={{ fontSize: 'large' }}>{company}</span></b></p>
                <p>Job Title: <b><span style={{ fontSize: 'large' }}>{job_title}</span></b></p>
                <p>Location: <i className="fa fa-map-marker"></i> <b><span style={{ fontSize: 'large' }}>{location}</span></b></p>
                <hr className="divider" />
                <div dangerouslySetInnerHTML={{ __html: description }} />

                <div className="modal-footer display">
                    <div className="row">
                        <div className="col-md-12">
                            <button className="btn float-right btn-secondary" type="button" onClick={() => console.log("Close button clicked")}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerDetails;
