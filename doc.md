# API de Games
Esta api é utilizada para... 
## Endpoints
### GET /games
Esse endpoint é responsável por retornar a listagem de todos os games cadastrados no banco de dados.
#### Parâmetros
Nenhum
#### Respostas
##### OK! 200
Requisição feita com sucesso. Você vai receber a listagem de todos os games.
Exemplo de resposta:
```
{
    "games": [
        {
            "id": 7,
            "title": "WarCraft",
            "year": 2022,
            "price": 100,
            "createdAt": "2023-08-15T14:45:43.000Z",
            "updatedAt": "2023-08-15T14:45:43.000Z"
        },
        {
            "id": 8,
            "title": "Dino Crisis",
            "year": 2013,
            "price": 150,
            "createdAt": "2023-08-31T17:21:11.000Z",
            "updatedAt": "2023-08-31T17:22:04.000Z"
        }
    ]
}
```
##### Falha na autenticação! 401
Significa que aconteceu alguma falha no processo de autenticação da requisição. Motivos: Token inválido, Token expirado.
Exemplo de resposta:
```
{
    "err": "Token inválido!"
}
```
