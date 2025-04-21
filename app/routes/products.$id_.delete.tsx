import { ActionFunction, ActionFunctionArgs } from "@remix-run/node";

export const action: ActionFunction = async ({ params }: ActionFunctionArgs) => {
  const id: string | undefined = params.id;
  if (id) {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
  }

  return Response.json(null, { status: 200 });
}
