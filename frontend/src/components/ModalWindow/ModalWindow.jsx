import React from 'react';
import {StyledModal, StyledModalContent} from './styleModalWindow'

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
