import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [serchParams, setSearchParams] = useSearchParams();

  const id = serchParams.get("id");
  const mode = serchParams.get("mode");
  //console.log("id :", id, "mode :", mode);

  const who = serchParams.get("who");
  //console.log("who :", who);

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 일기 수정페이지입니다</p>
      <button onClick={() => setSearchParams({ who: "winterlood" })}>
        QS 바꾸기
      </button>
      <button onClick={() => navigate("/home")}>홈으로 가기</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Edit;
