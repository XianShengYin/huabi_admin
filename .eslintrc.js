module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 5,
      multiline: {
        max: 5,
        allowFirstLine: false
      }
    }]
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ]
}
