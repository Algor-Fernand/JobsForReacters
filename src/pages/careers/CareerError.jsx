import { useRouteError } from "react-router-dom";

export default function CareerError() {
  const { error } = useRouteError();
  return (
    <div>
      <p>Error found</p>
      <p>{error.message}</p>
    </div>
  );
}
