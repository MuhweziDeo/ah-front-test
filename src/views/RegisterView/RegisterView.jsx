import React, { Component } from 'react'
import RegsiterAction from '../../actions/registerUserActionCreator';
import {connect} from 'react-redux';
import Register from '../../components/Register/Register';
import './RegisterView.css'
import toastr from 'toastr'

export class RegisterView extends Component {
    state={
        username:'',
        email:'',
        password:'',
        usernameValid:false,
        loading:true
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.registerState.status===200){
            toastr.info('successful login')
            nextProps.history.push('/')
        }else if(nextProps.registerState.status===400){
                toastr.warning(
                    nextProps.registerState.data.username)
                    toastr.warning(
                        nextProps.registerState.data.email)
                        toastr.warning(
        nextProps.registerState.data.password)
        }
    }
     
    HandleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
       
    }
    Clicked=(e)=>{
        e.preventDefault()
        const {RegsiterAction} = this.props;
        RegsiterAction(this.state)
       
    }
    
   
    render(){
    return (
        <div>
        <Register Clicked={this.Clicked} successOrError={this.state.usernameValid? "has-success":"has-danger"} HandleChange={this.HandleChange}/>
        </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        registerState: state.registerUserReducer
    }
}

export default connect(mapStateToProps,{RegsiterAction})(RegisterView)