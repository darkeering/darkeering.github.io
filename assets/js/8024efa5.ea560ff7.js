"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[9041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>v});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),p=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,v=c["".concat(i,".").concat(u)]||c[u]||d[u]||o;return n?l.createElement(v,r(r({ref:t},m),{},{components:n})):l.createElement(v,r({ref:t},m))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const o={sidebar_position:7,title:"\u63d2\u69fd",description:"\u63d2\u69fd"},r=void 0,s={unversionedId:"Svelte/slots",id:"Svelte/slots",title:"\u63d2\u69fd",description:"\u63d2\u69fd",source:"@site/docs/Svelte/slots.mdx",sourceDirName:"Svelte",slug:"/Svelte/slots",permalink:"/docs/Svelte/slots",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"\u63d2\u69fd",description:"\u63d2\u69fd"},sidebar:"svelte",previous:{title:"context\uff08\u4e0a\u4e0b\u6587\uff09",permalink:"/docs/Svelte/context"},next:{title:"Svelte \u81ea\u5e26\u7ec4\u4ef6",permalink:"/docs/Svelte/special"}},i={},p=[{value:"slots",id:"slots",level:2},{value:"\u9ed8\u8ba4\u63d2\u69fd\u503c",id:"\u9ed8\u8ba4\u63d2\u69fd\u503c",level:2},{value:"\u547d\u540d\u63d2\u69fd",id:"\u547d\u540d\u63d2\u69fd",level:2},{value:"$$slots -- \u63d2\u69fd\u662f\u5426\u5b58\u5728",id:"slots----\u63d2\u69fd\u662f\u5426\u5b58\u5728",level:2},{value:"slot output \u6570\u636e",id:"slot-output-\u6570\u636e",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"slots"},"slots"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.svelte"',title:'"app.svelte"'},'<script>\n  import Home from "./home.svelte";\n<\/script>\n\n<Home>\n  <p>slot content</p>\n</Home>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.svelte"',title:'"home.svelte"'},"<div>\n  <slot />\n  <p>Home Content</p>\n</div>\n")),(0,a.kt)("h2",{id:"\u9ed8\u8ba4\u63d2\u69fd\u503c"},"\u9ed8\u8ba4\u63d2\u69fd\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.svelte"',title:'"app.svelte"'},'<script>\n  import Home from "./home.svelte";\n<\/script>\n\n<Home>\n  <p>slot content</p>\n</Home>\n\n<Home />\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.svelte"',title:'"home.svelte"'},"<div>\n  <slot>\n    <p>slot no content</p>\n  </slot>\n  <p>Home Content</p>\n</div>\n")),(0,a.kt)("h2",{id:"\u547d\u540d\u63d2\u69fd"},"\u547d\u540d\u63d2\u69fd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.svelte"',title:'"app.svelte"'},'<script>\n  import Home from "./home.svelte";\n<\/script>\n\n<Home>\n  <p slot="tel">123****8888</p>\n  <p slot="age">18</p>\n  <p slot="name">\u5f20\u4e09</p>\n</Home>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.svelte"',title:'"home.svelte"'},'<div class="container">\n  <div class="name">\n    <slot name="name" />\n  </div>\n  <div class="age">\n    <span>age:</span>\n    <slot name="age" />\n  </div>\n  <div class="tel">\n    <span>tel:</span>\n    <slot name="tel" />\n  </div>\n</div>\n\n<style>\n  .container {\n    padding: 10px;\n    box-shadow: 0 0 4px #ccc;\n    display: inline-block;\n    width: 200px;\n    border-radius: 4px;\n  }\n  .name {\n    border-bottom: 2px solid #ddd;\n    padding-bottom: 10px;\n  }\n  .age,\n  .tel {\n    display: flex;\n    padding-top: 10px;\n  }\n</style>\n')),(0,a.kt)("h2",{id:"slots----\u63d2\u69fd\u662f\u5426\u5b58\u5728"},"$$slots -- \u63d2\u69fd\u662f\u5426\u5b58\u5728"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.svelte"',title:'"home.svelte"'},'<script>\n  console.log($$slots);\n  /**\n  {\n    "name": true,\n    "age": true,\n    "tel": true\n  } */\n<\/script>\n')),(0,a.kt)("h2",{id:"slot-output-\u6570\u636e"},"slot output \u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="app.svelte"',title:'"app.svelte"'},"<script>\n    import Home from './home.svelte';\n<\/script>\n\n<Home>\n    <p let:item class:active={item === 'tel'} slot=\"tel\">123****8888</p>\n    <p let:item class:active={item === 'age'} slot=\"age\">18</p>\n    <p let:item class:active={item === 'name'} slot=\"name\">\u5f20\u4e09</p>\n</Home>\n\n<style>\n    p {\n        transition: all 0.25s;\n    }\n    .active {\n        transform: scale(1.1) translateY(-4px);\n    }\n</style>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="home.svelte"',title:'"home.svelte"'},'<script>\n    let item = \'\';\n    function enter(name) {\n        item = name;\n    }\n    function leave() {\n        item = \'\';\n    }\n<\/script>\n\n<div class="container">\n    <div class="name" on:mouseenter={() => enter(\'name\')} on:mouseleave={leave}>\n        <slot {item} name="name" />\n    </div>\n    <div class="age" on:mouseenter={() => enter(\'age\')} on:mouseleave={leave}>\n        <span>age:</span>\n        <slot {item} name="age" />\n    </div>\n    <div class="tel" on:mouseenter={() => enter(\'tel\')} on:mouseleave={leave}>\n        <span>tel:</span>\n        <slot {item} name="tel" />\n    </div>\n</div>\n\n<style>\n    .container {\n        padding: 10px;\n        box-shadow: 0 0 4px #ccc;\n        display: inline-block;\n        width: 200px;\n        border-radius: 4px;\n    }\n    .name {\n        border-bottom: 2px solid #ddd;\n        padding-bottom: 10px;\n        display: flex;\n    }\n    .age,\n    .tel {\n        display: flex;\n        padding-top: 10px;\n    }\n</style>\n')))}d.isMDXComponent=!0}}]);