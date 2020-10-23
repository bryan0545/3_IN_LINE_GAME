import React from 'react';
import styled from 'styled-components';
import cosntants from './../../constants/cosntants';


const ModalWindow = ({ title, handleModal }) => {
    return (
        <StyledModal onClick = {handleModal}>
            <StyledModalContent>
                <p>{title}</p>
                
            </StyledModalContent>
        </StyledModal>
    );
};

export default ModalWindow;

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    bottom:0;
    left:0;
    right:0;
    background-color:rgba(0,0,0,0.3);
    z-index: 100;
`

const StyledModalContent = styled.div`
    position:fixed;    
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    min-width:320px;
    min-height:120px;
    display:flex;
    flex-flow:column nowrap;  
    justify-content:center;
    align-items:center;             
    box-shadow:0 0 10px rgba(0,0,0,.8);
    z-index: 101;
    overflow-y: auto;  
    padding: 10px;
    border-radius: 5px;
    background-color: ${cosntants.COLORS.BACK_BODY}; 
    p{
        color: ${cosntants.COLORS.SECOND_LETER}; 
        font-size:20px;
        margin:5px;
    }
  
`