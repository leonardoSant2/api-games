//LEMBRAR DO DESAFIO DE NO FINAL DO PROJETO CRIAR UM BANCO DE DADOS REAL PARA SUBSTITUIR O JSON
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var DB = {

    games: [
        {
             id: 23,
             title: "Call of Duty MW",
             year: 2019,
             price: 60
        },
        {
            id: 65,
            title: "Sea of Thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Mine Craft",
            year: 2012,
            price: 20
        }
    ]

}

app.get("/games", (req, res) => {
    res.statusCode = 200;
    res.json(DB.games);
    
})

app.get("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = req.params.id
        var game = DB.games.find(g => g.id == id);

        if (game != undefined) {
            res.statusCode = 200;
            res.json(game);
        } else {
            res.sendStatus(404)
        }
    }
})

app.post("/game", (req, res) => {

    var {title, year, price} = req.body;

    DB.games.push({
        id: 123,
        title,
        year,
        price
    })
    
    res.sendStatus(200)
})



app.listen(45678, () => {
    console.log("API RODANDO!")
})