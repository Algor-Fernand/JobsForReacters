import { NavLink, Outlet } from "react-router-dom";

let styleLink = { background: "#bc4123" };

export default function HelpLayout() {
  return (
    <div>
      <main>
        <p className="font-semibold text-xl mt-24">Website Help</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          soluta sequi aspernatur perspiciatis et ex vitae dicta ad aut ut.
        </p>
      </main>
      <nav className=" text-center ">
        <NavLink
          className={`hover:ring-2 hover:ring-[#bc4123] border-2 border-white rounded-md mr-4  px-3 py-1 `}
          style={({ isActive }) => (isActive ? styleLink : null)}
          to="faq"
        >
          View the FAQ
        </NavLink>
        <NavLink
          className={`hover:ring-2 hover:ring-[#bc4123] border-2 border-white rounded-md  px-3 py-1`}
          style={({ isActive }) => (isActive ? styleLink : null)}
          to="contact"
        >
          Contact Us
        </NavLink>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
