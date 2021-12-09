import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const Container = styled('div')({
  width: '100%',
  height: '70px',
  backgroundColor: 'gray',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  zIndex: 10,
  top: 0,
})

const StyledButton = styled(Button)({
  height: '50px',
  marginRight: '5px'
})

const Block = ({winnerTab, resetWinnerTab}) => {
  return (
    <Container>
      <StyledButton variant="contained" color="success" onClick={() => navigator.clipboard.writeText(JSON.stringify(winnerTab))}>
        Skopiuj do schowka
      </StyledButton>
      <StyledButton variant="contained" onClick={() => localStorage.setItem('saveData', JSON.stringify(winnerTab))}>
        Zapisz na później
      </StyledButton>
      <StyledButton variant="contained" color="error" onClick={() => resetWinnerTab()}>
        Resetuj
      </StyledButton>
    </Container>
  );
}

export default Block;
