const jwt = require('jsonwebtoken');
const JWTsecret = "ksksksksksksksksksksksks"

const { JsonWebTokenError } = require("jsonwebtoken");

function auth(req, res, next) {

    const authToken = req.headers['authorization']; 

    if (authToken != undefined) {
        const bearer = authToken.split(' ');
        var token = bearer[1];

        jwt.verify(token, JWTsecret, (err, data) => {
            if (err) {
                res.status(401);
                res.json({err: "Token inválido!"});
            } else {
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};
                console.log(data);
                next();
            }
        } )
 
    } else {
        res.status(401);
        res.json({error: "Token inválido"})
    }
}

module.exports = auth;