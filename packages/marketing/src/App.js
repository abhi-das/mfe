import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Landing from './components/landing';
import Pricing from './components/pricing';

export default ({ history }) => {
    return (<div>
        <Router history={history}>
            <Switch>
                <Route exact path='/pricing' component={Pricing} />
                <Route path='/' component={Landing} />
            </Switch >
        </Router >
    </div>)
}