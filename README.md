# encurtador-url

- Projeto desenvolvido como atividade de Pós Graduação da Faculdade Unyleya
- Curso: Desenvolvimento Mobile
= Turma: Desenvolvimento Back-End para aplicações Mobile
- Tutor: Ramon Lummertz
- Aluno: Jonathas Walbert

- API desenvolvido com node.js persistindo os dados no banco de dados MongoDB.

- Principais Atividades:

POST - http://localhost:3000/api/url/shorten
{
  "targetURL": "URL"
}

-----


GET - http://localhost:3000/[shortID]
- Irá retornar o endereço completo associado ao encurtamento
