# Responsive Design

Projeto desenvolvido utilizando as tecnologias [Vite](https://vitejs.dev/guide/) e [React](https://react.dev/learn/installation). Para gerenciar os estilos e componentes foram utilizados o [Shadcn](https://ui.shadcn.com/docs/), [Tailwind CSS](https://tailwindcss.com/docs/) e [Lucide React](https://lucide.dev/guide/packages/lucide-react). O objetivo do projeto é desenvolver uma página responsiva que se adeque fluidamente aos smatphones, tablets e desktops.

## Observações iniciais

Os botões do menu, tanto os renderizados pelo `<menu />` quanto os renderizados pelo `<StructuredSheet />` são apenas composições da interface, não possuem uma função definida. Atuam somente para exibir o comportamento da página em diferentes tamanhos de tela.

## Como rodar na minha máquina?

- Clone o repositório: `git clone https://github.com/MatheusAmon12/responsive-design.git`	
- Rode `npm install` para instalar as dependências
- Rode `npm run dev` para iniciar o projeto
- Seu `package.json` deve estar parecido com o seguinte:
```json
"dependencies": {
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-slot": "^1.0.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "lucide-react": "^0.378.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^2.3.0",
    "tailwindcss-animate": "^1.0.7"
  },
"devDependencies": {
  "@types/node": "^20.12.11",
  "@types/react": "^18.2.66",
  "@types/react-dom": "^18.2.22",
  "@typescript-eslint/eslint-plugin": "^7.2.0",
  "@typescript-eslint/parser": "^7.2.0",
  "@vitejs/plugin-react": "^4.2.1",
  "autoprefixer": "^10.4.19",
  "eslint": "^8.57.0",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.6",
  "postcss": "^8.4.38",
  "tailwindcss": "^3.4.3",
  "typescript": "^5.2.2",
  "vite": "^5.2.0"
}
```
- Finalizado!

## Estrutura do projeto

- `public` contém os arquivos de imagem
- `src` contém os arquivos da aplicação
  - `components` contém os componentes que compõem a interface do projeto
    - `ui` componentes vindos do Shadcn
    - `container.tsx` renderiza o container que recebe como parametros as propriedades `src`, `alt`, `text` e `backgroundGradient`
    - `header.tsx` renderiza o cabecalho da aplicação e o menu lateral que é exibido em telas inferiores a `1440px`
    - `structured-sheet.tsx` renderiza o menu lateral utilando uma estrutura pré-definidada com o `Sheet` do Shadcn
  - `lib` contém as bibliotecas utilizadas pelo projeto
    - `utils.ts` contém as funções e métodos utilizados pelo shadcn
  - `App.tsx` renderiza a aplicação
  - `index.css` estilos globais da aplicação
  - `main.tsx` renderiza o documento `root` da aplicação

## Props do component `Container`

  - `src`: caminho da imagem, do tipo `string`
  - `alt`: texto alternativo da imagem, do tipo `string`
  - `text`: texto do container, do tipo `string`
  - `backgroundGradient`: propriedade para renderizar o background do container com uma cor gradiente, do tipo `string`. Utiliza as pré-definições `bg-gradient-vite`, `bg-gradient-react`, `bg-gradient-next`, `bg-gradient-typescript` e `bg-gradient-tailwind` feitas no arquivo de configuração `tailwind.config.js`.
    - ```js
      backgroundImage: {
        "gradient-vite": "linear-gradient(45deg, #2fcfff 0%,#00c9ff 11%,#01b4ff 30%,#7476ff 55%,#9c5cff 73%,#bd34fe 100%)",
        "gradient-react": "linear-gradient(135deg, #2193b0 0%,#6dd5ed 100%)",
        "gradient-next": "linear-gradient(135deg, #152331 0%,#000000 100%)",
        "gradient-typescript": "linear-gradient(45deg, #091e3b 0%,#2f80ed 50%,#2d9ee0 100%)",
        "gradient-tailwind": "linear-gradient(45deg, #5433ff 0%,#20bdff 49%,#a5fecb 100%)",
      },
      ```
    - Exemplo de aplicação:
      ```js
      src="/Vitejs-logo.svg" alt="ViteJS" text="ViteJS" backgroundGradient="bg-gradient-vite"
      ```

## Como me localizar no projeto?

A partir do diretorio `src/App.tsx` você terá aos componentes que compõe a tela, e a partir deles terá acesso aos demais componentes da aplicação.