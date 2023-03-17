import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
 
class logoutButton extends Component { 
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
        this.LogOut = this.LogOut.bind(this);
    }

    toggle() {  
        document.body.classList.toggle('mini-navbar'); 
    }

    LogOut() {
        
        const AccessToken =  this.state.token;         

        let data = JSON.stringify({
            token : AccessToken 
        })

        axios.post('https://service.phuketout.com/api/v1/auth/logout', data, {
            headers: {                    
                'Content-Type': 'application/json'
            } 
        }).then(res => {   
            
            const { cookies } = this.props;

            console.log(res.data); 

            cookies.set('token', '', { path: '/' });

            window.location = '/';                 

        }).catch(error => {

            console.log( error );
            
            const { cookies } = this.props;

            cookies.set('token', '', { path: '/' });

            window.location = '/';

        }); 
    }

    render() {
        return ( 
            <Link to="#" onClick={this.LogOut} ><i className="fa fa-sign-out"></i> Log out</Link>                         
        )
    }
} 

export default withCookies(logoutButton);