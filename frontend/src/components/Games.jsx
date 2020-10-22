import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'
import NewGameButton from './NewGameButton';

const Games = () => {
    const [games, setGames] = useState({});

    const getGames = async () => {
        const games = await axios.get("http://localhost:5000/games");
        // console.log(games.data);
        setGames(games.data.data);
    }

    useEffect(() => {
        getGames();
    }, [])

    return (
        <>
            <StyledTable>
                <table>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Winner</th>
                            <th>Created</th>
                            <th>Last update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(games && games.length) ?
                            games.map(game => {
                                const id = game.id;
                                return (
                                    <tr key={id}>
                                        <td>{game.status}</td>
                                        <td>{game.winner}</td>
                                        <td>{game.created}</td>
                                        <td>{game.updated}</td>
                                        {game.status === 'started' &&
                                            <td>
                                                <Link to={`/game/${id}`}>CONTINUE</Link>
                                            </td>
                                        }
                                    </tr>
                                )
                            }
                            )
                            : <tr>
                                <td>No data on database</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </StyledTable>
            <NewGameButton />
        </>
    )
}

export default Games;

const StyledTable = styled.div`    
    width:70%;
    /* height: 70vh; */
    margin:auto;
    margin-top: 10px;
    overflow-x:hidden;
    overflow-y:auto;


table{  
    width:100%;  
    padding:0;  
    text-align:center;      
    /* height: 70vh; */
    /* border-collapse: collapse;   */
    
    th{
        background: white;
        position: sticky;  
        top: 0;
        color: #ef5350;
        border-bottom: #ef5350;
    }
    td{
        padding: 10px 0;
    }
   
    tbody{
            /* height:80%;  */
            
        }  
    
}
`

