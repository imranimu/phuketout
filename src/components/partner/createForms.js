import React, { Component } from 'react';
import { Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

class CreatePartner extends Component { 

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

    handleCreatePartner(e) { 
        e.preventDefault()
        let facility_name = this.refs.facility_name.value
        let contact_name = this.refs.contact_name.value
        let phone = this.refs.phone.value
        let Address = this.refs.Address.value
        let Email = this.refs.Email.value
        let Logo = this.refs.Logo.value
        let Website = this.refs.Website.value
        let Location = this.refs.Location.value 

        const AccesToken = this.state.token;         

        let data = JSON.stringify({            
            facility_name: facility_name,
            contact_name: contact_name,
            phone: phone,
            address: Address,
            email: Email,
            logo: Logo,
            website: Website,
            location: Location,
            password: '123456',
            token: AccesToken
        })

        axios.post('https://service.phuketout.com/api/v1/auth/partners', data, {
            headers: {
                'Content-Type': 'application/json',
            } 
        }).then(res => {

            console.log(res.data); 

            alert('Partner stored successfully!');
            
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
                        <h5><i className="fa fa-tasks"></i> Create Partner</h5>
                        {/* {this.state.token} */}
                    </div>
                    <div className="ibox-content">  
                        
                        <p className="ErrorMassge">{this.state.WrongMassage}</p>                       

                        <Form onSubmit={this.handleCreatePartner.bind(this)}>
                            <Form.Group>
                                <Form.Label>Facility Name</Form.Label>
                                <Form.Control required type="text" ref="facility_name" placeholder="Enter Facility Name" />
                            </Form.Group>                             
                            <Form.Group>
                                <Form.Label>Contact name</Form.Label>
                                <Form.Control required type="text" ref="contact_name" placeholder="Enter Contact Name" />
                            </Form.Group>                             
                            <Form.Group>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" ref="phone" placeholder="Enter Phone" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" ref="Address" placeholder="Enter Address" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control required type="email" ref="Email" placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Logo</Form.Label>
                                <Form.Control type="file" ref="Logo" placeholder="Upload Logo" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Website</Form.Label>
                                <Form.Control type="text" ref="Website" placeholder="Enter Website" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" ref="Location" placeholder="Enter Location" />
                            </Form.Group>

                            <Button className="btn btn-primary m-b" variant="primary" type="submit">Create</Button>                            
                        </Form>
                    </div>
                </div>
            </Col>
                               
        )
    }
}

export default withCookies(CreatePartner);