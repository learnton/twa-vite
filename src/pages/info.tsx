import { useNavigate } from "react-router-dom";
import WebApp from "@twa-dev/sdk";

function Info() {
  const navigate = useNavigate();

  const WebAppData = WebApp.initData;

  return (
    <>
      <h1>test info</h1>
      <div>initData:{JSON.stringify(WebAppData)}</div>
      {/* <iframe height={300} src="https://m.baidu.com"></iframe> */}
      <div>
        <button onClick={() => navigate("/")}>back</button>
        <button onClick={() => WebApp.BackButton.show()}>show back</button>
        <button onClick={() => WebApp.BackButton.hide()}>hide back</button>
        <button onClick={() => WebApp.MainButton.show()}>
          show MainButton
        </button>
        <button onClick={() => WebApp.MainButton.hide()}>
          hide MainButton
        </button>
        <button onClick={() => WebApp.HapticFeedback.impactOccurred("medium")}>
          HapticFeedback
        </button>
      </div>
    </>
  );
}

export default Info;
