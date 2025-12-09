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
 * Initializes a path in the database with default values if necessary.
 * @param {object} param0
 * @param {string} [param0.dbName] - The database name.
 * @param {string} [param0.path] - The path to initialize.
 * @param {boolean} [param0.user] - Whether to use user-specific storage.
 * @param {function} [param0.validator] - Function to validate the value.
 * @param {*} [param0.defaultValue] - Default value to set if validation fails.
 * @returns {object} An object containing the target and lastKey.
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
 * @param {object} payload 参数对象
 * @param {string} payload.dbName 数据库名称
 * @param {string} payload.path 存储路径
 * @param {*} payload.value 需要存储的值
 * @param {boolean} payload.user 是否区分用户
 */
export function dbSet({ dbName = 'database', path = '', value = '', user = false }) {
  const { target, lastKey } = pathInit({ dbName, path, user })
  if (lastKey !== undefined)
    target[lastKey] = value
  db.write()
}

/**
 * Retrieves data from the database at the specified path.
 * @param {object} param0
 * @param {string} [param0.dbName] - The database name.
 * @param {string} [param0.path] - The path to retrieve.
 * @param {*} [param0.defaultValue] - Default value to return if the path doesn't exist.
 * @param {boolean} [param0.user] - Whether to use user-specific storage.
 * @returns {*} The value at the specified path or the default value.
 */
export function dbGet({ dbName = 'database', path = '', defaultValue = '', user = false }) {
  const { target, lastKey } = pathInit({ dbName, path, user, defaultValue })
  const result = lastKey !== undefined ? target[lastKey] : target
  return cloneDeep(result ?? defaultValue)
}

/**
 * Retrieves or initializes a database value at the specified path.
 * @param {object} param0
 * @param {string} [param0.dbName] - The database name.
 * @param {string} [param0.path] - The path to retrieve or initialize.
 * @param {boolean} [param0.user] - Whether to use user-specific storage.
 * @param {function} [param0.validator] - Function to validate the value.
 * @param {*} [param0.defaultValue] - Default value to set if validation fails.
 * @returns {*} The value at the specified path or the target object.
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
