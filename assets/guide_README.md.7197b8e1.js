import{_ as s,c as n,o as a,a as l}from"./app.73051a04.js";const d=JSON.parse('{"title":"介绍","description":"","frontmatter":{"pageClass":"getting-started"},"headers":[{"level":2,"title":"功能","slug":"功能","link":"#功能","children":[]},{"level":2,"title":"前序准备","slug":"前序准备","link":"#前序准备","children":[]},{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"Contribution","slug":"contribution","link":"#contribution","children":[]}],"relativePath":"guide/README.md","lastUpdated":1678525814000}'),p={name:"guide/README.md"},e=l(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-hidden="true">#</a></h1><p><a href="https://github.com/LaiBaoYuan/react-antd-admin" target="_blank" rel="noreferrer">react-antd-admin</a> 是一个后台前端解决方案，它基于 <a href="https://react.docschina.org/" target="_blank" rel="noreferrer">react</a> 和 <a href="https://ant.design/index-cn" target="_blank" rel="noreferrer">ant-design</a>实现。它使用了最新的前端技术栈，内置了动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。</p><br><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">- 登录 / 注销</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 权限验证</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 页面权限</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 指令权限</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 权限配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 二步登录</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 多环境发布</span></span>
<span class="line"><span style="color:#A6ACCD;">  - dev sit stage prod</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 全局功能</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 国际化多语言</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 多种动态换肤</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 动态侧边栏（支持多级路由嵌套）</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 动态面包屑</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 快捷导航(标签页)</span></span>
<span class="line"><span style="color:#A6ACCD;">  - Svg Sprite 图标</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 本地/后端 mock 数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  - Screenfull全屏</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 自适应收缩侧边栏</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 编辑器</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 富文本</span></span>
<span class="line"><span style="color:#A6ACCD;">  - Markdown</span></span>
<span class="line"><span style="color:#A6ACCD;">  - JSON 等多格式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- Excel</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 导出excel</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 导入excel</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 前端可视化excel</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 导出zip</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 表格</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 动态表格</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 拖拽表格</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 内联编辑</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 错误页面</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 401</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 404</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 組件</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 头像上传</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 返回顶部</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 拖拽Dialog</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 拖拽Select</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 拖拽看板</span></span>
<span class="line"><span style="color:#A6ACCD;">  - 列表拖拽</span></span>
<span class="line"><span style="color:#A6ACCD;">  - SplitPane</span></span>
<span class="line"><span style="color:#A6ACCD;">  - Dropzone</span></span>
<span class="line"><span style="color:#A6ACCD;">  - Sticky</span></span>
<span class="line"><span style="color:#A6ACCD;">  - CountTo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">- 综合实例</span></span>
<span class="line"><span style="color:#A6ACCD;">- 错误日志</span></span>
<span class="line"><span style="color:#A6ACCD;">- Dashboard</span></span>
<span class="line"><span style="color:#A6ACCD;">- 引导页</span></span>
<span class="line"><span style="color:#A6ACCD;">- ECharts 图表</span></span>
<span class="line"><span style="color:#A6ACCD;">- Clipboard(剪贴复制)</span></span>
<span class="line"><span style="color:#A6ACCD;">- Markdown2html</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><br><h2 id="前序准备" tabindex="-1">前序准备 <a class="header-anchor" href="#前序准备" aria-hidden="true">#</a></h2><p>你需要在本地安装 <a href="http://nodejs.org/" target="_blank" rel="noreferrer">node</a> 和 <a href="https://git-scm.com/" target="_blank" rel="noreferrer">git</a>。本项目技术栈基于 <a href="http://es6.ruanyifeng.com/" target="_blank" rel="noreferrer">ES2015+</a>、<a href="https://react.docschina.org/" target="_blank" rel="noreferrer">react</a>、<a href="https://cn.redux.js.org/tutorials/quick-start/" target="_blank" rel="noreferrer">redux</a>、<a href="https://reactrouter.com/en/main" target="_blank" rel="noreferrer">react-router</a> 、<a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">vite</a> 、<a href="https://github.com/axios/axios" target="_blank" rel="noreferrer">axios</a> 和 <a href="https://ant.design/index-cn" target="_blank" rel="noreferrer">ant-design</a>，所有的请求数据都使用<a href="https://github.com/nuysoft/Mock" target="_blank" rel="noreferrer">Mock.js</a>进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。</p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-hidden="true">#</a></h2><p>本项目已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mock</span><span style="color:#A6ACCD;">                       </span><span style="color:#676E95;font-style:italic;"># 项目mock 模拟数据</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">public</span><span style="color:#A6ACCD;">                     </span><span style="color:#676E95;font-style:italic;"># 静态资源</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">react.svg</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># favicon图标</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">src</span><span style="color:#A6ACCD;">                        </span><span style="color:#676E95;font-style:italic;"># 源代码</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">api</span><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;font-style:italic;"># 所有请求</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">components</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># 全局公用组件</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">icons</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># 项目所有 svg icons</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layout</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;"># 全局 layout</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">router</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;"># 路由</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">store</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># 全局状态store管理</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">style</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># 全局样式</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">types</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># 全局声明文件</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">utils</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># 全局公用方法</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">views</span><span style="color:#A6ACCD;">                  </span><span style="color:#676E95;font-style:italic;"># views 所有页面</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">App.tsx</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;font-style:italic;"># 入口页面</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main.tsx</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># 入口文件 加载组件 初始化等</span></span>
<span class="line"><span style="color:#FFCB6B;">│</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">settings.ts</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 权限管理</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.prettierrc.yml</span><span style="color:#A6ACCD;">            </span><span style="color:#676E95;font-style:italic;"># 项目代码格式 配置</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;">                 </span><span style="color:#676E95;font-style:italic;"># html模板</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vite.config.ts</span><span style="color:#A6ACCD;">             </span><span style="color:#676E95;font-style:italic;"># vite 配置</span></span>
<span class="line"><span style="color:#FFCB6B;">├──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tsconfig.json</span><span style="color:#A6ACCD;">              </span><span style="color:#676E95;font-style:italic;"># typescript 配置</span></span>
<span class="line"><span style="color:#FFCB6B;">└──</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">package.json</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;font-style:italic;"># package.json</span></span>
<span class="line"></span></code></pre></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 克隆项目</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/LaiBaoYuan/react-antd-admin.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入项目目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">react-antd-admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 国内可以用 cnpm 安装，也可以通过一下方式进行下载</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--registry=https://registry.npm.taobao.org</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 本地开发 启动项目</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"></span></code></pre></div><br><p>启动完成后会自动打开浏览器访问 <a href="http://localhost:5173" target="_blank" rel="noreferrer"><code>http://localhost:5173</code></a>， 你看到下面的页面就代表操作成功了。</p><p><img src="https://panjiachen.gitee.io/gitee-cdn/vue-element-admin-site/1bc334a6-32a8-4f29-a037-ac3f5ce32588.png" alt=""></p><p>接下来你可以修改代码进行业务开发了，本项目内建了典型业务模板、常用业务组件、模拟数据、HMR 实时预览、状态管理、全局路由等等各种实用的功能来辅助开发，你可以继续阅读和探索左侧的其它文档。</p><br><div class="tip custom-block"><p class="custom-block-title">建议</p><p>你可以把 <code>react-antd-admin</code>当做工具箱或者集成方案仓库，在 <code>react-admin-template</code> 的基础上进行二次开发，想要什么功能或者组件就去 <code>react-antd-admin</code> 那里复制过来。</p></div><h2 id="contribution" tabindex="-1">Contribution <a class="header-anchor" href="#contribution" aria-hidden="true">#</a></h2><p>本文档项目地址 <a href="https://github.com/LaiBaoYuan/react-antd-admin-site" target="_blank" rel="noreferrer">react-antd-admin-site</a> 基于 <a href="https://github.com/vuejs/vitepress" target="_blank" rel="noreferrer">vitepress</a>开发。</p><p>有任何修改和建议都可以该项目 pr 和 issue</p><p><a href="https://github.com/LaiBaoYuan/react-antd-admin" target="_blank" rel="noreferrer">react-antd-admin</a> 还在持续迭代中，逐步沉淀和总结出更多功能和相应的实现代码，总结中后台产品模板/组件/业务场景的最佳实践。本项目也十分期待你的参与和<a href="https://github.com/LaiBaoYuan/react-antd-admin/issues" target="_blank" rel="noreferrer">反馈</a>。</p>`,23),o=[e];function t(c,r,C,i,y,A){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{d as __pageData,h as default};
