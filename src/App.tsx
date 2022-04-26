import { Route, Routes } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

const App = () => {
  return (
    <Routes>
      <Route path="community/list" element={<ListPage />} />
      <Route path="community/post/:post_pk" element={<DetailPage />} />
    </Routes>
  );
};

export default App;
