const http = require ('http');
const data = require ('./utils/data')
http
.createServer((request,response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');

    if (request.url.includes ("/rickandmorty/character/")){
        let id = request.url.split('/').at(-1)

       // let characterFilter = characters.filter(character => character.id=== Number(id))
       // response.writeHead(200, {"Content-type": "application/json"})
       // .end (JSON.stringify(characterFilter))

       const characterFound = data.find((character) => 
        character.id === +id)

        return response
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify(characterFound))
    }



       }).listen(3001, "localhost");