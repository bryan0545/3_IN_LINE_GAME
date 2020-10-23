import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import constants from './../../constants/cosntants'

const Navigation = () => {
    return (
        <StyledNavbar>
            <ul>                
                <li> <Link to="/">Games</Link ></li>
            </ul>
        </StyledNavbar>
    );
};

export default Navigation;

const StyledNavbar = styled.nav`
    background-color: ${constants.COLORS.SECOND};   
    margin: 0px;
    padding: 0px;
    position: fixed;
    display: inline-block;
    width:100%;    
    top: 0px;

    & ul{        
        margin: 0;
        padding: 0;
        float:right;
        overflow: hidden ;
        display: flex;
    }

    & li{
        list-style: none;   
    }
    & a{
        font-family: arial;
        display: block;
        padding: 14px 16px;
        color: ${constants.COLORS.THREETH};   
        text-align: center;        
        text-decoration: none;
        transition: background-color .5s;
        text-transform: uppercase;
        font-weight: bold;        

        :hover{
            background-color:${constants.COLORS.BODY}; 
        }
    
    }
`