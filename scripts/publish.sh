###
 # @Author: zouyaoji@https://github.com/zouyaoji
 # @Date: 2021-09-16 09:28:13
 # @LastEditTime: 2025-03-29 18:32:29
 # @LastEditors: zouyaoji 370681295@qq.com
 # @Description:
 # @FilePath: \vue-maplibre\scripts\publish.sh
###

#!/bin/sh

set -e

pnpm i --frozen-lockfile
pnpm update:version

pnpm build

cd dist/vue-maplibre
npm publish --tag beta --access public --registry ${REGISTRY}
cd -

echo "✅ Publish completed"
