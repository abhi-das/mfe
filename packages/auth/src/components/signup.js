import React from 'react';
import { Link } from 'react-router-dom';

export default ({ onSignIn }) => {
    return (<div>
        <h4>SignUp!</h4>
        <hr />
        <Link to='/auth/signin'>
            <button>Go to SignIn</button>
        </Link>
        <hr />
        <button onClick={onSignIn}>SignUp New User</button>
    </div>)
};
