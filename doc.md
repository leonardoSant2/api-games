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
### GET /game/:id
Esse endpoint é responsável por retornar o Game de acordo com o id fornecido
#### Parâmetros
ID: ID do game cadastrado no banco de dados.   
Exemplo:
```
localhost:45678/game/10
```
#### Respostas
##### OK! 200
Requisição feita com sucesso. O servidor retorna com o game de acordo com o ID fornecido.  
Exemplo de resposta:
```
{
    "id": 7,
    "title": "WarCraft",
    "year": 2022,
    "price": 100,
    "createdAt": "2023-08-15T14:45:43.000Z",
    "updatedAt": "2023-08-15T14:45:43.000Z"
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
##### Bad request 400
O parâmetro fornecido não é valido. Motivos: Fornecer uma letra ao invés de um número para o ID.  
Exemplo de resposta:
```
{
    "Erro": "Parâmetro incorreto!"
}
```
##### Não encontrado 404
O ID do Game não foi encontrado na base de dados.  
Exemplo de resposta:
```
{
    "Erro": "Game não encontrado na base de dados"
}
```
### POST /game
Esse endpoint é responsável cadastrar novos games na base de dados.
#### Parâmetros
Título: Nome do Game a ser cadastrado na base de dados.  
Ano: Ano de lançamento do Game.  
Preço: Valor a ser cobrado pelo Game.  
Exemplo:
```
{
    "title": "Super Mario",
    "year": "2010",
    "price": "100"
}
```
#### Respostas
##### OK! 200
Requisição feita com sucesso. O Game foi cadastrado com sucesso.
##### Falha na autenticação! 401
Significa que aconteceu alguma falha no processo de autenticação da requisição. Motivos: Senha ou e-mail incorretos.  
Exemplo de resposta:
```
{
    "erro": "Credenciais inválidas!"
}
```
### DELTE /game/:id
Esse endpoint é responsável por excluir um Game de acordo com ID fornecido.
#### Parâmetros
ID: ID do game cadastrado no banco de dados.  
Exemplo:
```
localhost:45678/game/10
```
#### Respostas
##### OK! 200
Requisição feita com sucesso. O Game é excluido da base de dados.
##### Falha na autenticação! 401
Significa que aconteceu alguma falha no processo de autenticação da requisição. Motivos: Senha ou e-mail incorretos.  
Exemplo de resposta:
```
{
    "erro": "Credenciais inválidas!"
}
```
##### Requisição incorreta 400
O parâmetro fornecido não é valido. Motivos: Fornecer uma letra ao invés de um número para o ID.  
Exemplo de resposta:
```
{
    "Erro": "Parâmetro incorreto!"
}
```
##### Não encontrado 404
O ID do Game não foi encontrado na base de dados.  
Exemplo de resposta:
```
{
    "Erro": "Game não encontrado na base de dados"
}
```
### PUT /game/:id
Esse endpoint é responsável por atualizar os dados do Game de acordo com os dados fornecidos.
#### Parâmetros
ID: ID do game cadastrado no banco de dados que é obrigaório para que seja feita a requisição.  
Título: Nome do Game a ser atualizado na base de dados caso seja fornecido.  
Ano: Ano de lançamento do Game a ser atualizado caso seja fornecido.  
Preço: Valor a ser cobrado pelo Game que será atualizado caso seja fornecido.  
Exemplo:
```
localhost:45678/game/10
{
    "title": "Super Mario",
    "year": "2010",
    "price": "100"
}
```

#### Respostas
##### OK! 200
Requisição feita com sucesso. Os dados do Game são atualizados.
##### Falha na autenticação! 401
Significa que aconteceu alguma falha no processo de autenticação da requisição. Motivos: Senha ou e-mail incorretos.  
Exemplo de resposta:
```
{
    "erro": "Credenciais inválidas!"
}
```
##### Requisição incorreta 400
O parâmetro fornecido não é valido. Motivos: Fornecer uma letra ao invés de um número para o ID.  
Exemplo de resposta:
```
{
    "Erro": "Parâmetro incorreto!"
}
```
##### Não encontrado 404
O ID do Game não foi encontrado na base de dados.  
Exemplo de resposta:
```
{
    "Erro": "Game não encontrado na base de dados"
}
```
### POST /user
Esse endpoint é responsável por fazer o cadastro de um usuário na base de dados.
#### Parâmetros
Name: Nome do usuário a ser cadastrado.  
email: E-mail do usuário a ser cadastrado no sistema.  
passwd: Senha do usuário a ser cadastrada no sistema.  
Exemplo:
```
{
    "name": "Claudio",
    "email": "claudio@gmail.com",
    "passwd": "claudio123"
}
```
#### Respostas
##### OK! 200
Requisição feita com sucesso. O usuário foi cadastrado no sistema.  
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
Requisição feita com sucesso. O servidor retorna a resposta com o Token JWT.  
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
