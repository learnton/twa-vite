import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();
  const hash = window.location.hash.slice(1);
  const params = new URLSearchParams(hash);
  const initData = new URLSearchParams(params.get("tgWebAppData") || "");
  const WebAppData = (window.global as any).Telegram?.WebApp;

  return (
    <>
      <h1>test info</h1>
      <div>{JSON.stringify(WebAppData)}</div>
      <div>hash: {hash}</div>
      <div>initData:{JSON.stringify(initData)}</div>
      {/* <iframe height={300} src="https://m.baidu.com"></iframe> */}
      <div>
        <button onClick={() => navigate("/")}>back</button>
      </div>
    </>
  );
}

export default Info;
