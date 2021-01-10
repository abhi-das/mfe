import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

const AuthAppLazyComponent = lazy(() => import('./components/AuthApp'));
const MarketingAppLazyComponent = lazy(() => import('./components/MarketingApp'));

export default () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return <>
        <BrowserRouter>
            <Header isLoggedIn={isLoggedIn} onSignOut={() => setIsLoggedIn(false)}/>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path='/auth'>
                        <AuthAppLazyComponent onSignIn={()=> setIsLoggedIn(true)} />
                    </Route>
                    <Route path='/'>
                        <MarketingAppLazyComponent />
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    </>
};