"use client";
import { useEffect } from "react";
// import WebApp from "@twa-dev/sdk";
import useRouteChange from "@/hooks/useRouteChange.ts";
import { downloadBlob } from "./util";

const myBlob = new Blob([`{"hello": "world"}, "timestamp": ${Date.now()}`], {
  type: "application/json",
});
const saveFile = function () {
  // Create a download link for the blob content
  const downloadLink = downloadBlob(myBlob, "keyfile.json");
  downloadLink.title = "keyfile.json";
  // Set the text content of the download link
  downloadLink.textContent = "Export";
  downloadLink.id = "insertDom";
  // Attach the link to the DOM
  document.body.appendChild(downloadLink);
};

export default function Page() {
  useRouteChange();

  useEffect(() => {
    const $dom = document.getElementById("insertDom");
    if (!$dom) {
      saveFile();
    }
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
