import { LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import Button from "~/components/button";
import { getUser } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUser(request);
  return Response.json(user);
};

export default function Home() {
  const user = useLoaderData<typeof loader>();
  return (
    <>
    <header className='flex flex-col'>
      <div>{`Hi, ${user.name}`}</div>
      <Form className="text-xs" action='/logout' method='POST'>
        <Button type='submit'>Logout</Button>
      </Form>
    </header>
    <main>
      <Form action='/events/create' method='POST'>
        <Button>Create new event</Button>
      </Form>
    </main>
    </>
  );
}
