import React from 'react';

import './home-screen.styles.css';

export const Home = (props) => {
    return (
        <div className={props.isHome}>
            <h1>Welcome Home</h1>
        </div>
    )
}