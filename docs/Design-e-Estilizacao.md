# Aula 6: Design e Estilização - Criando uma Identidade Visual

## O Que Foi Feito?

Foquei em transformar aparência do projeto, elevando-o de um protótipo funcional para um produto com uma interface polida, moderna e coesa. O design geral foi completamente refeito para proporcionar uma experiência de usuário (UX) mais agradável e profissional.

As principais mudanças visuais incluíram:

- Implementação de uma paleta de cores e um sistema de espaçamento consistentes.
- Redesenho dos itens de tarefa para um formato de "card" com sombras, criando uma sensação de profundidade.
- Substituição de componentes nativos básicos (como o `Button`) por elementos customizados e mais elegantes.
- Refinamento da tipografia e do layout geral da tela.

## Como Foi Feito?

A estratégia de estilização foi baseada na criação de um mini "Design System" para garantir consistência e facilitar a manutenção.

1. **Criação do Tema (`theme.ts`):** Criei um arquivo central em `src/presentation/styles/theme.ts`. Este arquivo exporta um objeto `theme` que contém nossas "decisões de design" (design tokens), como a paleta de `colors`, unidades de `spacing`, `borderRadii`, etc. Ele se tornou a "única fonte da verdade" para o estilo do app.

2. **Aplicação do Tema:** Todos os componentes de `Presentation` foram refatorados para importar e consumir as constantes do objeto `theme`. Em vez de valores "mágicos" como `padding: 10` ou `color: '#007bff'`, usamos `padding: theme.spacing.m` e `color: theme.colors.primary`.

3. **Estilo de Card com Sombra:** No `TodoItem.tsx`, apliquei estilos para criar a aparência de um card flutuante. Isso incluiu `backgroundColor`, `borderRadius` e a combinação de `shadow...` (para iOS) e `elevation` (para Android) para um efeito de sombra multiplataforma.

4. **Botão Customizado com Ícone:** No `AddTodoForm.tsx`, o `<Button>` padrão foi substituído por um `<TouchableOpacity>` contendo um ícone da biblioteca `Feather`. Isso deu controle total sobre a aparência do botão, resultando em um design circular e mais integrado.

## Por Que Foi Feito?

- **Consistência e Manutenibilidade:** Centralizar as definições de estilo no `theme.ts` é uma prática fundamental para a escalabilidade de projetos de front-end. Se no futuro decidirmos mudar a cor principal do aplicativo, precisaremos alterar apenas uma linha de código, e a mudança será refletida em toda a aplicação consistentemente.

- **Melhora da Experiência do Usuário:** Um design bem executado não é apenas "bonito", ele melhora a usabilidade. Uma paleta de cores clara, hierarquia visual e espaçamento adequado guiam o olho do usuário, reduzem a carga cognitiva e tornam o uso do aplicativo mais intuitivo e agradável.

- **Profissionalismo e Percepção de Qualidade:** A atenção aos detalhes visuais, como sombras e ícones customizados, eleva drasticamente a percepção de qualidade do produto final. Transmite ao usuário que o aplicativo é robusto e bem construído.
