import React from 'react';
import styled from 'styled-components'

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
    width:20%;
    min-height:10%;    
    background-color: white;    
    box-shadow:0 0 10px rgba(0,0,0,.5);
    z-index: 101;
    overflow-y: auto;  
    padding: 40px;
    border-radius: 5px;
`