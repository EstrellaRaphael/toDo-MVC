# Refinamento - Adicionando Filtros de Tarefas

## O Que Foi Feito?

Evolui o projeto de um simples To-Do para uma ferramenta mais completa, implementando um sistema de filtros. O usuário agora pode alternar entre três visualizações:

1. **Todos:** Exibe todas as tarefas, concluídas ou não.

2. **Ativos:** Exibe apenas as tarefas pendentes.

3. **Completos:** Exibe apenas as tarefas que já foram concluídas.

Para isso, modifiquei a camada de `Presentation`, adicionando a lógica de filtro ao nosso controller e criando um novo componente de UI para os botões de seleção.

## Como Foi Feito?

A implementação foi dividida em três partes principais, seguindo nossa arquitetura:

1. **No Controller (`useTodosController.ts`):**
    - Adicionei um novo estado para gerenciar qual filtro está ativo: `const [filter, setFilter] = useState<FilterType>('all')`.
    - Criei uma **lista de tarefas derivada e memoizada** com o hook `useMemo`. Chamada `filteredTodos`, essa lista é recalculada de forma otimizada apenas quando a lista principal de `todos` ou o estado de `filter` são alterados. Isso evita re-filtragens desnecessárias a cada renderização.
    - Exportei o estado `filter` e a função `changeFilter` no retorno do hook para que a View possa usá-los.

2. **No novo Componente de View (`FilterButtons.tsx`):**
    - Criei um componente de apresentação "burro" (dumb component) dedicado exclusivamente a renderizar os botões de filtro.
    - Ele recebe o filtro atual (`currentFilter`) e uma função de callback (`onChangeFilter`) via props.
    - Ele aplica um estilo condicional para destacar visualmente qual filtro está selecionado, oferecendo um feedback claro ao usuário.

3. **Na Tela Principal (`HomeScreen.tsx`):**
    - Integrei o novo componente `FilterButtons`, passando a ele o estado e a ação do nosso controller.
    - Crucialmente, modifiquei o componente `TodoList` para que ele receba a lista já filtrada (`filteredTodos`) em vez da lista completa de `todos`. Isso demonstra o poder dos nossos componentes desacoplados: o `TodoList` não precisou de nenhuma alteração para suportar a nova funcionalidade.

## Por Que Foi Feito?

- **Melhoria da Experiência do Usuário (UX):** A capacidade de filtrar é fundamental para a usabilidade de qualquer aplicação baseada em listas. Conforme o número de tarefas cresce, o filtro se torna essencial para que o usuário possa se concentrar no que importa.

- **Otimização de Performance:** O uso de `useMemo` para calcular a lista filtrada é uma prática recomendada de performance no React. Garante que cálculos potencialmente pesados (como filtrar um array de centenas de itens) não sejam executados em cada renderização, mantendo a UI fluida e responsiva.

- **Consistência Arquitetural:** A implementação reforçou os princípios da nossa arquitetura. A lógica de estado permaneceu no `Controller`, a lógica de exibição ficou em um `Componente` de View reutilizável, e a `Screen` principal atuou como a orquestradora, mantendo cada parte do código com uma responsabilidade única e bem definida.
