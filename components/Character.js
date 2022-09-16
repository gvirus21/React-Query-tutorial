import React from "react";

const Character = ({ character }) => {
  return (
    <div className="card">
      <img className="image" src={character.image} alt="" />
      <div className="text-container">
        <h3 className="name-text">{character.name}</h3>
        <p className="status-text">
          {character.status} - {character.species}
        </p>
        <p className="title">
            Last seen on :
        </p>
        <p>
            {character.location.name}
        </p>
      </div>
    </div>
  );
};

export default Character;
