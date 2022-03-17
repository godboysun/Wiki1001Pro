import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-0e6f2b2a","/Another/Fillory.html",{"title":"友人账"},["/Another/Fillory","/Another/Fillory.md"]],
  ["v-f13ee848","/Another/MySelf.html",{"title":""},["/Another/MySelf","/Another/MySelf.md"]],
  ["v-2c9c50c8","/Another/Review.html",{"title":"归去来"},["/Another/Review","/Another/Review.md"]],
  ["v-2e1ec74f","/Thought/",{"title":"Thought-随笔"},["/Thought/index.html","/Thought/README.md"]],
  ["v-5cac5e40","/FAQ/Console/A000.html",{"title":"FAQ-求索"},["/FAQ/Console/A000","/FAQ/Console/A000.md"]],
  ["v-5942ad02","/FAQ/Console/A001.html",{"title":"A001_VuePress博客搭建笔记（一）简单上手"},["/FAQ/Console/A001","/FAQ/Console/A001.md"]],
  ["v-55d8fbc4","/FAQ/Console/A002.html",{"title":"A002_VuePress博客搭建笔记（二）个性化配置"},["/FAQ/Console/A002","/FAQ/Console/A002.md"]],
  ["v-4244718a","/FAQ/DigestionHeap/D001.html",{"title":"D001_node内存溢出解决方案"},["/FAQ/DigestionHeap/D001","/FAQ/DigestionHeap/D001.md"]],
  ["v-a8a22d9c","/FAQ/DigestionHeap/DigestWill.html",{"title":"待消化"},["/FAQ/DigestionHeap/DigestWill","/FAQ/DigestionHeap/DigestWill.md"]],
  ["v-1b6b2b65","/FAQ/DigestionHeap/Digested.html",{"title":"消化过"},["/FAQ/DigestionHeap/Digested","/FAQ/DigestionHeap/Digested.md"]],
  ["v-608ad3cc","/FAQ/DigestionHeap/Digesting.html",{"title":"消化中"},["/FAQ/DigestionHeap/Digesting","/FAQ/DigestionHeap/Digesting.md"]],
  ["v-48b0c406","/Links/Devil/",{"title":"Devil-Lived-开发"},["/Links/Devil/index.html","/Links/Devil/README.md"]],
  ["v-5c4d6860","/Links/Wiki/",{"title":"Wiki-百科"},["/Links/Wiki/index.html","/Links/Wiki/README.md"]],
  ["v-2e380cb5","/Thought/TheWord/Les_Confessions.html",{"title":"Les Confessions"},["/Thought/TheWord/Les_Confessions","/Thought/TheWord/Les_Confessions.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
