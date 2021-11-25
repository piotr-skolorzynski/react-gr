import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Recipes from "./Recipes";
import Challenge from "./Challenge";

const Content = () => (
  <Routes>
    <Route exact path="/" element={<Dashboard />} />
    <Route path="/recipes" element={<Recipes />} />
    <Route path="/challenge" element={<Challenge />} />
  </Routes>
);

export default Content;
