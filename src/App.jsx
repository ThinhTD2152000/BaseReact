import { Route, Routes } from "react-router-dom";

import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
