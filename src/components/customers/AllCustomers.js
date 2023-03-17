import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import axios from 'axios';

import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';

class CreateUsers extends Component { 

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const { cookies } = props; 
        this.state = {  
            Customers: [],
            firstPage: '',
            lastPage: '', 
            nextPage: '',
            prevPage: '',
            CurrentPage: '', 
            TotalResult: '',
            PerPage: '',
            ResultFrom: '',
            ResultTo: '',
            WrongMassage: '',
            show: false,
            DeleteCustomerID: '', 
            token: cookies.get('token') || '',
            GetApiUrl: cookies.get('ApiUrl') || '' 
        };         
    }

    PaginationControll(ApiURL){        

        const AccessToken =  this.state.token;   
        
        const apiUrl = ApiURL+'&token='+AccessToken; 

        axios.get(apiUrl, {
            headers: {
                'Accept' : 'application/json', 
                'Content-Type': 'application/json',
            } 
        }).then(res => {
            console.log(res.data.data);  
            const getCustomers = res.data.data; 
            const prevPage = res.data.links.prev;
            const nextPage = res.data.links.next;            
            const CurrentPage = res.data.meta.current_page;
            const TotalResult = res.data.meta.total;
            const PerPage = res.data.meta.per_page;
            const ResultFrom = res.data.meta.from;
            const ResultTo = res.data.meta.to;

            this.setState({ 
                Customers: getCustomers,
                prevPage: prevPage, 
                nextPage: nextPage, 
                CurrentPage: CurrentPage,
                TotalResult: TotalResult,
                PerPage: PerPage,
                ResultFrom: ResultFrom,
                ResultTo: ResultTo  
            });

        }).catch(error => {
            console.log( error );
            this.setState({ WrongMassage: 'Something Went Wrong.' }); 
        });
    } 

    componentDidMount() {
        const AccessToken =  this.state.token; 
        const apiUrl = this.state.GetApiUrl+'customers?page=1&token='+AccessToken;
        this.PaginationControll(apiUrl);          
    }

    PaginationPage(CurrentPage, TotalPage){

        let pageNumber = []     

        var ApiUrl = this.state.GetApiUrl;             

        for (let i = 1; i <= TotalPage; i++) {            

            pageNumber.push(<li key={i} className={ CurrentPage === i ? 'active' : ''} >                
            {                    
                <Link to="#" onClick={() => this.PaginationControll(ApiUrl+'customers?page='+i)} >{i}</Link>
            }            
            </li>)

        }
        return pageNumber 
    }

    DeleteCustomer(){

        var DeleteCustomerID = this.state.DeleteCustomerID;

        var GetApiUrl = this.state.GetApiUrl+'customers/'+DeleteCustomerID;

        const AccessToken =  this.state.token;   
        
        const CallApiUrl = GetApiUrl+'?token='+AccessToken;

        console.log(CallApiUrl); 

        axios.delete(CallApiUrl, {
            headers: {
                'Accept' : 'application/json', 
                'Content-Type': 'application/json',
            } 
        }).then(res => {

            console.log(res.data);               

            this.setState({show: false, DeleteCustomerID: ''});

            window.location.reload();

        }).catch(error => {

            console.log( error );

            //this.setState({ WrongMassage: 'Something Went Wrong.' }); 

            this.setState({show: false, DeleteCustomerID: ''});

        });

    }

    render() {

        const Column = this.props.Column 
        const prevPage = this.state.prevPage   
        const nextPage = this.state.nextPage 
        const CurrentPage = this.state.CurrentPage
        const PerPage = this.state.PerPage
        const TotalResult = this.state.TotalResult        
        const PagNum = Math.ceil(TotalResult / PerPage)

        return (             
            <Col lg={Column}>
                <div className="ibox ">
                    <div className="ibox-title">
                        <h5><i className="fa fa-tasks"></i> All Customers</h5>                        
                    </div>
                    <div className="ibox-content">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th width="16px">#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th> 
                                    <th className="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.Customers.map( (value , i ) => 
                                    <tr key={value.uuid}> 
                                        <td>{ (i + 1 ) + ( PerPage * (CurrentPage - 1) ) }</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>                                        
                                        <td>{value.phone}</td>                                        
                                        <td className="text-right">
                                            <span className="mr">
                                                <Link to="#edit"><i className="text-primary fa fa-pencil-square-o"></i></Link>
                                            </span>
                                            <span className="mr">
                                                <Link to="#view"><i className="text-info fa fa-file"></i></Link>
                                            </span>
                                            <span>
                                                <Link to="#" onClick={() => this.setState({ show: true, DeleteCustomerID: value.uuid })} >
                                                    <i className="text-danger fa fa-trash-o"></i>
                                                </Link>                                                
                        
                                                <SweetAlert
                                                    show={this.state.show}
                                                    warning
                                                    showCancel
                                                    confirmBtnText="Yes, delete it!"
                                                    confirmBtnBsStyle="danger"
                                                    title="Are you sure?"
                                                    onConfirm={() => this.DeleteCustomer()}
                                                    onCancel={this.onCancel}
                                                    focusCancelBtn
                                                    >
                                                    You will not be able to recover this imaginary file!
                                                </SweetAlert>

                                                {/* <SweetAlert
                                                    show={this.state.show}
                                                    title="Are you Sure?"
                                                    text="Delete this Customer"
                                                    onConfirm={() => this.DeleteCustomer()}
                                                /> */}
                                            </span>
                                        </td>
                                    </tr>
                                )}                                  
                            </tbody>
                        </table>

                        <Row>
                            <Col md={5}>
                                <div className="dataTables_info">Showing {this.state.ResultFrom} to {this.state.ResultTo} of {TotalResult} entries</div>
                            </Col>
                            <Col md={7}>
                                <div className="dataTables_paginate text-right">
                                    <ul className="pagination m-b-n m-t-n">                                         

                                        {prevPage ? <li className="paginate_button previous">
                                            <Link to="#" onClick={() => this.PaginationControll(this.state.prevPage)}>Previous</Link>
                                        </li> : <li className="paginate_button previous disabled">
                                            <Link to="#">Previous</Link>
                                        </li>}  

                                        {this.PaginationPage(CurrentPage, PagNum)}                                      

                                        {nextPage ? <li className="paginate_button previous">
                                            <Link to="#" onClick={() => this.PaginationControll(this.state.nextPage)}>Next</Link>
                                        </li> : <li className="paginate_button previous disabled">
                                            <Link to="#">Next</Link>
                                        </li>}
                                                                            
                                    </ul>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
            </Col>                               
        )
    }
}

export default withCookies(CreateUsers);