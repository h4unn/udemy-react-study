import ReactDOM from "react-dom/client";
/*
  reactDOM 이라는 서드파티 라이브러리에서 가져온다는 뜻
  (라이브러리 의존성 중) package.json 파일을 확인
*/


import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
/*
  ReactDOM에서 createRoot 라는 기능을 불러와서 사용(메인 훅)
 */
root.render(<App />);
