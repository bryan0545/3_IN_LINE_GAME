import React from 'react';
import { withRouter } from 'react-router-dom'
import {StyledNewButton} from './styleButton'
import axios from 'axios';



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

