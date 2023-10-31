"use client";
import { useEffect } from "react";
// import WebApp from "@twa-dev/sdk";
import useRouteChange from "@/hooks/useRouteChange.ts";

const saveFile = function (fileText: string) {
  const DownloadDom = document.getElementById("Download");
  if (DownloadDom) {
    const myBlob = new Blob([fileText], { type: "application/json" });
    DownloadDom.href = window.URL.createObjectURL(myBlob);
    console.log("下载文件已就绪");
  }
};

export default function Page() {
  useRouteChange();

  useEffect(() => {
    saveFile(`{"hello": "world"}`);
  }, []);

  return (
    <div className="max-w-none prose prose-sm prose-invert">
      <h1 className="font-bold text-xl">功能验证</h1>

      <ul className="space-y-2">
        <li>
          上传：
          <input type="file" accept=".json" />
        </li>
        <li>
          下载：
          <a id="Download" download="download.json" target="_blank">
            Download
          </a>
        </li>
      </ul>
    </div>
  );
}
