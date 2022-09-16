import React from "react";
import styles from '../styles/Character.module.css'

const Character = ({ character }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={character.image} alt="" />
      <div className={styles.textContainer}>
        <h3 className={styles.nameText}>{character.name}</h3>
        <p className={styles.statusText}>
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
