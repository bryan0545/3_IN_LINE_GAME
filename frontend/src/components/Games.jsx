import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Games =  () => {
    const [games, setgames] = useState({});

    const getGames = async () => {
        const games = await axios.get("http://localhost:5000/games");
        console.log(games.data);
        setgames(games.data);
    }

    useEffect(() => {
        getGames();
    }, [])


    return (
        (games && games.length) 
        ?
        <DivTable>
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
                    {games.map(game => {
                        const id = game.id;  
                        return (
                            <tr key={id}>
                                <td>{game.status}</td>
                                <td>{game.winner}</td>
                                <td>{game.created}</td>
                                <td>{game.updated}</td>  
                                {game.status === 'started' &&
                                <td>
                                    <button className="continue-game" >CONTINUE</button>
                                </td>
                            }                              
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </DivTable>
        :
        <div>
            no hay datos en las tablas 
        </div>
    )
}

export default Games;

const DivTable = styled.div`
    
`

