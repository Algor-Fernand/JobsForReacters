import { Outlet } from "react-router-dom";
export default function CarreerLayout() {
  return (
    <div>
      <h2 className="mt-16 text-2xl font-bold">Careers</h2>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, similique.
      </p>

      <Outlet />
    </div>
  );
}
