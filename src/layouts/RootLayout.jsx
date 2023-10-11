import { NavLink, Outlet } from "react-router-dom";

const activeLink = "bg-[#bc4123] rounded-md ring-1 ring-white px-2";
export default function RootLayout() {
  return (
    <div>
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
            <NavLink
              className={({ isActive }) => (isActive ? activeLink : "")}
              to="help"
            >
              Help
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
