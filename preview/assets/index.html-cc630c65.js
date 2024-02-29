import{_ as l,r as o,o as p,c,a as s,b as e,d as n,w as i,e as r}from"./app-f027ec99.js";const u={},d=s("h1",{id:"bulk-import",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bulk-import","aria-hidden":"true"},"#"),e(" Bulk Import")],-1),m=s("p",null,[e("To facilitate migrating subscriptions from other notification systems, "),s("em",null,"NotifyBC"),e(" provides a utility script to bulk import subscription data from a .csv file. To use the utility, you need")],-1),h=s("li",null,[e("Software installed "),s("ul",null,[s("li",null,"Node.js"),s("li",null,"Git")])],-1),f=s("em",null,"NotifyBC",-1),b={href:"https://github.com/bcgov/NotifyBC/tree/main/src/utils/bulk-import/sample-subscription.csv",target:"_blank",rel:"noopener noreferrer"},k=s("em",null,"confirmationRequest.sendRequest",-1),v=r(`<p>To run the utility</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/bcgov/NotifyBC.git
<span class="token builtin class-name">cd</span> NotifyBC
<span class="token function">npm</span> i <span class="token parameter variable">-g</span> <span class="token function">yarn</span> <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> build
<span class="token function">node</span> dist/utils/bulk-import/subscription.js <span class="token parameter variable">-a</span> <span class="token operator">&lt;</span>api-url-prefix<span class="token operator">&gt;</span> <span class="token parameter variable">-c</span> <span class="token operator">&lt;</span>concurrency<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>csv-file-path<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here &lt;csv-file-path&gt; is the path to csv file and &lt;api-url-prefix&gt; is the <em>NotifyBC</em> api url prefix , default to <em>http://localhost:3000/api</em>.</p><p>The script parses the csv file and generates a HTTP post request for each row. The concurrency of HTTP request is controlled by option <em>-c</em> which is default to 10 if omitted. A successful run should output the number of rows imported without any error message</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>success row count = ***
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="field-parsers" tabindex="-1"><a class="header-anchor" href="#field-parsers" aria-hidden="true">#</a> Field Parsers</h3>`,6),_={href:"https://github.com/Keyang/node-csvtojson#custom-parsers",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/bcgov/NotifyBC/tree/main/src/utils/bulk-import/subscription.ts",target:"_blank",rel:"noopener noreferrer"},y=s("em",null,"src/utils/bulk-import/subscription.ts",-1),x=s("em",null,"myCustomIntegerField",-1),w=s("em",null,"colParser",-1),C=r(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">colParser</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token punctuation">,</span> <span class="token function-variable function">myCustomIntegerField</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> head<span class="token punctuation">,</span> resultRow<span class="token punctuation">,</span> row<span class="token punctuation">,</span> colIdx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function N(T,B){const a=o("RouterLink"),t=o("ExternalLinkIcon");return p(),c("div",null,[d,m,s("ul",null,[h,s("li",null,[e("Admin Access to a "),f,e(" instance by adding your client ip to the "),n(a,{to:"/docs/config-adminIpList/"},{default:i(()=>[e("Admin IP List")]),_:1})]),s("li",null,[e("a csv file with header row matching "),n(a,{to:"/docs/api-subscription/#model-schema"},{default:i(()=>[e("subscription model schema")]),_:1}),e(". A sample csv file is "),s("a",b,[e("provided"),n(t)]),e(". Compound fields (of object type) should be dot-flattened as shown in the sample for field "),k])]),v,s("p",null,[e("The utility script takes care of type conversion for built-in fields. If you need to import proprietary fields, by default the fields are imported as strings. To import non-string fields or manipulating json output, you need to define "),s("a",_,[e("custom parsers"),n(t)]),e(" in file "),s("a",g,[y,n(t)]),e(". For example, to parse "),x,e(" to integer, add in the "),w,e(" object")]),C])}const j=l(u,[["render",N],["__file","index.html.vue"]]);export{j as default};
