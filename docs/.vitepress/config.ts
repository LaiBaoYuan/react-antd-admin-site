import { defineConfig } from "vitepress";

export default defineConfig({
  base: '/react-antd-admin',
  lang: "en",
  title: "React Antd Admin",
  description: "🎉 A magical react admin",

  lastUpdated: true,
  cleanUrls: true,

  head: [["link", { rel: "icon", href: "/logo.png" }]],

  themeConfig: {
    nav: [
      {
        text: "指导",
        link: "/guide/README",
      },
    ],
    sidebar: {
      "/guide": [
        {
          text: "基础",
          collapsed: false,
          items: [{ text: "介绍", link: "/guide/README" }],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/LaiBaoYuan/react-antd-admin",
      },
    ],

    footer: {
      copyright: "Copyright © 2023 LaiBaoYuan",
    },

    algolia: {
      appId: "KOHOM9W5M3",
      apiKey: "dbd001da836aa79bce53980fd32e87ca",
      indexName: "laibaoyuanio",
    },
  },
});
