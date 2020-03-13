import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const UserLogin = (props) => {
    return (
        <div className="login-signup-page">
            <div>
                <h1 className="login-signup-header">User Login</h1>
            </div>

            <div>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    props.handleLogin();
                }} >
                    <div>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
                            <Form.Text className="text-muted">
                                Enter Username.
                    </Form.Text>
                        </Form.Group>
                    </div>

                    <div>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Text className="text-muted">
                                Enter password.
                    </Form.Text>
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                    </div>
                    <div>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>

        </div>
    )
}

export default UserLogin
