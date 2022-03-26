import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

const Start = () => {
  const [name, setName] = useState('');
  const [lobby, setLobbyCode] = useState('');

  const namer = (event: any) => {
    setName(event.target.value);
    //console.log(name)
  };

  const lobbycode = (event: any) => {
    setLobbyCode(event.target.value);
    //console.log(lobby)
  };
  return (
    <div>
      <div>
        name:
        <input onChange={namer} type="text"></input>
      </div>
      <div>
        lobby code:
        <input onChange={lobbycode} type="text"></input>
        <button> Enter</button>
      </div>
      <div>
        <Link to="/create">Create new lobby</Link>
      </div>
    </div>
  );
};

export default Start;
