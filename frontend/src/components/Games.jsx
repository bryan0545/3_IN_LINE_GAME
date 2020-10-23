import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'
import NewGameButton from './NewGameButton';
import constants from './../constants/cosntants'

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
        <StyledGames>
            <StyledTable>
                <table>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Result</th>
                            <th>Winner</th>
                            <th>Created</th>
                            <th>Last update</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {(games && games.length) ?
                            games.map(game => {
                                const id = game.id;
                                return (
                                    <tr key={id}>
                                        <td>{game.status}</td>
                                        <td>{game.result}</td>
                                        <td>{game.winner}</td>
                                        <td>{game.created}</td>
                                        <td>{game.updated}</td>
                                        <td>
                                            <Link to={`/game/${id}`}>{game.status !== 'started' ? "VIEW" : "CONTINUE"}</Link>
                                        </td>
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
            <div style={{ alignContent: "center" }}>
                <NewGameButton />
            </div>
        </StyledGames>
    )
}

export default Games;

const StyledGames = styled.div`
  margin: 70px 50px ;
`    

const StyledTable = styled.div`    
    width:100%;
    height: 70vh;
    margin:20px auto;
    overflow-x:hidden;
    overflow-y:auto;
    text-transform: capitalize;

table{  
    width:100%;  
    padding:0;  
    text-align:center;      
    height: 70vh;
    border-collapse: collapse;  
    background-color:${constants.COLORS.SECOND};

    th{
        background-color: ${constants.COLORS.BODY};
        position: sticky;  
        top: 0;
        color: ${constants.COLORS.SECOND_LETER};
        border-bottom: solid 1px ${constants.COLORS.PRIMARY};        
        padding-bottom: 5px;
    }
    tr{
        border-bottom: solid 1px ${constants.COLORS.BODY};
        color: ${constants.COLORS.SECOND_LETER};
    }
    td{
        padding: 10px 0;
    }   
    tbody{
            height:80%;             
        }  
    a{
       text-decoration :none;
       border: solid 1px ${constants.COLORS.THREETH};
       font-size: 12px;
       font-weight: bold;
       border-radius: 15px;
       padding: 3px 3px;
       width: 70px;
       display:inline-block;
       color: ${constants.COLORS.THREETH};
       &:hover{
            color: ${constants.COLORS.BODY};        
            background-color:${constants.COLORS.THREETH};
            box-shadow:${constants.COLORS.SHADOW_THREETH}
        }
    }
}

::-webkit-scrollbar{        
    width:12px;           
    border-radius: 15px;
    /* background-color: #f3f3f3;     */
    
}
::-webkit-scrollbar-thumb{
    background-color:${constants.COLORS.THREETH};
    border-radius: 15px;
}
`

