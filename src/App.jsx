import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SingleCard from "./pages/SingleCard";
import CreateBook from "./pages/CreateBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id" element={<SingleCard />} />
          <Route path="/create" element={<CreateBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
