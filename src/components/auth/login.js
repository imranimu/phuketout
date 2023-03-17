import React from 'react';   
//import { connect } from 'react-redux'

import LoginForm from './loginForm'

//import CakeContainer from '../CakeContainer' 

function Login(props) {
    
    return (
        <div>

            <LoginForm/>   

            {/* <CakeContainer/> 

            <p>ee:  {props.numOfCakes}</p>         */}

        </div>
    )
} 

/*
const mapStateToProps = state => {
    return {
      numOfCakes: state.cake.numOfCakes
    }
}
 
export default connect(
    mapStateToProps
)(NewCocolateContainer)*/

export default Login

