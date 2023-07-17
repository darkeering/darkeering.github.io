"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"docgeni-angular","metadata":{"permalink":"/blog/docgeni-angular","source":"@site/blog/docgeni.mdx","title":"Angular \u4f7f\u7528 Docgeni \u642d\u5efa\u7ec4\u4ef6\u5e93\u6587\u6863","description":"\u4f7f\u7528 Angular \u811a\u624b\u67b6\u751f\u6210\u4e00\u4e2a\u7ec4\u4ef6\u5e93\u67b6\u5b50","date":"2023-07-17T14:55:42.000Z","formattedDate":"July 17, 2023","tags":[],"hasTruncateMarker":true,"authors":[],"frontMatter":{"slug":"docgeni-angular","title":"Angular \u4f7f\u7528 Docgeni \u642d\u5efa\u7ec4\u4ef6\u5e93\u6587\u6863"},"nextItem":{"title":"Welcome","permalink":"/blog/welcome"}},"content":":::tip\\r\\n\\r\\n```bash\\r\\nnpm i -g @angular/cli@15.2.8\\r\\n```\\r\\n\\r\\n:::\\r\\n\\r\\n## \u4f7f\u7528 Angular \u811a\u624b\u67b6\u751f\u6210\u4e00\u4e2a\u7ec4\u4ef6\u5e93\u67b6\u5b50\\r\\n\\r\\n- \u751f\u6210\u4e00\u4e2a\u7a7a\u7684\u9879\u76ee\\r\\n\\r\\n  ```bash\\r\\n  ng new ng-darui --create-application=false\\r\\n  ```\\r\\n\\r\\n- \u751f\u6210\u4e00\u4e2a library \u9879\u76ee\\r\\n\\r\\n  ```bash\\r\\n  ng g lib ng-darui --prefix=dar\\r\\n  ```\\r\\n\\r\\n- \u5220\u9664\u591a\u4f59\u7ec4\u4ef6\u548c\u6587\u4ef6\uff0c\u5e76\u79fb\u52a8\u6587\u4ef6\uff0c\u6700\u7ec8\u76ee\u5f55\u662f\u8fd9\u6837\\r\\n\\r\\n  ```\\r\\n  \u251c\u2500ng-darui\\r\\n  |    \u251c\u2500ng-package.json\\r\\n  |    \u251c\u2500package.json\\r\\n  |    \u251c\u2500public-api.ts\\r\\n  |    \u251c\u2500README.md\\r\\n  |    \u251c\u2500tsconfig.lib.json\\r\\n  |    \u251c\u2500tsconfig.lib.prod.json\\r\\n  |    \u251c\u2500tsconfig.spec.json\\r\\n  ```\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n- \u4fee\u6539\u914d\u7f6e\u6587\u4ef6\\r\\n\\r\\n  ```diff title=\\"angular.json\\"\\r\\n  - \\"sourceRoot\\": \\"projects/ng-darui/src\\",\\r\\n  + \\"sourceRoot\\": \\"projects/ng-darui\\",\\r\\n  ```\\r\\n\\r\\n  ```diff title=\\"ng-package.json\\"\\r\\n  - \\"entryFile\\": \\"src/public-api.ts\\"\\r\\n  + \\"entryFile\\": \\"public-api.ts\\"\\r\\n  ```\\r\\n\\r\\n  ```diff title=\\"tsconfig.json\\"\\r\\n    \\"paths\\": {\\r\\n  -   \\"ng-darui\\": [\\r\\n  -     \\"dist/ng-darui\\"\\r\\n  +   \\"ng-darui/*\\": [\\r\\n  +     \\"projects/ng-darui/*\\"\\r\\n      ]\\r\\n    },\\r\\n  ```\\r\\n\\r\\n## \u624b\u52a8\u5b89\u88c5 Docgeni\\r\\n\\r\\n- \u4e0b\u8f7d\u4f9d\u8d56\u5305\\r\\n\\r\\n  ```bash\\r\\n  npm i @docgeni/cli @docgeni/template -D\\r\\n  ```\\r\\n\\r\\n- \u6dfb\u52a0 `.docgenirc.js` \u914d\u7f6e\\r\\n\\r\\n  ```js title=\\".docgenirc.js\\"\\r\\n  /**\\r\\n   * @type {import(\'@docgeni/core\').DocgeniConfig}\\r\\n   */\\r\\n  module.exports = {\\r\\n    mode: \\"lite\\",\\r\\n    title: \\"ng-darui\\",\\r\\n    description: \\"\\",\\r\\n    docsDir: \\"docs\\",\\r\\n    navs: [\\r\\n      null,\\r\\n      {\\r\\n        title: \\"Components\\",\\r\\n        path: \\"components\\",\\r\\n        lib: \\"ng-darui\\",\\r\\n        locales: {},\\r\\n      },\\r\\n    ],\\r\\n    libs: [\\r\\n      {\\r\\n        name: \\"ng-darui\\",\\r\\n        abbrName: \\"dar\\",\\r\\n        rootDir: \\"projects/ng-darui\\",\\r\\n        include: [\\"\\"],\\r\\n        apiMode: \'automatic\',\\r\\n        categories: [\\r\\n          {\\r\\n            id: \\"general\\",\\r\\n            title: \\"\u901a\u7528\\",\\r\\n            locales: {\\r\\n              \\"en-us\\": {\\r\\n                title: \\"General\\",\\r\\n              },\\r\\n            },\\r\\n          },\\r\\n        ],\\r\\n      },\\r\\n    ],\\r\\n  };\\r\\n  ```\\r\\n\\r\\n- \u6dfb\u52a0\u6982\u8ff0\u6587\u6863\uff08\u6ca1\u6709\u5b83\uff0c\u9879\u76ee\u8d77\u4e0d\u6765\uff09\\r\\n\\r\\n  ```bash\\r\\n  mkdir docs && echo \'Hello Docgeni!\' > docs/getting-started.md\\r\\n  ```\\r\\n\\r\\n- `tsconfig.json` \u4e2d\u6dfb\u52a0/\u4fee\u6539 `path`\\r\\n\\r\\n  ```json title=\\"tsconfig.json\\"\\r\\n  {\\r\\n    \\"compilerOptions\\": {\\r\\n      \\"paths\\": {\\r\\n        \\"ng-darui/*\\": [\\"projects/ng-darui/*\\"]\\r\\n      }\\r\\n    }\\r\\n  }\\r\\n  ```\\r\\n\\r\\n## \u6dfb\u52a0\u7ec4\u4ef6\\r\\n\\r\\n- \u901a\u8fc7 Angular \u811a\u624b\u67b6\u6dfb\u52a0\u7ec4\u4ef6\\r\\n\\r\\n  **\u4e4b\u524d\u4fee\u6539\u4e86 angular.json \u4e2d\u7684 sourceRoot \u4e4b\u540e\uff0c\u9ed8\u8ba4\u751f\u6210\u65f6\u5728 `lib` \u76ee\u5f55\u4e0b\u9762\uff0c\u6240\u4ee5\u9700\u8981\u8fd4\u56de\u4e00\u4e2a\u5c42\u7ea7**\\r\\n\\r\\n  ```bash\\r\\n  ng g m ../button --project=ng-darui\\r\\n\\r\\n  ng g c ../button --project=ng-darui --module=button\\r\\n  ```\\r\\n\\r\\n- \u4fee\u6539\u7ec4\u4ef6\u6587\u4ef6\\r\\n\\r\\n  - \u4fee\u6539 `button.module.ts`\\r\\n\\r\\n    ```diff title=\\"button.module.ts\\"\\r\\n      @NgModule({\\r\\n        declarations: [\\r\\n          ButtonComponent\\r\\n        ],\\r\\n        imports: [\\r\\n          CommonModule\\r\\n        ],\\r\\n    +   exports: [\\r\\n    +     ButtonComponent\\r\\n    +   ]\\r\\n      })\\r\\n      export class ButtonModule { }\\r\\n    ```\\r\\n\\r\\n  - \u5728 button \u6587\u4ef6\u5939\u4e0b\u9762\u6dfb\u52a0 index.ts\\r\\n\\r\\n    ```ts title=\\"button > index.ts\\"\\r\\n    export * from \\"./button.component\\";\\r\\n    export * from \\"./button.module\\";\\r\\n    ```\\r\\n\\r\\n  - \u5728 `public-api.ts` \u4e2d\u6dfb\u52a0\\r\\n\\r\\n    ```ts title=\\"public-api.ts\\"\\r\\n    export * from \\"./button\\";\\r\\n    ```\\r\\n\\r\\n## \u6dfb\u52a0\u5c55\u793a\u6587\u6863\u548c example \u7ec4\u4ef6\\r\\n\\r\\n\u5148\u5c55\u793a\u6700\u7ec8\u7684\u76ee\u5f55\u60c5\u51b5\\r\\n\\r\\n```\\r\\n\u251c\u2500doc\\r\\n|  \u2514en-us.md\\r\\n\u251c\u2500examples\\r\\n|    \u251c\u2500basic\\r\\n|    |   \u251c\u2500basic.component.css\\r\\n|    |   \u251c\u2500basic.component.html\\r\\n|    |   \u2514basic.component.ts\\r\\n\u251c\u2500button.component.css\\r\\n\u251c\u2500button.component.html\\r\\n\u251c\u2500button.component.spec.ts\\r\\n\u251c\u2500button.component.ts\\r\\n\u251c\u2500button.module.ts\\r\\n\u251c\u2500index.ts\\r\\n```\\r\\n\\r\\n- basic \u7ec4\u4ef6\u5c31\u662f\u5c55\u793a\u7684 Demo \u6846\u6846\u91cc\u9762\u7684\u4e1c\u897f\\r\\n\\r\\n  ```html title=\\"basic.component.html\\"\\r\\n  <dar-button></dar-button>\\r\\n  ```\\r\\n\\r\\n  **basic \u7ec4\u4ef6\u7528\u7684\u662f Angular \u7684\u72ec\u7acb\u7ec4\u4ef6**\\r\\n\\r\\n  ```ts title=\\"basic.component.ts\\"\\r\\n  import { CommonModule } from \\"@angular/common\\";\\r\\n  import { Component } from \\"@angular/core\\";\\r\\n  import { ButtonModule } from \\"ng-darui/button\\";\\r\\n\\r\\n  @Component({\\r\\n    selector: \\"dar-button-basic-example\\",\\r\\n    templateUrl: \\"./basic.component.html\\",\\r\\n    styleUrls: [\\"./basic.component.css\\"],\\r\\n    standalone: true,\\r\\n    imports: [CommonModule, ButtonModule],\\r\\n  })\\r\\n  export class DarButtonBasicExampleComponent {\\r\\n\\r\\n    /**\\r\\n     * Button Type: `\'primary\' | \'secondary\' | \'danger\'`\\r\\n     * @description \u6309\u94ae\u7c7b\u578b\\r\\n     * @default primary\\r\\n     * @type \'primary\' | \'secondary\' | \'danger\'\\r\\n     */\\r\\n    @Input(\'type\') type: string = \'primary\'\\r\\n    constructor() {}\\r\\n  }\\r\\n  ```\\r\\n\\r\\n- `en-us.md` \u5c31\u662f\u7ec4\u4ef6\u7684\u6982\u8ff0\\r\\n\\r\\n  :::info\\r\\n  category: \u8fd9\u4e2a\u7ec4\u4ef6\u5728\u54ea\u4e2a\u7c7b\u522b\u91cc\u9762\uff0c\u5c31\u662f\u4e4b\u524d\u5728 `.docgenirc.js` \u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684\\r\\n\\r\\n  name: \u7ec4\u4ef6\u7684\u540d\u5b57\uff0c\u5982\u679c\u6539\u6210 aaa\uff0c\u90a3\u4e48 example \u7684 name \u5c31\u5e94\u8be5\u662f dar-aaa-basic-example\\r\\n  \\r\\n  order: \u5728\u7c7b\u522b\u4e2d\u7684\u6392\u5e8f\\r\\n\\r\\n  `<example name=\\"dar-button-basic-example\\" />` \u662f\u7279\u5b9a\u7684 Demo \u7ec4\u4ef6\\r\\n\\r\\n  `<examples />`\u662f\u5168\u90e8\u7684 Demo \u7ec4\u4ef6\u90fd\u5c55\u793a\\r\\n\\r\\n  :::\\r\\n\\r\\n  ```md title=\\"en-us.md\\"\\r\\n  ---\\r\\n  category: general\\r\\n  title: Button\\r\\n  name: button\\r\\n  order: 1\\r\\n  ---\\r\\n\\r\\n  \u8fd9\u662f\u5355\u4e2a\\r\\n  <example name=\\"dar-button-basic-example\\" />\\r\\n\\r\\n  \u8fd9\u662f\u5168\u90e8\\r\\n  <examples />\\r\\n  ```\\r\\n\\r\\n## \u8d77\u670d\u52a1\\r\\n\\r\\n```json title=\\"package.json\\"\\r\\n\\"scripts\\": {\\r\\n  \\"start:docs\\": \\"docgeni serve --port 4600\\",\\r\\n  \\"build:docs\\": \\"docgeni build\\"\\r\\n},\\r\\n```"},{"id":"welcome","metadata":{"permalink":"/blog/welcome","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/blog/tags/facebook"},{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"Angular \u4f7f\u7528 Docgeni \u642d\u5efa\u7ec4\u4ef6\u5e93\u6587\u6863","permalink":"/blog/docgeni-angular"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/blog/long-blog-post","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"May 29, 2019","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"prevItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);