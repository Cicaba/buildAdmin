import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerIcons } from '/@/utils/common'
import ElementPlus from 'element-plus'
import mitt from 'mitt'
import pinia from '/@/stores/index'
import { directives } from '/@/utils/directives'
import 'element-plus/dist/index.css'
import '/@/styles/base.scss'

async function start() {
    const app = createApp(App)

    app.use(router)
    app.use(pinia)

    // 全局语言包加载
    app.use(ElementPlus)

    // 全局注册
    directives(app) // 指令
    registerIcons(app) // icons

    app.mount('#app')

    app.config.globalProperties.eventBus = mitt()
}
start()
