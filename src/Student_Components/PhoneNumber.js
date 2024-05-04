import React, { useState } from 'react';

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

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="contact_number">Contact Number:</label>
            <input
                type="number"
                id="contact_number"
                name="contact_number"
                value={contactNumber}
                onChange={handleChange}
                className={isValid ? '' : 'error'} // Add error class for styling
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
