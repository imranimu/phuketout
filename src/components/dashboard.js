import React, { Component } from 'react';
import { Row } from 'react-bootstrap'

import Navigation from "./elements/Navigation";
import Header from "./elements/header";
import Footer from "./elements/footer";

import AllCustomers from "./customers/AllCustomers";
import AllPartners from "./partner/AllPartners";
import AllVouchers from "./voucher/AllVouchers";


class CreatePartners extends Component {

    componentDidMount() {
        document.body.classList.remove('gray-bg');
        document.title = "Dashboard || PhuketOut"
    }

    render() {
        return (
            <div id="wrapper">

                <Navigation name="dashboard" />

                <div id="page-wrapper" className="gray-bg">

                    <Header />
                     
                    <div className="wrapper wrapper-content  animated fadeInRight">
                        <Row>  
                            <div className="col-lg-3">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <span className="label label-success pull-right">Monthly</span>
                                        <h5>Customers</h5>
                                    </div>
                                    <div className="ibox-content">
                                        <h1 className="no-margins">40 886,200</h1>
                                        <div className="stat-percent font-bold text-success">98% <i className="fa fa-bolt"></i></div>
                                        <small>Total Customers</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <span className="label label-info pull-right">Monthly</span>
                                        <h5>Partners</h5>
                                    </div>
                                    <div className="ibox-content">
                                        <h1 className="no-margins">275,800</h1>
                                        <div className="stat-percent font-bold text-info">20% <i className="fa fa-level-up"></i></div>
                                        <small>Total Partners</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <span className="label label-primary pull-right">Today</span>
                                        <h5>Today's Use</h5>
                                    </div>
                                    <div className="ibox-content">
                                        <h1 className="no-margins">106,120</h1>
                                        <div className="stat-percent font-bold text-navy">44% <i className="fa fa-level-up"></i></div>
                                        <small>New visits</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <span className="label label-danger pull-right">Weekly</span>
                                        <h5>Last Week's Use</h5>
                                    </div>
                                    <div className="ibox-content">
                                        <h1 className="no-margins">80,600</h1>
                                        <div className="stat-percent font-bold text-danger">38% <i className="fa fa-level-down"></i></div>
                                        <small>In first Week</small>
                                    </div>
                                </div>
                            </div>  
                        </Row>

                        <Row>
                            <div className="col-lg-6">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <h5>Voucher Report by Partners</h5>
                                        <div className="ibox-tools">
                                            <a className="collapse-link">
                                                <i className="fa fa-chevron-up"></i>
                                            </a>
                                            <a className="close-link">
                                                <i className="fa fa-times"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ibox-content">
                                        <table className="table table-hover no-margins">
                                            <thead>
                                            <tr>
                                                <th>Status</th>
                                                <th>Date</th>
                                                <th>User</th>
                                                <th>Value</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><small>Pending...</small></td>
                                                <td><i className="fa fa-clock-o"></i> 11:20pm</td>
                                                <td>Samantha</td>
                                                <td className="text-navy"> <i className="fa fa-level-up"></i> 24% </td>
                                            </tr>
                                            <tr>
                                                <td><span className="label label-warning">Canceled</span> </td>
                                                <td><i className="fa fa-clock-o"></i> 10:40am</td>
                                                <td>Monica</td>
                                                <td className="text-navy"> <i className="fa fa-level-up"></i> 66% </td>
                                            </tr>
                                            <tr>
                                                <td><small>Pending...</small> </td>
                                                <td><i className="fa fa-clock-o"></i> 01:30pm</td>
                                                <td>John</td>
                                                <td className="text-navy"> <i className="fa fa-level-up"></i> 54% </td>
                                            </tr>
                                            <tr>
                                                <td><small>Pending...</small> </td>
                                                <td><i className="fa fa-clock-o"></i> 02:20pm</td>
                                                <td>Agnes</td>
                                                <td className="text-navy"> <i className="fa fa-level-up"></i> 12% </td>
                                            </tr>
                                            <tr>
                                                <td><small>Pending...</small> </td>
                                                <td><i className="fa fa-clock-o"></i> 09:40pm</td>
                                                <td>Janet</td>
                                                <td className="text-navy"> <i className="fa fa-level-up"></i> 22% </td>
                                            </tr>
                                            <tr>
                                                <td><span className="label label-primary">Completed</span> </td>
                                                <td><i className="fa fa-clock-o"></i> 04:10am</td>
                                                <td>Amelia</td>
                                                <td className="text-navy"> <i className="fa fa-level-up"></i> 66% </td>
                                            </tr>
                                            <tr>
                                                <td><small>Pending...</small> </td>
                                                <td><i className="fa fa-clock-o"></i> 12:08am</td>
                                                <td>Damian</td>
                                                <td className="text-navy"> <i className="fa fa-level-up"></i> 23% </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <h5>Voucher Transactions</h5>
                                        <div className="ibox-tools">
                                            <a className="collapse-link">
                                                <i className="fa fa-chevron-up"></i>
                                            </a>
                                            <a className="close-link">
                                                <i className="fa fa-times"></i>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ibox-content">

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <table className="table table-hover margin bottom">
                                                    <thead>
                                                    <tr>
                                                        <th className="text-center">No.</th>
                                                        <th>Transaction</th>
                                                        <th className="text-center">Date</th>
                                                        <th className="text-center">Amount</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="text-center">1</td>
                                                        <td> Security doors
                                                            </td>
                                                        <td className="text-center small">16 Jun 2014</td>
                                                        <td className="text-center"><span className="label label-primary">$483.00</span></td>

                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">2</td>
                                                        <td> Wardrobes
                                                        </td>
                                                        <td className="text-center small">10 Jun 2014</td>
                                                        <td className="text-center"><span className="label label-primary">$327.00</span></td>

                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">3</td>
                                                        <td> Set of tools
                                                        </td>
                                                        <td className="text-center small">12 Jun 2014</td>
                                                        <td className="text-center"><span className="label label-warning">$125.00</span></td>

                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">4</td>
                                                        <td> Panoramic pictures</td>
                                                        <td className="text-center small">22 Jun 2013</td>
                                                        <td className="text-center"><span className="label label-primary">$344.00</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">5</td>
                                                        <td>Phones</td>
                                                        <td className="text-center small">24 Jun 2013</td>
                                                        <td className="text-center"><span className="label label-primary">$235.00</span></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">6</td>
                                                        <td>Monitors</td>
                                                        <td className="text-center small">26 Jun 2013</td>
                                                        <td className="text-center"><span className="label label-primary">$100.00</span></td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>                                                     
                                        </div>
                                    </div>
                                </div>
                            </div>                              
                        </Row>
                    </div>

                    <Footer />
                </div>
            </div>
        )
    }
}

export default CreatePartners;