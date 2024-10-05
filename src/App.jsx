import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ComponentPage from "./pages/getstarted/ComponentPage";
import TemplatePage from "./pages/TemplatePage";
import ShowcasePage from "./pages/ShowcasePage";
import Installation from "./pages/getstarted/Installation";
import Portfolio from "./pages/templates/Portfolio";
import Button from "./pages/allComponents/Button";
import Card from "./pages/allComponents/Card";
import Input from "./pages/allComponents/Input";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/component" element={<ComponentPage />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/button" element={<Button />} />
        <Route path="/card" element={<Card />} />
        <Route path="/input" element={<Input />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
