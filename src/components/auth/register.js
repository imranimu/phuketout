import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Copyright from '../elements/copyright';

class Register extends Component {    

    componentDidMount() {
        document.body.classList.add('gray-bg');
        document.title = 'Register || Phuketout';
    }

    render() {
        return (
            <div className="middle-box text-center loginscreen   animated fadeInDown">

                <div>
                    <img src="images/logo.png" alt="Logo" />
                </div>

                <h3>Register to Phuket</h3>
                
                <p>Create account to see it in action.</p>

                <Form action="#" method="get">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Name" name="Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" name="Email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" name="password" />
                    </Form.Group>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Agree the terms and policy" />
                    </Form.Group>

                    {/* <Button variant="primary" type="submit">Submit</Button>     */}

                    <Link className="btn btn-primary block full-width m-b" to={"/createpartners"}>Register</Link>

                    <p className="text-muted text-center"><small>Already have an account?</small></p>

                    <Link className="btn btn-sm btn-white b-tn-block" to={"/login"}>Login</Link>

                </Form>

                <div className="m-t m-b">
                    <small><Copyright /></small>
                </div>

            </div>
        )
    }

}

export default Register;