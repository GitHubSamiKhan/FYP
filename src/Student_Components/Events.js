import '../components/Gallery.css'
import React, { useState } from 'react';

const EventDetail = () => {
    const eventData = {
        id: '1',
        title: 'Sample Event',
        schedule: new Date().toISOString(),
        content: 'This is a sample event description.',
        banner: 'sample-banner.jpg'
    };

    const [event, setEvent] = useState(eventData);
    const [isCommitted, setIsCommitted] = useState(false);

    const handleParticipate = () => {
        setIsCommitted(true);
        alert('Successfully committed to participate!');
    };

    // Placeholder definitions for unused variables/functions
    const filterText = ''; // Placeholder for filter text
    const setFilterText = () => { }; // Placeholder for setFilterText function
    const handleSearch = () => { }; // Placeholder for handleSearch function

    if (!event) return <div>Loading...</div>;

    const { title, schedule, content } = event;

    return (
        <>
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Events</h3>
                            <hr className="divider my-4" />
                        </div>
                    </div>
                </div>
            </header>

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

                {/* EventDetail content */}
                <div className="col-lg-12">
                    <div className="card mt-4 mb-4">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <p><b><i className="fa fa-calendar"></i> {new Date(schedule).toLocaleString()}</b></p>
                                    <p>{content}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <hr className="divider" style={{ maxWidth: '100%' }} />
                                    <div className="text-center">
                                        {isCommitted ? (
                                            <span className="badge badge-primary">Committed to Participate</span>
                                        ) : (
                                            <button className="btn btn-primary" onClick={handleParticipate}>Participate</button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventDetail;
