import constants from '../../constants/cosntants';
import styled from 'styled-components'

export const StyledNewButton = styled.button`


text-transform: uppercase;
font-size:15px;
font-weight:bold;
background-color: ${constants.COLORS.THREETH};
color: ${constants.COLORS.BACK_BODY};   
border: 1px solid ${constants.COLORS.BACK_BODY};   
padding: 5px 20px;
border-radius: 15px;
outline:none;
cursor:pointer;    

:hover{
    background-color: ${constants.COLORS.BACK_BODY};
    color: ${constants.COLORS.THREETH}; 
    border: 1px solid ${constants.COLORS.THREETH};    
}
`