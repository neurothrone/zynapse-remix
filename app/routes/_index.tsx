import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Zynapse" },
    { name: "description", content: "Welcome to Zynapse" },
  ];
};

export default function Index() {
  return (
    <main>
      <h1 className="font-bold">Welcome to Zynapse</h1>
      <Link to="/products" className="text-purple-400 hover:text-purple-300 me-2">Products</Link>
      <Link to="/counter" className="text-purple-400 hover:text-purple-300">Counter</Link>
      <hr className="my-2"/>
    </main>
  );
}
