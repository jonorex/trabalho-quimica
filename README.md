# TrabQuímica

Projeto web de apoio ao estudo de Química, desenvolvido com Next.js e React. Permite visualizar conteúdos, realizar buscas em dados de reagentes e produtos, e consultar propriedades químicas de substâncias link do projeto https://trabalho-quimica.vercel.app/.

---

## 📂 Estrutura do Projeto

```
├── components/    # Componentes React reutilizáveis
├── data/          # Dados JSON de substâncias químicas e reações
├── pages/         # Páginas Next.js (rotas)
│   ├── index.js   # Página inicial
│   ├── substances/# Consulta de substâncias
│   └── reactions/ # Consulta de reações químicas
├── public/        # Arquivos estáticos (imagens, favicon)
├── styles/        # Arquivos CSS/SCSS
├── utils/         # Funções utilitárias (formatação, cálculo)
├── .gitignore
├── README.md      # Documentação do projeto
├── package.json   # Dependências e scripts
└── yarn.lock      # Lockfile do Yarn
```

---

## 🚀 Tecnologias Utilizadas

- **Framework:** Next.js (React)
- **Linguagem:** JavaScript / JSX
- **Estilização:** CSS Modules / SCSS
- **Gerenciamento de Estado:** React Context API (quando necessário)
- **Dados:** arquivos JSON estáticos em `/data`

---

## 📋 Pré-requisitos

- Node.js **14+**
- Yarn ou npm

---

## ⚙️ Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/jonorex/trabalho-quimica.git
   cd trabalho-quimica
   ```

2. **Instale as dependências**
   ```bash
   yarn install    # ou npm install
   ```

3. **Execute em modo de desenvolvimento**
   ```bash
   yarn dev        # ou npm run dev
   ```
   Abra [http://localhost:3000](http://localhost:3000) no navegador.

4. **Build para produção**
   ```bash
   yarn build
   yarn start
   ```

---

## 🎯 Funcionalidades

- Página inicial com introdução ao trabalho de Química.
- Consulta de substâncias químicas: nome, fórmula, massa molar e propriedades.
- Consulta de reações químicas pré-definidas com equações balanceadas.
- Busca simples por nome ou fórmula.
- Layout responsivo para dispositivos móveis e desktop.

---

## 🛠️ Estrutura de Dados

Os arquivos JSON em `/data` contêm objetos com os seguintes modelos:

- **Substância**:
  ```json
  {
    "id": "H2O",
    "name": "Água",
    "formula": "H2O",
    "molarMass": 18.015,
    "properties": {
      "state": "liquid",
      "density": 1.0
    }
  }
  ```

- **Reação**:
  ```json
  {
    "id": "combustion-methane",
    "reactants": ["CH4", "O2"],
    "products": ["CO2", "H2O"],
    "equation": "CH4 + 2 O2 → CO2 + 2 H2O"
  }
  ```

---

Desenvolvido como trabalho de disciplina de Química na universidade.
