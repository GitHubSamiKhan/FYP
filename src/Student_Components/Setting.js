import '../components/Gallery.css'
import React, { useState } from 'react';

const Setting = () => {
    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        middlename: '',
        gender: 'Male',
        batch: '',
        course_id: '',
        connected_to: '',
        email: '',
        password: '',
        avatar: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFormData({ ...formData, avatar: e.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('api/update_account', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to update account');
            }

            const data = await response.json();

            if (data.success) {
                alert('Account successfully updated.');
                // Optionally reset form data or perform other actions upon success
            } else {
                console.error('Account update failed:', data.error);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
        <div>
            <header className="masthead">
                <div className="container-fluid h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-8 align-self-end mb-4 page-title">
                            <h3 className="text-white">Manage Account</h3>
                            <hr className="divider my-4" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mt-3 pt-2">
                <div className="col-lg-12">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="col-md-12">
                                    <form onSubmit={handleSubmit} id="update_account">
                                        <div className="row form-group">
                                            <div className="col-md-4">
                                                <label htmlFor="lastname" className="control-label">Last Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="lastname"
                                                    value={formData.lastname}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="firstname" className="control-label">First Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="firstname"
                                                    value={formData.firstname}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="middlename" className="control-label">Middle Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="middlename"
                                                    value={formData.middlename}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-4">
                                                <label htmlFor="gender" className="control-label">Gender</label>
                                                <select
                                                    className="custom-select"
                                                    name="gender"
                                                    value={formData.gender}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="batch" className="control-label">Batch</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="batch"
                                                    value={formData.batch}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="course_id" className="control-label">Course Graduated</label>
                                                <select
                                                    className="custom-select"
                                                    name="course_id"
                                                    value={formData.course_id}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="">Select Course</option>
                                                    <option value="1">Course A</option>
                                                    <option value="2">Course B</option>
                                                    <option value="3">Course C</option>
                                                    {/* Add more options dynamically based on your data */}
                                                </select>
                                            </div>

                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-5">
                                                <label htmlFor="connected_to" className="control-label">Currently Connected To</label>
                                                <textarea
                                                    name="connected_to"
                                                    id="connected_to"
                                                    cols="30"
                                                    rows="3"
                                                    className="form-control"
                                                    value={formData.connected_to}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                            <div className="col-md-5">
                                                <label htmlFor="img" className="control-label">Image</label>
                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    name="img"
                                                    onChange={handleFileChange}
                                                />
                                                {formData.avatar && <img src={formData.avatar} alt="Preview" style={{ maxHeight: '10vh', maxWidth: '6vw' }} />}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label htmlFor="email" className="control-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-4">
                                                <label htmlFor="password" className="control-label">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    onChange={handleChange}
                                                />
                                                <small><i>Leave this blank if you don't want to change your password</i></small>
                                            </div>
                                        </div>
                                        <div id="msg"></div>
                                        <hr className="divider" />
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button className="btn btn-primary">Update Account</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;
