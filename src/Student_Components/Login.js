import '../components/Gallery.css'
import React, { useState } from 'react';
import axios from 'axios'; // Assuming you use axios for HTTP requests

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('admin/ajax.php?action=login2', {
                username,
                password
            });

            if (response.data === 1) {
                const redirectUrl = window.location.search.includes('redirect') ? window.location.search.split('redirect=')[1] : 'index.php?page=home';
                window.location.href = redirectUrl;
            } else if (response.data === 2) {
                setError('Your account is not yet verified.');
            } else {
                setError('Email or password is incorrect.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred during login.');
        }

        setLoading(false);
    };

    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="form-group">
                    <label htmlFor="username" className="control-label">Email</label>
                    <input
                        type="email"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="control-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-control"
                    />
                    <small><a href="index.php?page=signup" id="new_account">Create New Account</a></small>
                </div>
                <button type="submit" className="button btn btn-info btn-sm" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
