import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';


const NewGameButton = (props) => {

    const createGame = async () => {
        const response = await axios.post("http://localhost:5000/games", {});        
        const { id } = response.data.data;
        props.history.push(`/game/${id}`);
        console.log('new ', id)
    }

    return (
        <button onClick={createGame}>New Game</button>
    )
}

export default withRouter(NewGameButton);

const StyledNewButton = styled(Link)`
text-decoration:none;
color: red;
border: 1px solid black;
padding: 5px 20px;
border-radius: 15px;
`
