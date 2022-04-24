import { Route, Routes } from "react-router-dom";
import ListPage from "./pages/ListPage";

const App = () => {
  return (
    <Routes>
      <Route path="community/list" element={<ListPage />} />
    </Routes>
  );
};

export default App;
