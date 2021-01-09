import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (<div>
        <h4>SignIn Page</h4>
        <hr />
        <Link to='/auth/signup'>
            <button>Go to SignUp</button>
        </Link>
    </div>)
};
