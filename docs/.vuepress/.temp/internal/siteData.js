export const siteData = {
  "base": "/wiki1001/",
  "lang": "en-US",
  "title": "Wiki 1001",
  "description": "博客描述",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/img/logo.ico"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
