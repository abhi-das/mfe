import React from 'react';
import { Link } from 'react-router-dom';
import './pricing.scss';

export default () => {
    return (<div className="pr-container">
        Hi Marketing App | Pricing!
        <hr />
        <Link to="/">
            <button>Back to Home</button>
        </Link>
    </div>)
}