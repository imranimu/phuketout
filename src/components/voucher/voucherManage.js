import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap' 

import Navigation from '../elements/Navigation'
import Header from '../elements/header'
import Footer from '../elements/footer'

import CreateVoucher from "./createForms";
import AllVouchers from "./AllVouchers";

class VoucherManage extends Component {

    componentDidMount() {
        document.body.classList.remove('gray-bg');
        document.title = "Voucher Manage || PhuketOut"
    }

    render() {
        return (
            <div id="wrapper">
                <Navigation name="vouchermanage" />
                <div id="page-wrapper" className="gray-bg">
                    <Header />
                    <Row className="wrapper border-bottom white-bg page-heading">
                        <Col lg={10}>
                            <h2>Voucher Manage</h2>
                            <h4>Some description about this page</h4>
                        </Col>
                        <Col lg={2}>

                        </Col>
                    </Row>
                    <div className="wrapper wrapper-content animated fadeInRight">
                        <Row>

                            <CreateVoucher Column="6"></CreateVoucher>

                            <AllVouchers Column="6"></AllVouchers>

                            <div className="clearfix"></div>
                             
                        </Row>
                    </div>
                    <Footer />
                </div>
            </div>  
        )
    }
}

export default VoucherManage;