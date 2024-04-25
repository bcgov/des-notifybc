import{_ as t,r as o,o as p,c,a as n,b as s,d as i,e as a}from"./app-806812b8.js";const l={},r=n("h1",{id:"oidc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#oidc","aria-hidden":"true"},"#"),s(" OIDC")],-1),u=n("p",null,[n("em",null,"NotifyBC"),s(" currently can only authenticate RSA signed OIDC access token if the token is a JWT. OIDC providers such as Keycloak meet the requirement.")],-1),d=n("p",null,[s("To enable OIDC authentication strategy, add "),n("em",null,"oidc"),s(" configuration object to "),n("em",null,"/src/config.local.js"),s(". The object supports following properties")],-1),k=n("em",null,"discoveryUrl",-1),m={href:"https://openid.net/specs/openid-connect-discovery-1_0.html",target:"_blank",rel:"noopener noreferrer"},f=a("<li><em>clientId</em> - OIDC client id</li><li><em>isAdmin</em> - a predicate function to determine if authenticated user is <em>NotifyBC</em> administrator. The function takes the decoded OIDC access token JWT payload as input user object and should return either a boolean or a promise of boolean, i.e. the function can be both sync or async.</li><li><em>isAuthorizedUser</em> - an optional predicate function to determine if authenticated user is an authorized <em>NotifyBC</em> user. If omitted, any authenticated user is authorized <em>NotifyBC</em> user. This function has same signature as <em>isAdmin</em></li>",3),h=a(`<p>A example of complete OIDC configuration looks like</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">oidc</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">discoveryUrl</span><span class="token operator">:</span>
      <span class="token string">&#39;https://op.example.com/auth/realms/foo/.well-known/openid-configuration&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">clientId</span><span class="token operator">:</span> <span class="token string">&#39;NotifyBC&#39;</span><span class="token punctuation">,</span>
    <span class="token function">isAdmin</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> roles <span class="token operator">=</span> user<span class="token punctuation">.</span>resource_access<span class="token punctuation">.</span>NotifyBC<span class="token punctuation">.</span>roles<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>roles <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token operator">||</span> roles<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> roles<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">isAuthorizedUser</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> user<span class="token punctuation">.</span>realm_access<span class="token punctuation">.</span>roles<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;offline_access&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In <em>NotifyBC</em> web console and only in the web console, OIDC authentication takes precedence over built-in admin user, meaning if OIDC is configured, the login button goes to OIDC provider rather than the login form.</p><p>There is no default OIDC configuration in <em>/src/config.ts</em>.</p>`,4);function v(b,y){const e=o("ExternalLinkIcon");return p(),c("div",null,[r,u,d,n("ol",null,[n("li",null,[k,s(" - "),n("a",m,[s("OIDC discovery"),i(e)]),s(" url")]),f]),h])}const g=t(l,[["render",v],["__file","index.html.vue"]]);export{g as default};
