import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';
import constants from './../../constants/cosntants';

class Game extends Component {
    constructor() {
        super()

        this.state = {
            board: ["","","","","","","","",""],            
            currentTurn: "",
            id: "",
            status: "",            
            winner: ""
        }
    }

    createGame = async () => {
        const response = await axios.post("http://localhost:5000/games",{});
        console.log('creo juego')
        const  {board,  currentTurn, id, status, winner} = response.data;

        this.setState({
            board,
            currentTurn, 
            id,  
            status,  
            winner         
        })        
    }

    getGame = async () => {
        const response = await axios.get(`http://localhost:5000/games/${this.state.id}`);
        const  {board, currentTurn, id, status, winner} = response.data;
        console.log('llamo un stated game')

        this.setState({
            board,
            currentTurn, 
            id, 
            status, 
            winner
        })        
    }

    updateGame = async() =>{
        const response = await axios.put(`http://localhost:5000/games/${this.state.id}`,{
            board: this.state.board
        });
        console.log('actualizo juego')

        this.setState({
            currentTurn: response.data.currentTurn,
            status:response.data.status, 
            winner:response.data.winner
        })        
    }

    addMovemet = (id) =>{
        const board = this.state.board;
        board[id] =  this.state.currentTurn;
        this.setState({ board })
    }

    handleClick = (id) =>{
        this.addMovemet(id);
        this.updateGame();
    }

    callAPI = async () => {
        if (this.props.match.params.id) {
            this.getGame();
        } else {
            this.createGame();
        }
    }   

    processComponent = () => {  
        this.callAPI();
    }

    componentDidMount() {
        this.processComponent();
    }

    render() {
        console.log(this.state)
        const board = this.state.board;
        return (
            <StyledBoard>
                {board.map( (cell, id) => 
                    <div key = {id} className="cell" onClick = {()=>this.handleClick(id)}>{cell}</div>
                )}
            </StyledBoard>
        );
    }
}

export default withRouter(Game);

const StyledBoard = styled.div`
width: 100vw;
height: 100vh;
display:grid;
justify-content:center;
align-content:center;
grid-template-columns: repeat(3, auto);

.cell{
    width:${constants.BOARD.CELL_SIZE};
    height:${constants.BOARD.CELL_SIZE};    
    border: 1px solid black;
}
.cell:nth-child(1n+1){
    border-top:none;
}
.cell:nth-child(3n+1){
    border-left:none;
}
.cell:nth-child(3n+3){
    border-right:none;
}
.cell:nth-child(1n+7){
    border-bottom:none;
}
`
