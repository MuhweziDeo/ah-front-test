import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActionCreators from './actions/authActionCreators'
import {bindActionCreators} from 'redux'
import App from './views/index'
import '../src/assets/scss/argon.scss';


const mapStateToProps = state => ({
    ...state
   })
  
   const mapDispatchToProps = dispatch => (
    bindActionCreators(authActionCreators, dispatch)
   )
  

  
export default connect(mapStateToProps, mapDispatchToProps)(App);
  
