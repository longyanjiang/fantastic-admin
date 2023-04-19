import{_ as s,o as a,c as n,R as l}from"./chunks/framework.14f187fd.js";const A=JSON.parse('{"title":"全局资源","description":"","frontmatter":{},"headers":[],"relativePath":"guide-vue2/global-resources.md"}'),p={name:"guide-vue2/global-resources.md"},o=l(`<h1 id="全局资源" tabindex="-1">全局资源 <a class="header-anchor" href="#全局资源" aria-label="Permalink to &quot;全局资源&quot;">​</a></h1><h2 id="图标" tabindex="-1">图标 <a class="header-anchor" href="#图标" aria-label="Permalink to &quot;图标&quot;">​</a></h2><p>现在越来越多项目开始使用 SVG 图标做为精灵图的替代品，本框架也提供了 SVG 图标支持，方便使用。推荐去<a href="https://www.iconfont.cn/" target="_blank" rel="noreferrer">阿里巴巴矢量图标库</a>下载高质量 SVG 图标。</p><p>要使用 SVG 图标也很简单，首先将 svg 文件放到 <code>/src/assets/icons/</code> 目录下，然后在页面中就可以通过 <code>&lt;svg-icon /&gt;</code> 组件使用了，name 就是 svg 文件名，如下：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">example</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">更多</p><p>专业版支持调用 <a href="https://element.eleme.cn/#/zh-CN/component/icon" target="_blank" rel="noreferrer">Element Icon</a> 和 <a href="https://remixicon.com/" target="_blank" rel="noreferrer">RemixIcon</a> ，例如：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">el-icon-edit</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ri-home-line</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div></div><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>框架用到的图片资源都放在 <code>/src/assets/images/</code> 目录下，可自行新建文件夹方便进行管理。</p><h2 id="精灵图" tabindex="-1">精灵图 <a class="header-anchor" href="#精灵图" aria-label="Permalink to &quot;精灵图&quot;">​</a></h2><p>精灵图又称雪碧图，原理是将多张小图合并到一张大图上，以便减少 HTTP 请求，提高网站访问速度。</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>在 HTTP/1.1 下，因<strong>队头阻塞</strong>的问题，如果在一个页面里需要展示多张小图，建议使用精灵图</p><p>但 HTTP/2 的<strong>多路复用</strong>特性，已经不太需要精灵图合并了，我们更建议使用 SVG 图标代替精灵图</p></div><p>精灵图原始图片的存放位置位于 <code>/src/assets/sprites/</code> 目录下，注意按文件夹区分。</p><p>项目运行前会根据文件夹生成对应的精灵图文件（精灵图图片和 <code>.scss</code> 资源文件），多个文件夹则会生成多个精灵图文件。需要注意的是，在项目运行时，修改文件夹里的图片，会重新生成相关精灵图文件，但如果新建文件夹，则需要重新运行项目才会生成对应精灵图文件。</p><p>可通过 <code>@include</code> 直接使用精灵图，无需手动引入 <code>.scss</code> 文件：</p><div class="language-scss"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 方法 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @include [文件夹名称]-sprite([文件名称]);</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">icon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">@include</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">example-sprite</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">address</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 方法 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @include all-[文件夹名称]-sprites;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@include</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">all-example-sprites</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>最终输出如下（参考）：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 方法 1 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">icon</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">210px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">210px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 方法 2 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">example-address-sprites</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">210px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">210px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">example-feedback-sprites</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-110px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">210px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">210px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">example-payment-sprites</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-110px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">210px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">210px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>如果是小型项目，静态图标不多，可全部放在一个文件夹内；如果是中大型项目，文件夹可按模块来划分，这样不同的模块最终会生成各自的精灵图文件。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>文件命名仅支持字母与数字，所有特殊符号均会被转化为 <code>-</code> ，如：</p><ul><li><code>test_123</code> =&gt; <code>test-123</code></li><li><code>test@2x</code> =&gt; <code>test-2x</code></li><li><code>test - 123</code> =&gt; <code>test-123</code></li><li><code>test$%123</code> =&gt; <code>test-123</code></li></ul><p>使用过程中如果发现无法正常展示图片，可检查生成的 <code>.scss</code> 文件，确定在代码中使用的文件名。</p></div><h2 id="样式" tabindex="-1">样式 <a class="header-anchor" href="#样式" aria-label="Permalink to &quot;样式&quot;">​</a></h2><p>样式存放目录为 <code>/src/assets/styles/</code> ，因为 Vue 的文件特性，单页的样式都写在单个 <code>.vue</code> 文件里，所以我们建议该目录只存放全局样式，方便统一管理。</p><p>此目录下还有一个特殊目录，即 <code>/src/assets/styles/resources/</code> ，这是全局 SCSS 资源目录，首先这个目录里只支持 <code>.scss</code> 文件，其次在这个目录里的文件，无需在页面上引用即可生效并使用。</p><p>同样，精灵图目录下生成的 SCSS 资源也是全局可调用的。</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>全局 SCSS 资源并不是全局样式，是变量、@mixin 、@function 这些东西</p></div>`,24),e=[o];function c(t,r,D,y,C,i){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
