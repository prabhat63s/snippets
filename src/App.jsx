import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import TemplatePage from "./pages/TemplatePage";
import ShowcasePage from "./pages/ShowcasePage";
import Installation from "./pages/getstarted/Installation";
import Portfolio from "./pages/templates/Portfolio";
import Button from "./pages/allComponents/Button";
import Card from "./pages/allComponents/Card";
import Input from "./pages/allComponents/Input";
import Footer from "./pages/allComponents/Footer";
import ColorPage from "./pages/ColorPage";
import Spinner from "./pages/allComponents/Spinner";
import Animation from "./pages/allComponents/Animation";
import Introduction from "./pages/getstarted/Introduction";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Getting Started */}
        <Route path="/docs">
          <Route path="introduction" element={<Introduction />} />
          <Route path="installation" element={<Installation />} />
        </Route>

        {/* All Templates */}
        <Route path="/portfolio" element={<Portfolio />} />

        {/* All Components */}
        <Route path="/components">
          <Route path="button" element={<Button />} />
          <Route path="card" element={<Card />} />
          <Route path="input" element={<Input />} />
          <Route path="footer" element={<Footer />} />
          <Route path="animation" element={<Animation />} />
          <Route path="spinner" element={<Spinner />} />
        </Route>

        {/* Template Page */}
        <Route path="/templates" element={<TemplatePage />} />

        {/* Showcase */}
        <Route path="/showcases" element={<ShowcasePage />} />

        {/* Color Page */}
        <Route path="/colors" element={<ColorPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
