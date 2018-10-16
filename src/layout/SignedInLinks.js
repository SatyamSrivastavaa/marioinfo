import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating lighten-1">SS</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;