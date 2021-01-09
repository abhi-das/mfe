import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return <>
        <div>
            <Link to='/'>
                <h2>App</h2>
            </Link>
            <button>Login</button>
            <button>Logout</button>
        </div>
    </>
}

export default Header;