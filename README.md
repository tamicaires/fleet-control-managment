# :truck: Controle de Frotas

Bem-vindo ao repositório do nosso projeto de Sistema de Controle de Frotas! Este projeto é construído usando NestJS, TypeScript, Node.js, Prisma ORM e segue os princípios da Arquitetura Limpa e os princípios de design SOLID.

## Sumário

- [Introdução](#introdução)
- [Recursos](#recursos)
- [Autenticação e Autorização](#autenticação-e-autorização)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Começando](#começando)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

## Introdução

Nosso Sistema de Controle de Frotas foi projetado para fornecer uma solução abrangente para gerenciar frotas, transportadoras e anotações de usuários de forma eficiente. Ele incorpora tecnologias modernas e princípios de design de software para garantir escalabilidade, manutenibilidade e confiabilidade.

## Recursos

- Autenticação usando tokens JWT
- Autorização baseada em cargos
- Operações de criação, recuperação, atualização e exclusão (CRUD) para transportadoras e frotas
- Gerenciamento de anotações de usuários com acesso restrito com base no criador
- Suporte à paginação para operações findMany

## Autenticação e Autorização

Implementamos autenticação baseada em tokens JWT para acesso do usuário ao sistema. Os usuários são atribuídos cargos (como admin ou user), e a autorização baseada em cargos restringe o acesso a determinadas funcionalidades. Por exemplo, apenas usuários com a função admin podem realizar operações de criação, edição e exclusão em transportadoras e frotas, enquanto usuários com a cargo user têm acesso somente leitura.

## Funcionalidades

- **Gerenciamento de Transportadoras e Frotas**: Os usuários podem realizar operações CRUD em transportadoras e frotas, incluindo criação, leitura, atualização e exclusão de registros.
- **Anotações de Usuários**: Os usuários podem criar anotações e só podem visualizar as anotações que criaram.
- **Controle de Acesso Baseado em Funções**: Usuários admin têm acesso total às funcionalidades de gerenciamento de transportadoras e frotas, enquanto usuários regulares têm acesso restrito.

## Tecnologias Utilizadas

- **NestJS**: Um framework Node.js progressivo para construir aplicativos eficientes, confiáveis e escaláveis no lado do servidor.
- **TypeScript**: Um superset tipado do JavaScript que compila para JavaScript simples.
- **Node.js**: Um ambiente de execução JavaScript construído no motor JavaScript V8 do Chrome.
- **Prisma ORM**: Um moderno toolkit de banco de dados para TypeScript e Node.js.
- **Arquitetura Limpa e Princípios SOLID**: Princípios de design para construir arquiteturas de software escaláveis e manuteníveis.

## Começando

Para começar com nosso Sistema de Gerenciamento de Frotas:

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Configure suas configurações de banco de dados e variáveis de ambiente.
4. Execute o aplicativo usando `npm start`.

## Contribuindo

Aceitamos contribuições da comunidade para melhorar e aprimorar nosso Sistema de Gerenciamento de Frotas. Para contribuir, por favor faça um fork deste repositório, faça suas alterações e envie um pull request descrevendo as alterações propostas.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

