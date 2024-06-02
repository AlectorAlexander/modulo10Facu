# Gerenciamento de Tarefas

## Descrição do Projeto

Este projeto é uma aplicação de gerenciamento de tarefas construída com React e Material UI. A aplicação permite criar, editar, listar e excluir tarefas. Durante o desenvolvimento, foram feitas várias melhorias e adições de funcionalidades para aprimorar a experiência do usuário e garantir um código mais limpo e eficiente. As principais modificações realizadas incluem:

1. **Adicionar Validações de Formulário**: Garantir que os campos obrigatórios sejam preenchidos corretamente.
2. **Adicionar Tooltips**: Fornecer informações adicionais ao passar o mouse sobre os botões.
3. **Adicionar Estado de Loading**: Indicar que uma ação está em andamento.
4. **Adicionar Funcionalidade de Seleção de Tarefas**: Permitir a seleção de uma ou mais tarefas para ações em massa.
5. **Adicionar Botão de Exclusão de Tarefas Selecionadas**: Aparecer somente quando uma ou mais tarefas estão selecionadas.

## Funcionalidades

- **Criar Tarefa**: Adiciona uma nova tarefa à lista.
- **Editar Tarefa**: Edita as informações de uma tarefa existente.
- **Excluir Tarefa**: Remove uma tarefa específica da lista.
- **Excluir Tarefas Selecionadas**: Remove todas as tarefas selecionadas.
- **Selecionar Todas as Tarefas**: Seleciona ou desmarca todas as tarefas da lista.
- **Validações de Formulário**: Garante que os campos obrigatórios sejam preenchidos antes de salvar.

## Tecnologias Utilizadas

- React
- Material UI
- JavaScript (ES6+)

## Como Iniciar o Projeto

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Instalação

1. **Clone o repositório:**

```sh
git clone https://github.com/seu-usuario/gerenciamento-de-tarefas.git
```

2. **Navegue até o diretório do projeto:**

```sh
cd gerenciamento-de-tarefas
```

3. **Instale as dependências:**

```sh
npm install
```

### Executando o Projeto

4. **Inicie a aplicação:**

```sh
npm start
```

A aplicação será iniciada e você poderá acessá-la em `http://localhost:3000`.

## Estrutura do Projeto

- **src/components/ListarTarefa.js**: Componente principal que lista, edita e exclui tarefas.
- **src/components/CriarTarefa.js**: Componente para criar uma nova tarefa.
- **src/components/EditarTarefa.js**: Componente para editar uma tarefa existente.

### Modificações Realizadas

#### Componente ListarTarefa

- Adicionado botão "Deletar Selecionados" que aparece quando uma ou mais tarefas estão selecionadas.
- Adicionado checkbox no cabeçalho da tabela para selecionar/desmarcar todas as tarefas.
- Adicionado estado de loading para simular o tempo de carregamento dos dados.

#### Componente CriarTarefa

- Adicionadas validações de formulário para garantir que os campos obrigatórios sejam preenchidos.
- Adicionado estado de loading para simular o tempo de processamento ao salvar as novas tarefas.
- Adicionado tooltip ao redor dos botões para fornecer descrições adicionais.
- Alterado o componente de data para `TextField` para uma melhor integração com o MUI.

#### Componente EditarTarefa

- Adicionadas validações de formulário para garantir que os campos obrigatórios sejam preenchidos.
- Adicionado estado de loading para simular o tempo de processamento ao salvar as alterações.
- Adicionado tooltip ao redor dos botões para fornecer descrições adicionais.
- Alterado o componente de data para `TextField` para uma melhor integração com o MUI.
