import '../components/Gallery.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming use of Axios for HTTP requests
import { useParams } from 'react-router-dom'; // Assuming React Router v6

function ForumTopicForm(props) {
    const { id } = useParams(); // Extract ID from URL parameters using useParams hook (React Router v6)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            if (id) {
                try {
                    const response = await axios.get(`your-api-endpoint/${id}`); // Replace with your actual API endpoint
                    setTitle(response.data.title);
                    setDescription(response.data.description);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('your-api-endpoint', {
                id,
                title,
                description,
            });

            if (response.data.success) { // Assuming success property in API response
                alert('Data successfully saved!');
                props.history.push('/forums'); // Redirect to forums list after successful save (assuming use of React Router)
            } else {
                console.error('Error saving data:', response.data.message || 'Unknown error');
                // Handle API errors appropriately (e.g., display error messages to the user)
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle network or other errors appropriately
        }
    };

    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit} id="manage-forum">
                <input type="hidden" name="id" value={id} />
                <div className="row form-group">
                    <div className="col-md-8">
                        <label className="control-label">Title</label>
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row form-group">
                    <div className="col-md-12">
                        <label className="control-label">Description</label>
                        <textarea
                            name="description"
                            className="text-jqte" // Assuming you'll implement a text editor component here
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </form>
        </div>
    );
}

export default ForumTopicForm;
