module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier' // eslint-config-prettier 8.0 起只要这么配置就可以了 https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21
  ],
  plugins: ['react-hooks', 'prettier'],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      // webpack: {
      //   config: require.resolve('@lucky/cli-service/webpack.config.js') // 解决 忽略 vue 后缀，会报 import/no-unresolved`and`import/extensions 错误的问题
      // },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off',
    'default-param-last': 'off',
    'prefer-object-spread': 'off',
    'arrow-body-style': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    // 'no-unused-vars': 'error',
    'no-restricted-syntax': 'off',
    'import/prefer-default-export': 'off',
    'no-lonely-if': 'off',
    'class-methods-use-this': 'off',
    'dot-notation': 'off',
    'no-console': 'off',
    'global-require': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/sort-comp': 'off',
    'react/static-property-placement': 'off',
    'react/self-closing-comp': 'off',
    'react/no-find-dom-node': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'react/no-danger': 'error',
    'no-restricted-globals': 'off',
    'jsx-a11y/alt-text': 'off',
    'react/function-component-definition': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'react/require-default-props': 'off',
    'operator-assignment': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'func-names': 'off',
    'no-undef': 'error',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-script-url': 'off',
    'no-shadow': 'off',
    'array-callback-return': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-string-refs': 'off',
    'react/jsx-props-no-spreading': 'off',
    /* indent: [
      'warn',
      2,
      {
        SwitchCase: 1
      }
    ], */
    'no-nested-ternary': 'off',
    allowImplicit: 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-use-before-define': [0],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': [1],
    '@typescript-eslint/no-explicit-any': 'off', // 暂时关闭 any 校验
    '@typescript-eslint/no-non-null-assertion': 'off', // 运行非空断言
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/no-empty-interface': 'off'
  }
};
