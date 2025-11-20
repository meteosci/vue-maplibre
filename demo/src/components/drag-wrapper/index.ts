/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2024-01-09 13:20:37
 * @Description: Do not edit
 * @LastEditors: zouyaoji 370681295@qq.com
 * @LastEditTime: 2025-03-29 17:57:52
 * @FilePath: \vue-maplibre\demo\src\components\drag-wrapper\index.ts
 */

import type { ActionName, ActionProps } from '@interactjs/core/types'
import { hSlot } from '@vue-maplibre/utils/private/render'
import interact from 'interactjs'
import { defineComponent, getCurrentInstance, h, onBeforeUnmount, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'DragWrapper',
  props: {
    restriction: {
      type: [String, Object, Function],
      default: 'parent' // 'parent', 'self'
    },
    centered: Boolean
  },
  setup(props, ctx) {
    // state
    const rootRef = ref(null)
    const instance = getCurrentInstance()

    // methods
    const dragMoveListener = (event) => {
      const target = event.target
      // keep the dragged position in the data-x/data-y attributes
      const x = (Number.parseFloat(target.getAttribute('data-x')) || 0) + event.dx
      const y = (Number.parseFloat(target.getAttribute('data-y')) || 0) + event.dy

      // translate the element
      const transformValue = `translate(${x}px, ${y}px)${props.centered ? ' translate(-50%, -50%)' : ''}`
      // 'translate(' + x + 'px, ' + y + 'px) translate(-50%, -50%)'
      target.style.webkitTransform = target.style.transform = transformValue
      // target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

      // update the posiion attributes
      target.setAttribute('data-x', x)
      target.setAttribute('data-y', y)
    }

    const resizeListener = () => {
      const node = rootRef.value
      const draggable = interact(node!)
      const dragEvent: ActionProps<ActionName> = { name: 'drag', axis: 'xy' }
      draggable.reflow(dragEvent)
    }

    onMounted(() => {
      const node = rootRef.value

      interact(node!).draggable({
        ignoreFrom: 'button, .ignore-drag',
        allowFrom: '.drag-handle',
        inertia: true,
        onmove: dragMoveListener,
        modifiers: [
          interact.modifiers.restrict({
            // keep the element within the element
            restriction: props.restriction as string,
            endOnly: true,
            elementRect: { left: 0, right: 1, top: 0, bottom: 1 }
          })
        ]
      })

      addEventListener('resize', resizeListener, false)
    })

    onBeforeUnmount(() => {
      const node = rootRef.value
      if (interact.isSet(node!)) {
        interact(node!).unset()
      }
      removeEventListener('resize', resizeListener, false)
    })

    Object.assign(instance?.proxy, { resizeListener, rootRef })

    return () =>
      h(
        'div',
        {
          ref: rootRef,
          class: 'drag-wrapper absolute'
        },
        hSlot(ctx.slots.default)
      )
  }
})
