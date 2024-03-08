import React, { useEffect, useState } from 'react';

function PlayerSummaries() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=63F3B72409107F526DEB08F5935180C1&steamids=76561198145120478',
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin" : "http://api.steampowered.com"
,
      },
    })
      .then(response => response.json())
      .then(data => setData(data))
  }, []);

  return (
    <div>
      {data && data.map((player, index) => (
        <div key={index}>
          <p>Steam ID: {player.steamid}</p>
          <p>Nombre: {player.personaname}</p>
          <p>URL del perfil: <a href={player.profileurl}>{player.profileurl}</a></p>
        </div>
      ))}
    </div>
  );
}
{/*Puedo hacer un test de la respuesta de json en postman sin problemas, el resultado de json es este: {
    "response": {
        "players": [
            {
                "steamid": "76561198145120478",
                "communityvisibilitystate": 3,
                "profilestate": 1,
                "personaname": "Roka",
                "commentpermission": 1,
                "profileurl": "https://steamcommunity.com/id/rokaalex/",
                "avatar": "https://avatars.steamstatic.com/d7a74b14ff980fe1834e2b32ba4ddda87b226124.jpg",
                "avatarmedium": "https://avatars.steamstatic.com/d7a74b14ff980fe1834e2b32ba4ddda87b226124_medium.jpg",
                "avatarfull": "https://avatars.steamstatic.com/d7a74b14ff980fe1834e2b32ba4ddda87b226124_full.jpg",
                "avatarhash": "d7a74b14ff980fe1834e2b32ba4ddda87b226124",
                "lastlogoff": 1709303888,
                "personastate": 1,
                "primaryclanid": "103582791429521408",
                "timecreated": 1405479487,
                "personastateflags": 0,
                "loccountrycode": "MX"
            }
        ]
    }
}

Sin embargo, al inetentar hacer el fetch en mi servidor de prueba de react no se muestra la informacion del componennte, la terminal del navegador entrega el siguiente error:
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=63F3B72409107F526DEB08F5935180C1&steamids=76561198145120478.
(Reason: CORS header ‘Access-Control-Allow-Origin’ missing).
Segun lo que puedo investigar aqui: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
necesito hacer un cambio en la configuracion de mi servidor para que tenga la configuracion Access-Control-Allow-Origin: https://example.com de la direccion de la que quiero usar
mi api, sin embargo no puedo averiguar como implementar esto en mi proyecto.
*/}
export default PlayerSummaries;
