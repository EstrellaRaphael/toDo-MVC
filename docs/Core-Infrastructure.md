# Camada de Infraestrutura - Implementando o Repositório

## O Que Foi Feito?

Implementei o "contrato" definido pela interface `TodoRepository` da camada de domínio. Em outras palavras, ensinei ao projeto como, de fato, salvar, ler, atualizar e deletar tarefas usando uma tecnologia específica: o `AsyncStorage`.

1. **Criação da Classe `AsyncStorageTodoRepository`:** Criei uma classe em `/infra/repositories/` que implementa a interface `TodoRepository`.

2. **Implementação dos Métodos:** Escrevi o código para cada um dos quatro métodos (`getAll`, `add`, `update`, `delete`) utilizando as funções do `AsyncStorage`.

## Como Foi Feito?

- Usei a palavra-chave `implements TodoRepository` para garantir que nossa classe segue o contrato, o que nos dá segurança e consistência.
- Utilizei `JSON.stringify()` para converter nosso array de objetos `Todo` em uma string antes de salvar no AsyncStorage.
- Utilizei `JSON.parse()` para converter a string lida do AsyncStorage de volta para um array de objetos.
- Tive o cuidado de converter a propriedade `createdAt`, que é salva como string, de volta para um objeto `Date` após a leitura, garantindo a integridade do nosso tipo `Todo`.

## Por Que Foi Feito?

- **Separação de Preocupações:** A lógica de como interagir com o AsyncStorage está completamente contida nesta única classe. Se o AsyncStorage mudar sua API no futuro, ou se for encontrado um bug na forma como salvamos os dados, irei saber exatamente qual arquivo modificar.

- **Concretização da Abstração:** Esta camada é a "ponte" entre o mundo abstrato das regras de negócio e o mundo concreto da tecnologia. Sem ela, os Casos de Uso não teriam como funcionar.

- **Intercambialidade:** Se eu decidir migrar para um banco de dados SQLite, por exemplo, iria criar um `SQLiteTodoRepository.ts` que também implementa `TodoRepository`. O resto do projeto não precisaria saber que a mudança ocorreu; eu apenas "injetaria" a nova implementação em vez da antiga.
