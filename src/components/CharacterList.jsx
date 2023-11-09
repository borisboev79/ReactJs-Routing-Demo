import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import styles from './CharacterList.module.css'

const base_url = 'https://swapi.dev/api';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`${base_url}/people`)
        .then(res => res.json())
        .then(data => {setCharacters(data.results)})
    }, []);

    return(
        <div className={styles.characterList}>
            {characters.map((character, index) => <CharacterCard key={character.name} id={index + 1} {...character} />)}
        </div>
    );
};

export default CharacterList;

