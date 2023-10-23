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

    WebApp.themeParams.bg_color = randomColor;
    WebApp.themeParams.text_color = randomColorObj.isLight
      ? "#000000"
      : "#ffffff";

    const randomButtonColorObj = uniqolor.random();
    const randomButtonColor = randomButtonColorObj.color as HexColor;
    WebApp.themeParams.button_color = randomButtonColor;
    WebApp.themeParams.button_text_color = randomButtonColorObj.isLight
      ? "#000000"
      : "#ffffff";
    WebApp.themeParams.secondary_bg_color =
      randomButtonColorObj.color as HexColor;

    console.log("random color: ", randomColor);
    console.log("random button color: ", randomButtonColor);
  };

  return (
    <div className="max-w-none prose prose-sm prose-invert">
      <h1 className="font-bold text-xl">theme-config</h1>

      <ul className="space-y-2">
        <li onClick={() => handleRandomColor()}>
          <Button>随机颜色</Button>
        </li>
      </ul>
    </div>
  );
}
