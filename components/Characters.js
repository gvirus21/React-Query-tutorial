import { useQuery } from 'react-query';
import Character from './Character';

const Characters = () => {

    
    const fetchCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const data = await response.json()
        return data.results
    }
    
    const { data: characters, status } = useQuery("characters", fetchCharacters)
   
    if (status === "loading") {
        return <div>Loading...</div>
    }
    if (status === "error") {
        return <div>Error</div>
    }

  return (
    <div>
        {
            characters.map((character) => {
                return <Character character={character} />
            })
        }
    </div>
  )
}

export default Characters