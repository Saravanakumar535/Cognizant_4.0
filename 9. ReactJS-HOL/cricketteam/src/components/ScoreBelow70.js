import React from 'react';

function ScoreBelow70({ players }) {
  const filtered = [];
  players.map(item => {
    if (item.score < 70) {
      filtered.push(item);
    }
  });

  return (
    <ul>
      {filtered.map((item, index) => (
        <li key={index}>{item.name} - {item.score}</li>
      ))}
    </ul>
  );
}

export default ScoreBelow70;
