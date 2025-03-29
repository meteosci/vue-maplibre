import{o as e,c as o,e as l,a,b as s,d as p,_ as c}from"./app.38f957ed.js";const i={href:"https://github.com/meteosci/vue-maplibre/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},r={href:"https://github.com/meteosci/vue-maplibre/pulls",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/meteosci/vue-maplibre/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},v='{"title":"\u56FD\u9645\u5316","description":"","frontmatter":{"title":"\u56FD\u9645\u5316","lang":"zh-CN"},"headers":[{"level":2,"title":"\u5168\u5C40\u914D\u7F6E","slug":"\u5168\u5C40\u914D\u7F6E"},{"level":2,"title":"ConfigProvider","slug":"configprovider"},{"level":2,"title":"CDN \u7528\u6CD5","slug":"cdn-\u7528\u6CD5"}],"relativePath":"zh-CN/guide/i18n.md","lastUpdated":1743243451000}',k={},h=Object.assign(k,{__name:"i18n",setup(g){return(d,n)=>{const t=c;return e(),o("div",null,[n[6]||(n[6]=l(`<h1 id="\u56FD\u9645\u5316" tabindex="-1">\u56FD\u9645\u5316 <a class="header-anchor vp-link" href="#\u56FD\u9645\u5316" aria-hidden="true">#</a></h1><p>Vue Maplibre \u7EC4\u4EF6 <strong>\u9ED8\u8BA4</strong> \u4F7F\u7528\u82F1\u8BED\uFF0C\u5982\u679C\u4F60\u5E0C\u671B\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u65B9\u6848\u3002</p><h2 id="\u5168\u5C40\u914D\u7F6E" tabindex="-1">\u5168\u5C40\u914D\u7F6E <a class="header-anchor vp-link" href="#\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a></h2><p>Vue Maplibre \u63D0\u4F9B\u4E86\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u7684\u914D\u7F6E\u3002</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> VueMaplibre <span class="token keyword">from</span> <span class="token string">&#39;@meteosci/vue-maplibre&#39;</span>
<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;@meteosci/vue-maplibre/es/locale/lang/zh-cn&#39;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueMaplibre<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  locale<span class="token operator">:</span> zhCn
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="configprovider" tabindex="-1">ConfigProvider <a class="header-anchor vp-link" href="#configprovider" aria-hidden="true">#</a></h2><p>Vue Maplibre \u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A Vue \u7EC4\u4EF6 <a href="/zh-CN/component/config-provider.html" class="vp-link">ConfigProvider</a> \u7528\u4E8E\u5168\u5C40\u914D\u7F6E\u56FD\u9645\u5316\u7684\u8BBE\u7F6E\u3002</p><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vm-config-provider</span> <span class="token attr-name">:locale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>locale<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vm-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> VmConfigProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@meteosci/vue-maplibre&#39;</span>
  <span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;@meteosci/vue-maplibre/es/locale/lang/zh-cn&#39;</span>

  <span class="token keyword">const</span> locale <span class="token operator">=</span> zhCn
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="cdn-\u7528\u6CD5" tabindex="-1">CDN \u7528\u6CD5 <a class="header-anchor vp-link" href="#cdn-\u7528\u6CD5" aria-hidden="true">#</a></h2><p>\u5982\u679C\u901A\u8FC7 CDN \u4F7F\u7528 Vue Maplibre \uFF0C\u90A3\u4E48\u4F60\u9700\u8981\u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801\uFF0C\u4EE5\u4E0B\u662F\u4F7F\u7528 unpkg \u7684\u793A\u4F8B\u3002</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/@meteosci/vue-maplibre/dist/locale/zh-cn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueMaplibre<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">locale</span><span class="token operator">:</span> VueMaplibreLocaleZhCn
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5B8C\u6574\u6587\u6863\u8BE6\u89C1: <a href="/zh-CN/component/config-provider.html" class="vp-link">ConfigProvider</a></p>`,12)),a("p",null,[a("a",i,[n[0]||(n[0]=s("\u652F\u6301\u7684\u8BED\u8A00\u5217\u8868")),p(t,{class:"link-icon"})])]),n[7]||(n[7]=a("ul",{class:"language-list"},[a("li",null,"\u7B80\u4F53\u4E2D\u6587 (zh-cn)"),a("li",null,"\u7F8E\u56FD\u82F1\u8BED (en-us)")],-1)),a("p",null,[n[3]||(n[3]=s("\u5982\u679C\u4F60\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u7684\u8BED\u8A00\uFF0C\u6B22\u8FCE\u8D21\u732E ")),a("a",r,[n[1]||(n[1]=s("PR")),p(t,{class:"link-icon"})]),n[4]||(n[4]=s("\uFF0C \u53EA\u9700\u8981\u5728")),a("a",u,[n[2]||(n[2]=s("\u8FD9\u91CC")),p(t,{class:"link-icon"})]),n[5]||(n[5]=s("\u6DFB\u52A0\u4E00\u4E2A\u8BED\u8A00\u914D\u7F6E\u6587\u4EF6\u5373\u53EF\u3002"))])])}}});export{v as __pageData,h as default};
