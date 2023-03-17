import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap' 

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import Navigation from "../elements/Navigation";
import Header from "../elements/header";
import Footer from "../elements/footer";

import CreateForm from "./createForms";
import AllPartners from "./AllPartners";


class CreatePartners extends Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props); 
        const { cookies } = props;   
        this.state = {  
            token: cookies.get('token') || ''
        };    
    }

    componentDidMount() {
        document.body.classList.remove('gray-bg');
        document.title = "Create Partners || PhuketOut"
    }

    render() {
        //const { token } = this.state;
        return (
            <div id="wrapper">

                <Navigation name="createpartners"/>

                <div id="page-wrapper" className="gray-bg">

                    <Header />

                    <Row className="wrapper border-bottom white-bg page-heading">
                        <Col lg={10}>
                            <h2>Create Partners</h2>
                            <h4>Some description about this page</h4> 
                        </Col>
                        <Col lg={2}></Col>

                        {/* {this.state.token && <p>Hello {this.state.token}!</p>}   */}

                    </Row>

                    <div className="wrapper wrapper-content  animated fadeInRight">
                        <Row>                            
                            <CreateForm Column="5"></CreateForm>

                            <AllPartners Column="7"></AllPartners>                             
                        </Row>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

//export default CreatePartners;
export default withCookies(CreatePartners);