/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c0fa004310c29ebfe56f45676b549427"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "99ac9ef778159bca896f1608bb0dd660"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "2365ed08e4430f05cf20eb1ce0577df0"
  },
  {
    "url": "Another/Review.html",
    "revision": "83053851e01aa3af092e1bbdb9a64da7"
  },
  {
    "url": "assets/css/0.styles.d85261ed.css",
    "revision": "a8ce0f63aa9d551fd175df40d4b55ca2"
  },
  {
    "url": "assets/img/001.b9fa5ca8.jpg",
    "revision": "b9fa5ca84f89cadc463d44c68ea8e33e"
  },
  {
    "url": "assets/img/002.3813aefb.jpg",
    "revision": "3813aefbd1ce44d9db5ed98db9cc0f4c"
  },
  {
    "url": "assets/img/003.d5ecd8fe.jpg",
    "revision": "d5ecd8fe28a5033d57d79f2bb9f4fb42"
  },
  {
    "url": "assets/img/004.6102c5a8.jpg",
    "revision": "6102c5a8da8c9c3156dacdd3e1ae6b75"
  },
  {
    "url": "assets/img/005.5ee4517a.jpg",
    "revision": "5ee4517ae8ecac8f06ba683930d8a7f3"
  },
  {
    "url": "assets/img/D001_001.0841a01f.png",
    "revision": "0841a01fd0c4946af6f80d1fdf0b24e1"
  },
  {
    "url": "assets/img/D001_002.c5284bfd.png",
    "revision": "c5284bfd8a9a18cc6cb2f081eb867f41"
  },
  {
    "url": "assets/img/githubLink.7fabd7af.jpg",
    "revision": "7fabd7af2a1a06803aa35aabfe33c5a2"
  },
  {
    "url": "assets/img/google_analysis.2edd12f3.jpg",
    "revision": "2edd12f37a95dc9fe395cb91122332b9"
  },
  {
    "url": "assets/img/google_post.e19082be.jpg",
    "revision": "e19082be1304dc86ecea9fa64a2a1dad"
  },
  {
    "url": "assets/img/linear_home.0d3acd95.jpg",
    "revision": "0d3acd9568bea627a90b9768ea9be234"
  },
  {
    "url": "assets/img/linear_scroll.396161bc.jpg",
    "revision": "396161bcf5dea38a6d98c6dca5b03f53"
  },
  {
    "url": "assets/img/logo-White.98dace1e.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "assets/img/pwa-post.5922cce0.jpg",
    "revision": "5922cce0fd661cfc16049db6d4cade75"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/snap_d001.9cd57df9.jpg",
    "revision": "9cd57df92683e9ce97495409f16d2ebb"
  },
  {
    "url": "assets/img/sw_popup_my.507a1597.png",
    "revision": "507a15970a1fbc312959602df805c514"
  },
  {
    "url": "assets/img/swpopup_demo.bddc4d9d.jpg",
    "revision": "bddc4d9dd7d3934d336a6ab1c554a5bb"
  },
  {
    "url": "assets/img/swpopup_old.1b1dfa29.jpg",
    "revision": "1b1dfa29f19c3a818a4532b97e618de2"
  },
  {
    "url": "assets/img/versions.6306b5ab.jpg",
    "revision": "6306b5ab6610e0e2cce99e20ac4cde9b"
  },
  {
    "url": "assets/js/10.03fa443e.js",
    "revision": "a2af067fcd4f363d1860f8f0b276a99f"
  },
  {
    "url": "assets/js/11.60f0c523.js",
    "revision": "fb19c01b4d421c895dd0682967fa2e17"
  },
  {
    "url": "assets/js/12.515d96bb.js",
    "revision": "48ce8bae664b5a9564d3e7e1a164a234"
  },
  {
    "url": "assets/js/13.88f6b79e.js",
    "revision": "2d9cf6614b89d5e4c6f3b6a968808db7"
  },
  {
    "url": "assets/js/14.99dd126c.js",
    "revision": "7d7b00faa32c4f427d084a5eaa8160b9"
  },
  {
    "url": "assets/js/15.b9bd9b0f.js",
    "revision": "e0d1f7e660392481310f4ce73d8f2193"
  },
  {
    "url": "assets/js/16.ec1c283c.js",
    "revision": "b7b3a318e4ec03d4220ade21c501e5a7"
  },
  {
    "url": "assets/js/17.1f429429.js",
    "revision": "d5aac86b96b12b251950467f7c9a3e0d"
  },
  {
    "url": "assets/js/18.31bf7846.js",
    "revision": "b9cb81aad70247676571dc6363f3bfec"
  },
  {
    "url": "assets/js/19.6683e3ed.js",
    "revision": "bc28b6546d2e0279e0962c0fe6a80379"
  },
  {
    "url": "assets/js/2.171a576c.js",
    "revision": "45cb1e56eacf17b0a464e57dab9b631a"
  },
  {
    "url": "assets/js/20.93514f46.js",
    "revision": "6c3336c49373e65463b9bab1576e1bc1"
  },
  {
    "url": "assets/js/21.cc5d7db5.js",
    "revision": "11798377bd00f952a908040e4cb68c1c"
  },
  {
    "url": "assets/js/22.820a7b21.js",
    "revision": "ca033cb79dcd7c1c8f7a9c89fee9f196"
  },
  {
    "url": "assets/js/23.2bcf6ccd.js",
    "revision": "bd9b7070644985cbc91a2f3d62c938ba"
  },
  {
    "url": "assets/js/24.b9ad33f8.js",
    "revision": "1bda94582f9669a6a7fc4efbaef7fc81"
  },
  {
    "url": "assets/js/25.bdfd0b22.js",
    "revision": "bd484034e6c0300f0eb034d14dd93588"
  },
  {
    "url": "assets/js/26.00f53bbe.js",
    "revision": "af21d8d8a527f80f1d026e4155d37fe7"
  },
  {
    "url": "assets/js/27.dfbc575c.js",
    "revision": "a9b1264f8c88c97bc2209115b2c93535"
  },
  {
    "url": "assets/js/28.329a0439.js",
    "revision": "348ebc6bfefd05a7ce22cb8f604a6237"
  },
  {
    "url": "assets/js/29.91a532e4.js",
    "revision": "8a14256e868754b72e7091ea02b2f41f"
  },
  {
    "url": "assets/js/3.4e1970ce.js",
    "revision": "dd91a9ffda12fd552cbde0b4159ca082"
  },
  {
    "url": "assets/js/30.19a172d3.js",
    "revision": "15c81f1002a35980be2717a9f5812433"
  },
  {
    "url": "assets/js/31.88ad7707.js",
    "revision": "7f39571890dbff05d9cf0fb1da393396"
  },
  {
    "url": "assets/js/32.f0f31a02.js",
    "revision": "5a46fb6bedf1e02afcdec27d387e152d"
  },
  {
    "url": "assets/js/4.cf2a215b.js",
    "revision": "092c18a19607d3161f7422496f50ca31"
  },
  {
    "url": "assets/js/5.257dc59e.js",
    "revision": "ff23844b51fa1c7b3d64a4db5ad15ee6"
  },
  {
    "url": "assets/js/6.a0904207.js",
    "revision": "39fe963e6fe48e4ed494b1bded39638e"
  },
  {
    "url": "assets/js/7.6d496629.js",
    "revision": "e9d8ffd087bdccd0b2d8bf42a558f1f3"
  },
  {
    "url": "assets/js/8.8b281e39.js",
    "revision": "c89cd74a80c615d347a5a0740f04e9f6"
  },
  {
    "url": "assets/js/9.02bdc9f1.js",
    "revision": "821eb6ea188dd9834966bc089b5bc430"
  },
  {
    "url": "assets/js/app.19070568.js",
    "revision": "94db1a705faf81e32f7551db8a8f6d90"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "ec985034f331bdc2750bb232faf9baec"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "b6ed90627306c05e3030c7ef35ac965e"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "fbb1343c425c1138784a7b0d8c1740d8"
  },
  {
    "url": "FAQ/DigestionHeap/D001.html",
    "revision": "aafed9f2f507f650adff9ef341d1b0be"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "52ffd49a1cdd8ba066a80219846bc87a"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "310e6a23d4fe7488f8d29b3e575ee500"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "a88e3a155205a06336f7efa5415100f6"
  },
  {
    "url": "img/links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/logo-White.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "img/logo.gif",
    "revision": "4fe18208b74ecb4b1c0bae6d1eb8a6ca"
  },
  {
    "url": "img/logo2.jpg",
    "revision": "7af828f6f609dd9f9068cff116dd330a"
  },
  {
    "url": "img/Myself/antForest.png",
    "revision": "c1210c58f6117b2d4f69d86f87df44b2"
  },
  {
    "url": "img/Myself/userHead.gif",
    "revision": "4fe18208b74ecb4b1c0bae6d1eb8a6ca"
  },
  {
    "url": "img/wiki/Baidu.png",
    "revision": "dfa63b81c92322d44db59e06cd0ad259"
  },
  {
    "url": "img/wiki/baiduHelp.png",
    "revision": "d91ad7ef1b5642a4a291ea87c563d0df"
  },
  {
    "url": "img/wiki/bing.png",
    "revision": "c6c301113aeffd8f80029a72e6e7037d"
  },
  {
    "url": "img/wiki/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/wiki/earth.png",
    "revision": "5bedfd819a77ac7d87befdff600e3a5f"
  },
  {
    "url": "img/wiki/google.png",
    "revision": "b4ddf57cc277d4ac6cb237c71b327c73"
  },
  {
    "url": "img/wiki/hacker.png",
    "revision": "7ce17c1d46025625752d9d8869e4b2d8"
  },
  {
    "url": "img/wiki/vue.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "img/wiki/Wikipedia.png",
    "revision": "a9bcbc01c4d9ca7c299b478d123a6a75"
  },
  {
    "url": "index.html",
    "revision": "d4eb29655ae49bf0757bdc2bbf9fd102"
  },
  {
    "url": "Links/Devil/index.html",
    "revision": "55d7c9b4ac04e9964924f73579747fab"
  },
  {
    "url": "Links/Wiki/index.html",
    "revision": "05a073ac46ed10232d0fd39643cc9134"
  },
  {
    "url": "Thought/index.html",
    "revision": "d1bfd322604de147cfe4c0de477d608f"
  },
  {
    "url": "Thought/TheWord/Les_Confessions.html",
    "revision": "70c77bf16be9594bab8dbf94abaeddb6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
