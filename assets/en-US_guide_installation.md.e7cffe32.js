import{o,c as p,b as a,d as n,a as t,e,_ as l}from"./app.0768deef.js";const r=e('<h1 id="installation" tabindex="-1">Installation <a class="header-anchor vp-link" href="#installation" aria-hidden="true">#</a></h1><h2 id="compatibility" tabindex="-1">Compatibility <span class="vp-tag">0.0.1</span> <a class="header-anchor vp-link" href="#compatibility" aria-hidden="true">#</a></h2><p>Vue Maplibre can run on browsers that support last 2 versions.</p>',3),c={href:"https://babeljs.io/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},i=e('<p>Since Vue 3 no longer supports IE11, Vue Maplibre does not support IE either.</p><div class="vp-table"><table><thead><tr><th>version</th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png" alt=""> <br> Chrome</th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png" alt=""> <br> Edge</th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png" alt=""> <br> Firefox</th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png" alt=""> <br> Safari</th></tr></thead><tbody><tr><td>0.0.1 +</td><td>Chrome \u2265 85</td><td>Edge \u2265 85</td><td>Firefox \u2265 79</td><td>Safari \u2265 14.1</td></tr></tbody></table></div><h3 id="version" tabindex="-1">Version <a class="header-anchor vp-link" href="#version" aria-hidden="true">#</a></h3><p>Vue Maplibre is currently in a rapid development iteration.</p>',4),u={href:"https://www.npmjs.org/package/@meteosci/vue-maplibre",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},k=a("img",{src:"https://img.shields.io/npm/v/@meteosci/vue-maplibre.svg?style=flat-square",alt:""},null,-1),d=a("h2",{id:"using-package-manager",tabindex:"-1"},[n("Using Package Manager "),a("a",{class:"header-anchor vp-link",href:"#using-package-manager","aria-hidden":"true"},"#")],-1),h={href:"https://classic.yarnpkg.com/lang/en/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},g={href:"https://pnpm.io/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},m={href:"https://vitejs.dev",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},_={href:"https://webpack.js.org/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},v=e(`<div class="language-shell"><pre><code><span class="token comment"># Choose a package manager you like.</span>

<span class="token comment"># NPM</span>
$ <span class="token function">npm</span> <span class="token function">install</span> @meteosci/vue-maplibre <span class="token parameter variable">--save</span>

<span class="token comment"># Yarn</span>
$ <span class="token function">yarn</span> <span class="token function">add</span> @meteosci/vue-maplibre

<span class="token comment"># pnpm</span>
$ <span class="token function">pnpm</span> <span class="token function">install</span> @meteosci/vue-maplibre
</code></pre></div>`,1),b={href:"https://github.com/cnpm/cnpm",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},f={href:"https://registry.npmmirror.com/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},y=a("h2",{id:"import-in-browser",tabindex:"-1"},[n("Import in Browser "),a("a",{class:"header-anchor vp-link",href:"#import-in-browser","aria-hidden":"true"},"#")],-1),w=a("p",null,[n("Import Vue Maplibre through browser HTML tags directly, and use global variable "),a("code",null,"VueMaplibre"),n(".")],-1),P={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},T={href:"https://jsdelivr.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},V=e(`<h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor vp-link" href="#unpkg" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import style --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/@meteosci/vue-maplibre/dist/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/vue@3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import component library --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/@meteosci/vue-maplibre<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor vp-link" href="#jsdelivr" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import style --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@meteosci/vue-maplibre/dist/index.css<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token comment">&lt;!-- Import Vue 3 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/vue@3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- Import component library --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@meteosci/vue-maplibre<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,4),q={class:"tip custom-block"},I=a("p",{class:"custom-block-title"},"TIP",-1),j={href:"https://unpkg.com",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},x=a("h2",{id:"hello-world",tabindex:"-1"},[n("Hello World "),a("a",{class:"header-anchor vp-link",href:"#hello-world","aria-hidden":"true"},"#")],-1),N={href:"https://codepen.io/zouyaoji/pen/wvbPPNN",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},S=a("iframe",{height:"469",style:{width:"100%"},scrolling:"no",title:"wvbPPNN",src:"https://codepen.io/zouyaoji/embed/wvbPPNN?height=469&theme-id=light&default-tab=html,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},[n(" See the Pen "),a("a",{href:"https://codepen.io/zouyaoji/pen/wvbPPNN"},"wvbPPNN"),n(" by zouyaoji ("),a("a",{href:"https://codepen.io/zouyaoji"},"@zouyaoji"),n(") on "),a("a",{href:"https://codepen.io"},"CodePen"),n(". ")],-1),C=a("p",null,[n("If you are installing via package manager and want to use it with a packaging tool, please read the next section: "),a("a",{href:"/en-US/guide/quickstart.html",class:"vp-link"},"Quick Start"),n(".")],-1),B='{"title":"Installation","description":"","frontmatter":{"title":"Installation","lang":"en-US"},"headers":[{"level":2,"title":"Compatibility ^(0.0.1)","slug":"compatibility"},{"level":3,"title":"Version","slug":"version"},{"level":2,"title":"Using Package Manager","slug":"using-package-manager"},{"level":2,"title":"Import in Browser","slug":"import-in-browser"},{"level":3,"title":"unpkg","slug":"unpkg"},{"level":3,"title":"jsDelivr","slug":"jsdelivr"},{"level":2,"title":"Hello World","slug":"hello-world"}],"relativePath":"en-US/guide/installation.md","lastUpdated":1726145664000}',A={},U=Object.assign(A,{__name:"installation",setup(M){return(D,E)=>{const s=l;return o(),p("div",null,[r,a("p",null,[n("If you really need to support outdated browsers, please add "),a("a",c,[n("Babel"),t(s,{class:"link-icon"})]),n(" and Polyfill yourself.")]),i,a("p",null,[a("a",u,[k,t(s,{class:"link-icon"})])]),d,a("p",null,[a("strong",null,[n("We recommend using the package manager (NPM, "),a("a",h,[n("Yarn"),t(s,{class:"link-icon"})]),n(", "),a("a",g,[n("pnpm"),t(s,{class:"link-icon"})]),n(") to install Vue Maplibre")]),n(", so that you can utilize bundlers like "),a("a",m,[n("Vite"),t(s,{class:"link-icon"})]),n(" and "),a("a",_,[n("webpack"),t(s,{class:"link-icon"})]),n(".")]),v,a("p",null,[n("If your network environment is not good, it is recommended to use a mirror registry "),a("a",b,[n("cnpm"),t(s,{class:"link-icon"})]),n(" or "),a("a",f,[n("Alibaba"),t(s,{class:"link-icon"})]),n(".")]),y,w,a("p",null,[n("According to different CDN providers, there are different introduction methods. Here we use "),a("a",P,[n("unpkg"),t(s,{class:"link-icon"})]),n(" and "),a("a",T,[n("jsDelivr"),t(s,{class:"link-icon"})]),n(" as example. You can also use other CDN providers.")]),V,a("div",q,[I,a("p",null,[n("We recommend using CDN to import Vue Maplibre users to lock the version on the link address, so as not to be affected by incompatible updates when Vue Maplibre is upgraded in the future. Please check "),a("a",j,[n("unpkg.com"),t(s,{class:"link-icon"})]),n(" for the method to lock the version.")])]),x,a("p",null,[n("With CDN, we can easily use Vue Maplibre to write a Hello World page. "),a("a",N,[n("Online Demo"),t(s,{class:"link-icon"})])]),S,C])}}});export{B as __pageData,U as default};