import{_ as s,r as a,o as c,c as l,a as e,b as i,d as t,w as o,e as r}from"./app-f027ec99.js";const d={},f=e("h1",{id:"configuration-overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration-overview","aria-hidden":"true"},"#"),i(" Configuration Overview")],-1),u={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"Helm Chart Configurations",-1),g=e("em",null,"NoitfyBC",-1),h=e("em",null,"NotifyBC",-1),p=r('<p>There are two types of configurations - static and dynamic. Static configurations are defined in files or environment variables, requiring restarting <em>NotifyBC</em> to take effect, whereas dynamic configurations are defined in databases and updates take effect immediately.</p><h2 id="static-configurations" tabindex="-1"><a class="header-anchor" href="#static-configurations" aria-hidden="true">#</a> Static Configurations</h2><p>Most static configurations are specified in file <em>/src/config.ts</em>. If you need to change, instead of updating <em>/src/config.ts</em> file, create local file <em>/src/config.local.js</em> or environment specific file <em>/src/config.&lt;env&gt;.js</em>, which is only included when environment variable <em>NODE_ENV</em> equals <em>&lt;env&gt;</em>. Besides <em>js</em>, <em>ts</em> and <em>json</em> file extensions are also supported. The rest of the documentation assumes the file extension is <em>js</em>. Content in these files are deeply merged in following ascending precedence</p><ul><li>default file /src/config.ts</li><li>environment specific file <em>/src/config.&lt;env&gt;.js</em></li><li>local file <em>/src/config.local.js</em></li></ul><div class="custom-container warning"><p class="custom-container-title">Run build script whenever changing file in /src</p><p>Every time a file under <em>/src</em>, including config files, is updated, run <code>yarn build</code> before restarting <em>NotifyBC</em> to take effect.</p></div><p>Following configs should be customized per installation</p>',6),_=e("p",null,"In addition, if installing from source code",-1),y=e("p",null,"Customizing other configs only if needed.",-1),v=e("h2",{id:"dynamic-configurations",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dynamic-configurations","aria-hidden":"true"},"#"),i(" Dynamic Configurations")],-1),b=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"Why Dynamic Configs?"),e("p",null,"Dynamic configs are needed in cases such as"),e("ul",null,[e("li",null,"to allow define service-specific configs such as message templates"),e("li",null,"in a multi-node deployment, configs can be generated by one node (typically master) and shared with other nodes")])],-1);function w(x,C){const n=a("RouterLink");return c(),l("div",null,[f,e("div",u,[m,e("p",null,[i("The document pages in this section cover "),g,i(" app level configurations only. If your "),h,i(" is deployed to Kubernetes using Helm, you can also "),t(n,{to:"/docs/getting-started/installation.html#customizations"},{default:o(()=>[i("customize")]),_:1}),i(" infrastructure level configurations.")])]),p,e("ul",null,[e("li",null,[t(n,{to:"/docs/config/adminIpList.html"},{default:o(()=>[i("Admin IP List")]),_:1})]),e("li",null,[t(n,{to:"/docs/config/reverseProxyIpLists.html"},{default:o(()=>[i("Reverse Proxy IP Lists")]),_:1})]),e("li",null,[t(n,{to:"/docs/config/httpHost.html"},{default:o(()=>[i("HTTP Host")]),_:1})]),e("li",null,[t(n,{to:"/docs/config/email.html#smtp"},{default:o(()=>[i("SMTP")]),_:1})])]),_,e("ul",null,[e("li",null,[t(n,{to:"/docs/config/database.html"},{default:o(()=>[i("Database")]),_:1})]),e("li",null,[t(n,{to:"/docs/config/internalHttpHost.html"},{default:o(()=>[i("Internal HTTP Host")]),_:1})])]),y,v,e("p",null,[i("Dynamic configs are managed using REST "),t(n,{to:"/docs/api-config/"},{default:o(()=>[i("configuration api")]),_:1}),i(".")]),b])}const T=s(d,[["render",w],["__file","index.html.vue"]]);export{T as default};
