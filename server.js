`use srtict`;

const express =require('express');

const server =express();

const PORT = process.env.PORT ||3000;

//http://localhost:3000/test

server.use(express.static('./public'));
server.get('/test',(request,response)=>{

response.send('you are great Esraa');

});

server.get('/data' ,(request,response)=>{
let family =[
    {name:"esraa"},
    {names:"nebal"}
];
response.json(family);


});


server.listen(PORT ,() =>{


    console.log('listening on port', PORT);
    
    });
    