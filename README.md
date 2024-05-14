# Atividade ponderada 4 - Criação de um Service em Javascript para o Backend

### Controllers
**UsersController**
- **index** => Função para buscar todos os usuários no banco de dados.
- **create** => Função para receber e validar os dados, apos validados ele cadastra o novo registro na tabela usuários.

### Models
**User**
- Atributos:
  - name
  - email
  - cpf
  - password

### Helpers
**FormatInputs** => Valida os campos das inputs recebidas pelo Controller.

### Routes
**'/' => Rota 'GET'** inicial da aplicação simulando uma pagina de cadastro de usuário.

**'/register' => Rota** 'POST' para receber os dados do formulário de cadastro e validar no Helper os campos.

**'/users' => Rota 'GET'** para visualizar os usuários cadastrados.

___________________________________________________________

Mateus Beppler Pereira

Data: 14/05/2024
