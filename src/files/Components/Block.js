import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  minWidth: '273px',
  minHeight: '40px',
  margin: '5px'
})

const Block = ({onClick, id, game, winner = false, ...props}) => {
  return (
    <StyledButton 
    disabled={game==="Przegrany z drabinki 1" || game==="Wygrany drabinki 2" || !game}
    variant={"outlined"}
    color={winner ? "success" : 'primary'}
    onClick={() => game && onClick(id)}
    {...props}
    >
      {game || ''}
    </StyledButton>
  );
}

export default Block;
