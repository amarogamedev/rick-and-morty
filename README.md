# Aplicação web de personagens favoritos de Rick & Morty
Disponível em https://amarogamedev.github.io/rick-and-morty/

## Informações
- Tecnologias utilizadas: React.js, Next.js, TypeScript, RxJS, Hooks, Tailwind CSS, React Query, GitHub Pages
- Utilizada a API pública [rickandmortyapi](https://rickandmortyapi.com/documentation/#introduction)

## Funcionalidades
- Buscar um personagem pelo nome.
- Exibir informações (nome, gênero e foto) sobre o(s) personagem(ns).
- Salvar um personagem na lista de favoritos.
- O contador no topo da página atualiza em tempo real com base nos favoritos.
- Visualizar a lista de personagens favoritos.
- Remover personagens da lista de favoritos.

## Principais aprendizados
Como eu já tinha experiência com o Chakra, utilizei o Tailwind nesse projeto para aprender mais sobre ele, e admito que gostei! O Chakra na minha opinião é um pouco mais intuitivo e legível, mas o Tailwind é muito eficiente para codar de forma rápida.
Aprendi sobre o Next.js, que é um framework que nunca tinha utilizado antes, então talvez não tenha aplicado as melhores práticas mas isso decorre do fato de que foi minha primeira experiência.
A princípio eu tinha feito a separação das páginas home/favoritos utilizando o react-router-dom, mas depois na hora de buildar aprendi que no Next.js faz uma pré-renderização do projeto, o que acabou resultando em diversos problemas com a estrutura que eu havia criado, acabei tendo que refatorar algumas partes do código pra poder buildar sem gerar nenhum erro.
Nunca tinha utilizado o Firebase também, passei um tempinho estudando sobre e tentei realizar o deploy por lá mas não estava funcionando, então pra não perder muito tempo decidi seguir com o que eu já era familiar que é o GitHub Pages.
