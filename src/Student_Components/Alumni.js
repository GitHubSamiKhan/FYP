// import './Alumni.css'
import React, { useState } from 'react';
import '../components/Gallery.css';

const AlumnusList = () => {
    const [alumniList, setAlumniList] = useState([]);
    const [filterText, setFilterText] = useState('');

    // Dummy data for demonstration
    const dummyAlumniList = [
        {
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com',
            course: 'Computer Science',
            batch: '2010',
            connected_to: 'Software Developer',
            avatar: 'avatar1.jpg'
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'janesmith@example.com',
            course: 'Engineering',
            batch: '2008',
            connected_to: 'Civil Engineer',
            avatar: 'avatar2.jpg'
        },
        // Add more dummy data as needed
    ];

    // Initialize alumni list with dummy data on component mount
    useState(() => {
        setAlumniList(dummyAlumniList);
    }, []);

    const handleSearch = () => {
        const filteredAlumni = dummyAlumniList.filter(alumni => {
            const searchText = `${alumni.name} ${alumni.email} ${alumni.course} ${alumni.batch} ${alumni.connected_to}`;
            return searchText.toLowerCase().includes(filterText.toLowerCase());
        });
        setAlumniList(filteredAlumni);
    };

    return (
        <>
            <div className="sami">
                <header className="masthead">
                    <div className="container-fluid h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-8 align-self-end mb-4 page-title">
                                <h3 className="text-white">Alumnus/Alumnae List</h3>
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
                </div>
                <div className="container-fluid mt-3 pt-2">
                    <div className="row-items">
                        <div className="col-lg-12">
                            <div className="row">
                                {alumniList.map((alumni) => (
                                    <div className="col-md-4 item" key={alumni.id}>
                                        <div className="card alumni-list" data-id={alumni.id}>
                                            <div className="alumni-img">
                                                <img src={`admin/assets/uploads/${alumni.avatar}`} alt="" />
                                            </div>
                                            <div className="card-body">
                                                <p className="filter-txt"><b>{alumni.name}</b></p>
                                                <hr className="divider w-100" />
                                                <p className="filter-txt">Email: <b>{alumni.email}</b></p>
                                                <p className="filter-txt">Course: <b>{alumni.course}</b></p>
                                                <p className="filter-txt">Batch: <b>{alumni.batch}</b></p>
                                                <p className="filter-txt">Currently working in/as <b>{alumni.connected_to}</b></p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlumnusList;
