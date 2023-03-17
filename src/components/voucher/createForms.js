import React, { Component } from 'react';
import { Col, Form, Button } from 'react-bootstrap'
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';

class CreateUsers extends Component { 

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props); 
        const { cookies } = props;   
        this.state = { 
            partners: [],
            WrongMassage: '',  
            token: cookies.get('token') || '',
            GetApiUrl: cookies.get('ApiUrl') || '',
        };    
    }

    GetPartners(ApiURL){         

        axios.get(ApiURL, {
            headers: {
                'Accept' : 'application/json', 
                'Content-Type': 'application/json',
            } 
        }).then(res => {  
            console.log(res.data);
            
            const getPartners = res.data.data; 

            this.setState({ partners: getPartners }); 

        }).catch(error => {
            console.log( error );
            this.setState({ WrongMassage: 'Something Went Wrong.' }); 
        });
    }

    componentDidMount() {
        
        const AccessToken =  this.state.token; 
        
        const apiUrl = this.state.GetApiUrl+'partners?page=1&token='+AccessToken;
        
        this.GetPartners(apiUrl);        
        
    } 

    handleCreateVoucher(e){

        e.preventDefault()

        let Title = this.refs.Title.value
        let Discount = this.refs.Discount.value
        let Partner = this.refs.Partner.value
        let Restrictions = this.refs.Restrictions.value
        let TermsConditions = this.refs.TermsConditions.value
        let Provider = this.refs.Provider.value

        const AccesToken = this.state.token;  

        // console.log( 'Title : - ' + Title );
        // console.log( 'Discount : - ' + Discount );
        // console.log( 'Partner : - ' + Partner );
        // console.log( 'Restrictions : - ' + Restrictions );
        // console.log( 'TermsConditions : - ' + TermsConditions );
        // console.log( 'Acces Token : - ' + AccesToken );

        let data = JSON.stringify({            
            title: Title,
            discount: Discount,
            partner_id: Partner,
            terms_and_conditions: TermsConditions,
            restrictions: Restrictions,
            provider: Provider,
            token: AccesToken
        })

        axios.post('https://service.phuketout.com/api/v1/auth/vouchers', data, {
            headers: {
                'Content-Type': 'application/json',
            } 
        }).then(res => {

            console.log(res.data); 

            alert('Voucher stored successfully!');
            
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
                        <h5><i className="fa fa-tasks"></i> Create Voucher</h5>                        
                    </div>
                    <div className="ibox-content">

                        <p className="ErrorMassge">{this.state.WrongMassage}</p>     

                        <Form onSubmit={this.handleCreateVoucher.bind(this)}>
                            
                            <Form.Group>
                                <Form.Label>Title</Form.Label>
                                <Form.Control required type="text" ref="Title" placeholder="Enter Title" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Discount</Form.Label>
                                <Form.Control type="text" ref="Discount" placeholder="Enter Discount" />
                            </Form.Group>
                            
                            <Form.Group>
                                
                                <Form.Label>Select Partner</Form.Label>

                                <Form.Control required as="select" ref="Partner">
                                    <option value="">Select a Partner</option>
                                    { this.state.partners.map( (value , i ) => 
                                        <option key={value.id} value={value.id}>                                         
                                            {value.facility_name}
                                        </option>      
                                    )} 
                                </Form.Control>

                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Restrictions</Form.Label>
                                <Form.Control as="textarea" rows="10" ref="Restrictions" placeholder="Enter Restrictions" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Terms and Conditions</Form.Label>
                                <Form.Control as="textarea" rows="10" ref="TermsConditions" placeholder="Enter Terms and Conditions" />
                            </Form.Group>  

                            <Form.Group>
                                <Form.Label>Provider</Form.Label>
                                <Form.Control type="text" ref="Provider" placeholder="Enter Provider" />
                            </Form.Group>                           

                            <Button variant="primary" type="submit">Create</Button>
                        </Form>
                    </div>
                </div>
            </Col>
                               
        )
    }
}

export default withCookies(CreateUsers);