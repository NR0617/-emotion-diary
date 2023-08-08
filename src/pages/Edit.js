import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [originData, setOriginData] = useState();

  const diaryList = useContext(DiaryStateContext);
  console.log(id, diaryList);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetDiary) {
        setOriginData(targetDiary);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  return (
    <div>
      <div>
        {originData && <DiaryEditor isEdit={true} originData={originData} />}
      </div>
    </div>
  );
};

export default Edit;
