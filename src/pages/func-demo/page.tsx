"use client";
import { useEffect } from "react";
// import WebApp from "@twa-dev/sdk";
import useRouteChange from "@/hooks/useRouteChange.ts";
import WebApp from "@twa-dev/sdk";

const saveFile = function (fileText: string) {
  const DownloadDom = document.getElementById("Download") as any;
  if (DownloadDom) {
    const myBlob = new Blob([fileText], { type: "application/json" });
    DownloadDom.href = window.URL.createObjectURL(myBlob);
    console.log("下载文件已就绪");
  } else {
    WebApp.showAlert("without DownloadDom");
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
            组装blob
          </a>
          <a
            href="https://static.refined-x.com/static/%E6%89%B9%E5%A4%84%E7%90%86%E5%AE%BD%E5%BA%A6640.atn"
            target="_blank"
            download="批处理宽度640.atn"
          >
            外链url
          </a>
        </li>
      </ul>
    </div>
  );
}
