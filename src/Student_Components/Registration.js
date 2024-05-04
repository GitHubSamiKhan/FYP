import '../components/Gallery.css'
import React, { useState } from 'react';

const Registration = () => {
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


    let contactNumber;
    let isValid;
    function ContactForm() {
        const [contactNumber, setContactNumber] = useState('');
        const [isValid, setIsValid] = useState(true);

        const handleChange = (event) => {
            setContactNumber(event.target.value);
        };

        const validateNumber = () => {
            const regex = /^\d{3}-\d{3}-\d{4}$/; // Adjust for your desired format
            setIsValid(regex.test(contactNumber));
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            validateNumber();
            if (isValid) {
                // Submit form data (e.g., using fetch or an API call)
                console.log('Contact number:', contactNumber);
            } else {
                alert('Please enter a valid phone number in the format XXX-XXX-XXXX.');
            }
        };
    }
    // 
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
                                            <div className="col-md-5">
                                                <label htmlFor="contact_number" className="control-label">Contact Number:</label>
                                                <input
                                                    type="number"
                                                    id="contact_number"
                                                    name="contact_number"
                                                    value={contactNumber}
                                                    // className="form-control"
                                                    onChange={handleChange}
                                                    className={isValid ? '' : 'error'} // Add error class for styling
                                                />

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

                                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                                <input type="password" id="password" className=" form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />

                                                {/* <small><i>Leave this blank if you don't want to change your password</i></small> */}
                                            </div>
                                        </div>
                                        <div id="msg"></div>
                                        <hr className="divider" />
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button className="btn btn-primary">Create Account</button>
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

export default Registration;