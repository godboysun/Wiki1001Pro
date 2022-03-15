import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-2e1ec74f","/Thought/",{"title":""},["/Thought/index.html","/Thought/README.md"]],
  ["v-5942ad02","/FAQ/Console/A001.html",{"title":""},["/FAQ/Console/A001","/FAQ/Console/A001.md"]],
  ["v-55d8fbc4","/FAQ/Console/A002.html",{"title":""},["/FAQ/Console/A002","/FAQ/Console/A002.md"]],
  ["v-7233364a","/FAQ/Console/",{"title":""},["/FAQ/Console/index.html","/FAQ/Console/README.md"]],
  ["v-a8a22d9c","/FAQ/DigestionHeap/DigestWill.html",{"title":""},["/FAQ/DigestionHeap/DigestWill","/FAQ/DigestionHeap/DigestWill.md"]],
  ["v-1b6b2b65","/FAQ/DigestionHeap/Digested.html",{"title":""},["/FAQ/DigestionHeap/Digested","/FAQ/DigestionHeap/Digested.md"]],
  ["v-608ad3cc","/FAQ/DigestionHeap/Digesting.html",{"title":""},["/FAQ/DigestionHeap/Digesting","/FAQ/DigestionHeap/Digesting.md"]],
  ["v-06683180","/FAQ/Pool/Review.html",{"title":""},["/FAQ/Pool/Review","/FAQ/Pool/Review.md"]],
  ["v-6603fbfe","/FAQ/Pool/SkillStack.html",{"title":""},["/FAQ/Pool/SkillStack","/FAQ/Pool/SkillStack.md"]],
  ["v-1c0365b8","/Thought/Travles/beiPing.html",{"title":""},["/Thought/Travles/beiPing","/Thought/Travles/beiPing.md"]],
  ["v-b438309c","/Thought/YearReview/2020.html",{"title":""},["/Thought/YearReview/2020","/Thought/YearReview/2020.md"]],
  ["v-b0ce7f5e","/Thought/YearReview/2021.html",{"title":""},["/Thought/YearReview/2021","/Thought/YearReview/2021.md"]],
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
