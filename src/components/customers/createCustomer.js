import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap' 

import Navigation from '../elements/Navigation'
import Header from '../elements/header'
import Footer from '../elements/footer'

import CreateForms from "./createForms";
import AllCustomers from "./AllCustomers";

class CreateUsers extends Component {

    componentDidMount() {
        document.body.classList.remove('gray-bg');
        document.title = "Create Customer || PhuketOut"
    }

    render() {
        return (
            <div id="wrapper">
                <Navigation name="createcustomer" />
                <div id="page-wrapper" className="gray-bg">
                    <Header />
                    <Row className="wrapper border-bottom white-bg page-heading">
                        <Col lg={10}>
                            <h2>Create Customer</h2>
                            <h4>Some description about this page</h4>
                        </Col>
                        <Col lg={2}></Col>
                    </Row>
                    <div className="wrapper wrapper-content  animated fadeInRight">
                        <Row>

                            <CreateForms Column="6"></CreateForms>

                            <AllCustomers Column="6"></AllCustomers>

                        </Row>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default CreateUsers;