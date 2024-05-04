import './Gallery.css';
import './Jobs.css';
import React, { useState, useEffect } from 'react';

const Jobs = () => {
    // Sample job data (replace with actual data fetching logic)
    const initialJobs = [
        {
            id: 1,
            company: 'Company A',
            job_title: 'Software Engineer',
            name: 'John Doe'
        },
        {
            id: 2,
            company: 'Company B',
            job_title: 'Product Manager',
            name: 'Jane Smith'
        }
        // Add more job objects as needed
    ];

    const [jobs, setJobs] = useState(initialJobs);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5; // Number of jobs to display per page

    // Update filteredJobs when jobs or searchTerm change
    useEffect(() => {
        const filteredResults = jobs.filter(job =>
            job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredJobs(filteredResults);
        setCurrentPage(1); // Reset to first page when search term changes
    }, [jobs, searchTerm]);

    const handleDelete = (id) => {
        const updatedJobs = jobs.filter(job => job.id !== id);
        setJobs(updatedJobs);
        alert('Job post deleted successfully.');
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate current jobs for the current page
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

    return (
        <div className="container-fluid">
            <div className="col-lg-12">
                <div className="row mb-4 mt-4">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <b>Jobs List</b>
                                <input
                                    type="text"
                                    className="form-control mt-2"
                                    placeholder="Search by company, job title, or name..."
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-condensed table-hover">
                                    <thead>
                                        <tr>
                                            <th className=" ">#</th>
                                            <th>Company</th>
                                            <th>Job Title</th>
                                            <th>Posted By</th>
                                            <th className=" ">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentJobs.map((job, index) => (
                                            <tr key={job.id}>
                                                <td className="text-center">{indexOfFirstJob + index + 1}</td>
                                                <td>{job.company}</td>
                                                <td>{job.job_title}</td>
                                                <td>{job.name}</td>
                                                <td className="text-center">
                                                    <button className="btn btn-sm btn-outline-primary" onClick={() => alert(`Viewing job ${job.id}`)}>View</button>
                                                    <button className="btn btn-sm btn-outline-primary" onClick={() => alert(`Editing job ${job.id}`)}>Edit</button>
                                                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(job.id)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* Pagination */}
                                <div className="pagination-container">
                                    {Array.from({ length: Math.ceil(filteredJobs.length / jobsPerPage) }).map((_, index) => (
                                        <button
                                            key={index}
                                            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                                            onClick={() => handlePageChange(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;
