module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  // parser: 'vue-eslint-parser', // 解析 .vue 文件
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "max-len": ['error', { code: 150, ignoreComments: true }],
    'linebreak-style': 'off',
    "vue/max-attributes-per-line": ["error", {
      "singleline": 4,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/html-closing-bracket-spacing": "off",
    'no-param-reassign': ['error', { props: false }], // 允许修改函数的参数属性
  },
  // 全局变量
  globals: {},
};
