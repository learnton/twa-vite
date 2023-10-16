import { useNavigate } from "react-router-dom";

function Info() {
  const navigate = useNavigate();
  const initData = sessionStorage.getItem("initData");

  return (
    <>
      <h1>test info</h1>
      <div>{initData}</div>
      <iframe height={300} src="https://m.baidu.com"></iframe>
      <div>
        <button onClick={() => navigate("/")}>back</button>
      </div>
    </>
  );
}

export default Info;
