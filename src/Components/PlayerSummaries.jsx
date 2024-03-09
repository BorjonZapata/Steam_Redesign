import axios from 'axios';
import React, {useState, useEffect} from 'react';

function PlayerSummaries() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('https://getpantry.cloud/apiv1/pantry/d16371a2-ef02-4822-81e1-59510e6f90ef/basket/Library')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      })
  }, []);
  return (
    <div className='Games'>
      {data && (
        <div>
          <p>Juegos:  {data.response.game_count}</p>
          {data.response.games.map((game, index) => (
            <div key={index}>
              <p>ID del juego: {game.appid}</p>
              <p>Tiempo de juego: {game.playtime_windows_forever}</p>
              <p>-------------------------------</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PlayerSummaries;
