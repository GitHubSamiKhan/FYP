import React, { useState } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker'; // Import jQuery UI Datepicker
import '../components/Gallery.css'; // Import custom CSS (assuming it contains styles for .datepickerY)

const ManageAccount = () => {
    const [formData, setFormData] = useState({
        lastname: '',
        firstname: '',
        middlename: '',
        gender: 'Male', // Default value for gender
        batch: '',
        course_id: '',
        connected_to: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted. Check console for values.');
        console.log(formData);

        // Additional form submission logic can be added here using formData

        // Example AJAX request (using jQuery AJAX)
        $.ajax({
            url: 'admin/ajax.php?action=update_account',
            data: new FormData(e.target),
            cache: false,
            contentType: false,
            processData: false,
            method: 'POST',
            type: 'POST',
            success: function (resp) {
                if (resp == 1) {
                    alert('Account successfully updated.');
                    setTimeout(function () {
                        window.location.reload(); // Reload the page after successful update
                    }, 700);
                } else {
                    $('#msg').html('<div class="alert alert-danger">Email already exists.</div>');
                }
            },
            error: function (xhr, status, error) {
                console.error('Error updating account:', error);
            }
        });
    };

    const displayImg = (input) => {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#cimg').attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    return (
        <div>
            {/* Header */}
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

            {/* Form Section */}
            <div className="container mt-3 pt-2">
                <div className="col-lg-12">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="container-fluid">
                                <div className="col-md-12">
                                    <form onSubmit={handleFormSubmit} id="update_account">
                                        {/* Last Name */}
                                        <div className="row form-group">
                                            <div className="col-md-4">
                                                <label htmlFor="lastname" className="control-label">Last Name</label>
                                                <input type="text" className="form-control" id="lastname" name="lastname" value={formData.lastname} onChange={handleInputChange} required />
                                            </div>
                                            {/* First Name */}
                                            <div className="col-md-4">
                                                <label htmlFor="firstname" className="control-label">First Name</label>
                                                <input type="text" className="form-control" id="firstname" name="firstname" value={formData.firstname} onChange={handleInputChange} required />
                                            </div>
                                            {/* Middle Name */}
                                            <div className="col-md-4">
                                                <label htmlFor="middlename" className="control-label">Middle Name</label>
                                                <input type="text" className="form-control" id="middlename" name="middlename" value={formData.middlename} onChange={handleInputChange} />
                                            </div>
                                        </div>

                                        {/* Gender */}
                                        <div className="row form-group">
                                            <div className="col-md-4">
                                                <label htmlFor="gender" className="control-label">Gender</label>
                                                <select className="custom-select" id="gender" name="gender" value={formData.gender} onChange={handleInputChange} required>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                            {/* Batch */}
                                            <div className="col-md-4">
                                                <label htmlFor="batch" className="control-label">Batch</label>
                                                <input type="text" className="form-control datepickerY" id="batch" name="batch" value={formData.batch} onChange={handleInputChange} required />
                                            </div>
                                            {/* Course Graduated */}
                                            <div className="col-md-4">
                                                <label htmlFor="course_id" className="control-label">Course Graduated</label>
                                                <select className="custom-select select2" id="course_id" name="course_id" value={formData.course_id} onChange={handleInputChange} required>
                                                    <option value="">Select Course</option>
                                                    {/* Render options dynamically */}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Currently Connected To */}
                                        <div className="row form-group">
                                            <div className="col-md-8">
                                                <label htmlFor="connected_to" className="control-label">Currently Connected To</label>
                                                <textarea className="form-control" id="connected_to" name="connected_to" value={formData.connected_to} onChange={handleInputChange} rows="3"></textarea>
                                            </div>
                                        </div>

                                        {/* Image Upload */}
                                        <div className="row form-group">
                                            <div className="col-md-4">
                                                <label htmlFor="img" className="control-label">Image</label>
                                                <input type="file" className="form-control" id="img" name="img" onChange={(e) => displayImg(e.target)} />
                                            </div>
                                            <div className="col-md-4">
                                                <img id="cimg" src="" alt="Profile" className="img-fluid" />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="row form-group">
                                            <div className="col-md-4">
                                                <label htmlFor="email" className="control-label">Email</label>
                                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
                                            </div>
                                            {/* Password */}
                                            <div className="col-md-4">
                                                <label htmlFor="password" className="control-label">Password</label>
                                                <input type="password" className="form-control" id="password" name="password" onChange={handleInputChange} />
                                                <small><i>Leave this blank if you don't want to change your password</i></small>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <hr className="divider" />
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button type="submit" className="btn btn-primary">Update Account</button>
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

export default ManageAccount;
