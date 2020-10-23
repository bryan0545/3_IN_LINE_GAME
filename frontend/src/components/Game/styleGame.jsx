import styled, { css } from 'styled-components';
import constants from './../../constants/cosntants';

export const StyledTitle = styled.p`
    color: ${constants.COLORS.THREETH};
    text-align: center;
    font-size: 30px;
    font-weight:bold;
`

export const GameStyled = styled.div`
    margin: 70px 50px ;
`

export const StyledButtonsDiv = styled.div`
    display:flex;
    justify-content:center;
    button{
        margin: 0 30px;
    }
`

export const StyledTurn = styled.div`
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

export const StyledBoard = styled.div`
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
export const StyledCell = styled.div`
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