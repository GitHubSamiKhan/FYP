import '../components/Gallery.css'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ForumTopic = () => {
    const { id } = useParams();

    // Simulated topic and comments data
    const [topic, setTopic] = useState({
        id: id,
        title: 'Sample Topic',
        name: 'John Doe',
        description: '<p>This is a sample topic description.</p>'
    });

    const [comments, setComments] = useState([
        { id: 1, name: 'Alice', username: 'alice123', comment: 'This is a comment by Alice.' },
        { id: 2, name: 'Bob', username: 'bob456', comment: 'This is a comment by Bob.' }
    ]);

    useEffect(() => {
        // Simulated fetchTopicData function (simply setting initial state)
        setTopic({
            id: id,
            title: 'Sample Topic',
            name: 'John Doe',
            description: '<p>This is a sample topic description.</p>'
        });

        // Simulated fetchComments function (setting initial comments state)
        setComments([
            { id: 1, name: 'Alice', username: 'alice123', comment: 'This is a comment by Alice.' },
            { id: 2, name: 'Bob', username: 'bob456', comment: 'This is a comment by Bob.' }
        ]);
    }, [id]); // Dependency array to re-run effect when 'id' changes

    const handleCommentSubmit = (commentData) => {
        // Simulated adding new comment
        const newComment = {
            id: comments.length + 1,
            ...commentData
        };
        setComments([...comments, newComment]);
        alert('Comment saved successfully');
    };

    const handleDeleteComment = (commentId) => {
        // Simulated deleting a comment
        const updatedComments = comments.filter((comment) => comment.id !== commentId);
        setComments(updatedComments);
        alert('Comment deleted successfully');
    };

    return (
        <div>
            <header className="masthead">
                <h3>{topic.title}</h3>
                <p>Topic Created by: {topic.name}</p>
            </header>
            <div className="container mt-3 pt-2">
                <div className="card mb-4">
                    <div className="card-body" dangerouslySetInnerHTML={{ __html: topic.description }} />
                </div>
                <div className="card mb-4">
                    <div className="card-body">
                        <h3><i className="fa fa-comments"></i> {comments.length} Comments</h3>
                        {comments.map((comment) => (
                            <div className="form-group comment" key={comment.id}>
                                <p><b>{comment.name}</b></p>
                                <p><i>{comment.username}</i></p>
                                <p>{comment.comment}</p>
                                <button onClick={() => handleDeleteComment(comment.id)}>Delete</button>
                            </div>
                        ))}
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                handleCommentSubmit({
                                    topic_id: id,
                                    comment: formData.get('comment')
                                });
                            }}
                        >
                            <input type="hidden" name="topic_id" value={id} />
                            <textarea name="comment" cols="30" rows="5" placeholder="New Comment" />
                            <button type="submit">Save Comment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForumTopic;
