import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';

export default () => {
    return <>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/auth' component={AuthApp} />
                <Route path='/' component={MarketingApp} />
            </Switch>
        </BrowserRouter>
    </>
};