import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFound from "./error/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
