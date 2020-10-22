import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const NewGameButton = () => {
    return (
        <StyledNewButton to="/game">New Game</StyledNewButton>
    )
}

export default NewGameButton;

const StyledNewButton = styled(Link)`
text-decoration:none;
color: red;
border: 1px solid black;
padding: 5px 20px;
border-radius: 15px;
`
