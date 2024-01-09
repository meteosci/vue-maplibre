#! /bin/bash

NAME=$1

FILE_PATH=$(cd "$(dirname "${BASH_SOURCE[0]}")/../packages" && pwd)

re="[[:space:]]+"

if [ "$#" -ne 1 ] || [[ $NAME =~ $re ]] || [ "$NAME" == "" ]; then
  echo "Usage: pnpm gc \${name} with no space"
  exit 1
fi

DIRNAME="$FILE_PATH/$NAME"
INPUT_NAME=$NAME

if [ -d "$DIRNAME" ]; then
  echo "$NAME component already exists, please change it"
  exit 1
fi
NORMALIZED_NAME=""
for i in $(echo $NAME | sed 's/[_|-]\([a-z]\)/\ \1/;s/^\([a-z]\)/\ \1/'); do
  C=$(echo "${i:0:1}" | tr "[:lower:]" "[:upper:]")
  NORMALIZED_NAME="$NORMALIZED_NAME${C}${i:1}"
done
NAME=$NORMALIZED_NAME

mkdir -p "$DIRNAME"
mkdir -p "$DIRNAME/src"
mkdir -p "$DIRNAME/__tests__"

# cat > $DIRNAME/src/index.vue <<EOF
cat > $DIRNAME/src/index.ts <<EOF
import { VcComponentInternalInstance } from '@vue-cesium/utils/types'
import { defineComponent, getCurrentInstance, createCommentVNode } from 'vue'
import { useCommon } from '@vue-cesium/composables'
import { kebabCase } from '@vue-cesium/utils/util'
import { commonEmits } from '@vue-cesium/utils/emits'
export default defineComponent({
  name: 'Vc${NAME}',
  props: { },
  emits: commonEmits,
  setup(props, ctx) {
    // state
    const instance = getCurrentInstance() as VcComponentInternalInstance
    instance.cesiumClass = 'Vc${NAME}'
    instance.cesiumEvents = []
    const commonState = useCommon(props, ctx, instance)
    if (commonState === void 0) {
      return
    }
    const { \$services } = commonState
    const { emit } = ctx
    // methods
    instance.createCesiumObject = async () => {
      return true
    }
    instance.mount = async () => {
      return true
    }
    instance.unmount = async () => {
      return true
    }

    return () => createCommentVNode(kebabCase(instance.proxy.\$options.name))
  }
})
EOF

cat <<EOF >"$DIRNAME/index.ts"
import { App } from 'vue'
import ${NAME} from './src'

${NAME}.install = (app: App): void => {
  app.component(${NAME}.name, ${NAME})
}

export default ${NAME}
EOF

cat > $DIRNAME/__tests__/$INPUT_NAME.spec.ts <<EOF
import { VcComponentPublicInstance,  VcReadyObject } from '@vue-cesium/utils/types'
import { mount, config } from '@vue/test-utils'
import VcViewer from '@vue-cesium/viewer'
import Vc$NAME from '../src'

const option = {
  cesiumPath: 'https://unpkg.com/cesium@latest/Build/Cesium/Cesium.js'
}

config.global.config.globalProperties = {}
config.global.config.globalProperties.\$VueCesium = option

const App = {
  components: {
    VcViewer,
    Vc$NAME
  },
  template: \`
    <div class="test-viewer">
      <vc-viewer>
        <vc-$NAME ref="$INPUT_NAME"></vc-$NAME>
      </vc-viewer>
    </div>
 \`,
  data () {
    return {

    }
  }
}

describe('Vc$NAME', () => {
  test('render test', async () => {
    const wrapper = mount(App)
    expect(wrapper.vm.\$refs.$INPUT_NAME).toBeDefined()
    const testVm = wrapper.vm.\$refs.$INPUT_NAME as VcComponentPublicInstance
    const readyObj: VcReadyObject = await testVm.creatingPromise
  }, 10000)
})
EOF
