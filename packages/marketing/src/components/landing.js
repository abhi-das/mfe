import React from 'react';
import { Link } from 'react-router-dom';
import './landing.scss';

export default () => {
    return (<div className="la-container">
        Hi Marketing App | Home!
        <hr />
        <Link to="/pricing">
            <button>Pricing</button>
        </Link>
    </div>)
};