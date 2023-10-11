import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div>
      <h1 className="mt-24 text-2xl">Page Not Found</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi commodi
        cum explicabo possimus, eum assumenda.
      </p>
      <p>
        Go back to the{" "}
        <Link className="underline" to="/">
          HomePage.
        </Link>
      </p>
    </div>
  );
}
