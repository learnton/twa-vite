import { useNavigate } from "react-router-dom";

function Iframe() {
  const navigate = useNavigate();

  return (
    <>
      <h1>iframe test</h1>
      <iframe height={300} src="https://m.baidu.com"></iframe>
      <div>
        <button onClick={() => navigate("/")}>back</button>
      </div>
    </>
  );
}

export default Iframe;
