import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { mount } from 'marketing/MarketingApp';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigation } =  mount(ref.current, {
            onNavigate: ({ pathname: nextPath }) => {
                const { pathname } = history.location;
                if(pathname !== nextPath) {
                    history.push(nextPath)
                }
            }
        });
        history.listen(onParentNavigation);
    }, []);

    return <div ref={ref}></div>
}