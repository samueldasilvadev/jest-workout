# jest-workout

## error-list
Possíveis erros que podem ocorrer ao usar o Jest.

### Erro ao usar o import com jest (SyntaxError: Cannot use import statement outside a module)
O jest dá suporte nativo apenas ao commonjs, para usar o ESM é necessário usar o babel
para fazer um preset dos modulos.

1. Instalar as dependências

```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```
2. Criar o arquivo .babelrc com o json a seguir

```json
{
  "presets": [["@babel/preset-env"]]
}
```
Essas são as configurações básicas para resolver o problema.

INFO:
https://jestjs.io/docs/webpack
https://babeljs.io/docs/babel-preset-env
https://stackoverflow.com/questions/61146112/error-while-loading-config-you-appear-to-be-using-a-native-ecmascript-module-c
