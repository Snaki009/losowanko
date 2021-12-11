import React, { useEffect, useState } from 'react'
import Pair from './Components/Pair'
import Block from './Components/Block'
import NavBar from './Components/NavBar'
import { styled } from '@mui/system';

export const startGames = {
  1: 'Wiedźmin 3',
  2: 'Resident Evil 4', // 219
  3: 'Mafia 2',
  4: 'Control', //220
  5: 'GTA V',
  6: 'Spider-man: Miles Morales', //221
  7: 'Horizon Zero Dawn',
  8: "Demon's Souls", //222
  9: 'Red Dead Redemption 2',
  10: 'Heavy Rain', //223
  11: 'Uncharted 2',
  12: 'Death Stranding', //224
  13: 'The Last of Us 2',
  14: 'Crash Bandicoot 1', //225
  15: 'Silent Hill 2',
  16: 'GTA: San Andreas', //226
  17: 'God of War',
  18: 'Portal 2',  //227
  19: 'Detroit: Become Human',
  20: 'GTA Vice City', //228
  21: 'Uncharted 4',
  22: 'Doom (2016)', //229
  23: 'Ghost of Tsushima',
  24: 'GTA IV', //230
  25: 'The Last of Us',
  26: 'Half Life 2', //231
  27: "Assassin's Creed II",
  28: 'Ratchet & Clank (PS4)', //232
  29: 'Spider-man',
  30: 'Hades', //232
  31: 'Bloodborne',
  32: 'Days Gone', //234
  //Losers starter
  34: 'God of War 3',
  36: 'Hitman Blood Money',
  38: 'Metal Gear Solid V',
  40: 'Splinter Cell Chaos Theory',
  42: 'Mafia 1',
  44: 'Cyberpunk 2077',
  46: 'The Last Guardian',
  48: 'Returnal',
  50: 'Uncharted',
  52: 'Dragon Age: Origins',
  54: 'Metal Gear Solid',
  56: 'Ratchet & Clank: Rift Apart',
  58: 'Tomb Raider (2013)',
  60: 'Overcooked! All You Can Eat',
  62: 'Until Dawn',
  64: 'Red Dead Redemption',

  //Placeholder
  33: 'Przegrany z drabinki 1',
  35: 'Przegrany z drabinki 1',
  37: 'Przegrany z drabinki 1',
  39: 'Przegrany z drabinki 1',
  41: 'Przegrany z drabinki 1',
  43: 'Przegrany z drabinki 1',
  45: 'Przegrany z drabinki 1',
  47: 'Przegrany z drabinki 1',
  49: 'Przegrany z drabinki 1',
  51: 'Przegrany z drabinki 1',
  53: 'Przegrany z drabinki 1',
  55: 'Przegrany z drabinki 1',
  57: 'Przegrany z drabinki 1',
  59: 'Przegrany z drabinki 1',
  61: 'Przegrany z drabinki 1',
  63: 'Przegrany z drabinki 1',
  105: 'Przegrany z drabinki 1',
  107: 'Przegrany z drabinki 1',
  109: 'Przegrany z drabinki 1',
  111: 'Przegrany z drabinki 1',
  113: 'Przegrany z drabinki 1',
  115: 'Przegrany z drabinki 1',
  117: 'Przegrany z drabinki 1',
  119: 'Przegrany z drabinki 1',
  141: 'Przegrany z drabinki 1',
  135: 'Przegrany z drabinki 1',
  137: 'Przegrany z drabinki 1',
  139: 'Przegrany z drabinki 1',
  149: 'Przegrany z drabinki 1',
  151: 'Przegrany z drabinki 1',
  155: 'Przegrany z drabinki 1',
  157: 'Przegrany z drabinki 1',


  144: 'Wygrany drabinki 2',
}

export const GamesContext = React.createContext();

const Column = styled('div')(({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
}))

const Container = styled('div')({
  display: 'flex',
})

const Divider = styled('div')({
  height: '100px'
})

const Ladder = () => {
  const [winnerTab, setWinnerTab] = useState(startGames)

  useEffect(() => {
    const savedData = localStorage.getItem('saveData');
    
    savedData && setWinnerTab(JSON.parse(savedData))
  }, [])

  const resetWinnerTab = () => setWinnerTab(startGames)

  return (
    <GamesContext.Provider value={{setWinnerTab, winnerTab}}>
      <NavBar winnerTab={winnerTab} resetWinnerTab={resetWinnerTab}/>
      <Divider/>
      <Container>
        <Column>
          <Pair ids={[1, 2]} goesTo={{winner: 65, loser: 49}}/>
          <Pair ids={[3, 4]} goesTo={{winner: 66, loser: 51}}/>
          <Pair ids={[5, 6]} goesTo={{winner: 67, loser: 53}}/>
          <Pair ids={[7, 8]} goesTo={{winner: 68, loser: 55}}/>
          <Pair ids={[9, 10]} goesTo={{winner: 69, loser: 57}}/>
          <Pair ids={[11, 12]} goesTo={{winner: 70, loser: 59}}/>
          <Pair ids={[13, 14]} goesTo={{winner: 71, loser: 61}}/>
          <Pair ids={[15, 16]} goesTo={{winner: 72, loser: 63}}/>
          <Pair ids={[17, 18]} goesTo={{winner: 73, loser: 33}}/>
          <Pair ids={[19, 20]} goesTo={{winner: 74, loser: 35}}/>
          <Pair ids={[21, 22]} goesTo={{winner: 75, loser: 37}}/>
          <Pair ids={[23, 24]} goesTo={{winner: 76, loser: 39}}/>
          <Pair ids={[25, 26]} goesTo={{winner: 77, loser: 41}}/>
          <Pair ids={[27, 28]} goesTo={{winner: 78, loser: 43}}/>
          <Pair ids={[29, 30]} goesTo={{winner: 79, loser: 45}}/>
          <Pair ids={[31, 32]} goesTo={{winner: 80, loser: 47}}/>
        </Column>
        <Column>
          <Pair ids={[65, 66]} goesTo={{winner: 97, loser: 105}}/>
          <Pair ids={[67, 68]} goesTo={{winner: 98, loser: 107}}/>
          <Pair ids={[69, 70]} goesTo={{winner: 99, loser: 109}}/>
          <Pair ids={[71, 72]} goesTo={{winner: 100, loser: 111}}/> 
          <Pair ids={[73, 74]} goesTo={{winner: 101, loser: 113}}/>
          <Pair ids={[75, 76]} goesTo={{winner: 102, loser: 115}}/>
          <Pair ids={[77, 78]} goesTo={{winner: 103, loser: 117}}/>
          <Pair ids={[79, 80]} goesTo={{winner: 104, loser: 119}}/>
        </Column>
        <Column>
          <Pair ids={[97, 98]} goesTo={{winner: 121, loser: 135}} />
          <Pair ids={[99, 100]} goesTo={{winner: 122, loser: 137}} />
          <Pair ids={[101, 102]} goesTo={{winner: 123, loser: 139}} />
          <Pair ids={[103, 104]} goesTo={{winner: 124, loser: 141}} />

        </Column>
        <Column>
          <Pair ids={[121, 122]} goesTo={{winner: 133, loser: 149}} />
          <Pair ids={[123, 124]} goesTo={{winner: 134, loser: 151}} />
        </Column>
        <Column>
          <Pair ids={[133, 134]} goesTo={{winner: 143, loser: 155}} />
        </Column>
        <Column>
          <Pair ids={[143, 144]} goesTo={{winner: 159, loser: 157}} />
        </Column>
        <Column>
          <Block id={159} game={winnerTab[159]} onClick={() => {}} winner variant={'contained'}/>
        </Column>
      </Container>
      <Divider/>
        Drabinka przegranych:
      <Container>
        <Column>
          <Pair ids={[33, 34]} goesTo={{winner: 81, loser: 0}}/>
          <Pair ids={[35, 36]} goesTo={{winner: 82, loser: 0}}/>
          <Pair ids={[37, 38]} goesTo={{winner: 83, loser: 0}}/>
          <Pair ids={[39, 40]} goesTo={{winner: 84, loser: 0}}/>
          <Pair ids={[41, 42]} goesTo={{winner: 85, loser: 0}}/>
          <Pair ids={[43, 44]} goesTo={{winner: 86, loser: 0}}/>
          <Pair ids={[45, 46]} goesTo={{winner: 87, loser: 0}}/>
          <Pair ids={[47, 48]} goesTo={{winner: 88, loser: 0}}/>
          <Pair ids={[49, 50]} goesTo={{winner: 89, loser: 0}}/>
          <Pair ids={[51, 52]} goesTo={{winner: 90, loser: 0}}/>
          <Pair ids={[53, 54]} goesTo={{winner: 91, loser: 0}}/>
          <Pair ids={[55, 56]} goesTo={{winner: 92, loser: 0}}/>
          <Pair ids={[57, 58]} goesTo={{winner: 93, loser: 0}}/>
          <Pair ids={[59, 60]} goesTo={{winner: 94, loser: 0}}/>
          <Pair ids={[61, 62]} goesTo={{winner: 95, loser: 0}}/>
          <Pair ids={[63, 64]} goesTo={{winner: 96, loser: 0}}/>        
        </Column>
        <Divider/>
        <Column>
          <Pair ids={[81, 82]} goesTo={{winner: 106, loser: 0}}/>
          <Pair ids={[83, 84]} goesTo={{winner: 108, loser: 0}}/>
          <Pair ids={[85, 86]} goesTo={{winner: 110, loser: 0}}/>
          <Pair ids={[87, 88]} goesTo={{winner: 112, loser: 0}}/>
          <Pair ids={[89, 90]} goesTo={{winner: 114, loser: 0}}/>
          <Pair ids={[91, 92]} goesTo={{winner: 116, loser: 0}}/>
          <Pair ids={[93, 94]} goesTo={{winner: 118, loser: 0}}/>
          <Pair ids={[95, 96]} goesTo={{winner: 120, loser: 0}}/>        
        </Column>
        <Column>
          <Pair ids={[105, 106]} goesTo={{winner: 125, loser: 0}} />
          <Pair ids={[107, 108]} goesTo={{winner: 126, loser: 0}} />
          <Pair ids={[109, 110]} goesTo={{winner: 127, loser: 0}} />
          <Pair ids={[111, 112]} goesTo={{winner: 128, loser: 0}} />
          <Pair ids={[113, 114]} goesTo={{winner: 129, loser: 0}} />
          <Pair ids={[115, 116]} goesTo={{winner: 130, loser: 0}} />
          <Pair ids={[117, 118]} goesTo={{winner: 131, loser: 0}} /> 
          <Pair ids={[119, 120]} goesTo={{winner: 132, loser: 0}} />         
        </Column>
        <Column>
          <Pair ids={[125, 126]} goesTo={{winner: 136, loser: 0}} />
          <Pair ids={[127, 128]} goesTo={{winner: 138, loser: 0}} />
          <Pair ids={[129, 130]} goesTo={{winner: 140, loser: 0}} />
          <Pair ids={[131, 132]} goesTo={{winner: 142, loser: 0}} />
        </Column>
        <Column>
          <Pair ids={[135, 136]} goesTo={{winner: 145, loser: 0}} />
          <Pair ids={[137, 138]} goesTo={{winner: 146, loser: 0}} />
          <Pair ids={[139, 140]} goesTo={{winner: 147, loser: 0}} />
          <Pair ids={[141, 142]} goesTo={{winner: 148, loser: 0}} />
        </Column>
        <Column>
          <Pair ids={[145, 146]} goesTo={{winner: 150, loser: 0}} />
          <Pair ids={[147, 148]} goesTo={{winner: 152, loser: 0}} />
        </Column>
        <Column>
          <Pair ids={[149, 150]} goesTo={{winner: 153, loser: 0}} />
          <Pair ids={[151, 152]} goesTo={{winner: 154, loser: 0}} />
        </Column>
        <Column>
          <Pair ids={[153, 154]} goesTo={{winner: 156, loser: 0}} />
        </Column>
        <Column>
          <Pair ids={[155, 156]} goesTo={{winner: 158, loser: 0}} />
        </Column>
        <Column>
          <Pair ids={[157, 158]} goesTo={{winner: 144, loser: 0}} />
        </Column>
      </Container>
    </GamesContext.Provider>
  );
}

export default Ladder;
