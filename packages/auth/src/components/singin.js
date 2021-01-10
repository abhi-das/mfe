import React from 'react';
import { Link } from 'react-router-dom';

export default ({ onSignIn }) => {
    return (<div>
        <h4>SignIn!</h4>
        <hr />
        <Link to='/auth/signup'>
            <button>Go to SignUp</button>
        </Link>
        <hr />
        <button onClick={onSignIn}>SignIn the User</button>
    </div>)
};
