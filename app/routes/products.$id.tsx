import { LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import Product from "~/types/product";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const id = params.id;
  if (id) {
    const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());
    if (product) {
      return Response.json({ product });
    }
    return Response.json(null, { status: 404 });
  } else {
    return Response.json(null, { status: 400 });
  }
};

export default function ProductDetail() {
  const { product }: { product: Product } = useLoaderData<typeof loader>();

  return (
    <section>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <div className="actions">
        <Form action="edit">
          <button type="submit">Edit</button>
        </Form>
        <Form
          action="delete"
          method="post"
          onSubmit={(event) => {
            const response = confirm("Are you sure you want to delete this product?");
            if (!response) {
              event.preventDefault();
            }
          }}>
          <button type="submit">Delete</button>
        </Form>
      </div>
    </section>
  );
}
