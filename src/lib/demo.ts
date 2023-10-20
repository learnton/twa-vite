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
        name: "主题配置",
        path: "theme-config",
        description: "主题色配置能力",
      },
    ],
  },
];

export default routes;
