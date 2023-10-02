import Home from "../pages/Home/Home";
import SearchByName from "../pages/SearchByName/SearchByName";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/byName" element={<SearchByName />} />
      </Routes>
    </BrowserRouter>
  );
}
