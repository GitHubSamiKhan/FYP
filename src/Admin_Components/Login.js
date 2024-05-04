import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        // Check session or redirect logic here
        if (localStorage.getItem('login_id')) {
            window.location.href = 'index.php?page=home';
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Perform login request
            const response = await fetch('ajax.php?action=login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            if (data === 1) {
                // Login successful
                localStorage.setItem('login_id', true);
                window.location.href = 'index.php?page=home';
            } else {
                // Login failed
                setError('Username or password is incorrect.');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Something went wrong with the login.');
        }
    };

    return (
        <Container>
            <LoginLeft />
            <LoginRight>
                <Card>
                    <CardBody>
                        <form onSubmit={handleLogin}>
                            {error && <Error>{error}</Error>}
                            <FormGroup>
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FormGroup>
                            <Center>
                                <Button type="submit">Login</Button>
                            </Center>
                        </form>
                    </CardBody>
                </Card>
            </LoginRight>
        </Container>
    );
};

// Styled Components
const Container = styled.main`
    display: flex;
    height: 100vh;
`;

const LoginLeft = styled.div`
    width: 60%;
    height: 100%;
    background: #59b6ec61 url('assets/uploads/${(props) => props.coverImg}');
    background-repeat: no-repeat;
    background-size: cover;
`;

const LoginRight = styled.div`
    position: relative;
    width: 40%;
    height: 100%;
    background: white;
    display: flex;
    align-items: center;
`;

const Card = styled.div`
    margin: auto;
`;

const CardBody = styled.div`
    padding: 20px;
`;

const FormGroup = styled.div`
    margin-bottom: 15px;
`;

const Center = styled.div`
    text-align: center;
`;

const Button = styled.button`
    width: 100%;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

const Error = styled.div`
    color: red;
    margin-bottom: 10px;
`;

export default Login;
