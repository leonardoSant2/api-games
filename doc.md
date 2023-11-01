# API de Games
Esta API é utilizada para ser feito o gerenciamento do estoque de Games disponíveis em uma loja.
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
### POST /auth
Esse endpoint é responsável por fazer o processo de login.
#### Parâmetros
email: E-mail do usuário cadastrado no sistema.
passwd: Senha do usuário cadastrada no sistem.

Exemplo:
```
{
    "email": "leonardo201220@gmail.com",
    "passwd": "leo123"
}
```
#### Respostas
##### OK! 200
Requisição feita com sucesso. O servidor retorna com o token JWT gerado necessário para acessar endpoints protegidos na API.
Exemplo de resposta:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJsZW9uYXJkbzIwMTIyMEBnbWFpbC5jb20iLCJpYXQiOjE2OTg4NjI0MDMsImV4cCI6MTY5ODg2NjAwM30.G9Fz2yfjRCdkHUxIZ37tmsRdcR3VL5LayIWMI_FUfpw"
}
```
##### Falha na autenticação! 401
Significa que aconteceu alguma falha no processo de autenticação da requisição. Motivos: Senha ou e-mail incorretos.
Exemplo de resposta:
```
{
    "erro": "Credenciais inválidas!"
}
```
