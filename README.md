## 前端项目说明

更新时间：`2017/03/04 10:34:44 ` 

### 基于React 的单页富应用,使用node.js搭建本地开发环境,使用Webpack构建打包!


### 前端开发目录结构,可根据约定进行修改

    . 
    ├─ config
    │   ├─ webpack.dev.config.js    # webpack 开发配置
    │   └─ webpack.prod.config.js   # webpack 生产配置
    ├─ node_modules
    ├─ development      # 开发环境下打包完的文件存放目录
    ├─ web/production/ipad       # 生产环境下打包完的文件存放目录
    ├─ package.json     # 插件配置
    ├─ README.md        # 说明
    └─ src              # 源文件
        ├─ main.js      # 应用初始化及启动配置
        ├─ components   # 组件
        │   ├─ app.jsx          # 应用入口
        │   └─ list.jsx         # 列表模板组件 
        ├─ routers          # 路由配置,包含路由文件及路由规则
        │   └─ router.jsx   # 默认的html模板
        ├─ libs         # 工具/第三方库
        ├─ assets       # 放置静态资源
        │   ├─ image    # 图片
        │   ├─ script   # js
        │   └─ style    # css
        └─ template     # 模板
             └─ index.html  # 默认的html模板



1. 初始安装 `npm install`

2. 启动开发 `npm run dev`

	> 端口使用的`8088`，开发生成地址：`http://localhost:8088`

3. 打包生成 `npm run build` 

	> 打包生成至： `\flux_website_proj\trunk\web\production\ipad`

4. 项目运行效果
    
    ![运行效果](/doc/pad.png)