const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require('./database/database');
const cors = require("cors");
const jwt = require("jsonwebtoken");

const JWTsecret = "ksksksksksksksksksksksks"

app.use(cors());

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Model
const Game = require('./games/Game');
const User = require('./users/User');

//Database
connection
      .authenticate()
      .then(() =>{
        console.log("Conexão feita com sucesso!");
      }).catch((error) => {
        console.log(error);
      });

//Routes
app.get("/games", (req, res) => {

    Game.findAll().then(games => {
        res.statusCode = 200;
        res.json(games);
    });
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
    
    res.sendStatus(200);
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

app.put("/game/:id", (req, res) => {

    var id = req.params.id;

    if (isNaN(id)) {
        res.sendStatus(400);
    } else if (id <= 0) {
        res.sendStatus(404)
    } else  {
        Game.findByPk(id).then(game => {
            if (game != undefined) {
                var {title, year, price} = req.body;

                if (title != undefined) {
                    Game.update({
                        title: title}, {
                        where: {
                            id: id
                        }
                    })
                } 
                if (year != undefined) {
                    Game.update({
                        year: year}, {
                        where: {
                            id: id
                        }
                    })
                }
                if (price != undefined) {
                    Game.update({
                        price: price}, {
                        where: {
                            id: id
                        }
                    })
                }
                res.sendStatus(200);
                
            } else {
                res.sendStatus(404)
            }
        });
    }
})

app.post("/user", (req, res) => {
    var {name, email, passwd} = req.body;

    User.create({
        name,
        email,
        passwd
    })

    res.sendStatus(200);
})

app.post("/auth",(req, res) =>{

    var {email, passwd} = req.body;

    if(email != undefined){
        
        User.findOne({where:{email:email}}).then(user => {
            
            if (user != undefined) {
                if(user.passwd == passwd){
                    jwt.sign({id: user.id, email: user.emai }, JWTsecret,{expiresIn:'48h'}, (err, token) => {
                        if (err) {
                            res.status(400);
                            res.json({err: "Falha interna"})
                        } else {
                            res.status(200); 
                            res.json({token: token })
                        }
                    } )
                }else{
                    res.status(401);
                    res.json({erro: "Credenciais inválidas!"})
                }
            } else {
                res.status(404); 
                res.json({erro: "O e-mail não existe na base de dados!"})
            }
        });
    } else{
        res.status(400);
        res.json({erro: "O e-mail enviado é inválido!"})
    }
})

app.listen(45678, () => {
    console.log("API RODANDO!")
})