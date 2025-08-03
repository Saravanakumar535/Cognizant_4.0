
import React from 'react';

export default function EvenPlayers({ IndianTeam }) {
  const [, second, , fourth, , sixth] = IndianTeam;
  return (
    <ul>
      <li>Second: {second}</li>
      <li>Fourth: {fourth}</li>
      <li>Sixth: {sixth}</li>
    </ul>
  );
}
