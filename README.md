# Projeto 19 - DrivenPass-back

### Olá, bem-vindo ao projeto DrivenPass, um projeto que consiste numa API responsável pelo gerenciamento de informações sensíveis de seus usuários.

---

## Índice:

- Rotas de usuário:
    - Cadastro (POST /signup)

---

## Rotas de usuário:

- ### Cadastro (POST /signup):
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