/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-02-20 10:46:14
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2024-06-18 10:51:10
 * @FilePath: \vue-maplibre\packages\utils\private\touch.ts
 */

const directions = ['left', 'right', 'up', 'down', 'horizontal', 'vertical']

const modifiersAll = {
  left: true,
  right: true,
  up: true,
  down: true,
  horizontal: true,
  vertical: true,
  all: true
}

export function getModifierDirections(mod) {
  const dir: any = {}

  directions.forEach((direction) => {
    if (mod[direction]) {
      dir[direction] = true
    }
  })

  if (Object.keys(dir).length === 0) {
    return modifiersAll
  }

  if (dir.horizontal === true) {
    dir.left = dir.right = true
  }
  if (dir.vertical === true) {
    dir.up = dir.down = true
  }
  if (dir.left === true && dir.right === true) {
    dir.horizontal = true
  }
  if (dir.up === true && dir.down === true) {
    dir.vertical = true
  }
  if (dir.horizontal === true && dir.vertical === true) {
    dir.all = true
  }

  return dir
}

export function shouldStart(evt, ctx) {
  return (
    ctx.event === void 0
    && evt.target !== void 0
    && evt.target.draggable !== true
    && typeof ctx.handler === 'function'
    && evt.target.nodeName.toUpperCase() !== 'INPUT'
    && (evt.qClonedBy === void 0 || !evt.qClonedBy.includes(ctx.uid))
  )
}
