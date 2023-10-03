import Home from "../pages/Home";
import SearchByName from "../pages/SearchByName";
import SearchByLetter from "../pages/SearchByLetter";
import Ingredients from "../pages/Ingredients";
import ByIngredient from "../pages/ByIngredient";
import Details from "../pages/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/by-name" element={<SearchByName />} />
        <Route path="/by-letter" element={<SearchByLetter />} />
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="/by-ingredient" element={<ByIngredient />} />
      </Routes>
    </BrowserRouter>
  );
}
