import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import SignIn from './components/singin';
import SignUp from './components/signup';

export default ({ history, onSignIn }) => {
    return (<div>
        <Router history={history}>
            <Switch>
                <Route exact path='/auth/signin'>
                    <SignIn onSignIn={onSignIn}/>
                </Route>
                <Route exact path='/auth/signup'>
                    <SignUp onSignIn={onSignIn} />
                </Route>
            </Switch >
        </Router >
    </div>)
}