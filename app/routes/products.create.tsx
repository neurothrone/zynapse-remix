import { Form, useNavigate } from "@remix-run/react";
import { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  return Response.json(title, { status: 200 });
}

export default function CreateProduct() {
  const navigate = useNavigate();

  return (
    <section>
      <Form id="create-form" method="post" className="mt-2">
        <label htmlFor="title" className="pe-2">Title</label>
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue=""
        />
        <div className="flex gap-2 mt-2">
          <button
            className="text-gray-300 hover:text-gray-200"
            onClick={() => navigate(-1)}>Cancel
          </button>
          <button
            type="submit"
            className="text-purple-400 hover:text-purple-300">Create
          </button>
        </div>
      </Form>
    </section>
  );
}
