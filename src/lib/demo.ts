export type Item = {
  name: string;
  path: string;
  description?: string;
};

const routes: { name: string; items: Item[] }[] = [
  {
    name: "UI",
    items: [
      {
        name: "系统控件",
        path: "sys-components",
        description: "@twa-dev/sdk 提供的ui组件",
      },
      {
        name: "扩展能力",
        path: "sys-abilities",
        description: "@twa-dev/sdk 提供的扩展能力",
      },
      {
        name: "主题配置",
        path: "theme-config",
        description: "主题色配置能力",
      },
      {
        name: "功能验证",
        path: "func-demo",
        description: "功能验证",
      },
    ],
  },
];

export default routes;
