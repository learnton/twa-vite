import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  return (
    <>
      <h1>create did and wallet</h1>

      <button onClick={() => navigate("/")}>back</button>
    </>
  );
}

export default Create;
