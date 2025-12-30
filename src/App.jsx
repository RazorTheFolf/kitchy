import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFound from "./error/NotFound";
import About from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
