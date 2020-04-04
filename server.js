`use srtict`;

const express =require('express');

const server =express();




const PORT = process.env.PORT ||3000;

//http://localhost:3000/test

server.use(express.static('./public/starter-code'));

server.get('/test',(request,response)=>{

response.send('youhhhhhhhhhhhhh are great Esraa');

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
    