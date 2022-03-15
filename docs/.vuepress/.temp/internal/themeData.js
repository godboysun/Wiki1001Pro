export const themeData = {
  "sidebarDepth": 4,
  "lastUpdated": "Last Updated",
  "nav": [
    {
      "text": "求索",
      "link": "/FAQ/"
    },
    {
      "text": "仓库",
      "link": "/Store/"
    },
    {
      "text": "随笔",
      "link": "/Thought/"
    },
    {
      "text": "Concat",
      "items": [
        {
          "text": "Segmentfault",
          "link": "https://segmentfault.com/u/mulander"
        }
      ]
    }
  ],
  "sidebar": {
    "/FAQ/": [
      {
        "title": "消化堆",
        "children": [
          [
            "/FAQ/DigestionHeap/Digested",
            "消化过"
          ],
          [
            "/FAQ/DigestionHeap/Digesting",
            "消化中"
          ],
          [
            "/FAQ/DigestionHeap/DigestWill",
            "待消化"
          ]
        ]
      },
      {
        "title": "输出层",
        "children": [
          [
            "/FAQ/Console/A001",
            "#A001_VuePress"
          ],
          [
            "/FAQ/Console/A002",
            "#A002_插件清单"
          ]
        ]
      },
      [
        "/FAQ/",
        "百科首页"
      ],
      [
        "/FAQ/Pool/SkillStack",
        "技术栈"
      ],
      [
        "/FAQ/Pool/Review",
        "归去来"
      ]
    ],
    "/Thought/": [
      [
        "/Thought/",
        "随笔首页"
      ],
      {
        "title": "年终回顾",
        "children": [
          [
            "/Thought/YearReview/2018",
            "2018年"
          ],
          [
            "/Thought/YearReview/2019",
            "2019年"
          ]
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "navbar": [],
  "logo": null,
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
