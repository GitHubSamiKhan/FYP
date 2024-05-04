import '../components/Gallery.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageRegistration = ({ id }) => {
    const [eventOptions, setEventOptions] = useState([]);
    const [formData, setFormData] = useState({
        id: '',
        event_id: '',
        name: '',
        address: '',
        email: '',
        contact: '',
        payment_status: false,
        status: 0
    });

    useEffect(() => {
        // Fetch audience details if ID is provided
        if (id) {
            axios.get(`http://localhost:8000/api/audience/${id}`)
                .then(response => {
                    const { data } = response;
                    setFormData(data); // Assuming the API returns data in the expected format
                })
                .catch(error => {
                    console.error('Error fetching audience details:', error);
                });
        }

        // Fetch event options
        axios.get('http://localhost:8000/api/events')
            .then(response => {
                const { data } = response;
                setEventOptions(data); // Assuming the API returns events data in an array
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, [id]);

    const handleInputChange = e => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Make API call to save/update registration
        axios.post('http://localhost:8000/api/save_register', formData)
            .then(response => {
                if (response.data === 1) {
                    alert('Audience Registration successfully updated');
                    window.location.reload();
                }
            })
            .catch(error => {
                console.error('Error saving registration:', error);
            });
    };

    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={formData.id} />
                <div className="form-group">
                    <label htmlFor="event_id" className="control-label">
                        Event
                    </label>
                    <select
                        name="event_id"
                        className="custom-select select2"
                        value={formData.event_id}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Event</option>
                        {eventOptions.map(event => (
                            <option key={event.id} value={event.id}>
                                {event.event}
                            </option>
                        ))}
                    </select>
                </div>
                {/* Other form inputs */}
                {/* Example: Full Name */}
                <div className="form-group">
                    <label htmlFor="name" className="control-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                {/* More form inputs */}
                {/* Example: Checkbox for Payment Status */}
                <div className="form-group">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="payment_status"
                            name="payment_status"
                            checked={formData.payment_status}
                            onChange={handleInputChange}
                        />
                        <label className="form-check-label" htmlFor="payment_status">
                            Paid
                        </label>
                    </div>
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    );
};

export default ManageRegistration;
