"use client";

import { Switch, Button } from "@/ui";
import { useState, useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { useNavigate } from "react-router-dom";

export default function Page() {
  const navigate = useNavigate();

  const [showBack, setShowBack] = useState(true);

  WebApp.BackButton.onClick(() => {
    navigate(-1);
    WebApp.BackButton.hide();
  });

  useEffect(() => {
    if (showBack.valueOf()) {
      WebApp.BackButton.show();
    } else {
      WebApp.BackButton.hide();
    }
  }, [showBack]);

  const [showMain, setShowMain] = useState(false);

  WebApp.MainButton.setParams({
    text: "主按钮",
  });

  const MainButtonHandler = () => {
    WebApp.showAlert("You clicked MainButton!");
    WebApp.MainButton.offClick(MainButtonHandler);
  };
  WebApp.MainButton.onClick(MainButtonHandler);

  useEffect(() => {
    if (showMain.valueOf()) {
      WebApp.MainButton.show();
    } else {
      WebApp.MainButton.hide();
    }
  }, [showMain]);

  return (
    <div className="max-w-none prose prose-sm prose-invert">
      <h1 className="font-bold text-xl">UI Component</h1>

      <ul className="space-y-2">
        <li>
          显示后退按钮
          <Switch
            checked={showBack}
            onChange={setShowBack}
            className={`${
              showBack ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                showBack ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </li>
        <li>
          显示主按钮
          <Switch
            checked={showMain}
            onChange={setShowMain}
            className={`${
              showMain ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span
              className={`${
                showMain ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </li>
        <li>
          <Button onClick={() => WebApp.openLink("https://zcloak.network/")}>
            openLink()
          </Button>
        </li>
        <li>
          <Button
            onClick={() =>
              WebApp.showPopup({
                title: "A Popup",
                message: "An message of Popup",
              })
            }
          >
            showPopup()
          </Button>
        </li>
        <li>
          <Button onClick={() => WebApp.showAlert("An alert message!")}>
            showAlert()
          </Button>
        </li>
        <li>
          <Button onClick={() => WebApp.showConfirm("An confirm dialog")}>
            showConfirm()
          </Button>
        </li>
        <li
          onClick={() =>
            WebApp.showScanQrPopup({
              text: "custom title text",
            })
          }
        >
          <Button>showScanQrPopup()</Button>
        </li>
      </ul>
    </div>
  );
}
