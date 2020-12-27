import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (<div>
        Hi Landing!
        <Link to="/pricing">
            <button>Pricing</button>
        </Link>
    </div>)
};