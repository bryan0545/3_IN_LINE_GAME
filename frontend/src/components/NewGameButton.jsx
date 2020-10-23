import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';
import constants from './../constants/cosntants'


const NewGameButton = (props) => {

    const createGame = async () => {
        const response = await axios.post("http://localhost:5000/games", {});        
        const { id } = response.data.data;
        props.history.push(`/game/${id}`);
        console.log('new ', id)
    }

    return (
        <StyledNewButton onClick={createGame}>New Game</StyledNewButton>
    )
}

export default withRouter(NewGameButton);

const StyledNewButton = styled.button`
text-transform: uppercase;
font-weight:bold;
background-color: ${constants.COLORS.THREETH};
color: ${constants.COLORS.BACK_BODY};   
border: 1px solid ${constants.COLORS.BACK_BODY};   
padding: 5px 20px;
border-radius: 15px;
outline:none;
cursor:pointer;    

:hover{
    background-color: ${constants.COLORS.BACK_BODY};
    color: ${constants.COLORS.THREETH}; 
    border: 1px solid ${constants.COLORS.THREETH};    
}
`
