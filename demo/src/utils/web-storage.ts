/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-12-02 11:29:14
 * @LastEditTime: 2024-01-09 15:28:16
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \demo\src\utils\web-storage.ts
 */

import { LocalStorage, SessionStorage } from 'quasar'

const webStoragePrefix = import.meta.env.VITE_VUE_APP_PREFIX

/**
 * 设置本地存储的键值对。
 *
 * @param {string} [key] - 要设置的键，默认为'default'。
 * @param {string} [value] - 要设置的值，默认为空字符串。
 */
export function setLocalStorage(key = 'default', value = '') {
  LocalStorage.set(`${webStoragePrefix}-${__APP_VERSION__}-${key}`, value)
}

/**
 * 获取本地存储中指定键的值。
 *
 * @param {string} [key] - 要获取值的键，默认为'default'。
 * @returns {string | null} 存储的值，如果不存在则为null。
 */
export function getLocalStorage(key = 'default') {
  return LocalStorage.getItem(`${webStoragePrefix}-${__APP_VERSION__}-${key}`)
}

/**
 * 获取所有本地存储的键值对。
 *
 * @returns {object} 包含所有本地存储键值对的对象。
 */
export function getAllLocalStorage() {
  return LocalStorage.getAll()
}

/**
 * 移除本地存储中指定键的值。
 *
 * @param {string} [key] - 要移除的键，默认为'default'。
 */
export function removeLocalStorage(key = 'default') {
  LocalStorage.remove(`${webStoragePrefix}-${__APP_VERSION__}-${key}`)
}

/**
 * 设置会话存储的键值对。
 *
 * @param {string} [key] - 要设置的键，默认为'default'。
 * @param {string} [value] - 要设置的值，默认为空字符串。
 */
export function setSessionStorage(key = 'default', value = '') {
  SessionStorage.set(`${webStoragePrefix}-${__APP_VERSION__}-${key}`, value)
}

/**
 * 获取会话存储中指定键的值。
 *
 * @param {string} [key] - 要获取值的键，默认为'default'。
 * @returns {string | null} 存储的值，如果不存在则为null。
 */
export function getSessionStorage(key = 'default') {
  return SessionStorage.getItem(`${webStoragePrefix}-${__APP_VERSION__}-${key}`)
}

/**
 * 获取所有会话存储的键值对。
 *
 * @returns {object} 包含所有会话存储键值对的对象。
 */
export function getAllSessionStorage() {
  return SessionStorage.getAll()
}

/**
 * 移除会话存储中指定键的值。
 *
 * @param {string} [key] - 要移除的键，默认为'default'。
 */
export function removeSessionStorage(key = 'default') {
  SessionStorage.remove(`${webStoragePrefix}-${__APP_VERSION__}-${key}`)
}
