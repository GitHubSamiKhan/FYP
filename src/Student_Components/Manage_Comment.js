import '../components/Gallery.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageComment = (props) => {
    const [comment, setComment] = useState('');
    const [id, setId] = useState('');

    useEffect(() => {
        if (props.id) {
            axios.get(`admin/ajax.php?action=get_comment&id=${props.id}`)
                .then(response => {
                    const { data } = response;
                    setComment(data.comment);
                    setId(data.id);
                })
                .catch(error => {
                    console.error('Error fetching comment:', error);
                });
        }
    }, [props.id]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('admin/ajax.php?action=save_comment', { id, comment });
            if (response.data === 1) {
                alert('Data successfully saved.');
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } catch (error) {
            console.error('Error saving comment:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure to delete this comment?')) {
            try {
                const response = await axios.post('admin/ajax.php?action=delete_comment', { id });
                if (response.data === 1) {
                    alert('Data successfully deleted.');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);
                }
            } catch (error) {
                console.error('Error deleting comment:', error);
            }
        }
    };

    return (
        <div className="container-fluid">
            <form id="update-comment" onSubmit={handleFormSubmit}>
                <input type="hidden" name="id" value={id} className="form-control" />
                <div className="row form-group">
                    <div className="col-md-12">
                        <label className="control-label">Comment</label>
                        <textarea
                            name="comment"
                            className="form-control"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
            <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete Comment</button>
        </div>
    );
};

export default ManageComment;
