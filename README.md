# Car Shop

O Car Shop é um projeto de uma API de concessionária de carros onde você pode criar, ler, atualizar e deletar veículos






## Stacks

- TypeScript

- Node

- Express

- MongoDB

- Mocha

- Docker

- POO




## Como iniciar o servidor

Caso queira testar o servidor manualmente, é necessário possuir o MongoDB rodando na sua máquina


No meu caso eu utilizei o Docker (com a versão 20.10.14) para rodar um container através do comando:

```
docker run --name mongo -p 27017:27017 -d mongo
```

Com o mongo rodando, basta iniciar o servidor:

```
npm start
```


Para testar se tá tudo certo, faça uma requisição para a url:

```
http://localhost:3001/cars
```


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm test
```

