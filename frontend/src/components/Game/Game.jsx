import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';
import constants from './../../constants/cosntants';

class Game extends Component {
    constructor() {
        super()

        this.state = {
            board: ["", "", "", "", "", "", "", "", ""],
            currentTurn: "",
            id: "",
            status: "",
            winner: ""
        }
    }

    getGame = async () => {    
          
        const id = this.props.match.params.id;
        const response = await axios.get(`http://localhost:5000/games/${id}`);
        const { board, currentTurn, status, winner } = response.data.data;
        
        this.setState({
            board,
            currentTurn,
            id,
            status,
            winner
        })
    }

    updateGame = async () => {
        const response = await axios.put(`http://localhost:5000/games/${this.state.id}`, {
            currentTurn:this.state.currentTurn,
            status:this.state.status,
            board:this.state.board,
            winner:this.state.winner,
            result:this.state.result,
            id:this.state.id,
        });
                
        this.setState({
            currentTurn: response.data.data.currentTurn,
            status: response.data.data.status,
            winner: response.data.data.winner
        })      
    }

    addMovemet = (id) => {
        const board = this.state.board;
        board[id] = this.state.currentTurn;
        this.setState({ board })
    }

    handleBack = () => {
      this.props.history.goBack();
    }

    cellEvents = (id) => {
        var cells = document.getElementsByClassName('cell');
        cells[id].classList.add('mark')
        
        console.log(cells[id].classList)
    }

    

    handleClick = (id) => {        
        if(!this.state.board[id] && this.state.status === "started"){
            this.addMovemet(id);
            this.updateGame();
            // this.cellEvents(id);
        }
    }

    componentDidMount() {
        this.getGame();
    }

    render() {
        const board = this.state.board;
        
        return (
            <>
                <StyledBoard>
                    {board.map((cell, id) =>
                        <div    
                        key={id} 
                        className="cell" 
                        onClick={() => this.handleClick(id)}>{cell}</div>
                    )}
                </StyledBoard>
                <button onClick = {this.handleBack}>atras</button>
            </>
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
    cursor: pointer;
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
.mark{
    background-color:red;
    cursor: not-allowed;
}
`
