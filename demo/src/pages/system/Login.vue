<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-09-01 17:36:48
 * @LastEditTime: 2024-03-23 17:12:31
 * @LastEditors: zouyaoji 370681295@qq.com
 * @Description:
 * @FilePath: \maplibre-template-project\src\pages\system\Login.vue
-->
<template>
  <div class="login-bg">
    <div class="page-login z-top row">
      <div class="login-container col-6">
        <q-form greedy class="form-login item-center" @submit="onSubmit" @reset="onReset">
          <div class="text-h6 q-my-sm">用户登录</div>
          <q-input v-model="form.username" outlined label="用户名" class="login-input" lazy-rules :rules="rules.username">
            <template #prepend>
              <q-icon class="icon" name="perm_identity" />
            </template>
          </q-input>

          <q-input v-model="form.password" outlined label="密码" class="login-input" lazy-rules type="password" :rules="rules.password">
            <template #prepend>
              <q-icon class="icon" name="lock" />
            </template>
          </q-input>
          <div>
            <q-btn class="btn-submit full-width no-outline text-h6" color="primary" label="登录" type="submit" />
            <!-- <q-btn class="btn-submit full-width no-outline text-h6" color="primary" label="免密登录" style="margin-top: 10px" @click="onOathLogin" /> -->
          </div>

          <!-- <div class="oath flex">
            <div class="title full-width text-center q-pt-md">社交帐号登录</div>
            <div class="q-gutter-md full-width text-center q-pt-sm flex justify-center">
              <svg
                t="1615200042776"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5886"
                width="200"
                height="200"
              >
                <path
                  d="M579.867 511.932c-11.67 0-23.344 10.837-23.344 24.178 0 10.839 11.668 21.678 23.344 21.678 17.514 0 30.020-10.839 30.020-21.678 0-13.34-12.505-24.178-30.020-24.178v0zM503.154 399.36c18.345 0 30.020-11.67 30.020-29.185 0-18.345-11.675-29.183-30.020-29.183-17.51 0-34.188 10.839-34.188 29.183-0.001 17.517 16.678 29.185 34.188 29.185v0zM512.326 0.56c-282.655 0-511.788 229.133-511.788 511.788 0 282.653 229.133 511.786 511.788 511.786 282.653 0 511.786-229.133 511.786-511.786 0.001-282.655-229.132-511.788-511.786-511.788v0zM415.602 642.009c-30.855 0-53.369-4.999-82.553-13.341l-84.218 42.53 24.186-71.715c-59.204-41.689-94.228-94.221-94.228-158.428 0-113.403 106.733-200.123 236.814-200.123 115.069 0 217.633 68.377 237.644 165.106-8.338-1.671-15.844-2.502-22.514-2.502-113.403 0-200.954 85.049-200.954 187.613 0 17.508 2.502 33.351 6.671 50.030-6.671 0.829-14.178 0.829-20.849 0.829v0zM763.314 723.724l16.674 60.041-63.371-35.854c-24.18 4.999-47.529 12.505-71.709 12.505-111.737 0-200.123-76.711-200.123-171.769 0-95.058 88.388-171.771 200.123-171.771 105.895 0 200.954 76.713 200.954 171.771 0 53.362-35.854 100.891-82.548 135.078v0zM338.053 340.992c-17.51 0-35.854 10.839-35.854 29.183 0 17.516 18.343 29.19 35.854 29.19 16.679 0 30.020-11.675 30.020-29.19 0-18.343-13.341-29.183-30.020-29.183v0zM710.783 511.932c-12.51 0-23.349 10.837-23.349 24.178 0 10.839 10.839 21.678 23.349 21.678 16.674 0 29.183-10.839 29.183-21.678 0-13.34-12.509-24.178-29.183-24.178v0zM710.783 511.932z"
                  p-id="5887"
                  data-spm-anchor-id="a313x.7781069.0.i22"
                  class=""
                  fill="#2dc100"
                ></path>
              </svg>
              <svg
                t="1615199447339"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2522"
                width="200"
                height="200"
              >
                <path
                  d="M512 0C229.003636 0 0 229.003636 0 512s229.003636 512 512 512 512-229.003636 512-512S794.996364 0 512 0z m210.385455 641.396364c-7.447273 9.309091-26.996364-1.861818-41.89091-32.581819-3.723636 13.963636-13.032727 36.305455-34.443636 64.232728 35.374545 8.378182 44.683636 42.821818 33.512727 61.44-8.378182 13.032727-26.996364 24.203636-59.578181 24.203636-58.647273 0-83.781818-15.825455-95.883637-26.996364-1.861818-2.792727-5.585455-3.723636-10.24-3.723636-4.654545 0-7.447273 0.930909-10.24 3.723636-11.170909 11.170909-37.236364 26.996364-95.883636 26.996364-32.581818 0-52.130909-11.170909-59.578182-24.203636-12.101818-18.618182-1.861818-53.061818 33.512727-61.44-20.48-27.927273-29.789091-50.269091-34.443636-64.232728-13.963636 30.72-34.443636 42.821818-41.890909 32.581819-5.585455-8.378182-8.378182-26.065455-7.447273-38.167273 3.723636-46.545455 34.443636-85.643636 53.061818-106.123636-2.792727-5.585455-8.378182-40.029091 14.894546-63.301819v-1.861818c0-92.16 65.163636-158.254545 148.014545-158.254545 81.92 0 148.014545 66.094545 148.014546 158.254545v1.861818c23.272727 23.272727 17.687273 57.716364 14.894545 63.301819 17.687273 20.48 49.338182 59.578182 53.061818 106.123636 0.930909 12.101818-0.930909 29.789091-7.447272 38.167273z"
                  fill="#30A5DD"
                  p-id="2523"
                ></path>
              </svg>

              <svg
                t="1615199464855"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3380"
                width="200"
                height="200"
              >
                <path
                  d="M448.698182 482.210909c-96.814545 4.654545-175.010909 56.785455-175.010909 121.949091s78.196364 114.501818 175.010909 109.847273S623.709091 647.912727 623.709091 582.749091c-0.930909-64.232727-79.127273-105.192727-175.010909-100.538182z m65.163636 164.770909c-29.789091 39.098182-88.436364 57.716364-145.221818 26.065455-26.996364-14.894545-26.065455-43.752727-26.065455-43.752728s-11.170909-92.16 85.643637-103.330909c97.745455-12.101818 115.432727 81.92 85.643636 121.018182z"
                  fill="#EA5D5C"
                  p-id="3381"
                ></path>
                <path
                  d="M448.698182 584.610909c-6.516364 4.654545-7.447273 13.032727-3.723637 18.618182 2.792727 5.585455 11.170909 6.516364 16.756364 1.861818 5.585455-4.654545 8.378182-13.032727 4.654546-18.618182-2.792727-5.585455-10.24-6.516364-17.687273-1.861818zM403.083636 597.643636c-18.618182 1.861818-30.72 17.687273-30.72 33.512728 0 14.894545 14.894545 26.065455 32.581819 24.203636 17.687273-1.861818 32.581818-15.825455 32.581818-31.650909s-13.963636-27.927273-34.443637-26.065455z"
                  fill="#EA5D5C"
                  p-id="3382"
                ></path>
                <path
                  d="M512 0C229.003636 0 0 229.003636 0 512s229.003636 512 512 512 512-229.003636 512-512S794.996364 0 512 0z m197.352727 626.501818C669.323636 712.145455 538.065455 754.036364 441.250909 746.589091c-92.16-7.447273-211.316364-38.167273-223.418182-151.738182 0 0-6.516364-51.2 42.821818-117.294545 0 0 70.749091-99.607273 152.669091-128.465455 82.850909-27.927273 92.16 19.549091 92.16 48.407273-4.654545 24.203636-12.101818 38.167273 18.618182 28.858182 0 0 80.989091-38.167273 114.501818-4.654546 26.996364 26.996364 4.654545 65.163636 4.654546 65.163637s-11.170909 12.101818 12.101818 16.756363c21.410909 3.723636 94.021818 37.236364 53.992727 122.88z m-80.058182-236.450909c-8.378182 0-15.825455-7.447273-15.825454-15.825454 0-9.309091 7.447273-15.825455 15.825454-15.825455 0 0 99.607273-18.618182 87.505455 89.367273v1.861818c-0.930909 7.447273-7.447273 13.963636-15.825455 13.963636-9.309091 0-15.825455-7.447273-15.825454-15.825454 0-1.861818 15.825455-73.541818-55.854546-57.716364zM797.789091 493.381818c-2.792727 18.618182-12.101818 11.170909-22.341818 11.170909-13.032727 0-23.272727-16.756364-23.272728-29.789091 0-11.170909 4.654545-22.341818 4.654546-22.341818 0.930909-4.654545 12.101818-34.443636-7.447273-78.196363-35.374545-60.509091-106.123636-60.509091-114.501818-57.716364-8.378182 3.723636-21.410909 5.585455-21.410909 5.585454-13.032727 0-23.272727-10.24-23.272727-23.272727 0-11.170909 7.447273-19.549091 16.756363-22.341818 0 0 0 0.930909 0.930909 0.930909s1.861818 0.930909 1.861819 0.930909c10.24-1.861818 45.614545-4.654545 79.127272 3.723637 62.370909 14.894545 146.152727 83.781818 108.916364 211.316363z"
                  fill="#EA5D5C"
                  p-id="3383"
                ></path>
              </svg>
            </div>
          </div> -->
          <!-- <div class="row justify-between q-pt-md text-grey-8">
            <span>忘记密码</span>
            <span class="sign-up text-center cursor-pointer"> 还没有账号？现在注册！ </span>
          </div> -->
        </q-form>
      </div>
      <div class="login-container col-6 bg-blue">
        <div class="bg-right">
          <div class="bg-register">
            <!-- <img src="../../assets/images/logo.png" alt="logo" class="login-logo" /> -->
            <span class="bg-title">{{ title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import qs from 'qs'
import { useQuasar } from 'quasar'
import { ref, reactive, toRefs, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { store } from '@src/store'
import { ThemeOptions } from '@src/types'
import * as api from '@src/api'
import { logger, webStorage } from '@src/utils'
import { useUserStore } from '@src/store/system/user'

const $q = useQuasar()
const $router = useRouter()
const $route = useRoute()

const title = computed(() => {
  return import.meta.env.VITE_VUE_APP_TITLE
})

// const form = ref({
//   username: import.meta.env.MODE === 'development' ? 'admin' : '',
//   password: import.meta.env.MODE === 'development' ? '123456' : ''
// })

const form = ref({
  username: 'admin',
  password: '123456'
})

const rules = {
  username: [val => (val && val.length > 0) || '请输入用户名'],
  password: [val => (val && val.length > 0) || '请输入用户名'],
  rememberMe: [val => !!val || 'You need to accept the license and terms first']
}

const theme = computed<ThemeOptions>(() => {
  const themeStore = store.system.useThemeStore()
  return themeStore.themeConfig[themeStore.activeName]
})

onMounted(async () => {
  // // **************** 验证天擎自动登录
  // // 第一步 获取 cookie
  // // 先看看本地有没有
  // let cookie = webStorage.getLocalStorage('cmadaas-cookie') as string
  // if (cookie) {
  //   document.cookie = `JSESSIONID=${cookie}` // 非必要
  // } else {
  //   // 如果没有就从后端请求 并存起来
  //   const res = await api.common.getCmadaasCookie()
  //   const myCookie = res.data['set-cookie']
  //   cookie = myCookie.split(';')[0].split('=')[1]
  //   webStorage.setLocalStorage('cmadaas-cookie', cookie)
  //   document.cookie = `JSESSIONID=${cookie}` // 非必要
  // }
  // // 如果url中有code 认为是授权登录 自动走授权登录流程
  // if ($route.query.code) {
  //   const code = $route.query.code
  //   const res = await api.common.loginByAutho(cookie, code)
  //   console.log(res)
  // }
  // // 第二步 验证是否登录过
  // const res = await api.common.getAuthoLoginInfo(cookie)
  // const data = res.data
  // if (data.success) {
  //   // 已登录
  //   logger.log(`登录成功。当前登录用户${data.loginUser.username}`, data)
  //   // 一些用户信息保存起来并跳转默认页面
  //   webStorage.setLocalStorage('token', 'test')
  //   webStorage.setLocalStorage('uuid', data.loginUser.id)
  //   const userStore = useUserStore()
  //   userStore.set({
  //     ...data.loginUser,
  //     username: data.loginUser.username
  //   })
  //   $router.replace(($router.currentRoute.value.query.redirect as string) || import.meta.env.VITE_VUE_DEFAULT_ROUTE_PATH)
  // } else {
  //   logger.warn('登录失效，请重新登录。')
  //   webStorage.removeLocalStorage('cmadaas-cookie')
  // }
})

const onSubmit = async () => {
  store.system
    .useAccountStore()
    .login(form.value)
    .then(() => {
      // 重定向对象不存在则返回顶层路径
      $router.replace(($router.currentRoute.value.query.redirect as string) || import.meta.env.VITE_VUE_DEFAULT_ROUTE_PATH)
    })
}

const onReset = () => {
  form.value = { username: '', password: '' }
}

const onOathLogin = () => {
  window.location.href =
    'http://gx.uts.cma:18010/idp/oauth2/authorize?client_id=gxDAAS&redirect_uri=http://10.158.48.67:9002/login&response_type=code&state=http%3A%2F%2F10.158.48.67%3A9002%2Flogin'
}
</script>

<style lang="scss" scoped>
.login-bg {
  width: 100%;
  height: 100vh;
  background: #f0f2f5 url(../../assets/images/login_bg.jpg) no-repeat;
  background-size: 100% 100%;
  .page-login {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 750px;
    height: 450px;
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%);
    border-radius: 8px;
    .login-container {
      max-width: 1080px;
      height: 100%;
      display: flex;
      align-items: center;
      .form-login {
        //background: v-bind('theme.pageLogin.themePageLoginBackground');
        //color: #fff;
        text-align: center;
        padding: 0;
        width: 100%;
        border-radius: 10px;
        padding: 1rem 2rem;
        margin: 0 auto;

        // box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
      }
      .q-checkbox {
        margin-top: 0px;
        user-select: none;
      }
      .btn-submit {
        height: 56px;
        background: v-bind('theme.global.themeColorAlpha');
        &::before {
          border-color: rgba(0, 0, 0, 0.24);
        }
      }
      .oath {
        :deep(.icon) {
          background: v-bind('theme.global.themeColor');
          width: 50px;
          height: 50px;
          cursor: pointer;
        }
      }
      .login-logo {
        width: 150px;
      }
      .bg-right {
        width: 100%;

        .bg-register {
          display: flex;
          width: 100%;
          height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .bg-title {
            font-weight: 400;
            color: #fff;
            font-size: 28px;
            margin-top: 24px;
            margin-bottom: 10px;
            font-family: 'YouSheBiaoTiYuan';
          }
          .bg-tips {
            color: #f0f0f0;
            letter-spacing: 10px;
            margin-bottom: 36px;
          }
        }
      }
    }
  }
}
</style>
