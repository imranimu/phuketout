import React, { Component } from 'react';
import { Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class CreateUsers extends Component { 

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props); 
        const { cookies } = props;   
        this.state = { 
            WrongMassage: '',  
            token: cookies.get('token') || ''
        };    
    }

    handleCreateCustomer(e) { 
        e.preventDefault()
        let Name = this.refs.Name.value
        let Phone = this.refs.Phone.value
        let Address = this.refs.Address.value
        let Email = this.refs.Email.value 

        const AccesToken = this.state.token;         

        let data = JSON.stringify({            
            user_id: 5,
            name: Name,
            phone: Phone,
            address: Address,
            email: Email, 
            password: '123456',
            token: AccesToken
        })

        axios.post('https://service.phuketout.com/api/v1/auth/customers', data, {
            headers: {
                'Content-Type': 'application/json',
            } 
        }).then(res => {

            console.log(res.data); 

            alert('Customer stored successfully!');
            
            window.location.reload();

        }).catch(error => {
            
            console.log( error );

            this.setState({ WrongMassage: 'This Email Already Taken!' }); 
        });

    }


    render() {
        const Column = this.props.Column
        return (             
            <Col lg={Column}>
                <div className="ibox ">
                    <div className="ibox-title">
                        <h5><i className="fa fa-tasks"></i> Create Customer</h5>
                    </div>
                    <div className="ibox-content">

                        <p className="ErrorMassge">{this.state.WrongMassage}</p>   

                        <Form onSubmit={this.handleCreateCustomer.bind(this)}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" ref="Name" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" ref="Phone" placeholder="Enter Phone" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" ref="Address" placeholder="Enter Address" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref="Email" placeholder="Enter Email" />
                            </Form.Group>
                            <Button variant="primary" type="submit">Create</Button>
                        </Form>
                    </div>
                </div>
            </Col>
                               
        )
    }
}

export default withCookies(CreateUsers);