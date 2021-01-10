import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({ isLoggedIn, onSignOut }) => {
    return <>
        <div>
            <Link to='/'>
                <h2>App Header</h2>
            </Link>
            {isLoggedIn &&
                (<Link to='/'>
                    <button onClick={onSignOut}>Logout</button>
                </Link>)
            }
            {!isLoggedIn &&
                (<Link to='/auth/signin'>
                    <button>Login</button>
                </Link>)
            }
        </div>
    </>
}

export default Header;