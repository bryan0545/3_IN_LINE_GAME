import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import styled, { css } from 'styled-components';
import constants from './../../constants/cosntants';
import ModalWindow from '../ModalWindow/ModalWindow';
import { StyledNewButton } from './../Buttons/styleButton';
import NewGameButton from './../Buttons/NewGameButton';

class Game extends Component {
    constructor() {
        super()

        this.state = {
            board: ["", "", "", "", "", "", "", "", ""],
            currentTurn: "",
            id: "",
            status: "",
            winner: "",
            result: "",
            showModal: false
        }
    }

    getGame = async () => {

        const id = this.props.match.params.id;
        const response = await axios.get(`http://localhost:5000/games/${id}`);
        const { board, currentTurn, status, winner, result } = response.data.data;

        this.setState({
            board,
            currentTurn,
            id,
            status,
            winner,
            result,
            showModal: status !== "started"
        })
    }

    updateGame = async () => {
        const response = await axios.put(`http://localhost:5000/games/${this.state.id}`, {
            currentTurn: this.state.currentTurn,
            status: this.state.status,
            board: this.state.board,
            winner: this.state.winner,
            result: this.state.result,
            id: this.state.id,
        });

        const { currentTurn, status, winner, result } = response.data.data;

        this.setState({
            currentTurn,
            status,
            winner,
            result,
            showModal: status !== "started"
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

    handleModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    }


    handleClick = (id) => {
        if (!this.state.board[id] && this.state.status === "started") {
            this.addMovemet(id);
            this.updateGame();
            // this.cellEvents(id);
        }
    }

    componentDidMount() {
        this.getGame();
    }

    render() {
        const { board, status, result, winner, showModal, currentTurn } = this.state;
        const gameOver = status !== "started";
        console.log(status)
        return (
            <GameStyled>
                {
                    showModal && <ModalWindow
                        title={`Game over, ${result} " ${winner.toLocaleUpperCase()} "`}
                        handleModal={this.handleModal}
                    />
                }
                <StyledTurn>
                    {`Current Turn " ${currentTurn} "`}
                </StyledTurn>
                <StyledBoard>
                    {board.map((cell, id) =>
                        <StyledCell
                            disable={board[id]}
                            gameOver={gameOver}
                            key={id}
                            className="cell"
                            onClick={() => this.handleClick(id)}>
                            {cell}
                        </StyledCell>
                    )}
                </StyledBoard>
                <StyledButtonsDiv>
                    <StyledNewButton onClick={this.handleBack}>atras</StyledNewButton>
                    <NewGameButton/>
                </StyledButtonsDiv>
            </GameStyled>
        );
    }
}

export default withRouter(Game);


const GameStyled = styled.div`
    margin: 70px 50px ;
`

const StyledButtonsDiv = styled.div`
    display:flex;
    justify-content:center;
    button{
        margin: 0 30px;
    }
`

const StyledTurn = styled.div`
    text-transform:capitalize;
    font-size: 18px;
    font-weight:bold;
    width: 180px;
    height: 60px;
    margin:auto;
    border-bottom: solid 2px ${constants.COLORS.THREETH} ;
    text-align:center;
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius: 15px;  
    background-color: ${constants.COLORS.SECOND}; 
    color : ${constants.COLORS.THREETH};`

const StyledBoard = styled.div`
margin: 20px auto 40px auto;
display:grid;
justify-content:center;
align-content:center;
grid-template-columns: repeat(3, auto);

.cell{
    display:flex;
    justify-content:center;
    align-items:center;
    width:${constants.BOARD.CELL_SIZE};
    height:${constants.BOARD.CELL_SIZE};    
    border-left: 6px solid ${constants.COLORS.GRID};
    border-bottom: 6px solid ${constants.COLORS.GRID};
    font-size:${constants.BOARD.CELL_SIZE};
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
const StyledCell = styled.div`
    ${({ disable }) => disable && css`
        background-color: rgba(0, 0, 0, 0.01);
        cursor: not-allowed;
        &:hover{
            box-shadow: none;
        }
    `}

    ${({ disable }) => !disable && css`
        &:hover{
            box-shadow: ${constants.COLORS.SHADOW_THREETH_LOW};
        }
    `}

    ${({ gameOver }) => gameOver && css`
        &:hover{
            box-shadow: none;
            cursor: not-allowed;
        }
    `}; 

    ${({ disable }) => disable === 'x' && css`
        color: ${constants.COLORS.X}
    `}
    
    ${({ disable }) => disable === 'o' && css`
        color: ${constants.COLORS.O}
    `}
`


