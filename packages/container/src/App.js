import React, { lazy, Suspense, useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/Header';

const AuthAppLazyComponent = lazy(() => import('./components/AuthApp'));
const MarketingAppLazyComponent = lazy(() => import('./components/MarketingApp'));

export default () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = createBrowserHistory();
    return <>
        <Router history={history}>
            <Header isLoggedIn={isLoggedIn} onSignOut={() => setIsLoggedIn(false)}/>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path='/auth'>
                        <AuthAppLazyComponent onSignIn={()=> setIsLoggedIn(true)} />
                    </Route>
                    {/* <Route path='/dashboard' >
                        {!isLoggedIn && <Redirect to='/' />}
                        <Dashboard />
                    </Route> */}
                    <Route path='/'>
                        <MarketingAppLazyComponent />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    </>
};