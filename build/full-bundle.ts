/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-03 14:11:08
 * @LastEditTime: 2024-04-16 15:40:38
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \vue-maplibre\build\full-bundle.ts
 */
import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { rollup } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import replace from '@rollup/plugin-replace'
import filesize from 'rollup-plugin-filesize'
import { parallel } from 'gulp'
import glob from 'fast-glob'
import { camelCase, capitalize } from 'lodash'
import { version } from '../packages/vue-maplibre/version'
import { reporter } from './plugins/size-reporter'
import { alias } from './plugins/alias'
import { vmRoot, vmOutput, localeRoot } from './utils/paths'
import { formatBundleFilename, generateExternal, writeBundles } from './utils/rollup'
import { withTaskName } from './utils/gulp'
import { VM_BRAND_NAME } from './utils/constants'
import { target } from './build-info'
import { TaskFunction } from 'undertaker'

const banner = `/*! ${VM_BRAND_NAME} v${version} */\n`

async function buildFullEntry(minify: boolean) {
  const bundle = await rollup({
    input: path.resolve(vmRoot, 'index.ts'),
    plugins: [
      alias(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts']
      }),
      vue({
        target: 'browser',
        exposeFilename: false
      }),
      commonjs(),
      esbuild({
        minify,
        sourceMap: minify,
        target
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),

        // options
        preventAssignment: true
      }),
      filesize()
    ],
    external: await generateExternal({ full: true })
  })
  await writeBundles(bundle, [
    {
      format: 'umd',
      file: path.resolve(vmOutput, 'dist', formatBundleFilename('index.full', minify, 'js')),
      exports: 'named',
      name: 'VueMaplibre',
      globals: {
        vue: 'Vue',
        echarts: 'echarts'
      },
      sourcemap: minify,
      banner
    },
    {
      format: 'esm',
      file: path.resolve(vmOutput, 'dist', formatBundleFilename('index.full', minify, 'mjs')),
      sourcemap: minify,
      banner
    }
  ])
}

async function buildFullLocale(minify: boolean) {
  const files = await glob(`${path.resolve(localeRoot, 'lang')}/*.ts`, {
    absolute: true
  })
  return Promise.all(
    files.map(async file => {
      const filename = path.basename(file, '.ts')
      const name = capitalize(camelCase(filename))

      const bundle = await rollup({
        input: file,
        plugins: [
          esbuild({
            minify,
            sourceMap: minify,
            target
          }),
          filesize({ reporter })
        ]
      })
      await writeBundles(bundle, [
        {
          format: 'umd',
          file: path.resolve(vmOutput, 'dist/locale', formatBundleFilename(filename, minify, 'js')),
          exports: 'named',
          name: `VueMaplibreLocale${name}`,
          sourcemap: minify,
          banner
        },
        {
          format: 'esm',
          file: path.resolve(vmOutput, 'dist/locale', formatBundleFilename(filename, minify, 'mjs')),
          sourcemap: minify,
          banner
        }
      ])
    })
  )
}

export const buildFull = (minify: boolean) => async () => Promise.all([buildFullEntry(minify), buildFullLocale(minify)])

export const buildFullBundle = parallel(withTaskName('buildFullMinified', buildFull(true)), withTaskName('buildFull', buildFull(false)))
