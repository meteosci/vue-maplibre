/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2025-03-29 02:33:15
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-03-29 18:15:01
 * @FilePath: \vue-maplibre\eslint.config.ts
 */
// eslint.config.js
import { defineConfig } from 'eslint/config'
import eslintPluginImportX from 'eslint-plugin-import-x'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import eslintPluginVue from 'eslint-plugin-vue'
import tsParser from '@typescript-eslint/parser'
import globals from 'globals'

export default defineConfig([
  {
    plugins: {
      //@ts-expect-error 已知问题
      'import-x': eslintPluginImportX
    }
  },
  // 通用配置
  eslint.configs.recommended,
  //@ts-expect-error 已知问题
  tseslint.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['packages/**/*.{js,ts,jsx,tsx,vue}'],
    ...eslintPluginPrettier,
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      ...eslintPluginPrettier.rules,
      ...eslintConfigPrettier.rules,
      // 0 off 1 warn 2 error 强制标签执行自动关闭
      // ts
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
      '@typescript-eslint/no-this-alias': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      // vue
      'vue/no-unused-vars': 'error',
      'vue/max-attributes-per-line': 'off',
      'vue/no-v-html': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': 'off',
      'vue/require-default-prop': 'off',
      'vue/html-closing-bracket-spacing': 'error',
      'vue/v-on-event-hyphenation': 'off',
      'vue/first-attribute-linebreak': 'off',
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      'public/',
      'src/assets/',
      'tests/',
      'internal/',
      'packages/*/es',
      'packages/*/lib',
      '.github',
      'packages/theme-default/src/fonts',
      'public/',
      'docs/',
      'demo/',
      'typings/'
    ]
  }
])
