import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Row } from 'react-bootstrap';
import LogOut from "../auth/logOut";
 
class Header extends Component {    

    toggle() {  
        document.body.classList.toggle('mini-navbar'); 
    }     

    render() {        

        return (
            <Row className="border-bottom">
                
                <nav className="navbar navbar-static-top" role="navigation">
                    <div className="navbar-header">
                        <div className="navbar-minimalize minimalize-styl-2 btn btn-primary" onClick={this.toggle.bind(this)}>
                            <i className="fa fa-bars"></i> 
                        </div>
                    </div>                    

                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <span className="m-r-sm text-muted welcome-message">Welcome to Admin Dashboard</span>
                        </li>
                        <li className="dropdown">
                            <Link className="dropdown-toggle count-info" data-toggle="dropdown" to="#8">
                                <i className="fa fa-bell"></i>  <span className="label label-primary">8</span>
                            </Link>                             
                            <ul className="dropdown-menu dropdown-alerts">
                                <li>
                                    <Link to="#mailbox">                                         
                                        <i className="fa fa-envelope fa-fw"></i> You have 16 messages
                                        <span className="pull-right text-muted small">4 minutes ago</span>                                         
                                    </Link>                                     
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <Link to="#profile">
                                        <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                        <span className="pull-right text-muted small">12 minutes ago</span>
                                    </Link>                                    
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <Link to="#grid_options">
                                        <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                        <span className="pull-right text-muted small">4 minutes ago</span>
                                    </Link>                                    
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <div className="text-center link-block">
                                        <Link to="#notifications">
                                            <strong>See All Alerts</strong>
                                            <i className="fa fa-angle-right"></i>
                                        </Link>                                        
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>                        
                            <LogOut/>
                        </li>
                    </ul>

                </nav>

            </Row>
        )
    }
} 

export default Header;