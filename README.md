# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

### computer-product-catalog-front
Computer product catalog system graphical interface.

Team: Sávio Allan da Silva Moura and Vitor Oliveira Ropke

Project: A computer product catalog system that allows you to create, view, update and delete information about products in a catalog. Users can add new products, view details of existing products, update information (such as price or description), and remove products from the catalog.

Justification: Help a store control its inventory more easily compared to non-digital means.

This repository contains only the frontend system. This is like a graphical interface. A browser page that will interact with the user and the user will interact with this system, the computer product catalog. The backend is at this link: https://github.com/vitorropke/computer-product-catalog-back
