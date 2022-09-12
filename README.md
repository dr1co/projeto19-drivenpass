# Projeto 19 - DrivenPass-back

### Olá, bem-vindo ao projeto DrivenPass, um projeto que consiste numa API responsável pelo gerenciamento de informações sensíveis de seus usuários.

---

## Índice:

- Rotas de usuário:
    - Cadastro (POST "/signup")
    - Login (POST "/signin")
- Rotas de credenciais ("/credentials"):
    - Criação (POST)
    - Visualização (GET)
    - Deleção (DELETE "./:id")
- Rotas de Notas ("/notes"):
    - Criação (POST)

---

## Rotas de usuário:

- ### Cadastro (POST "/signup"):
    Como o nome sugere, essa rota é responsável pelo cadastro de novos usuários à plataforma. Para utilizá-la, basta enviar um corpo no formato:
```json
{
    "email": string,
    "password": string
}
```
```js
const regras = [
    1: o campo email deve ser um email válido, e não uma string qualquer,
    2: após informar sua senha, guarde-a muito bem pois não há maneira de descriptografá-la caso precise consultá-la novamente,
    3: o cadastro só pode ser realizado uma única vez com o email fornecido, não é possível realizar dois cadastros utilizando o mesmo email,
    4: mensagem de sucesso => 201: "User registered successfully"
];
```

- ### Login (POST "/signin"):
    Essa rota é responsável pelo login de usuários já cadastrados à plataforma, como o nome sugere. Para utilizá-la, basta enviar o mesmo corpo da rota de cadastro, no formato:
```json
{
    "email": string,
    "password": string
}
```
```js
const regras = [
    1: o campo email deve ser um email válido e cadastrado, e não uma string qualquer,
    2: a senha deve ser idêntica à cadastrada para efetuar o login
    3: o token enviado terá validade de uma semana, após esse período é necessário realizar login novamente para obter um novo token
    4: mensagem de sucesso => 200: { token: string }
];
```

---
## Rotas de credenciais ("/credentials"):

- ### Criação (POST):
    Essa rota é responsável por criar novas credenciais de um usuário. Para utilizá-la, é necessário enviar um *Bearer token* **válido** via cabeçalho (headers) tipo *Authorization*, e um corpo no seguinte formato:
```json
{
    "title": string,
    "url": string,
    "username": string,
    "password": string
}
```
```js
const regras = [
    1: o campo url deve ser um link válido, e não uma string qualquer,
    2: um usuário não pode cadastrar duas credenciais com o mesmo título,
    3: mensagem de sucesso => 201: "Credentials created successfully"
];
```

- ### Visualização (GET):
    Essa rota é responsável por catalogar todas as credenciais criadas por um usuário. Para utilizá-la, é necessário enviar apenas um *Bearer token* **válido** via cabeçalho (headers) tipo *Authorization*.
```js
const regras = [
    1: mensagem de sucesso => 200: credentials = [
        {
            "title": string,
            "url": string,
            "username": string,
            "password": string (descriptografado)
        }, ...
    ]
];
```

- ### Deleção (DELETE "./:id"):
    Essa rota é responsável por deletar uma das credenciais do usuário. Para utilizá-la, é necessário enviar apenas um *Bearer token* **válido** via cabeçalho (headers) tipo *Authorization*, além da id das credenciais via parâmetros de rota.
```js
const regras = [
    1: o usuário não pode deletar credenciais que não pertencem a ele,
    2: mensagem de sucesso => 203: "Credentials deleted successfully"
];
```
---

## Rotas de Notas ("/credentials")

- ### Criação (POST):
    Essa rota é responsável por criar notas de um usuário. Para utilizá-la, é necessário enviar um *Bearer token* **válido** via cabeçalho (headers) tipo *Authorization*, e um corpo no seguinte formato:
```json
{
    "title": string,
    "note": string
}
```
```js
const regras = [
    1: o título não pode passar de 50 caracteres, e a nota não pode passar de 1000 caracteres,
    2: um usuário não pode cadastrar duas notas com o mesmo título,
    3: mensagem de sucesso => 201: "Note created successfully"
];