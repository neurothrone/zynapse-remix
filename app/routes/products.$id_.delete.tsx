import { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ params }: ActionFunctionArgs) => {
  const id: string | undefined = params.id;
  if (id) {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
  }

  return Response.redirect("/products");
}
