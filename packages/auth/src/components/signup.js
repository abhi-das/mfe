import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (<div>
        <h4>SignUp Page!</h4>
        <hr />
        <Link to='/auth/signin'>
            <button>Go to SignIn</button>
        </Link>
    </div>)
};
