import { useRouteError, Link } from "react-router-dom";

export default function CareersError() {
  const error = useRouteError();
  return (
    <div>
      <p className="text-2xl mt-12">Error found</p>
      <p>{error.message}</p>
      <p>
        You may go back to the
        <Link to="/" className="underline">
          Homepage
        </Link>
      </p>
    </div>
  );
}
