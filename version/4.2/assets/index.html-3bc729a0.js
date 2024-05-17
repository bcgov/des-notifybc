import{_ as s,r as a,o as i,c as o,a as e,b as t,d as r,w as l,e as c}from"./app-64b33955.js";const p={},u=c(`<h1 id="internal-http-host" tabindex="-1"><a class="header-anchor" href="#internal-http-host" aria-hidden="true">#</a> Internal HTTP Host</h1><p>By default, HTTP requests submitted by <em>NotifyBC</em> back to itself will be sent to <em>httpHost</em> if defined or the host of the incoming HTTP request that spawns such internal requests. But if config <em>internalHttpHost</em>, which has no default value, is defined, for example in file <em>/src/config.local.js</em></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">internalHttpHost</span><span class="token operator">:</span> <span class="token string">&#39;http://notifybc:3000&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d=e("em",null,"internalHttpHost",-1),h=e("p",null,[t("All internal requests are supposed to be admin requests. The purpose of "),e("em",null,"internalHttpHost"),t(" is to facilitate identifying the internal server ip as admin ip.")],-1),m=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"Kubernetes Use Case"),e("p",null,[t("The Kubernetes deployment script sets "),e("i",null,"internalHttpHost"),t(" to "),e("em",null,"notify-bc-app"),t(" service url in config map. The source ip in such case would be in a private Kubernetes ip range. You should add this private ip range to "),e("a",{href:"#admin-ip-list"},"admin ip list"),t(". The private ip range varies from Kubernetes installation. In BCGov's OCP4 cluster, it starts with octet 10.")])],-1);function f(b,v){const n=a("RouterLink");return i(),o("div",null,[u,e("p",null,[t("then the HTTP request will be sent to the configured host. An internal request can be generated, for example, as a "),r(n,{to:"/docs/config-notification/#broadcast-push-notification-task-concurrency"},{default:l(()=>[t("sub-request of broadcast push notification")]),_:1}),t(". "),d,t(" shouldn't be accessible from internet.")]),h,m])}const g=s(p,[["render",f],["__file","index.html.vue"]]);export{g as default};
