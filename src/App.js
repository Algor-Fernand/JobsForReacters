import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  const activeLink = "bg-[#bc4123] rounded-md ring-1 ring-white px-2";
  return (
    <BrowserRouter>
      <header>
        <nav className="flex justify-between">
          <h1 className="font-bold border-b-2 border-[#bc4123]">Jobarouter</h1>
          <div className="flex gap-5">
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to="about"
            >
              About
            </NavLink>
          </div>
        </nav>
      </header>
      <main className="mt-14">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
