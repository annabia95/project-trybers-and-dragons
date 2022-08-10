Este projeto contém os requisitos realizados por _[Anna Beatriz Garcia Trajano de Sá](www.linkedin.com/in/anna-beatriz-trajano-de-sá)_ enquanto estudava na [Trybe](https://www.betrybe.com/) :rocket:

# Project Trybers and Dragons

Para este projeto, desenvolvi e apliquei os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, 
mais conhecidos como jogos RPG (Role Playing Game).


## Instalação do projeto localmente:
 
Após cada um dos passos, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _annagarcia@id.uff.br_ 

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir projetos
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd projetos
  git clone git@github.com:annabia95/project-trybers-and-dragons.git
```

3. Acesse o diretório do projeto e depois utilize o comando **npm i** para instalar todas as dependências necessárias:
```javascript
  cd project-trybers-and-dragons
  npm i
```

- ✨ **Dica:** Caso queira utilizar _Docker_ para rodar os testes localmente e validar as funcionalidades, basta seguir as seguintes instruções:

  **:warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

  > Rode os serviços `node` e `db` com o comando `docker-compose up -d`.
  - Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esse serviço irá inicializar um container chamado trybers_and_dragons.
  - A partir daqui você pode rodar o container trybers_and_dragons via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybers_and_dragons bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`

  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

## Habilidades Desenvolvidas

Neste projeto, desenvolvi as seguintes habilidades:

 - Aplicar pilares da Programação Orientada a Objetos: Herança, Abstração, Encapsulamento e Polimorfismo.
 - Criar e utilizar Interface;
 - Utilizar Composição;
 - Implementar, em TypeScript, Classes, Instâncias, Atributos, Métodos e Objetos;
 - Aplicar os princípios SOLID.
 
 ## Referências
 
 [Documentação Oficial - TypeScript](https://www.typescriptlang.org/docs/)<br>
 [Princípios SOLID com Typescript](https://medium.com/@matheusbessa_44838/princ%C3%ADpios-solid-com-typescript-4f8a9d5d1ef8)<br>
 [SOLID fica FÁCIL com Essas Ilustrações - Filipe Deschamps](https://youtu.be/6SfrO3D4dHM)<br>
 [Devmedia - Abstração, Herança e Polimorfismo a base de um bom código](https://youtu.be/qiGTRJlCnlA)<br>
 [A base do programador: Orientação a objetos em C#, JavaScript, TypeScript e Dart](https://youtu.be/o5g986Wpd18)<br>
 [Conventional Commits](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)<br>

 
 ## Escopo do Projeto

## 1 - Crie a classe Race

## 2 - Crie classes que herdam de Race

## 3 - Crie a interface Energy

## 4 - Crie a classe Archetype

## 5 - Crie classes que herdam de Archetype

## 6 - Crie a interface Fighter

## 7 - Crie a classe Character

## 8 - Crie a interface SimpleFighter

## 9 - Crie a classe Monster

## 10 - Crie a classe PVP

## 11 - Criar a classe PVE

## 12 - Crie a classe Dragon

## 13 - Crie objetos no arquivo index
