/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-08 23:26:13
 * @LastEditTime: 2024-03-28 16:26:34
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \maplibre-ext\demo\vite.config.mts
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import commonjs from 'vite-plugin-commonjs'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json')

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(/<title>(.*?)<\/title>/, `<title>${process.env.VITE_VUE_APP_TITLE}</title>`)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    base: process.env.VITE_VUE_ROUTER_BASE,
    plugins: [
      commonjs(),
      vueJsx(),
      vue({
        template: { transformAssetUrls }
      }),
      quasar({
        sassVariables: true
      }),
      htmlPlugin()
    ],
    resolve: {
      alias: {
        '@src': resolve(__dirname, './src'),
        '@api': resolve(__dirname, './src/api'),
        '@assets': resolve(__dirname, './src/assets'),
        '@common': resolve(__dirname, './src/common'),
        '@components': resolve(__dirname, './src/components'),
        '@composables': resolve(__dirname, './src/composables'),
        '@config': resolve(__dirname, './src/config'),
        '@directives': resolve(__dirname, './src/directives'),
        '@i18n': resolve(__dirname, './src/i18n'),
        '@layouts': resolve(__dirname, './src/layouts'),
        '@pages': resolve(__dirname, './src/pages'),
        '@router': resolve(__dirname, './src/router'),
        '@store': resolve(__dirname, './src/store'),
        '@types': resolve(__dirname, './src/types'),
        '@utils': resolve(__dirname, './src/utils')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@src/assets/style/variables.scss";'
        }
      }
    },
    server: {
      // host: '0.0.0.0',
      port: 3200,
      proxy: {
        '/traffictile': {
          target: 'https://tm.amap.com/trafficengine/mapabc/traffictile',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/traffictile/, '/')
        },
        '/v3': {
          target: 'https://restapi.amap.com/v3',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/v3/, '/')
        }
      }
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: false
        }
      },
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('/node_modules/')) {
              const modules = ['quasar', 'maplibre-gl', 'element-plus', 'lodash', 'axios', 'interactjs', 'lowdb', 'pinia', 'maplibre-ext', 'echarts']
              const chunk = modules.find(module => id.includes(`/node_modules/${module}`))
              return chunk ? `vendor-${chunk}` : 'vendor'
            }
          }
        }
      }
    },
    define: {
      __APP_VERSION__: JSON.stringify(packageJson.version),
      'process.env': {}
    }
  }
})
