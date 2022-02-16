
module.exports = {
  // 若项目中有多个子项目，且每个项目都会有.eslintrc，子项目会一直向上查找所有的.eslintrc，直到找到root:true的eslintrc，再将所有的.eslintrc合并
	root: true,
  // 对环境定义的一组全局变量的预设 
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // 继承另一个配置文件的所有特性
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  // 解释器
  parser: '@typescript-eslint/parser',
  // 解释器配置
  parserOptions: {
    // 指定ECMAScript版本，默认为5
    ecmaVersion: 2018,
    // 代码模块类型，可选script(默认)，module
    sourceType: 'module',
  },
  // 插件，向ESLint添加各种扩展，可以定义规则，环境或配置的第三方模块
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-unused-vars': 0,
  },
}