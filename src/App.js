import React, { Component } from 'react';
import loadjs from "loadjs";  

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './components/auth/login';
import Register from './components/auth/register';
import Partners from './components/partner/Partners';
import CreateCustomer from './components/customers/createCustomer';
import VoucherManage from './components/voucher/voucherManage';
import Report from './components/Report'; 
import Dashboard from "./components/dashboard";
import Statistics from "./components/statistics";

import './App.css';  

class App extends Component {

  componentWillMount() {
    loadjs('/js/jquery-2.1.1.js', function () {      
      loadjs('/js/bootstrap.min.js'); 
    });
  }

  render() {
    return (    
      <Router>
          <div> 
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/partners" component={Partners} />                        
              <Route path="/createcustomer" component={CreateCustomer} />                        
              <Route path="/reports" component={Report} />                        
              <Route path="/vouchermanage" component={VoucherManage} />  
              <Route path="/statistics" component={Statistics} />                   
            </Switch>
          </div>           
      </Router>
    );  
  }
}

export default App;
