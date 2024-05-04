import '../components/Gallery.css'
import React, { useState, useEffect } from 'react';
import $ from 'jquery'; // Ensure you have jQuery installed in your project

const ManageCareer = () => {
    const [formData, setFormData] = useState({
        id: '',
        company: '',
        title: '',
        location: '',
        description: ''
    });

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if (id) {
            fetchCareer(id);
        }
    }, []);

    const fetchCareer = async (id) => {
        try {
            const response = await fetch(`admin/ajax.php?action=get_career&id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setFormData(data); // Assuming the API returns the career data as JSON
            }
        } catch (error) {
            console.error('Error fetching career:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('admin/ajax.php?action=save_career', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const data = await response.json();
                if (data === 1) {
                    alert('Data successfully saved.');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            }
        } catch (error) {
            console.error('Error saving career:', error);
        }
    };

    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={formData.id} className="form-control" />
                <div className="row form-group">
                    <div className="col-md-8">
                        <label className="control-label">Company</label>
                        <input
                            type="text"
                            name="company"
                            className="form-control"
                            value={formData.company}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-8">
                        <label className="control-label">Job Title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-8">
                        <label className="control-label">Location</label>
                        <input
                            type="text"
                            name="location"
                            className="form-control"
                            value={formData.location}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-12">
                        <label className="control-label">Description</label>
                        <textarea
                            name="description"
                            className="form-control"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    );
};

export default ManageCareer;
