import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, harum.
        Voluptatum, quos reiciendis soluta placeat error nulla id ea odio.
      </p>

      <p>
        Go to the <Link to="/"> HomePage </Link>.
      </p>
    </div>
  );
}
