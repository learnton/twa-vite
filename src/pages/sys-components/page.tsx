"use client";

import { Switch } from "@/ui";
import { useState, useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import { useNavigate } from "react-router-dom";

export default function Page() {
  const navigate = useNavigate();

  const [showBack, setShowBack] = useState(true);

  WebApp.BackButton.onClick(() => navigate(-1));

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

  useEffect(() => {
    if (showMain.valueOf()) {
      WebApp.MainButton.show();
    } else {
      WebApp.MainButton.hide();
    }
  }, [showMain]);

  return (
    <div className="max-w-none prose prose-sm prose-invert">
      <h1 className="font-bold text-xl">Component</h1>

      <ul>
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
      </ul>
    </div>
  );
}
