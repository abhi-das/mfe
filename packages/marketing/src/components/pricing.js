import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (<div>
        Hi Pricing!
        <Link to="/">
            <button>Back to Home</button>
        </Link>
    </div>)
}