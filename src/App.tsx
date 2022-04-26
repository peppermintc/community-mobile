import { useLayoutEffect } from "react";
import { Route, Routes } from "react-router-dom";
import useActionCreators from "./hooks/useActionCreators";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

const App = () => {
  const { initStore } = useActionCreators();

  useLayoutEffect(() => {
    initStore();
  }, []);

  return (
    <Routes>
      <Route path="community/list" element={<ListPage />} />
      <Route path="community/post/:post_pk" element={<DetailPage />} />
    </Routes>
  );
};

export default App;
