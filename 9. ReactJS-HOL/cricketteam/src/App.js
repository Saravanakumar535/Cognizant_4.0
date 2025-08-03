import React from 'react';
import ListOfPlayers from './components/ListOfPlayers';
import ScoreBelow70 from './components/ScoreBelow70';
import OddPlayers from './components/OddPlayers';
import EvenPlayers from './components/EvenPlayers';
import ListOfIndianPlayers from './components/ListOfIndianPlayers';

function App() {
  const players = [
    { name: 'MS Dhoni', score: 90 },
    { name: 'Virat Kohli', score: 80 },
    { name: 'Rohit Sharma', score: 60 },
    { name: 'KL Rahul', score: 55 },
    { name: 'Hardik Pandya', score: 70 },
    { name: 'Ravindra Jadeja', score: 40 },
    { name: 'Shubman Gill', score: 75 },
    { name: 'Rishabh Pant', score: 30 },
    { name: 'Mohammed Shami', score: 65 },
    { name: 'Jasprit Bumrah', score: 20 },
    { name: 'Suryakumar Yadav', score: 88 }
  ];

  const IndianTeam = ['First Player', 'Second Player', 'Third Player', 'Fourth Player', 'Fifth Player', 'Sixth Player'];
  const T20Players = [IndianTeam[0], IndianTeam[1], IndianTeam[2]];
  const RanjiTrophyPlayers = [IndianTeam[3], IndianTeam[4], IndianTeam[5]];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  let flag = true;

  return (
    <div>
      {flag === true ? (
        <>
          <h1>List of Players:</h1>
          <ListOfPlayers players={players} />

          <h1>List of Players having Scores Less than 70:</h1>
          <ScoreBelow70 players={players} />
        </>
      ) : (
        <>
          <h1>Indian Team</h1>
          <h3>Odd Players</h3>
          <OddPlayers IndianTeam={IndianTeam} />

          <h3>Even Players</h3>
          <EvenPlayers IndianTeam={IndianTeam} />

          <h3>List of Indian Players Merged:</h3>
          <ListOfIndianPlayers IndianPlayers={IndianPlayers} />
        </>
      )}
    </div>
  );
}

export default App;
