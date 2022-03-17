import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/usr/local/share/.config/yarn/global/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/usr/local/share/.config/yarn/global/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
