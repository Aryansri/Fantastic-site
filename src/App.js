import React, { Component } from 'react'

import NavBar from './Components/NavBar'
import About from './Components/About'

import FAQ from './Components/FAQ'

import { BrowserRouter, Route } from 'react-router-dom'
// import Profile from './Components/Profile'
import Deposite from './Components/Deposite'
import MyBet from './Components/MyBet'
import TermsCondition from './Components/TermsCondition';
import PrivacyPolicy from './Components/PrivacyPolicy';
export default class App extends Component {
    render() {
         return ( 
            <BrowserRouter >
            
            <Route exact path = '/'
            component = { NavBar }/>
             
            <Route path = '/About'
            component = { About }
            />

            
            <Route path = '/FAQ'
            component = { FAQ }
            /> 
           < Route path = '/Deposite'
            component = { Deposite }
            /> 
            <Route path = '/MyBet'
            component = { MyBet }
            />
            <Route path='/TermsCondition' component= { TermsCondition }/>
            <Route path='/PrivacyPolicy' component= { PrivacyPolicy }/>
            </BrowserRouter>

        
        
        
         
        
        )
    }
}