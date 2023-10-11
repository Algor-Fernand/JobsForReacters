import { useLoaderData } from "react-router-dom";

export default function CareerDetails() {
  const details = useLoaderData();
  return (
    <div className="bg-blue-950 rounded-lg mt-8 pl-5 py-2">
      <p className="font-extrabold text-2xl ">
        Career Details for {details.title}
      </p>
      <p>
        <span className="text-lg">Salary: $</span>
        {details.salary}
      </p>
      <p>
        <span className="text-lg">Location: </span> {details.location}
      </p>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, <br />
        maxime. Eaque, cupiditate.Dolor, maxime. Eaque, cupiditate.
      </p>
    </div>
  );
}

export const detailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);

  if (!res.ok) {
    throw Error("could not find this career");
  }
  return res.json();
};
