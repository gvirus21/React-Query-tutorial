import { useQuery } from 'react-query';
import Character from './Character';
import styles from '../styles/Character.module.css'
import { useState } from 'react';


const Characters = () => {
    const [page, setPage] = useState(1)

    const fetchCharacters = async ({queryKey}) => {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`)
        const data = await response.json()
        return data
    }
    
    const { data, status } = useQuery(["characters", page], fetchCharacters)
    console.log(data)
   
    if (status === "loading") {
        return <div>Loading...</div>
    }
    if (status === "error") {
        return <div>Error</div>
    }

  return (
    <div className={styles.cardContainer}>
        {
            data.results.map((character) => {
                return <Character character={character} />
            })
        }
        <div className={styles.buttonContainer}>
            <button disabled={page===1} onClick={() => setPage((prev) => (prev - 1))} className={styles.button}>Previous</button>
            <button disabled={!data.info.next} className={styles.button} onClick={() => setPage((prev) => (prev + 1))}>Next</button>
        </div>
    </div>
  )
}

export default Characters