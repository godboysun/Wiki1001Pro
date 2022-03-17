<template><h1 id="a002-vuepress博客搭建笔记-二-个性化配置" tabindex="-1"><a class="header-anchor" href="#a002-vuepress博客搭建笔记-二-个性化配置" aria-hidden="true">#</a> A002_VuePress博客搭建笔记（二）个性化配置</h1>
<h2 id="_00-上文回顾" tabindex="-1"><a class="header-anchor" href="#_00-上文回顾" aria-hidden="true">#</a> &amp;00.上文回顾</h2>
<p>在上文 <a href="https://mulander-j.github.io/Wiki1001Pro/FAQ/Console/A001.html" target="_blank" rel="noopener noreferrer">A001_VuePress博客搭建笔记（一）简单上手<ExternalLinkIcon/></a>
中，我简单阐述了<strong>VuePress</strong>博客搭建的过程，并对其中的一些问题进行分析记录，
包括<strong>首页</strong>，<strong>侧边栏</strong>，<strong>导航栏</strong>，<strong>浏览器书签引入</strong>，<strong>挂载githubPage</strong>等等。</p>
<p>本文将围绕着博客的<strong>个性化配置</strong>作一个整理。</p>
<p>首先引用官网的原文重申一次<strong>VuePress</strong>博客搭建的过程：</p>
<div class="custom-container tip"><p class="custom-container-title">Start</p>
<p><strong>As Easy as 1, 2, 3</strong></p>
</div>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># install</span>
<span class="token function">yarn</span> global <span class="token function">add</span> vuepress@next 
<span class="token comment"># OR npm install -g vuepress@next</span>

<span class="token comment"># create a markdown file</span>
<span class="token builtin class-name">echo</span> <span class="token string">'# Hello VuePress'</span> <span class="token operator">></span> README.md

<span class="token comment"># start writing</span>
vuepress dev

<span class="token comment"># build to static files</span>
vuepress build

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_01-版本推荐" tabindex="-1"><a class="header-anchor" href="#_01-版本推荐" aria-hidden="true">#</a> &amp;01.版本推荐</h2>
<p><strong>VuePress</strong>的官网目前是存在两个版本的，分别为0.x版本和最新的1.x的alpha版本。
在实际开发中，我经常因为混淆版本而导致一些插件不能正常引入，当然这也是因为我对<strong>VuePress</strong>的使用还不熟练。
打开<strong>VuePress</strong>的官网，如果有下面绿色的Notice弹出，说明是1.x版本。</p>
<p><img src="@source/FAQ/Console/img/A002/versions.jpg" alt="versions"></p>
<ul>
<li>
<p>0.x 的文档: <a href="https://v0.vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">v0.vuepress.vuejs.org<ExternalLinkIcon/></a></p>
</li>
<li>
<p>1.x 的文档: <a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">v1.alpha.vuepress.vuejs.org<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>如果是开发者，建议安装最新版<strong>VuePress</strong>，体验最新的轮子~</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> vuepress -D       <span class="token comment"># Install 0.x.x.</span>
<span class="token function">yarn</span> <span class="token function">add</span> vuepress@next -D  <span class="token comment"># Install next.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_03-github链接" tabindex="-1"><a class="header-anchor" href="#_03-github链接" aria-hidden="true">#</a> &amp;03.Github链接</h2>
<p>与github关联的页脚链接和导航栏链接，</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
* config.js
* <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">{</span>themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>lastUpdated<span class="token operator">:</span> string<span class="token punctuation">,</span> repoLabel<span class="token operator">:</span> string<span class="token punctuation">,</span> 
<span class="token operator">*</span> docsDir<span class="token operator">:</span> string<span class="token punctuation">,</span> repo<span class="token operator">:</span> string<span class="token punctuation">,</span> editLinkText<span class="token operator">:</span> string<span class="token punctuation">,</span> 
<span class="token operator">*</span> docsRepo<span class="token operator">:</span> string<span class="token punctuation">,</span> editLinks<span class="token operator">:</span> boolean<span class="token punctuation">,</span> docsBranch<span class="token operator">:</span> string<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>
*/</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 假定是 GitHub. 同时也可以是一个完整的 GitLab URL</span>
        <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">'https://github.com/Mulander-J/Wiki1001Pro.git'</span><span class="token punctuation">,</span>
        <span class="token comment">// 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为</span>
        <span class="token comment">// "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。</span>
        <span class="token literal-property property">repoLabel</span><span class="token operator">:</span> <span class="token string">'GitHub'</span><span class="token punctuation">,</span>
        <span class="token comment">// 以下为可选的编辑链接选项</span>
        <span class="token comment">// 假如你的文档仓库和项目本身不在一个仓库：</span>
        <span class="token literal-property property">docsRepo</span><span class="token operator">:</span> <span class="token string">'https://github.com/Mulander-J/Wiki1001Dev'</span><span class="token punctuation">,</span>
        <span class="token comment">// 假如文档不是放在仓库的根目录下：</span>
        <span class="token literal-property property">docsDir</span><span class="token operator">:</span> <span class="token string">'docs'</span><span class="token punctuation">,</span>
        <span class="token comment">// 假如文档放在一个特定的分支下：</span>
        <span class="token literal-property property">docsBranch</span><span class="token operator">:</span> <span class="token string">'master'</span><span class="token punctuation">,</span>
        <span class="token comment">// 默认是 false, 设置为 true 来启用</span>
        <span class="token literal-property property">editLinks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 默认为 "Edit this page"</span>
        <span class="token literal-property property">editLinkText</span><span class="token operator">:</span> <span class="token string">'博主通道__GitHub Private Repo ！'</span><span class="token punctuation">,</span>
        <span class="token comment">// 文档更新时间：每个文件git最后提交的时间,</span>
        <span class="token literal-property property">lastUpdated</span><span class="token operator">:</span> <span class="token string">'Last Updated'</span> <span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><img src="@source/FAQ/Console/img/A002/githubLink.jpg" alt="githubLink"></p>
<h2 id="_04-个性化主题" tabindex="-1"><a class="header-anchor" href="#_04-个性化主题" aria-hidden="true">#</a> &amp;04.个性化主题</h2>
<h3 id="主题修改" tabindex="-1"><a class="header-anchor" href="#主题修改" aria-hidden="true">#</a> 主题修改</h3>
<ul>
<li>下载默认主题</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @vuepress/theme-default@next
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>替换</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">##复制node_modules/@vuepress/theme-default 文件夹</span>
<span class="token comment">##粘贴至.vuepress/ 下并更名为theme</span>

Dev
├─── docs
│   └── .vuepress   // 配置目录
│   │    ├── public // 静态资源
│   │    ├── theme // 主题
│   │    │   ├── components // 组件
│   │    │   ├── global-components // 全局组件
│   │    │   ├── global-components // 全局组件
│   │    │   ├── layouts // 布局<span class="token punctuation">(</span>包括首页在内<span class="token punctuation">)</span>
│   │    │   ├── styles // 样式
│   │    │   ├── util // 工具
│   │    │   ├── index.js // 入口配置
│   │    │   ├── noopModule.js // 依赖注入
│   │    │   ├── package.json // 主题依赖
│   │    │   ├── README.md // 主题说明
│   │    └── config.js
│   ├── FAQ     // 求索模块
│   ├── Store   // 仓库模块
│   ├── Thought // 随笔模块
│   └── README.md   // 博客首页
└── package.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><ul>
<li>运行</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>关注控制台输出</p>
<p><code>tip Apply theme located at G:\WorkSpace\WebStormWS\Wiki1001\Dev\docs\.vuepress\theme...</code></p>
<p>若果控制台能看到上面这句话或者页面能正常渲染的话，就表示主题引入成功</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token string">"C:\Program Files<span class="token entity" title="\n">\n</span>odejs<span class="token entity" title="\n">\n</span>ode.exe"</span> <span class="token string">"C:\Program Files<span class="token entity" title="\n">\n</span>odejs<span class="token entity" title="\n">\n</span>ode_modules<span class="token entity" title="\n">\n</span>pm<span class="token entity" title="\b">\b</span>in<span class="token entity" title="\n">\n</span>pm-cli.js"</span> run dev --scripts-prepend-node-path<span class="token operator">=</span>auto

<span class="token operator">></span> wiki1001@1.0.0 dev G:<span class="token punctuation">\</span>WorkSpace<span class="token punctuation">\</span>WebStormWS<span class="token punctuation">\</span>Wiki1001<span class="token punctuation">\</span>Dev
<span class="token operator">></span> vuepress dev docs

<span class="token function">wait</span> Extracting site metadata<span class="token punctuation">..</span>.
tip Apply theme located at G:<span class="token punctuation">\</span>WorkSpace<span class="token punctuation">\</span>WebStormWS<span class="token punctuation">\</span>Wiki1001<span class="token punctuation">\</span>Dev<span class="token punctuation">\</span>docs<span class="token punctuation">\</span>.vuepress<span class="token punctuation">\</span>theme<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>接下来就可以对这份theme项目作修改了，</p>
<p>它就是载负你的博客的一个简单的VUe单页面项目。</p>
<h3 id="滚动条样式" tabindex="-1"><a class="header-anchor" href="#滚动条样式" aria-hidden="true">#</a> 滚动条样式</h3>
<p>设置页面滚动条为渐变色&amp;圆角样式</p>
<blockquote>
<p>参考</p>
<ul>
<li><a href="https://segmentfault.com/a/1190000003708894" target="_blank" rel="noopener noreferrer">CSS进阶篇--设置滚动条样式<ExternalLinkIcon/></a></li>
</ul>
</blockquote>
<p><img src="@source/FAQ/Console/img/A002/linear_scroll.jpg" alt="linear_scroll"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/</span>
<span class="token selector">::-webkit-scrollbar</span>
<span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*定义滚动条轨道 内阴影+圆角*/</span>
<span class="token selector">::-webkit-scrollbar-track</span>
<span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #F5F5F5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/*定义滑块 内阴影+圆角*/</span>
<span class="token selector">::-webkit-scrollbar-thumb</span>
<span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">-webkit-box-shadow</span><span class="token punctuation">:</span> inset 0 0 6px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token comment">/* 线性渐变 */</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-gradient</span><span class="token punctuation">(</span>linear<span class="token punctuation">,</span> 
  left bottom<span class="token punctuation">,</span> left top<span class="token punctuation">,</span>
   <span class="token function">color-stop</span><span class="token punctuation">(</span>0.44<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>60<span class="token punctuation">,</span>186<span class="token punctuation">,</span>146<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
   <span class="token function">color-stop</span><span class="token punctuation">(</span>0.72<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>253<span class="token punctuation">,</span>187<span class="token punctuation">,</span>45<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
   <span class="token function">color-stop</span><span class="token punctuation">(</span>0.86<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>253<span class="token punctuation">,</span>187<span class="token punctuation">,</span>45<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> 0.3s ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/*定义滑块悬浮样式*/</span>
<span class="token selector">::-webkit-scrollbar-thumb:hover</span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-gradient</span><span class="token punctuation">(</span>linear<span class="token punctuation">,</span> 
  left bottom<span class="token punctuation">,</span> left top<span class="token punctuation">,</span> 
  <span class="token function">color-stop</span><span class="token punctuation">(</span>0.44<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>253<span class="token punctuation">,</span>187<span class="token punctuation">,</span>45<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
  <span class="token function">olor-stop</span><span class="token punctuation">(</span>0.72<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>253<span class="token punctuation">,</span>187<span class="token punctuation">,</span>45<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
  <span class="token function">color-stop</span><span class="token punctuation">(</span>0.86<span class="token punctuation">,</span> <span class="token function">rgb</span><span class="token punctuation">(</span>60<span class="token punctuation">,</span>186<span class="token punctuation">,</span>146<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> 0.3s ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="渐变色标题" tabindex="-1"><a class="header-anchor" href="#渐变色标题" aria-hidden="true">#</a> 渐变色标题</h3>
<p><img src="@source/FAQ/Console/img/A002/linear_home.jpg" alt="linear_home"></p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">h1</span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span>
   #22c1c3<span class="token punctuation">,</span> #fdbb2d 25%<span class="token punctuation">,</span> #22c1c3 50%<span class="token punctuation">,</span> #fdbb2d 75%<span class="token punctuation">,</span> #22c1c3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-background-size</span><span class="token punctuation">:</span> 200% 100%<span class="token punctuation">;</span>
  <span class="token property">-webkit-animation</span><span class="token punctuation">:</span> myGradientChange 4s infinite linear<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> myGradientChange 4s infinite linear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.description,.card h2</span><span class="token punctuation">{</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">-webkit-linear-gradient</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span>
   #fdbb2d<span class="token punctuation">,</span> #22c1c3 25%<span class="token punctuation">,</span> #fdbb2d 50%<span class="token punctuation">,</span> #22c1c3 75%<span class="token punctuation">,</span> #fdbb2d<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-text-fill-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">-webkit-background-clip</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
  <span class="token property">-webkit-background-size</span><span class="token punctuation">:</span> 200% 100%<span class="token punctuation">;</span>
  <span class="token property">-webkit-animation</span><span class="token punctuation">:</span> myGradientChange 4s infinite linear<span class="token punctuation">;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> myGradientChange 4s infinite linear<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> myGradientChange</span>  <span class="token punctuation">{</span>
  <span class="token selector">0%</span><span class="token punctuation">{</span> <span class="token property">background-position</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span><span class="token punctuation">}</span>
  <span class="token selector">100%</span> <span class="token punctuation">{</span> <span class="token property">background-position</span><span class="token punctuation">:</span> -100% 0<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="gotoend" tabindex="-1"><a class="header-anchor" href="#gotoend" aria-hidden="true">#</a> GoToEnd</h3>
<p><img src="@source/FAQ/Console/img/A002/goTopEnd.jpg" alt="goTopEnd"></p>
<ul>
<li>下载官方组件BackToTop</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @vuepress/plugin-back-top@next
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>本地化BackToTop组件至Layout.vue中，包括首页在内都会生产该组件</li>
</ul>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//  复制node_modules/@vuepress/plugin-back-top/BackToTop.vue
//  粘贴至.vuepress/theme/components
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BackToTop</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BackToTop</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> BackToTop <span class="token keyword">from</span> <span class="token string">'../components/BackToTop.vue'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> BackToTop<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><ul>
<li>修改Back To Top 组件</li>
</ul>
<p>复制一个Back To Top DOM节点同时修改 <strong>transition</strong> 为 <strong>transition-group</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition-group</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fade<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>
      <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>topShow<span class="token punctuation">"</span></span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>go-to-top<span class="token punctuation">"</span></span>
      <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goTop<span class="token punctuation">"</span></span>
      <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollToTop<span class="token punctuation">"</span></span>
      <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 49.484 28.284<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">transform</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>translate(-229 -126.358)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentColor<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>35<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">transform</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>translate(229 151.107) rotate(-45)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentColor<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>35<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">transform</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>translate(274.949 154.642) rotate(-135)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span>
            <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>endShow<span class="token punctuation">"</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>go-to-top go-to-end<span class="token punctuation">"</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scrollToEnd<span class="token punctuation">"</span></span>
            <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goEnd<span class="token punctuation">"</span></span>
            <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 49.484 28.284<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">transform</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>translate(-229 -126.358)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentColor<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>35<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">transform</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>translate(229 151.107) rotate(-45)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>currentColor<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>35<span class="token punctuation">"</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span> <span class="token attr-name">rx</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">transform</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>translate(274.949 154.642) rotate(-135)<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition-group</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>增加 变量 <strong>scrollEnd</strong> , <strong>endShow</strong></p>
<p>方法 <strong>getScrollEnd()</strong> ,<strong>scrollToEnd()</strong></p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> debounce <span class="token keyword">from</span> <span class="token string">'lodash.debounce'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">300</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">scrollTop</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      <span class="token literal-property property">scrollEnd</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getScrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>scrollEnd <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getScrollEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getScrollTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>scrollEnd <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getScrollEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getScrollTop</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> window<span class="token punctuation">.</span>pageYOffset <span class="token operator">||</span>
        document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span>
        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollTop <span class="token operator">||</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">getScrollEnd</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollHeight <span class="token operator">||</span>
              document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollHeight <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>threshold
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">scrollToTop</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">'smooth'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">scrollToEnd</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scrollEnd<span class="token punctuation">,</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">'smooth'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scrollEnd
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">topShow</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scrollTop <span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>threshold
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">endShow</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>scrollEnd <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>scrollTop<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">3</span><span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">.</span>threshold
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><p>增加置底按钮样式，z轴旋转180度</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>stylus<span class="token punctuation">'</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.go-to-top</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 5rem<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 2.5rem<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> $accentColor<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.go-to-end</span><span class="token punctuation">{</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotateZ</span><span class="token punctuation">(</span>180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.go-to-top:hover</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">lighten</span><span class="token punctuation">(</span>$accentColor<span class="token punctuation">,</span> 30%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 959px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.go-to-top</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token selector">.fade-enter-active, .fade-leave-active</span> <span class="token punctuation">{</span>
  <span class="token property">transition</span><span class="token punctuation">:</span> opacity 0.3s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.fade-enter, .fade-leave-to</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="_05-插件-pwa" tabindex="-1"><a class="header-anchor" href="#_05-插件-pwa" aria-hidden="true">#</a> &amp;05.插件-PWA</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D @vuepress/plugin-pwa
<span class="token comment"># OR npm install -D @vuepress/plugin-pwa</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//config,js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token comment">// ...</span>
 <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'@vuepress/pwa'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">serviceWorker</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">//指向自定义组件</span>
        <span class="token literal-property property">popupComponent</span><span class="token operator">:</span> <span class="token string">'MySWUpdatePopup'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">updatePopup</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"新的风暴已经出现"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">"盘他"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
 <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>serviceWorker的作用大致就页面首次加载时会请求本地的serviceWorker.js去比对各个文件的版本号
如果不一致则提示用户拉取更新
<img src="@source/FAQ/Console/img/A002/pwa-post.jpg" alt="pwa-post">
不过这个popup的默认样式很丑😨，所以官方也提供了自定义popup的接口和教程</p>
<div class="custom-container danger"><p class="custom-container-title">默认样式</p>
<p>这是原始的...eh</p>
</div>
<p><img src="@source/FAQ/Console/img/A002/swpopup_old.jpg" alt="swpopup_old"></p>
<div class="custom-container warning"><p class="custom-container-title">官网Demo</p>
<p>这是官网给的模板 = = 阿咧？</p>
</div>
<p><img src="@source/FAQ/Console/img/A002/swpopup_demo.jpg" alt="swpopup_demo"></p>
<div class="custom-container tip"><p class="custom-container-title">我的Demo</p>
<p>这是我的...emmm..可还行呢，凑合用了。这个vue的logo还会动的，不算侵权吧😱...@Vue??</p>
<p>P.S.这个popup 的内容是我自定义写的，不是官方在皮啊</p>
<blockquote>
<p>参考</p>
<ul>
<li><a href="https://segmentfault.com/a/1190000014599280" target="_blank" rel="noopener noreferrer">前端每日实战：4# 视频演示如何用纯 CSS 创作一个金属光泽 3D 按钮特效<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/a/1190000015177284" target="_blank" rel="noopener noreferrer">前端每日实战：43# 视频演示如何用纯 CSS 绘制一个充满动感的 Vue logo<ExternalLinkIcon/></a></li>
</ul>
</blockquote>
</div>
<p><img src="@source/FAQ/Console/img/A002/sw_popup_my.png" alt="sw_popup_my"></p>
<div class="custom-container danger"><p class="custom-container-title">注意</p>
<p><code>v-if=&quot;enabled&quot;</code> // 添加这一段指令，否则popup无法消失</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SWUpdatePopup</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>   <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>enabled<span class="token punctuation">"</span></span> 
            <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ enabled, reload, message, buttonText }<span class="token punctuation">"</span></span>
            <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-sw-update-popup<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        {{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reload<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ buttonText }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SWUpdatePopup</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div>
<h2 id="_06-插件-google-analytics" tabindex="-1"><a class="header-anchor" href="#_06-插件-google-analytics" aria-hidden="true">#</a> &amp;06.插件-google-analytics</h2>
<ul>
<li><s>首先你要有一个谷歌账号，</s></li>
<li><s>然后有一个 google analytics（GA）账户</s></li>
<li><s>然后...</s></li>
<li><s>不用麻烦了不用麻烦了</s></li>
<li><s>不用麻烦 不用麻烦了 不用麻烦了</s></li>
<li><s>你们一起上 我在赶时间</s></li>
<li><a href="https://jingyan.baidu.com/article/066074d6093cf8c3c21cb0e3.html" target="_blank" rel="noopener noreferrer">如何注册并设置google analytics（GA）账户<ExternalLinkIcon/></a></li>
<li><strong>GA-ID ゲットだゼーツ！</strong></li>
</ul>
<p><img src="@source/FAQ/Console/img/A002/google_analysis.jpg" alt="google_analysis"></p>
<ul>
<li>安装并使用 <strong>google_analysis</strong></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D @vuepress/plugin-google-analytics
<span class="token comment"># OR npm install -D @vuepress/plugin-google-analytics</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
<span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">'@vuepress/google-analytics'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">ga</span><span class="token operator">:</span> <span class="token string">'*********'</span><span class="token comment">//你的Google Analytics ID</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>google_analysis</strong> 会实时监控你的<strong>url</strong>，倘若一个页面有多个h2,h3标题，滑动滚动条导致<strong>url</strong>的变化也会被捕捉到。</p>
<p><img src="@source/FAQ/Console/img/A002/google_post.jpg" alt="google_post"></p>
<h2 id="_07-评论系统-valine" tabindex="-1"><a class="header-anchor" href="#_07-评论系统-valine" aria-hidden="true">#</a> &amp;07.评论系统-Valine</h2>
<blockquote>
<p>参考</p>
<ul>
<li><a href="https://blog.csdn.net/HookJony/article/details/82027550" target="_blank" rel="noopener noreferrer">Vuepress搭建带有评论系统的博客<ExternalLinkIcon/></a></li>
<li><a href="https://valine.js.org/" target="_blank" rel="noopener noreferrer">A fast, simple &amp; powerful comment system. Valine<ExternalLinkIcon/></a></li>
</ul>
</blockquote>
<ul>
<li>获取APP ID 和 APP Key,请先登录或注册 <strong>LeanCloud</strong>, 进入控制台后点击左下角创建应用</li>
<li>安装并使用 <strong>Valine</strong></li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># Install leancloud's js-sdk</span>
<span class="token function">npm</span> <span class="token function">install</span> leancloud-storage --save
<span class="token comment"># Install valine</span>
<span class="token function">npm</span> <span class="token function">install</span> valine --save
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Register AV objects to the global</span>
window<span class="token punctuation">.</span><span class="token constant">AV</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'leancloud-storage'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Use import</span>
<span class="token keyword">import</span> Valine <span class="token keyword">from</span> <span class="token string">'valine'</span><span class="token punctuation">;</span>
<span class="token comment">// or Use require</span>
<span class="token keyword">const</span> Valine <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'valine'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Valine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">'#vcomments'</span><span class="token punctuation">,</span>
    <span class="token comment">// other config</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code>//Page.vue
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
     <span class="token function-variable function">mounted</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// require window </span>
        <span class="token keyword">const</span> Valine <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'valine'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>window <span class="token operator">=</span> window
          window<span class="token punctuation">.</span><span class="token constant">AV</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'leancloud-storage'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">new</span> <span class="token class-name">Valine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#vcomments'</span> <span class="token punctuation">,</span>
          <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span><span class="token comment">// your appId</span>
          <span class="token literal-property property">appKey</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// your appKey</span>
          <span class="token literal-property property">notify</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//邮箱通知，可关闭</span>
          <span class="token literal-property property">verify</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//反人类的算术验证码，建议关闭</span>
          <span class="token literal-property property">avatar</span><span class="token operator">:</span><span class="token string">'mm'</span><span class="token punctuation">,</span> <span class="token comment">//头像，默认即可</span>
          <span class="token literal-property property">visitor</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//访问计数</span>
          <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'just go go'</span> 
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">Issue</p>
<p>不管地址栏怎么变化，不管怎么切页面，评论内容不会随地址栏变化而变化，即无法同步。</p>
<p><strong>Valine</strong>实例与<strong>leancloud-storage</strong>实例 在每次页面加载时会向服务器发起
带当前url参数的请求以获取评论数据，而这个url参数每次都是一样。</p>
</div>
<p>首先<strong>Valine</strong> 实例与 <strong>leancloud-storage</strong> 实例都在 <strong>mounted</strong> 钩子中初始化或挂载至 <strong>window</strong> 对象上了，</p>
<p>当页面 <strong>url</strong> 变化时，<strong>Page.vue</strong> 本身并没有变化，只是它身上的<code>&lt;Content/&gt;</code>内容变了，<strong>mounted</strong>没有重新触发，上面两个实例也没有改变。</p>
<div class="custom-container danger"><p class="custom-container-title">血的教训</p>
<p>不要在 md 文件中直接写<code>&lt;Content/&gt;</code>,请用其他格式编译它，否则会被<strong>vuepress</strong>识别为组件而不断加载陷入死循环。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>Vue warn<span class="token punctuation">]</span><span class="token operator">:</span> Error <span class="token keyword">in</span> <span class="token literal-property property">nextTick</span><span class="token operator">:</span> <span class="token string">"RangeError: Maximum call stack size exceeded"</span>
warn @ vue<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span>esm<span class="token punctuation">.</span>js<span class="token operator">?</span>2b0e<span class="token operator">:</span><span class="token number">601</span>
vue<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span>esm<span class="token punctuation">.</span>js<span class="token operator">?</span>2b0e<span class="token operator">:</span><span class="token number">1832</span> <span class="token literal-property property">RangeError</span><span class="token operator">:</span> Maximum call stack size exceeded
</code></pre><div class="highlight-lines"><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>只是它身上的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Content</span><span class="token punctuation">/></span></span>内容变了，
只是它身上的<span class="token code-snippet code keyword">`&lt;Content/>`</span>内容变了，
</code></pre><div class="highlight-lines"><br><div class="highlight-line">&nbsp;</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div>
<ul>
<li>如果重新 init 两个实例呢？
<ul>
<li>通过 <strong>watch $route</strong> 重新 <strong>new</strong> 两个实例也不行。</li>
<li>在每个页面的写入 带 <strong>Valine</strong> 的.vue组件也不行。</li>
</ul>
</li>
</ul>
<p>暂时无法解决...emmm,欲知后事如何，请听下回分解..</p>
<p>欸，应该没有（三）了，等解决了直接写在评论里吧。</p>
<p>大家有解决方法的话也欢迎在下方留言，留言前请 <strong>【 F5 】</strong> 刷新下确保评论会提交到当前页面😂😂😂</p>
<hr>
<h2 id="解决valine不随页面刷新" tabindex="-1"><a class="header-anchor" href="#解决valine不随页面刷新" aria-hidden="true">#</a> &amp;解决Valine不随页面刷新</h2>
<p>Page.vue 改动如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//  docs/.vuepress/theme/components/Page.vue</span>
<span class="token operator">&lt;</span>script<span class="token operator">></span>
<span class="token keyword">import</span><span class="token operator">...</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
   <span class="token comment">// 初始化Valine组件</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderValine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span> <span class="token operator">:</span><span class="token punctuation">{</span>
     <span class="token comment">// 路由变化时重新初始化Valine组件</span>
    <span class="token function">$route</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>path<span class="token operator">!=</span>b<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">renderValine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//  生成评论组件的 Dom 元素</span>
    <span class="token function">renderValine</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//  因为此方法会构建dom节点，所以&lt;template>中不需要再加相关dom元素</span>
      <span class="token keyword">let</span> $page <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.page'</span><span class="token punctuation">)</span>
      <span class="token keyword">let</span> vcomments <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'vcomments'</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>vcomments<span class="token punctuation">)</span><span class="token punctuation">{</span>
        vcomments <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span>
        vcomments<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">'vcomments'</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$page<span class="token punctuation">.</span>frontmatter<span class="token punctuation">.</span>hideFooter<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">//    如果forntmatter中标注'hideFooter：true'则不渲染评论组件，</span>
      <span class="token comment">//    使得评论组件在各个页面的显示可控</span>
        vcomments<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>$page <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>vcomments<span class="token punctuation">)</span><span class="token punctuation">{</span>
          $page<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>vcomments<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
          $page <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.page'</span><span class="token punctuation">)</span>
          $page<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>vcomments<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">valine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">//  初始化valine实例</span>
    <span class="token function">valine</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> Valine <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'valine'</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> leancloudStorage <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'leancloud-storage'</span><span class="token punctuation">)</span>
      <span class="token comment">// require window</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">'undefined'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token constant">AV</span> <span class="token operator">=</span> leancloudStorage
      <span class="token punctuation">}</span>
      <span class="token comment">//    配置valine参数</span>
      <span class="token keyword">new</span> <span class="token class-name">Valine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#vcomments'</span> <span class="token punctuation">,</span>
        <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span><span class="token comment">// your appId</span>
        <span class="token literal-property property">appKey</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// your appKey</span>
        <span class="token literal-property property">notify</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">verify</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">visitor</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">avatar</span><span class="token operator">:</span><span class="token string">'wavatar'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">'春霄苦短，少女前进吧！'</span> <span class="token operator">+</span><span class="token string">'\n'</span><span class="token operator">+</span>
                <span class="token string">'夜は短し歩けよ乙女！'</span> <span class="token operator">+</span><span class="token string">'\n'</span><span class="token operator">+</span>
                <span class="token string">'Yoru wa Mijikashi Arukeyo Otome!'</span> <span class="token operator">+</span><span class="token string">'\n'</span><span class="token operator">+</span>
                <span class="token string">'The Night is Short, Walk on Girl!'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div></template>
