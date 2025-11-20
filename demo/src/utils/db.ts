/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-08-27 11:49:24
 * @LastEditTime: 2023-12-14 16:14:03
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \cloudtao_2023_dps_h5_src\src\utils\db.ts
 */

import { cloneDeep } from 'lodash'
import { LowSync } from 'lowdb'
import { LocalStorage } from 'lowdb/browser'
import * as webStorage from './web-storage'

const webStoragePrefix = import.meta.env.VITE_VUE_APP_PREFIX
const storageKey = `${webStoragePrefix ?? 'VueMaplibreDemo'}-${__APP_VERSION__}`

// 1️⃣ 创建适配器
const adapter = new LocalStorage(storageKey)

// 2️⃣ 创建数据库实例
const db = new LowSync(adapter, {
  sys: {},
  database: {}
})

// 3️⃣ 读取已有数据（如果有）
db.read()

// 4️⃣ 如果没有数据，则初始化默认值
db.data ||= {
  sys: {},
  database: {}
}

// 5️⃣ 写回存储（保证结构存在）
db.write()

export default db

/**
 * @description 检查路径是否存在 不存在的话初始化
 * @param {object} payload dbName {string} 数据库名称
 * @param {object} payload path {string} 路径
 * @param {object} payload user {Boolean} 区分用户
 * @param {object} payload validator {Function} 数据校验钩子 返回 true 表示验证通过
 * @param {object} payload defaultValue {*} 初始化默认值
 * @returns {string} 可以直接使用的路径
 */
export function pathInit({
  dbName = 'database',
  path = '',
  user = true,
  validator = value => true,
  defaultValue = ''
}) {
  const uuid = webStorage.getLocalStorage('uuid') || 'ghost-uuid'
  const root = db.data[dbName] ||= {}
  const target = user ? (root.user ||= {})[uuid] ||= {} : (root.public ||= {})

  // 深层路径分割
  const keys = path ? path.split('.') : []
  let current = target
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    current[key] ||= {}
    current = current[key]
  }

  const lastKey = keys[keys.length - 1]
  if (lastKey !== undefined) {
    const value = current[lastKey]
    if (!(value !== undefined && validator(value))) {
      current[lastKey] = defaultValue
      db.write()
    }
  }
  else if (!validator(current)) {
    Object.assign(current, defaultValue)
    db.write()
  }

  return { target: current, lastKey }
}

/**
 * @description 将数据存储到指定位置 | 路径不存在会自动初始化
 * @description 效果类似于取值 dbName.path = value
 * @param {object} payload dbName {String} 数据库名称
 * @param {object} payload path {String} 存储路径
 * @param {object} payload value {*} 需要存储的值
 * @param {object} payload user {Boolean} 是否区分用户
 */
export function dbSet({ dbName = 'database', path = '', value = '', user = false }) {
  const { target, lastKey } = pathInit({ dbName, path, user })
  if (lastKey !== undefined)
    target[lastKey] = value
  db.write()
}

/**
 * @description 获取数据
 * @description 效果类似于取值 dbName.path || defaultValue
 * @param {object} payload dbName {String} 数据库名称
 * @param {object} payload path {String} 存储路径
 * @param {object} payload defaultValue {*} 取值失败的默认值
 * @param {object} payload user {Boolean} 是否区分用户
 */
export function dbGet({ dbName = 'database', path = '', defaultValue = '', user = false }) {
  const { target, lastKey } = pathInit({ dbName, path, user, defaultValue })
  const result = lastKey !== undefined ? target[lastKey] : target
  return cloneDeep(result ?? defaultValue)
}

/**
 * @description 获取存储数据库对象
 * @param {object} payload user {Boolean} 是否区分用户
 */
export function database({
  dbName = 'database',
  path = '',
  user = false,
  validator = () => true,
  defaultValue = ''
} = {}) {
  const { target, lastKey } = pathInit({ dbName, path, user, validator, defaultValue })
  return lastKey ? target[lastKey] : target
}
