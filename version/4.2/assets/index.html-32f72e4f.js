import{_ as s,r as o,o as t,c as r,a,b as n,d as c,e as p}from"./app-64b33955.js";const l={},i=p(`<h1 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> Database</h1><p>By default <em>NotifyBC</em> uses in-memory database backed up by file in <em>/server/database/data.json</em> for local and docker deployment and MongoDB for Kubernetes deployment. To use MongoDB for non-Kubernetes deployment, add file <em>/src/datasources/db.datasource.local.json</em> with MongoDB connection information such as following:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;db&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;connector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mongodb&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;database&quot;</span><span class="token operator">:</span> <span class="token string">&quot;notifyBC&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">27017</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d={href:"https://loopback.io/doc/en/lb4/MongoDB-connector.html#creating-a-mongodb-data-source",target:"_blank",rel:"noopener noreferrer"};function u(m,b){const e=o("ExternalLinkIcon");return t(),r("div",null,[i,a("p",null,[n("See "),a("a",d,[n("LoopBack MongoDB data source"),c(e)]),n(" for more configurable properties.")])])}const f=s(l,[["render",u],["__file","index.html.vue"]]);export{f as default};
