const express = require('express');
const app = express();
const db = require('./db/connection'); // banco de dados oferecidos

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`);
})


//db connection 

// sempre que for começar a aplicação ou algo do tipo vai ter que rolar uma autenticação. 
db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso!")
        //criação do app.db 
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar!")
    })

//routes 
app.get('/', (req, res) => {
    res.send("Está funcionando!");
})