"use client";

import { Button } from "@/ui";
import WebApp from "@twa-dev/sdk";
import useRouteChange from "@/hooks/useRouteChange.ts";

export default function Page() {
  useRouteChange();
  // expand mini app
  WebApp.expand();

  const handleClicpboard = () => {
    WebApp.readTextFromClipboard((text: string) => {
      WebApp.showAlert(`clipboard text is: ${text}`);
    });
  };

  const handleWriteAccess = () => {
    WebApp.requestWriteAccess((confirm) => {
      WebApp.showAlert(`requestWriteAccess result: ${confirm}`);
    });
  };

  const handleRequestContact = () => {
    WebApp.requestContact((confirm) => {
      WebApp.showAlert(`requestContact result: ${confirm}`);
    });
  };

  return (
    <div className="max-w-none prose prose-sm prose-invert">
      <h1 className="font-bold text-xl">sys-ability</h1>

      <ul className="space-y-2">
        <li onClick={() => handleClicpboard()}>
          <Button>访问剪切板</Button>
        </li>
        <li onClick={() => handleWriteAccess()}>
          <Button>请求写权限</Button>
        </li>
        <li onClick={() => handleRequestContact()}>
          <Button>请求电话号码权限</Button>
        </li>
      </ul>
    </div>
  );
}
