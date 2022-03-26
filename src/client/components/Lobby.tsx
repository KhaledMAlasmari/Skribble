import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Lobby = () => {
  const [rounds, setRounds] = useState(6);
  const [roundTime, setRoundTime] = useState(60);
  const [customWords, setCustomWords] = useState('');
  const [onlyCustomWords, setOnlyCustomWords] = useState(false);

  const changeRounds = (event: any) => {
    setRounds(event.target.value);
    //console.log(rounds)
  };
  const changeRoundsTime = (event: any) => {
    setRoundTime(event.target.value);
    //console.log(roundTime)
  };
  const changeCustomWords = (event: any) => {
    setCustomWords(event.target.value);
    //console.log(customWords)
  };

  const changeOnlyCustomWords = (event: any) => {
    setOnlyCustomWords(!onlyCustomWords);
    //console.log(onlyCustomWords)
  };
  return (
    <div>
      <div>
        Rounds
        <select onChange={changeRounds}>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
        </select>
      </div>
      <div>
        Draw time in seconds
        <select onChange={changeRoundsTime}>
          <option value={60}>60</option>
          <option value={70}>70</option>
          <option value={80}>80</option>
          <option value={90}>90</option>
          <option value={100}>100</option>
          <option value={110}>110</option>
        </select>
      </div>

      <div>
        Custom Words
        <textarea onChange={changeCustomWords} />
      </div>

      <div>
        Use custom words exclusively.
        <input onChange={changeOnlyCustomWords} type="checkbox" />
      </div>
      <div>
        <Link to="/game">start</Link>
      </div>
    </div>
  );
};

export default Lobby;
