import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { GamesContext } from '../Ladder';
import Block from './Block';

const Pair = ({ids, goesTo}) => {
  const context = useContext(GamesContext)

  const onClick = (id) => {
    const newWinnerTab = {...context.winnerTab}
    const loser = id === 0 ? 1 : 0;

    newWinnerTab[goesTo.winner] = context.winnerTab[ids[id]]
    newWinnerTab[goesTo.loser] = context.winnerTab[ids[loser]]

    context.setWinnerTab(newWinnerTab)
  }

  return (
    <>
      <Block id={0} game={context.winnerTab[ids[0]]} onClick={onClick}/>
      <Block id={1} game={context.winnerTab[ids[1]]} onClick={onClick}/>
    </>
  );
}

export default Pair;
