## Desafio: Aplicação de Personagens Favoritos de Rick & Morty
  Olá, obrigado pelo interesse em fazer parte da nossa equipe.
  O objetivo deste teste é verificar suas habilidades de codificação, arquitetura e padronização.

## Tecnologias
- **Obrigatórias:** React.js, Next.js, TypeScript, RxJS, Hooks
- **Opcionais:** Tailwind CSS, Chakra UI, Redux, Zustand, React Query


### Layout
- Seguir o protótipo disponível no [Figma](https://www.figma.com/design/c8xS5wew3KBVVY62BS2imT/-internal--%F0%9F%94%93-Teste-t%C3%A9cnico).

 ### API
 - Na aplicação, será utilizada a API pública [rickandmortyapi](https://rickandmortyapi.com/documentation/#introduction) para o consumo das requisições dos personagens, deve ser utilizado a abordagem REST.

## Instruções
- Procure trabalhar usando estratégias de branch: Por exemplo: Utilize a branch main ou master como principal e branchs secundárias para desenvolvimentos e teste
- Procure trabalhar com mensagens de commits de forma clara e descritiva
- Faça o deploy da aplicação. A aplicação só será avaliada se estiver rodando, se necessário crie um passo a passo para isto. (Disponibilize o link no readme)
- Faça um clone do seu repositório em git pessoal para iniciar o desenvolvimento. (Disponibilize o link para o entrevistador)

### Funcionalidades
- Buscar um personagem pelo nome.
- Exibir informações mínimas (nome, gênero e foto) sobre o(s) personagem(ns).
- Permitir ao usuário salvar um personagem na lista de favoritos.
- O contador no topo da página deve ser atualizado em tempo real com base nos favoritos.
- Visualizar a lista de personagens favoritos.
- Remover personagens da lista de favoritos.


### Requisitos
- Utilize operadores do RxJS para otimizar a busca por nome, assim evitando chamadas desnecessárias à API.
- Inclua uma fonte personalizada do Google Fonts.
- Otimize o uso de componentes (evite muita repetição).
- Assegure que o layout seja responsivo.
- Crie testes unitários


## História do Usuário
- **Buscar Personagem:** Ao pesquisar um personagem, quero ver seu nome, gênero e foto.
- **Salvar Favorito:** Ao pesquisar, quero poder adicionar um personagem aos meus favoritos.
- **Notificação de Não Existência:** Ao buscar por um personagem que não existe, desejo ser informado sobre isso.

## Instruções para Desenvolvimento

### Inicialização do Projeto
```bash
npx create-next-app@latest my-rick-and-morty-app --typescript
cd my-rick-and-morty-app
npm install rxjs redux react-redux
