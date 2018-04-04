//Third Party
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

//Application files
import Login from '../../auth/login/login'
import Layout from '../container/layout/layout'
import Home from '../../home/home'
import User from '../../users/user'
import Product from '../../products/product'

export default props => (
    <Router history={ hashHistory }>
        <Route exac path='login' component={ Login }/>
        <Route path='home' component={ Home } />
        <Route path='users' component={ User } />
        <Route path='products' component={ Product } />
        <Redirect from='*' to='login' />
    </Router>
)