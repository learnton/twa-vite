"use client";
import { useEffect, useState } from "react";
import { Switch, Button } from "@/ui";
import WebApp from "@twa-dev/sdk";
import useRouteChange from "@/hooks/useRouteChange.ts";

export default function Page() {
  useRouteChange();
  // expand mini app
  WebApp.expand();
  console.log("WebApp.version", WebApp.version, parseFloat(WebApp.version));
  const [CloudUserId, setCloudUserId] = useState("");

  if (parseFloat(WebApp.version) > 6) {
    WebApp.CloudStorage.getItem("user_id", (err, result) => {
      const userDataJson = JSON.parse(WebApp.initData) as any;
      WebApp.showAlert(
        `cloud user_id=${result}, err=${err}, user_id=${userDataJson.user?.id}`
      );
      if (!result) {
        WebApp.CloudStorage.setItem(
          "user_id",
          userDataJson.user?.id || "something is wrong"
        );
      } else {
        setCloudUserId(result);
      }
    });
  } else {
    alert(`CloudStorage unuse, ${WebApp.version}`);
  }

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

  const [showCloseConfirm, setCloseConfirm] = useState(true);

  useEffect(() => {
    if (showCloseConfirm.valueOf()) {
      WebApp.enableClosingConfirmation();
    } else {
      WebApp.disableClosingConfirmation();
    }
  }, [showCloseConfirm]);

  return (
    <div className="max-w-none prose prose-sm prose-invert">
      <h1 className="font-bold text-xl">sys-ability</h1>

      <ul className="space-y-2">
        <li>用户信息：{JSON.stringify(WebApp.initData)}</li>
        <li>Bot API Version: {WebApp.version}</li>
        <li>platform name: {WebApp.platform}</li>

        <li>小程序展开状态：{JSON.stringify(WebApp.isExpanded)}</li>
        <li>viewportHeight: {WebApp.viewportHeight}</li>
        <li>viewportStableHeight: {WebApp.viewportStableHeight}</li>
        <li>
          isClosingConfirmationEnabled:{" "}
          {JSON.stringify(WebApp.isClosingConfirmationEnabled)}
        </li>
        <li>
          显示关闭确认
          <Switch
            checked={showCloseConfirm}
            onChange={setCloseConfirm}
            className={`${
              showCloseConfirm ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                showCloseConfirm ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </li>
        <li onClick={() => handleClicpboard()}>
          <Button>访问剪切板</Button>
        </li>
        <li onClick={() => handleWriteAccess()}>
          <Button>请求写权限</Button>
        </li>
        <li onClick={() => handleRequestContact()}>
          <Button>请求电话号码权限</Button>
        </li>
        <li>
          <Button onClick={() => WebApp.switchInlineQuery("start")}>
            调起机器人输入
          </Button>
        </li>
        <li>CloudStorage: {CloudUserId || "unset"}</li>
      </ul>
    </div>
  );
}
