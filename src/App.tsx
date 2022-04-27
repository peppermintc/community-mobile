import { useLayoutEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useActionCreators from "./hooks/useActionCreators";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";

const App = () => {
  const { initStore } = useActionCreators();

  useLayoutEffect(() => {
    initStore();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/community/list" />} />
      <Route path="community/list" element={<ListPage />} />
      <Route path="community/post/:post_pk" element={<DetailPage />} />
      <Route path="community/post/new" element={<WritePage />} />
    </Routes>
  );
};

export default App;
