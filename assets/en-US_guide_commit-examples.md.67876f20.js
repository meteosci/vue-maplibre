import{o as a,c as o,b as t,d as e,a as s,e as i,_ as l}from"./app.43a3377c.js";const p=t("h1",{id:"commit-examples",tabindex:"-1"},[e("Commit Examples "),t("a",{class:"header-anchor vp-link",href:"#commit-examples","aria-hidden":"true"},"#")],-1),c=t("h2",{id:"why-this-chapter-exists",tabindex:"-1"},[e("Why this chapter exists "),t("a",{class:"header-anchor vp-link",href:"#why-this-chapter-exists","aria-hidden":"true"},"#")],-1),r={href:"https://www.conventionalcommits.org/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>A good commit message enables us:</p><ol><li>To understand what the contributor is trying to do</li><li>Automatically generates change log</li></ol><h3 id="rule-for-writing-commit-message" tabindex="-1">Rule for writing commit message <a class="header-anchor vp-link" href="#rule-for-writing-commit-message" aria-hidden="true">#</a></h3><div class="language-md"><pre><code><span class="token title important"><span class="token punctuation">#</span> (If applied, this commit will...) &lt;subject&gt; (Max 72 characters)</span>

<span class="token title important"><span class="token punctuation">#</span> |&lt;---- Using a Maximum Of 72 Characters ----&gt;|</span>

<span class="token title important"><span class="token punctuation">#</span> Explain why this change is being made</span>

<span class="token title important"><span class="token punctuation">#</span> |&lt;---- Try To Limit Each Line to a Maximum Of 72 Characters ----&gt;|</span>

<span class="token title important"><span class="token punctuation">#</span> Provide links or keys to any relevant tickets, articles or other resources</span>

<span class="token title important"><span class="token punctuation">#</span> Use issues and merge requests&#39; full URLs instead of short references,</span>

<span class="token title important"><span class="token punctuation">#</span> as they are displayed as plain text outside of GitLab</span>

<span class="token title important"><span class="token punctuation">#</span> --- COMMIT END ---</span>

<span class="token title important"><span class="token punctuation">#</span> --------------------</span>

<span class="token title important"><span class="token punctuation">#</span> Remember to</span>

<span class="token title important"><span class="token punctuation">#</span> Capitalize the subject line</span>

<span class="token title important"><span class="token punctuation">#</span> Use the imperative mood in the subject line</span>

<span class="token title important"><span class="token punctuation">#</span> Do not end the subject line with a period</span>

<span class="token title important"><span class="token punctuation">#</span> Subject must contain at least 3 words</span>

<span class="token title important"><span class="token punctuation">#</span> Separate subject from body with a blank line</span>

<span class="token title important"><span class="token punctuation">#</span> Commits that change 30 or more lines across at least 3 files should</span>

<span class="token title important"><span class="token punctuation">#</span> describe these changes in the commit body</span>

<span class="token title important"><span class="token punctuation">#</span> Use the body to explain what and why vs. how</span>

<span class="token title important"><span class="token punctuation">#</span> Can use multiple lines with &quot;-&quot; for bullet points in body</span>

<span class="token title important"><span class="token punctuation">#</span> For more information: https://chris.beams.io/posts/git-commit/</span>

<span class="token title important"><span class="token punctuation">#</span> --------------------</span>
</code></pre></div><h3 id="template-for-commit-messages" tabindex="-1">Template for commit messages <a class="header-anchor vp-link" href="#template-for-commit-messages" aria-hidden="true">#</a></h3><p>Below is a template commit message for your reference.</p><div class="language-md"><pre><code>feat(components): [button] I did something with button

Blank between subject and body is expected.(period is expected)
Describes your change in one line or multi-line.
Capitalize your first letter when starting a new line
Please do not exceeds 72 characters per line, because that would be harder to comprehend.

<span class="token list punctuation">-</span> You can also add bullet list symbol for better layout
</code></pre></div><p>For the subject header, the format is:</p><div class="language-"><pre><code>[type](scope): [messages]
</code></pre></div>`,9),u=t("strong",null,"type",-1),h=t("strong",null,"scope",-1),d={href:"https://github.com/meteosci/vue-maplibre/blob/dev/commitlint.config.js#L41",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},k=t("h3",{id:"useful-links",tabindex:"-1"},[e("Useful links "),t("a",{class:"header-anchor vp-link",href:"#useful-links","aria-hidden":"true"},"#")],-1),g={href:"https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},w='{"title":"Commit Examples","description":"","frontmatter":{"title":"Commit Examples","lang":"en-US"},"headers":[{"level":2,"title":"Why this chapter exists","slug":"why-this-chapter-exists"},{"level":3,"title":"Rule for writing commit message","slug":"rule-for-writing-commit-message"},{"level":3,"title":"Template for commit messages","slug":"template-for-commit-messages"},{"level":3,"title":"Useful links","slug":"useful-links"}],"relativePath":"en-US/guide/commit-examples.md","lastUpdated":1722760165000}',_={},y=Object.assign(_,{__name:"commit-examples",setup(f){return(b,x)=>{const n=l;return a(),o("div",null,[p,c,t("p",null,[e("Please refer to "),t("a",r,[e("Conventional Commits"),s(n,{class:"link-icon"})]),e(" for more information.")]),m,t("p",null,[e("You can checkout the allowed values for "),u,e(" and "),h,e(" in "),t("a",d,[e("commitlint.config.js"),s(n,{class:"link-icon"})]),e(",")]),k,t("p",null,[t("a",g,[e("Keeping git commit history clean"),s(n,{class:"link-icon"})])])])}}});export{w as __pageData,y as default};
