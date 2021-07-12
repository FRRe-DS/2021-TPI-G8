const express = require('express'); //Traigo la libreria de express
//const bodyParser = require('body-parser'); //Luego de instalarlo, lo definimos
const cors = require("cors");
//const router = express.Router(); //El router nos permite separar nuestras peticiones

const app = express(); //Inicializo express en una variable

var corsOptions ={
    origin: "localhost:3000"
}

app.use(cors(corsOptions));

//Le digo que usar a la variable app
app.use(express.json()); //Recibe json
app.use(express.urlencoded({extended:true})); //Recibe "Form URL encoded"
//app.use(router); //Sirve para usar los diferentes métodos (GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD)


const db = require("./app/models");
const { sequelize, Sequelize } = require('./app/models');
db.sequelize.sync();

app.get("/",(req,res) => {
    res.json({ message: "Hola mundo"})
});

require("./app/routes/routes.js")(app);

const PORT =  process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});