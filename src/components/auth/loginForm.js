import React, { Component } from 'react'; 
import { Form , Button } from 'react-bootstrap'; 
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
 
class LoginForm extends Component {  
    
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props); 
        const { cookies } = props;   
        this.state = { 
            WrongMassage: '', 
            name: cookies.get('name') || '',
            Loader: false,
            designation: cookies.get('designation') || '',
            token: cookies.get('token') || '',
            ApiUrl: cookies.get('ApiUrl') || '',
        };    
    }

    componentDidMount() {

        document.body.classList.add('gray-bg');

        document.title = "Login || PhuketOut"   
        
        const token = this.state.token; 

        if (token){
            //this.setState({ token: '' });
            //alert(token);
            //window.location = '/createpartners';
        }        
        
    } 
 
    handleSignIn(e) {         

        e.preventDefault()
        let email = this.refs.username.value

        let password = this.refs.password.value

        this.setState({Loader : true})

        if (email && password) {

            let data = JSON.stringify({
                email: email,
                password: password
            })

            axios.post('https://service.phuketout.com/api/v1/auth/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                } 
            }).then(res => {    

                console.log(res.data); 

                const authsToken = res.data.access_token;
                const name = res.data.name;
                const designation = res.data.designation; 

                if(designation == 'Admin'){
                    const { cookies } = this.props;
                
                    cookies.set('name', name, { path: '/' });
                    cookies.set('designation', designation, { path: '/' });
                    cookies.set('token', authsToken, { path: '/' });
                    cookies.set('ApiUrl', 'https://service.phuketout.com/api/v1/auth/', { path: '/' });
                    this.setState({ name: name, designation: designation, token: authsToken});               
                    
                    this.setState({ WrongMassage: '' }); 
                    this.setState({Loader : false })

                    window.location = '/dashboard';

                }else{
                    
                    this.setState({ WrongMassage: 'You do not have Administrator access' }); 

                    this.setState({Loader : false })

                }

            }).catch(error => {
                console.log( error );
                
                this.setState({ WrongMassage: 'Email or Password is incorrect' }); 

                this.setState({Loader : false })

            });
        }else{     
                   
            this.setState({ WrongMassage: 'All Fields are required' }); 

            this.setState({Loader : false })

        }
    }

    render() {   
         
        return (            
            <div className="middle-box text-center loginscreen animated fadeInDown">
                <div> 
                    <div className="m-b">
                        <img src="images/logo.png" alt="Logo" />
                    </div>                       

                    <div className="ErrorMassge">{this.state.WrongMassage}</div>                         
                    
                    <Form onSubmit={this.handleSignIn.bind(this)}>
                        <Form.Group controlId="formBasicEmail">                            
                            <Form.Control required type="email" ref="username"  placeholder="Username"/> 
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">                            
                            <Form.Control required type="password" ref="password" placeholder="Password"/> 
                        </Form.Group> 

                        <Button className="btn btn-primary block full-width m-b" variant="primary" type="submit">Submit</Button>
                        
                        { this.state.Loader }

                        {this.state.Loader ? (
                            <div className="LoadingIcon">
                                <img src="images/loader.svg" alt="Loading Image"/>
                            </div>
                        ) : ( '' )}
                        

                        <a href="#Forgot"><small>Forgot password?</small></a>    
                    
                    </Form>
                                                

                    {/* <div className="m-t m-b">
                        <small><Co-pyright /></small>
                    </div> */}

                </div>
            </div>           
        )
    }
} 

export default withCookies(LoginForm);