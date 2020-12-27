import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Landing from './components/landing';
import Pricing from './components/pricing';

export default () => {
    return (<div>
        <BrowserRouter>
            <Switch>
                <Route exact path='/pricing' component={Pricing} />
                <Route path='/' component={Landing} />
            </Switch >
        </BrowserRouter>
    </div>)
}