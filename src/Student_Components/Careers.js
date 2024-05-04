import '../components/Gallery.css'
import React, { useState, useEffect } from 'react';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Simulate fetching jobs (replace with actual static data)
        const mockJobs = [
            {
                id: 1,
                job_title: 'Frontend Developer',
                company: 'ABC Inc.',
                location: 'New York',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                name: 'John Doe'
            },
            {
                id: 2,
                job_title: 'Backend Developer',
                company: 'XYZ Corp.',
                location: 'San Francisco',
                description: ' loremsfnkaosidjfi koawfj osw iowjeorij qiwjera oijweoijr ojwaeojr oijweprj qpwerjfgaksdfnjoiqewj nqwlkernfqowijerf jawne oijqwerp wkdfjoiw ef nowierho hwejrfoie iori joiejrfoj wieroi qpowakdfnowifj owiefrio qwjweijrfoi jqoeri jqwoeijr owiefn ij3rwefk e0rw09 09er 09wfoiasdj foasidfj nn oij sfgkslmnvoiasfnkavsno joifgnaosigosid oeifgoiaefnsvied cdiowisref oiefoi oiwejro fskf j0g ewioeinfosoriwiej wierjoawiekdjfhaopseihrd awkesfrapoesifj iej Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                name: 'Jane Smith'
            }
        ];

        setJobs(mockJobs);
    }, []); // Empty dependency array to run the effect only once (on component mount)

    const handleFilterChange = (e) => {
        const searchText = e.target.value.toLowerCase();
        const filteredJobs = jobs.filter(job => {
            const jobText = [job.job_title, job.company, job.location, job.name, job.description].join(' ').toLowerCase();
            return jobText.includes(searchText);
        });
        setJobs(filteredJobs);
    };

    return (
        <div>
            <header className="masthead">
                {/* Header content */}
            </header>
            <div className="container mt-3 pt-2">
                <div className="card mb-4">
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
                                        placeholder="Filter"
                                        onChange={handleFilterChange}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-primary btn-block btn-sm">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                {jobs.map(job => (
                    <div className="card job-list" key={job.id}>
                        <div className="card-body">
                            {/* Job list item */}
                            <h3><b className="filter-txt">{job.job_title}</b></h3>
                            <div>
                                <span className="filter-txt"><small><b><i className="fa fa-building"></i>Company: {job.company}</b></small></span>
                                <br />
                                <span className="filter-txt"><small><b><i className="fa fa-map-marker"></i>Location: {job.location}</b></small></span>
                            </div>
                            <hr />
                            <p className="truncate filter-txt">{job.description}</p>
                            <hr className="divider" style={{ maxWidth: '80%' }} />
                            <span className="badge badge-info float-left px-3 pt-1 pb-1">
                                <b><i>Posted by: {job.name}</i></b>
                            </span>
                            <button className="btn btn-primary float-right read_more">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobList;
