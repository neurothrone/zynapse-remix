import { useState } from "react";
import { Link } from "@remix-run/react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>Counter on the Client Side</h1>
      <Link
        to="/"
        className="me-2 text-purple-400 hover:text-purple-300">
        Home
      </Link>
      <hr className="my-2"/>
      <p>Count: <span className="text-teal-300">{count}</span></p>
      <button
        className="me-2 text-purple-400 hover:text-purple-300"
        onClick={() => setCount(count + 1)}>Increment
      </button>
      <button
        className="me-2 text-purple-400 hover:text-purple-300"
        onClick={() => setCount(count - 1)}>Decrement
      </button>
    </section>
  );
}
