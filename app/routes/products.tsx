import type { LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import Product from "~/types/product";


export const loader: LoaderFunction = async () => {
  try {
    return await fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      });
  } catch (error) {
    throw new Response("Failed to load products", { status: 500 });
  }
}

export default function Products() {
  const products: Product[] = useLoaderData<typeof loader>();

  return (
    <>
      <section>
        <h1>Products</h1>
        <Link
          to="/"
          className="me-2 text-purple-400 hover:text-purple-300">
          Home
        </Link>
        <Link
          to="create"
          className="text-purple-400 hover:text-purple-300">
          Create
        </Link>
        <hr className="my-2"/>
        <nav>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <Link
                  to={`${product.id}`}
                  className="text-teal-400 hover:text-teal-300"
                >
                  {product.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <hr className="my-2"/>
      </section>
      <Outlet/>
    </>
  );
}
