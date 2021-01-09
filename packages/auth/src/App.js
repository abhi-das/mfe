import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import SignIn from './components/singin';
import SignUp from './components/signup';

export default ({ history }) => {
    return (<div>
        <Router history={history}>
            <Switch>
                <Route exact path='/auth/signin' component={SignIn} />
                <Route exact path='/auth/signup' component={SignUp} />
            </Switch >
        </Router >
    </div>)
}