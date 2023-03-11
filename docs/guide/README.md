---
pageClass: getting-started
---

# 介绍

[react-antd-admin](https://github.com/LaiBaoYuan/react-antd-admin) 是一个后台前端解决方案，它基于 [react](https://react.docschina.org/) 和 [ant-design](https://ant.design/index-cn)实现。它使用了最新的前端技术栈，内置了动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。

<br/>

## 功能

```
- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置
  - 二步登录

- 多环境发布
  - dev sit stage prod

- 全局功能
  - 国际化多语言
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown
  - JSON 等多格式

- Excel
  - 导出excel
  - 导入excel
  - 前端可视化excel
  - 导出zip

- 表格
  - 动态表格
  - 拖拽表格
  - 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 头像上传
  - 返回顶部
  - 拖拽Dialog
  - 拖拽Select
  - 拖拽看板
  - 列表拖拽
  - SplitPane
  - Dropzone
  - Sticky
  - CountTo

- 综合实例
- 错误日志
- Dashboard
- 引导页
- ECharts 图表
- Clipboard(剪贴复制)
- Markdown2html
```

<br/>

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[react](https://react.docschina.org/)、[redux](https://cn.redux.js.org/tutorials/quick-start/)、[react-router](https://reactrouter.com/en/main) 、[vite](https://cn.vitejs.dev/) 、[axios](https://github.com/axios/axios) 和 [ant-design](https://ant.design/index-cn)，所有的请求数据都使用[Mock.js](https://github.com/nuysoft/Mock)进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 目录结构

本项目已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├── mock                       # 项目mock 模拟数据
├── public                     # 静态资源
│   └── react.svg              # favicon图标
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── components             # 全局公用组件
│   ├── icons                  # 项目所有 svg icons
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局状态store管理
│   ├── style                  # 全局样式
│   ├── types                  # 全局声明文件
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.tsx                # 入口页面
│   ├── main.tsx               # 入口文件 加载组件 初始化等
│   └── settings.ts            # 权限管理
├── .prettierrc.yml            # 项目代码格式 配置
├── index.html                 # html模板
├── vite.config.ts             # vite 配置
├── tsconfig.json              # typescript 配置
└── package.json               # package.json
```

## 安装

```bash
# 克隆项目
git clone https://github.com/LaiBaoYuan/react-antd-admin.git

# 进入项目目录
cd react-antd-admin

# 安装依赖
npm install

# 国内可以用 cnpm 安装，也可以通过一下方式进行下载
npm install --registry=https://registry.npm.taobao.org

# 本地开发 启动项目
npm run dev
```

<br/>

启动完成后会自动打开浏览器访问 [http://localhost:5173](http://localhost:5173)， 你看到下面的页面就代表操作成功了。

![](https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png)

接下来你可以修改代码进行业务开发了，本项目内建了典型业务模板、常用业务组件、模拟数据、HMR 实时预览、状态管理、全局路由等等各种实用的功能来辅助开发，你可以继续阅读和探索左侧的其它文档。

<br/>

::: tip 建议
你可以把 `react-antd-admin`当做工具箱或者集成方案仓库，在 `react-admin-template` 的基础上进行二次开发，想要什么功能或者组件就去 `react-antd-admin` 那里复制过来。
:::

## Contribution

本文档项目地址 [react-antd-admin-site](https://github.com/LaiBaoYuan/react-antd-admin-site) 基于 [vitepress](https://github.com/vuejs/vitepress)开发。

有任何修改和建议都可以该项目 pr 和 issue

[react-antd-admin](https://github.com/LaiBaoYuan/react-antd-admin) 还在持续迭代中，逐步沉淀和总结出更多功能和相应的实现代码，总结中后台产品模板/组件/业务场景的最佳实践。本项目也十分期待你的参与和[反馈](https://github.com/LaiBaoYuan/react-antd-admin/issues)。
