# Clean Architecture Node.js com Typescript, Node.JS e Nest.JS

Este repositório contém um projeto Node.js desenvolvido com o framework Nest.js utilizando TypeScript e seguindo os princípios da Clean Architecture. O objetivo deste projeto é demonstrar a implementação de uma arquitetura limpa, separando as responsabilidades em camadas e aplicando injeção de dependências para facilitar a manutenção e a escalabilidade do código.

## Tecnologias Utilizadas
- Node.js
- Nest.js
- TypeScript

## Conceitos Demonstrados
###  Clean Architecture
A Clean Architecture é um estilo de arquitetura de software que promove a separação de preocupações em camadas, com uma clara definição de dependências, tornando o código mais modular e testável. Neste projeto, as camadas são organizadas da seguinte forma:

### Presentation: 
Camada responsável pela interação com o cliente, incluindo controladores, roteamento e DTOs (Data Transfer Objects).

### Application: 
Camada que contém os casos de uso da aplicação, onde são implementadas as regras de negócio.

### Domain: 
Camada que define os modelos de domínio e as interfaces dos repositórios.

### Infrastructure: 
Camada que implementa os detalhes técnicos, como acesso a banco de dados e integrações externas.

### Injeção de Dependências

A injeção de dependências é um padrão de design que permite desacoplar componentes e facilitar a substituição de implementações. No Nest.js, a injeção de dependências é suportada nativamente, o que torna mais fácil a configuração e a gestão das dependências entre os diferentes módulos e componentes da aplicação.

### Módulos
O Nest.js organiza a aplicação em módulos, que são conjuntos de componentes relacionados. Cada módulo pode ter seus próprios controladores, provedores de serviços e outros artefatos. Isso ajuda a manter o código modular e coeso, facilitando a compreensão e a manutenção.

## Executando o Projeto
Para executar este projeto localmente, siga as instruções abaixo:

1. Clone este repositório para o seu ambiente local.
2. Certifique-se de ter o Node.js e o npm instalados em sua máquina.
3. Execute npm install para instalar as dependências do projeto.
4. Utilize os scripts npm fornecidos para iniciar a aplicação:  
```npm start:``` Inicia a aplicação em modo de produção.  
```npm run start:dev:``` Inicia a aplicação em modo de desenvolvimento com suporte a hot-reload.  
```npm run test:.``` Executa os testes automatizados  
```npm run build:``` Compila o código TypeScript em JavaScript para produção.  
Acesse a aplicação em ```http://localhost:3000``` (ou a porta configurada).

# Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue para relatar problemas, sugerir melhorias ou enviar pull requests com novos recursos ou correções de bugs.

# Licença
Este projeto está licenciado sob a Licença MIT. Sinta-se à vontade para usar, modificar e distribuir o código conforme necessário.
