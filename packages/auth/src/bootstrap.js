import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

const mount = (el, { defaultHistory, onNavigate, initialPath, onSignIn }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });
    if(onNavigate) {
        history.listen(onNavigate);
    }
    ReactDOM.render(<App history={history} onSignIn={onSignIn}/>, el);

    return {
        onParentNavigation: ({ pathname: nextPathname }) => {
            const { pathname }= history.location;
            // console.log(pathname,'==onParent==', nextPathname)
            if(pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#auth-dev-root');
    if(el) {
        mount(el, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };