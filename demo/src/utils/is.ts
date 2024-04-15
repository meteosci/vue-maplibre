const hasMap = typeof Map === 'function',
  hasSet = typeof Set === 'function',
  hasArrayBuffer = typeof ArrayBuffer === 'function'

/**
 * 判断两个值是否深度相等。
 *
 * @param {any} a - 第一个值。
 * @param {any} b - 第二个值。
 * @returns {boolean} 如果两个值深度相等，则返回true，否则返回false。
 */
export function isDeepEqual(a, b) {
  // 如果两个值相等，直接返回true
  if (a === b) {
    return true
  }

  // 如果两个值都不为null且都为对象类型
  if (a !== null && b !== null && typeof a === 'object' && typeof b === 'object') {
    // 如果两个对象的构造函数不同，返回false
    if (a.constructor !== b.constructor) {
      return false
    }

    let length, i

    // 如果是数组类型
    if (a.constructor === Array) {
      length = a.length

      // 如果数组长度不相等，返回false
      if (length !== b.length) {
        return false
      }

      // 逐个比较数组元素
      for (i = length; i-- !== 0; ) {
        if (isDeepEqual(a[i], b[i]) !== true) {
          return false
        }
      }

      return true
    }

    // 如果有Map类型，且是Map实例
    if (hasMap === true && a.constructor === Map) {
      if (a.size !== b.size) {
        return false
      }

      i = a.entries().next()
      while (i.done !== true) {
        if (b.has(i.value[0]) !== true) {
          return false
        }
        i = i.next()
      }

      i = a.entries().next()
      while (i.done !== true) {
        if (isDeepEqual(i.value[1], b.get(i.value[0])) !== true) {
          return false
        }
        i = i.next()
      }

      return true
    }

    // 如果有Set类型，且是Set实例
    if (hasSet === true && a.constructor === Set) {
      if (a.size !== b.size) {
        return false
      }

      i = a.entries().next()
      while (i.done !== true) {
        if (b.has(i.value[0]) !== true) {
          return false
        }
        i = i.next()
      }

      return true
    }

    // 如果有ArrayBuffer类型，且是ArrayBuffer实例
    if (hasArrayBuffer === true && a.buffer != null && a.buffer.constructor === ArrayBuffer) {
      length = a.length

      // 如果ArrayBuffer长度不相等，返回false
      if (length !== b.length) {
        return false
      }

      // 逐个比较ArrayBuffer元素
      for (i = length; i-- !== 0; ) {
        if (a[i] !== b[i]) {
          return false
        }
      }

      return true
    }

    // 如果是正则表达式类型，比较source和flags属性
    if (a.constructor === RegExp) {
      return a.source === b.source && a.flags === b.flags
    }

    // 如果valueOf方法存在，比较valueOf返回值
    if (a.valueOf !== Object.prototype.valueOf) {
      return a.valueOf() === b.valueOf()
    }

    // 如果toString方法存在，比较toString返回值
    if (a.toString !== Object.prototype.toString) {
      return a.toString() === b.toString()
    }

    // 比较对象属性值
    const keys = Object.keys(a).filter(key => a[key] !== void 0)
    length = keys.length

    // 如果对象属性数量不相等，返回false
    if (length !== Object.keys(b).filter(key => b[key] !== void 0).length) {
      return false
    }

    // 逐个比较对象属性值
    for (i = length; i-- !== 0; ) {
      const key = keys[i]
      if (isDeepEqual(a[key], b[key]) !== true) {
        return false
      }
    }

    return true
  }

  // 如果两个值都是NaN，返回true，否则返回false
  return a !== a && b !== b // eslint-disable-line no-self-compare
}

/**
 * 判断一个值是否是对象，且不是数组类型。
 *
 * @param {any} v - 要检查的值。
 * @returns {boolean} 如果是对象且不是数组类型，则返回true，否则返回false。
 */
export function isObject(v) {
  return v !== null && typeof v === 'object' && Array.isArray(v) !== true
}

/**
 * 判断一个值是否是日期类型。
 *
 * @param {any} v - 要检查的值。
 * @returns {boolean} 如果是日期类型，则返回true，否则返回false。
 */
export function isDate(v) {
  return Object.prototype.toString.call(v) === '[object Date]'
}

/**
 * 判断一个值是否是正则表达式类型。
 *
 * @param {any} v - 要检查的值。
 * @returns {boolean} 如果是正则表达式类型，则返回true，否则返回false。
 */
export function isRegexp(v) {
  return Object.prototype.toString.call(v) === '[object RegExp]'
}

/**
 * 判断一个值是否是数字类型且有限。
 *
 * @param {any} v - 要检查的值。
 * @returns {boolean} 如果是有限的数字类型，则返回true，否则返回false。
 */
export function isNumber(v) {
  return typeof v === 'number' && isFinite(v)
}
