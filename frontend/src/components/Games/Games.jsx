import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import {StyledGames, StyledTable} from './StyleGames'
import NewGameButton from '../Buttons/NewGameButton';


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
                                        <td>{game.result ? game.result :'in Proccess'}</td>
                                        <td>{game.winner ? game.winner:'-'}</td>
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

