export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/img/logo.jpg",
    "heroText": "Wiki 1001",
    "tagline": "Meet 1000 Books & Unit Them Into 1 Wiki",
    "actionText": "Get Wiki →",
    "actionLink": "/FAQ/",
    "features": [
      {
        "title": "Wiki - 求索",
        "details": "基于书签对知识点进行 整理，吸收，吐纳，归档。吾将上下而求索..."
      },
      {
        "title": "Repository - 仓库",
        "details": "展望云仓库而归纳整理，方便行事&培养习惯。鱼和熊掌我全都要..."
      },
      {
        "title": "Thought - 随笔",
        "details": "活着，是一件最能带来满足感的事。细细琢磨吧，人生啊，有意思的很..."
      }
    ],
    "footer": "MIT Licensed | Copyright © 2019.01.11-present Mulander-J"
  },
  "excerpt": "",
  "headers": [],
  "git": {},
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
