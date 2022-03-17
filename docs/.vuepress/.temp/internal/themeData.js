export const themeData = {
  "repo": "https://github.com/Mulander-J/wiki1001.git",
  "repoLabel": "GitHub",
  "docsRepo": "https://github.com/Mulander-J/wiki1001",
  "docsDir": "docs",
  "docsBranch": "master",
  "editLinks": false,
  "editLinkText": "Git EditLink [Private]",
  "lastUpdated": "Last Updated",
  "sidebarDepth": 2,
  "nav": [
    {
      "text": "Wiki",
      "link": "/Links/Wiki/"
    },
    {
      "text": "Devil",
      "link": "/Links/Devil/"
    },
    {
      "text": "FAQ",
      "link": "/FAQ/Console/A000"
    },
    {
      "text": "Thought",
      "link": "/Thought/"
    },
    {
      "text": "Another",
      "items": [
        {
          "text": "AboutMe",
          "link": "/Another/MySelf"
        },
        {
          "text": "Fillory",
          "link": "/Another/Fillory"
        },
        {
          "text": "Review",
          "link": "/Another/Review"
        }
      ]
    }
  ],
  "sidebar": {
    "/FAQ/": [
      {
        "title": "Console",
        "children": [
          [
            "/FAQ/Console/A000",
            "#FAQ1000"
          ],
          [
            "/FAQ/Console/A001",
            "#A001_VuePress_1"
          ],
          [
            "/FAQ/Console/A002",
            "#A002_VuePress_2"
          ]
        ]
      },
      {
        "title": "Digest",
        "children": [
          [
            "/FAQ/DigestionHeap/DigestWill",
            "#DigestWill"
          ],
          [
            "/FAQ/DigestionHeap/Digesting",
            "#Digesting"
          ],
          [
            "/FAQ/DigestionHeap/Digested",
            "#Digested"
          ],
          [
            "/FAQ/DigestionHeap/D001",
            "#D001_node内存溢出"
          ]
        ]
      }
    ],
    "/Thought/": [
      [
        "",
        "Thought"
      ],
      {
        "title": "断章取义",
        "children": [
          [
            "/Thought/TheWord/Les_Confessions",
            "#《忏悔录》"
          ]
        ]
      }
    ],
    "/Another/": [
      [
        "/Another/Fillory",
        "#Fillory"
      ],
      [
        "/Another/Review",
        "#Review"
      ]
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
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
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
