import React from 'react';
import { Link } from 'react-router-dom';
import {StyledNavbar} from './StyleNavBar'

const Navigation = () => {
    return (
        <StyledNavbar>
            <div className="logo">
                <img src="logo.png" alt="" />
            </div>
            <ul>
                <Link to="/">Games</Link >
            </ul>
        </StyledNavbar>
    );
};

export default Navigation;

