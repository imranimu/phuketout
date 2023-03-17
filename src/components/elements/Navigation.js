import React, { Component} from 'react';
import MetisMenu from 'react-metismenu';
import { Link } from "react-router-dom";
import LogOut from "../auth/logOut"; 
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

const menu = [
    {
      icon: 'th-large',
      label: 'Dashboard',
      to: '/dashboard',
    },
    {
      icon: 'users',
      label: 'Partners',
      to: '/partners',
    },
    {
      icon: 'user',
      label: 'Customers',
      to: '/createcustomer',
    },    
    {
      icon: 'file-text',
      label: 'Vouchers',
      to: '/vouchermanage',
    },    
    {
      icon: 'bar-chart',
      label: 'Reports',
      to: '/reports',
    },    
    {
      icon: 'pie-chart',
      label: 'Statistics',
      to: '/statistics',
    },    
    {
      icon: 'calendar',
      label: 'Main Menu',
      content: [
        {
          icon: 'birthday-cake',
          label: 'Sub Menu 1',
          to: '/vouchermanage',
        },
        {
          icon: 'bus',
          label: 'Sub Menu 2',
          to: '/reports',
        },
        {
          icon: 'camera',
          label: 'Sub Menu 3',
          to: '/createcustomer',
        },
      ],
    },
  ];

class Navigation extends Component {  
    
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(props) {
        super(props);
        const { cookies } = props; 
        this.state = { 
            name: cookies.get('name') || '',
            designation: cookies.get('designation') || '', 
            token: cookies.get('token') || ''
        };         
    }

    render(){              

        return (         
            <nav className="navbar-default navbar-static-side" role="navigation">                
                
                <div className="sidebar-collapse"> 
                    <ul className="nav metismenu" id="side-menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> 
                                <span>
                                    <img src="images/profile_small.png" alt="Porfile" className="img-circle" />
                                </span>
                                <Link data-toggle="dropdown" className="dropdown-toggle" to="#">
                                    <span className="clear">
                                        <span className="block m-t-xs"> 
                                            <strong className="font-bold">{this.state.name}</strong>
                                        </span> 
                                        <span className="text-muted text-xs block text-capitalize">{this.state.designation} <b className="caret"></b></span>
                                    </span> 
                                </Link>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><Link to="#Profile">Profile</Link></li> 
                                    <li className="divider"></li>                                
                                    <li>
                                        <LogOut />
                                    </li>                                
                                </ul>
                            </div>
                            <div className="logo-element">
                                IN+
                            </div>
                        </li> 
                    </ul> 

                    <MetisMenu content={menu} 
                    activeLinkFromLocation 
                    iconNameStateVisible="angle-down"
                    iconNameStateHidden="angle-left" />
                </div>
            </nav>            
        )
    }
}

export default withCookies(Navigation);