<template><h1 id="d001-node内存溢出解决方案" tabindex="-1"><a class="header-anchor" href="#d001-node内存溢出解决方案" aria-hidden="true">#</a> D001_node内存溢出解决方案</h1>
<blockquote>
<p>vue报错node内存不足:CALL_AND_RETRY_LAST Allocation failed</p>
<ul>
<li><a href="https://segmentfault.com/a/1190000018557398" target="_blank" rel="noopener noreferrer">转载地址<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/u/develop_" target="_blank" rel="noopener noreferrer">原作者:develop_<ExternalLinkIcon/></a></li>
<li><a href="#%E5%BF%AB%E7%85%A7">原文快照</a></li>
</ul>
</blockquote>
<p>之前项目一直是vue单页面应用，最近该需求要做vue多页面应用，运行时报错：
FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - process out of memory
是因为node内存溢出导致。</p>
<h2 id="解决方案一" tabindex="-1"><a class="header-anchor" href="#解决方案一" aria-hidden="true">#</a> &amp;解决方案一</h2>
<p>在<strong>node_modules</strong>文件夹中找到<strong>webpack.cmd</strong>文件，在倒数第二行手动给<strong>node</strong>添加参数，如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/* webpack.cmd文件 */
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe --max-old-space-size=10240"  "%~dp0\..\webpack\bin\webpack.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node --max-old-space-size=4096  "%~dp0\..\webpack\bin\webpack.js" %*
)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>我试用了此方法，重新运行过后还是报同样的错误，应该是参数没有设置上去的问题。</p>
<h2 id="解决方案二-推荐" tabindex="-1"><a class="header-anchor" href="#解决方案二-推荐" aria-hidden="true">#</a> &amp;解决方案二|推荐</h2>
<p>安装increase-memory-limit插件
全局安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token comment"># increase-memory-limit</span>
 <span class="token function">npm</span> <span class="token function">install</span> -g increase-memory-limit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>进入工程目录，执行：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> increase-memory-limit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如图：</p>
<p><img src="@source/FAQ/DigestionHeap/img/D001/D001_001.png" alt="d001_002">
安装完成后可以打开webpack.cmd文件，你会发现它自动给node添加了内存限制，如图：
<img src="@source/FAQ/DigestionHeap/img/D001/D001_002.png" alt="d001_001">
这样就解决了此报错问题。</p>
<h2 id="解决方案三" tabindex="-1"><a class="header-anchor" href="#解决方案三" aria-hidden="true">#</a> &amp;解决方案三</h2>
<p>在<strong>package.json</strong>文件中通过手动给&quot;<strong>build</strong>&quot;设置 <code>--max_old_space_size=4096</code> 来增加内存，</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"dev"</span><span class="token operator">:</span> <span class="token string">"webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"</span><span class="token punctuation">,</span>
        <span class="token property">"build"</span><span class="token operator">:</span> <span class="token string">"node --max_old_space_size=4096 build/build.js"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>然后再运行 npm run build 就可以正常打包构建了。</p>
<h2 id="快照" tabindex="-1"><a class="header-anchor" href="#快照" aria-hidden="true">#</a> 快照</h2>
<p><img src="@source/FAQ/DigestionHeap/img/D001/snap_d001.jpg" alt="快照"></p>
</template>
