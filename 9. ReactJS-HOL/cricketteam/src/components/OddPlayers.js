import React from 'react';

export default function OddPlayers({ IndianTeam }) {
  const [first, , third, , fifth] = IndianTeam;
  return (
    <ul>
      <li>First: {first}</li>
      <li>Third: {third}</li>
      <li>Fifth: {fifth}</li>
    </ul>
  );
}
