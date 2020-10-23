import styled, { css } from 'styled-components';
import constants from './../../constants/cosntants';

export const StyledGames = styled.div`
  margin: 70px 50px ;
`    

export const StyledTable = styled.div`    
    width:100%;
    height: 70vh;
    margin:20px auto;
    overflow-x:hidden;
    overflow-y:auto;
    text-transform: capitalize;

table{  
    width:100%;  
    padding:0;  
    text-align:center;      
    height: 70vh;
    border-collapse: collapse;  
    background-color:${constants.COLORS.SECOND};

    th{
        background-color: ${constants.COLORS.BODY};
        position: sticky;  
        top: 0;
        color: ${constants.COLORS.THREETH};
        border-bottom: solid 1px ${constants.COLORS.PRIMARY};        
        padding-bottom: 5px;
    }
    tr{
        border-bottom: solid 1px ${constants.COLORS.BODY};
        color: ${constants.COLORS.SECOND_LETER};
    }
    td{
        padding: 10px 0;
    }   
    tbody{
            height:80%;             
        }  
    a{
       text-decoration :none;
       border: solid 1px ${constants.COLORS.THREETH};
       font-size: 12px;
       font-weight: bold;
       border-radius: 15px;
       padding: 3px 3px;
       width: 70px;
       display:inline-block;
       color: ${constants.COLORS.THREETH};
       &:hover{
            color: ${constants.COLORS.BODY};        
            background-color:${constants.COLORS.THREETH};
            box-shadow:${constants.COLORS.SHADOW_THREETH_HIGH}
        }
    }
}

::-webkit-scrollbar{        
    width:12px;           
    border-radius: 15px;
    /* background-color: #f3f3f3;     */
    
}
::-webkit-scrollbar-thumb{
    background-color:${constants.COLORS.THREETH};
    border-radius: 15px;
}
`

