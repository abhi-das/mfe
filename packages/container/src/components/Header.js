import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return <>
        <div>
            <Link to='/'>
                <h2>App</h2>
            </Link>
            <Link to='/auth/signin'>
                <button>Login</button>
            </Link>
        </div>
    </>
}

export default Header;