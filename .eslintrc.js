/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-16 09:28:13
 * @LastEditTime: 2022-02-06 02:07:48
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\.eslintrc.js
 */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  globals: {
    jest: 'readonly',
    Cesium: 'readonly'
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 'off'
      }
    },
    {
      files: ['**/__tests__/**', '**/gulpfile.ts'],
      rules: {
        'no-console': 'off'
      }
    }
  ],
  rules: {
    // js/ts
    'eol-last': 'error',
    'no-trailing-spaces': 'error',
    'comma-style': ['error', 'last'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    camelcase: ['error', { properties: 'never' }],
    semi: ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // vue
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always'
        }
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 4,
        multiline: 1
      }
    ],
    'vue/require-default-prop': 'off',
    'vue/html-closing-bracket-spacing': 'error'
  }
}
