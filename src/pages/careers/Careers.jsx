import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();
  console.log(careers);
  return (
    <div className="">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <div className="bg-blue-950 group rounded-sm px-5">
            <p className=" group-hover:text-[#bc4123] pt-3">{career.title}</p>
            <p className="text-xs -mt-2 pb-3">Based in {career.location}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export const carreerLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  const data = await res.json();
  return data;
};
