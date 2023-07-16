"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[7047],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>g});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(o),c=n,g=u["".concat(p,".").concat(c)]||u[c]||d[c]||a;return o?r.createElement(g,l(l({ref:t},s),{},{components:o})):r.createElement(g,l({ref:t},s))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var m=2;m<a;m++)l[m]=o[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},8694:(e,t,o)=>{o.d(t,{E:()=>n});var r=o(7294);const n=e=>{let{src:t,width:o}=e;return r.createElement("img",{style:{width:o,borderRadius:"0.4rem",border:"1px solid #aaa"},src:t})}},531:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=o(7462),n=(o(7294),o(3905)),a=o(8694);const l={sidebar_position:2,title:"\u8def\u7531\u95ee\u9898",description:"\u89e3\u51b3Remote\u8def\u7531\u8df3\u8f6c\u4e0d\u6b63\u5e38"},i=void 0,p={unversionedId:"module-federation/router-issue",id:"module-federation/router-issue",title:"\u8def\u7531\u95ee\u9898",description:"\u89e3\u51b3Remote\u8def\u7531\u8df3\u8f6c\u4e0d\u6b63\u5e38",source:"@site/docs/module-federation/router-issue.mdx",sourceDirName:"module-federation",slug:"/module-federation/router-issue",permalink:"/darkeering/docs/module-federation/router-issue",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u8def\u7531\u95ee\u9898",description:"\u89e3\u51b3Remote\u8def\u7531\u8df3\u8f6c\u4e0d\u6b63\u5e38"},sidebar:"moduleFederation",previous:{title:"\u521b\u5efa\u521d\u59cb\u73af\u5883",permalink:"/darkeering/docs/module-federation/create-init-env"},next:{title:"\u62e6\u622a\u5668\u95ee\u9898",permalink:"/darkeering/docs/module-federation/interceptor-issue"}},m={},s=[{value:"\u60c5\u666f\u4ecb\u7ecd",id:"\u60c5\u666f\u4ecb\u7ecd",level:2},{value:"\u642d\u5efa Demo",id:"\u642d\u5efa-demo",level:2},{value:"\u5206\u6790\u95ee\u9898",id:"\u5206\u6790\u95ee\u9898",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"host \u9879\u76ee\u9700\u8981\u77e5\u9053 remote \u9879\u76ee\u7684\u8def\u7531\u53d8\u5316",id:"host-\u9879\u76ee\u9700\u8981\u77e5\u9053-remote-\u9879\u76ee\u7684\u8def\u7531\u53d8\u5316",level:3},{value:"\u66f4\u6539 loadRemoteRootModule \u65b9\u6cd5\u7684\u4f4d\u7f6e\uff0c\u6765\u83b7\u53d6 host \u7684 router",id:"\u66f4\u6539-loadremoterootmodule-\u65b9\u6cd5\u7684\u4f4d\u7f6e\u6765\u83b7\u53d6-host-\u7684-router",level:3},{value:"\u76d1\u542c\u8def\u7531\u53d8\u5316\uff0c\u8fdb\u884c\u8def\u7531\u91cd\u5199",id:"\u76d1\u542c\u8def\u7531\u53d8\u5316\u8fdb\u884c\u8def\u7531\u91cd\u5199",level:3},{value:"\u8bd5\u9a8c\u89e3\u51b3\u65b9\u6848",id:"\u8bd5\u9a8c\u89e3\u51b3\u65b9\u6848",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u60c5\u666f\u4ecb\u7ecd"},"\u60c5\u666f\u4ecb\u7ecd"),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"\u5728 remote \u9879\u76ee\u4e2d\u8fdb\u884c\u8def\u7531\u8df3\u8f6c\uff0c\u5e76\u4e0d\u80fd\u6b63\u786e\u7684\u8df3\u8f6c")),(0,n.kt)("h2",{id:"\u642d\u5efa-demo"},"\u642d\u5efa Demo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"remote \u9879\u76ee \u521b\u5efa\u4e00\u4e2a test.component"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ng g c test --project remote\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"remote \u9879\u76ee app-routing.module.ts \u4e2d\u8bbe\u7f6e\u8def\u7531"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'const routes: Routes = [\n  {\n    path: "test",\n    component: TestComponent,\n  },\n];\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"remote \u9879\u76ee app.component.html \u4e2d\u8df3\u8f6c"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<p>remote app works!</p>\n<button routerLink="/test">navigate to test</button>\n<router-outlet></router-outlet>\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8d77\u670d\u52a1"),(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb navigate to remote\uff0c\u53ef\u4ee5\u770b\u51fa\uff0c\u5230\u73b0\u5728\u6ca1\u6709\u95ee\u9898"),(0,n.kt)(a.E,{src:"/img/module-federation/router-issue-init.png",width:"350px",mdxType:"Img"}),(0,n.kt)("p",{parentName:"li"},"\u518d\u70b9\u51fb navigate to test\uff0c\u53ef\u4ee5\u53d1\u73b0\uff0c\u9875\u9762\u6ca1\u6709\u53d8\u5316\uff0c\u5e76\u4e14\u8def\u7531\u867d\u7136\u53d8\u4e86\uff0c\u4f46\u662f\u548c\u9884\u6599\u5f53\u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"/remote/test")," \u4e0d\u4e00\u6837\uff0c\u800c\u662f ",(0,n.kt)("inlineCode",{parentName:"p"},"/test")),(0,n.kt)(a.E,{src:"/img/module-federation/router-issue-error.png",width:"350px",mdxType:"Img"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u81f3\u6b64\uff0c\u6211\u4eec Demo \u642d\u5efa\u6210\u529f\uff0c\u63a5\u4e0b\u6765\u5c31\u662f\u5206\u6790\u95ee\u9898\u4e86")),(0,n.kt)("h2",{id:"\u5206\u6790\u95ee\u9898"},"\u5206\u6790\u95ee\u9898"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4ece\u4e0a\u9762\u53ef\u4ee5\u770b\u51fa\uff0c\u4e3b\u8981\u662f\u8def\u7531\u65b9\u9762\u7684\u95ee\u9898\uff0c\u6240\u4ee5\u6211\u4eec\u6765\u76d1\u542c\u4e00\u4e0b host \u548c remote \u7684\u8def\u7531\u53d8\u5316")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728 remote \u9879\u76ee\u7684 app.component.ts \u4e2d\u76d1\u542c\u8def\u7531\u53d8\u5316"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { NavigationEnd, Router } from '@angular/router';\nimport { filter } from 'rxjs';\n\nconstructor(\n  private router: Router\n) {\n  this.router.events\n    .pipe(filter((event: any) => event instanceof NavigationEnd))\n    .subscribe((res) => {\n      console.log('remote', res);\n    });\n}\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728 host \u9879\u76ee\u4e2d\u521b\u5efa\u4e00\u4e2a service\uff08load-remote-root-module.service.ts\uff09\uff0c\u5e76\u5728\u5176\u4e2d\u76d1\u542c\u8def\u7531\u53d8\u5316"),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u4e3a\u4ec0\u4e48\u8981\u521b\u5efa service\uff1f\u522b\u95ee\uff0c\u95ee\u5c31\u662f\u540e\u9762\u7528\u7684\u4e0a")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'import { Injectable } from "@angular/core";\nimport { NavigationEnd, Router } from "@angular/router";\nimport { filter } from "rxjs";\n\n@Injectable({\n  providedIn: "root",\n})\nexport class LoadRemoteRootModuleService {\n  constructor(private router: Router) {\n    this.router.events\n      .pipe(filter((event: any) => event instanceof NavigationEnd))\n      .subscribe((res) => {\n        console.log("host", res);\n      });\n  }\n}\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5237\u65b0\u9875\u9762\uff0c\u6216\u8005\u91cd\u542f\u670d\u52a1\uff0c\u4e3a\u4e86\u65b9\u4fbf\u5c55\u793a\uff0c\u6211\u52a0\u4e86\u4e9b log"),(0,n.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u770b\u51fa\uff0c\u70b9\u51fb navigate to remote \u540e\uff0chost \u9879\u76ee\u7684\u8def\u7531\u76d1\u542c\u5230\u4e86\uff0c\u4f46\u662f\u70b9\u51fb navigate to test \u540e\uff0chost \u8def\u7531\u5e76\u6ca1\u6709\u76d1\u542c\u5230"),(0,n.kt)(a.E,{src:"/img/module-federation/router-issue-listen.png",width:"750px",mdxType:"Img"}))),(0,n.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,n.kt)("h3",{id:"host-\u9879\u76ee\u9700\u8981\u77e5\u9053-remote-\u9879\u76ee\u7684\u8def\u7531\u53d8\u5316"},"host \u9879\u76ee\u9700\u8981\u77e5\u9053 remote \u9879\u76ee\u7684\u8def\u7531\u53d8\u5316"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"remote \u9879\u76ee\u66b4\u9732\u51fa\u81ea\u5df1\u7684\u8def\u7531"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'},"export class AppModule {\n  static _router: any;\n  constructor(private router: Router) {\n    AppModule._router = this.router;\n  }\n}\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"host \u9879\u76ee\u63a5\u6536 remote \u9879\u76ee\u7684\u8def\u7531"),(0,n.kt)("p",{parentName:"li"},"\u5728\u4e0a\u4e00\u8282\u8bb2\u5230\u7684 ",(0,n.kt)("strong",{parentName:"p"},"loadRemoteRootModule")," \u65b9\u6cd5\u4e2d\uff0c\u52a0\u5165\u83b7\u53d6\u5e76\u8fdb\u884c\u76d1\u542c\uff0csetTimeout \u662f\u7528\u6765\u5f02\u6b65\uff0c\u8981\u4e0d\u7136\u83b7\u53d6\u4e0d\u5230"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const loadRemoteRootModule = (module: any) =>  {\n  setTimeout(() => {\n    (module.AppModule._router as Router).events\n      .pipe(filter((event: any) => event instanceof NavigationEnd))\n      .subscribe((res) => {\n        console.log(res);\n      });\n  });\n  ......\n  return module.AppModule;\n};\n")))),(0,n.kt)("h3",{id:"\u66f4\u6539-loadremoterootmodule-\u65b9\u6cd5\u7684\u4f4d\u7f6e\u6765\u83b7\u53d6-host-\u7684-router"},"\u66f4\u6539 loadRemoteRootModule \u65b9\u6cd5\u7684\u4f4d\u7f6e\uff0c\u6765\u83b7\u53d6 host \u7684 router"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u73b0\u5728 host \u9879\u76ee\u80fd\u76d1\u542c\u5230 remote \u7684\u8def\u7531\u53d8\u5316\u4e86\uff0c\u63a5\u4e0b\u6765\u5c31\u662f\u91cd\u5199\u8def\u7531\u5e76\u8fdb\u884c navigateByUrl"),(0,n.kt)("p",{parentName:"admonition"},"\u4f46\u662f\uff0c\u4e4b\u524d\u6211\u4eec\u7684",(0,n.kt)("strong",{parentName:"p"},"loadRemoteRootModule"),"\u65b9\u6cd5\u662f\u5199\u5728 app-routing.module.ts \u4e2d\u7684\uff0c\u6240\u4ee5\u6211\u4eec\u83b7\u53d6\u4e0d\u5230 host \u9879\u76ee\u7684 router"),(0,n.kt)("p",{parentName:"admonition"},"\u8fd8\u8bb0\u5f97\u4e4b\u524d\u6211\u8ba9\u4f60\u521b\u5efa\u7684 load-remote-root-module.service.ts \u5417\uff0c\u6211\u4eec\u73b0\u5728\u628a",(0,n.kt)("strong",{parentName:"p"},"loadRemoteRootModule"),"\u65b9\u6cd5\uff0c\u632a\u5230\u8fd9\u4e2a service \u4e2d")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"loadRemoteRootModule \u632a\u5230 load-remote-root-module.service.ts \u4e2d"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="load-remote-root-module.service.ts"',title:'"load-remote-root-module.service.ts"'},"loadRemoteRootModule = (module: any) => {\n  setTimeout(() => {\n    (module.AppModule._router as Router).events\n      .pipe(filter((event: any) => event instanceof NavigationEnd))\n      .subscribe((res) => {\n        console.log(res);\n      });\n  });\n  ......\n  return module.AppModule;\n};\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"app-routing.module.ts \u4e2d \u4f7f\u7528 loadRemoteRootModule \u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u62a5\u9519\uff0c\u4e5f\u5c06\u4ed6\u632a\u5230 load-remote-root-module.service.ts \u4e2d"),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"this.router.resetConfig \u53ef\u4ee5\u91cd\u7f6e\u8def\u7531\u5217\u8868\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u65b9\u6cd5\u8fdb\u884c\u8def\u7531\u8bbe\u7f6e")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'resetConfig() {\n  this.router.resetConfig([\n    {\n      path: "remote",\n      loadChildren: () =>\n        loadRemoteModule({\n          type: "module",\n          remoteEntry: "http://localhost:9001/remoteEntry.js",\n          exposedModule: "./AppModule",\n        }).then((module) => this.loadRemoteRootModule(module)),\n    },\n    ...this.router.config\n  ])\n}\n')))),(0,n.kt)("h3",{id:"\u76d1\u542c\u8def\u7531\u53d8\u5316\u8fdb\u884c\u8def\u7531\u91cd\u5199"},"\u76d1\u542c\u8def\u7531\u53d8\u5316\uff0c\u8fdb\u884c\u8def\u7531\u91cd\u5199"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="loadRemoteRootModule"',title:'"loadRemoteRootModule"'},"loadRemoteRootModule = (module: any, prefix: string) => {\n  setTimeout(() => {\n    (module.AppModule._router as Router).events\n      .pipe(filter((event: any) => event instanceof NavigationEnd))\n      .subscribe((res) => {\n        const url = res.url === '/' ? '' : res.url\n        this.router.navigateByUrl(`/${prefix}${url}`)\n      });\n  });\n  ......\n  return module.AppModule;\n};\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="resetConfig"',title:'"resetConfig"'},'resetConfig() {\n  this.router.resetConfig([\n    {\n      path: "remote",\n      loadChildren: () =>\n        loadRemoteModule({\n          type: "module",\n          remoteEntry: "http://localhost:9001/remoteEntry.js",\n          exposedModule: "./AppModule",\n        }).then((module) => this.loadRemoteRootModule(module, \'remote\')),\n    },\n    ...this.router.config\n  ])\n}\n')),(0,n.kt)("h2",{id:"\u8bd5\u9a8c\u89e3\u51b3\u65b9\u6848"},"\u8bd5\u9a8c\u89e3\u51b3\u65b9\u6848"),(0,n.kt)("p",null,"\u4ece\u56fe\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u5148\u540e\u70b9\u51fb navigate to remote \u548c navigate to remote \u4e4b\u540e\uff0c\u9875\u9762\u6210\u529f\u5c55\u793a"),(0,n.kt)(a.E,{src:"/img/module-federation/router-issue-finish.png",width:"750px",mdxType:"Img"}))}c.isMDXComponent=!0}}]);