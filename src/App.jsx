import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NotFound from "./error/NotFound";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
