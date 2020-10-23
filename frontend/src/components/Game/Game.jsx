import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import ModalWindow from '../ModalWindow/ModalWindow';
import { StyledNewButton } from '../Buttons/StyleButton';
import {StyledTitle, GameStyled, StyledButtonsDiv, StyledTurn, StyledBoard,StyledCell} from './styleGame'

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
                    gameOver && <StyledTitle>Game over, {result} " {winner.toLocaleUpperCase()} "</StyledTitle>
                }
                {                    
                    showModal && <ModalWindow
                        title={`Game over, ${result}  ${winner.toLocaleUpperCase()} `}
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
                    <StyledNewButton onClick={this.handleBack}>Go Back</StyledNewButton>              
                </StyledButtonsDiv>
            </GameStyled>
        );
    }
}

export default withRouter(Game);




