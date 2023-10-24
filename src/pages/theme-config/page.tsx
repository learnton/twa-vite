"use client";

import { Button } from "@/ui";
import WebApp from "@twa-dev/sdk";
import uniqolor from "uniqolor";
import useRouteChange from "@/hooks/useRouteChange.ts";

type HexColor = `#${string}`;

export default function Page() {
  useRouteChange();

  const handleRandomColor = () => {
    const randomColorObj = uniqolor.random();
    const randomColor = randomColorObj.color as HexColor;

    WebApp.setHeaderColor(randomColor);
    WebApp.setBackgroundColor(randomColor);
  };

  return (
    <div className="max-w-none prose prose-sm prose-invert">
      <h1 className="font-bold text-xl">theme-config</h1>

      <ul className="space-y-2">
        <li onClick={() => handleRandomColor()}>
          <Button>随机颜色</Button>
        </li>
        <li>主题类型：{WebApp.colorScheme}</li>
        <li>主题数据：{JSON.stringify(WebApp.themeParams)}</li>
        <li>headerColor: {WebApp.headerColor}</li>
        <li>backgroundColor: {WebApp.backgroundColor}</li>
      </ul>
    </div>
  );
}
