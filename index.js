const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/database');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



//Model
const Game = require('./games/Game');

//Database
connection
      .authenticate()
      .then(() =>{
        console.log("Conexão feita com sucesso!");
      }).catch((error) => {
        console.log(error);
      });



app.get("/games", (req, res) => {
    res.statusCode = 200;
    res.json(Game.games);
    
})


app.get("/game/:id", (req, res) => {

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else if (req.params.id <= 0) {
        res.sendStatus(404);    
    } else {
        var id = req.params.id
        Game.findByPk(id).then(game => {
            if (game != undefined) {
                res.statusCode = 200;
                res.json(game);
        } else {
            res.sendStatus(404);
        } 
    });
}
});

app.post("/game", (req, res) => {

    var {title, year, price} = req.body;

    Game.create({
        title,
        year,
        price
    })
    
    res.sendStatus(200)
})

app.delete("/game/:id", (req, res) =>{

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } if (req.params.id <= 0) {
        res.sendStatus(404);
    } else {
        var id = req.params.id;        
        Game.findByPk(id).then(game => {
            if (game != undefined) {
                Game.destroy ({
                    where: { 
                        id : id
                    }
                })
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
        });
    }
});

//Editar
app.put("/game/:id", (req, res) => {

    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = req.params.id
        var game = DB.games.find(g => g.id == id);

        if (game != undefined) {
            var {title, year, price} = req.body;

                if (title != undefined) {
                    game.title = title;
                } 
                if (year != undefined) {
                    game.year = year;
                }
                if (price != undefined) {
                    game.price = price
                }
                res.sendStatus(200);
        } else {
            res.sendStatus(404)
        }
    }
})

app.listen(45678, () => {
    console.log("API RODANDO!")
})