## Vue.js PROJECT TEMPLATE

> A webpack4+ project,build a web page easily using vue.js.

## Intro
本项目为vue版本的webpack4+前端工程项目初始模版。

本模版提供了包括postcss,babel,eslint等在内的多种功能特性，使用webpack4+进行打包。主要特性如下：
- 编译后 css 样式自动补全，可使用 scss 语法进行编程化开发
- 编译后 es 语法自动降级，可使用最新语法
- 编译前代码编写规范检查，配合 VS Code 等 Editor 的 Esint 插件，可以做到开发中实时检测代码规范
- css,js 分离打包，包括对 vue 模版文件内的 css 分离。
- 方便地使用代理解决本地开发接口跨域问题
- css,js,html 文件 uglify
- 提供了一个建议性的 vue 工程目录结构

## 文件介绍
- dist  `编译后的输出目录，编译后出现此文件夹`
- node_modules `npm依赖包，安装依赖后出现此文件夹`
- src `工程源码 `
    -  assets ` 资源目录`
        - base.pcss ` 通用css`
    - common ` 通用js目录`
    - components ` vue组件`
    - directives `vue指令`
    - pages `vue页面`
    - router ` vue路由`
    - main.js `主入口`
- webpack ` webpack编译配置`
    - webpack.base.conf.js ` 主配置，在开发和生产环境均依赖`
    - webpack.dev.conf.js ` 开发配置，仅在开发环境下使用`
    - webpack.prod.conf.js ` 生产配置，仅在生产环境下使用`
    - webpack.html.conf.js ` webpack-html-plugin html模版变量值`
- .babelrc ` babel编译配置`
- .browserslistrc ` 为babel/postcss autoprefixer/postcss/eslint等指定支持的浏览器版本，如果需要修改项目对浏览器的支持情况，修改此文件即可。`
- .editorconfig ` Editor通用设置`
- .eslintignore ` Eslint忽略的文件配置`
- .eslintrc ` Eslint规则与插件等配置`
- .gitignore ` git版本控制忽略的文件与目录`
- .postcssrc ` postcss预处理与后处理配置`
- package.json ` NPM依赖包列表，其中dependencies为运行时依赖，主要内容会打入生成后的js文件，devDependencies为编译时依赖，仅在编译时需要运行，不会打入生成后的文件内。`
- README.MD ` 本说明文档`
- template.html ` webpack-html-plugin 自动生成 html 所需的模版文件`


## Build Setup

``` bash
# install dependencies
qnpm i

# serve with hot reload at localhost:8088
npm run dev / npm start

# lint your code, show warnings and errors
npm run lint

# lint(only show errors) your code, if passed, then build for production
npm run build

```