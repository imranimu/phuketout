import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import Navigation from './elements/Navigation'
import Header from './elements/header'
import Footer from './elements/footer'

class Report extends Component {

    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        document.body.classList.remove('gray-bg');
        document.title = "Reports || PhuketOut"
    } 

    render() {
        return (
            <div id="wrapper">
                <Navigation name="reports" />
                <div id="page-wrapper" className="gray-bg">
                    <Header />
                    <Row className="wrapper border-bottom white-bg page-heading">
                        <Col lg={10}>
                            <h2>Reports</h2>
                            <h4>Some description about this page</h4>
                        </Col>
                        <Col lg={2}>
                            
                        </Col>
                    </Row>
                    <div className="wrapper wrapper-content animated fadeInRight">
                        <Row className="row">
                            <Col lg={12}>
                                <div className="ibox ">
                                    <div className="ibox-title">
                                         
                                    </div>

                                    <div className="ibox-content">
                                         
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Footer />
                </div>
            </div>  
        )
    }
}

export default Report;