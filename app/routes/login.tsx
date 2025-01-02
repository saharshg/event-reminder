import { ActionFunctionArgs, LoaderFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { prisma } from "~/utils/prisma.server";
import Button from "~/components/button";
import { FormField } from "~/components/formField";
import { useState } from "react";
import {
  validateName,
  validatePassword,
  validatePhone,
} from "~/utils/validators.server";
import { getUser, login, register } from "~/utils/auth.server";
import Layout from "~/components/layout";

export const loader: LoaderFunction = async ({ request }) => {
  // If there's already a user in the session, redirect to the home page
  return (await getUser(request)) ? redirect("/") : null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const form = await request.formData();
  const action = form.get("_action");
  const phone = form.get("phone");
  const password = form.get("password");
  let name = form.get("name");

  if (
    typeof action !== "string" ||
    typeof phone !== "string" ||
    typeof password !== "string"
  ) {
    return Response.json(
      { error: `Invalid Form Data`, form: action },
      { status: 400 }
    );
  }

  if (action === "register" && typeof name !== "string") {
    return Response.json(
      { error: `Invalid Form Data`, form: action },
      { status: 400 }
    );
  }

  const errors = {
    phone: validatePhone(phone),
    password: validatePassword(password),
    ...(action === "register"
      ? {
          name: validateName((name as string) || ""),
        }
      : {}),
  };

  if (Object.values(errors).some(Boolean)) {
    return Response.json(
      { errors, fields: { phone, password, name }, form: action },
      { status: 400 }
    );
  }

  switch (action) {
    case "login": {
      return await login({ phone, password });
    }
    case "register": {
      name = name as string;
      return await register({ phone, password, name });
    }
    default:
      return Response.json({ error: `Invalid Form Data` }, { status: 400 });
  }
};

const Login = () => {
  const [action, setAction] = useState("login");
  return (
    <Layout>
      <div className='h-full justify-center items-center flex flex-col gap-y-4'>
        <Form className='rounded-2xl bg-stone-200 p-6 w-96' method='post'>
          {action === "register" && (
            <FormField required name='name' label='Name' />
          )}
          <FormField required name='phone' label='Phone number' />
          <FormField
            required
            name='password'
            type='password'
            label='Password'
          />

          <div className='w-full text-center flex justify-between align-middle items-center'>
            <Button
              type='button'
              onClick={() =>
                setAction(action == "login" ? "register" : "login")
              }
            >
              {action === "login" ? "<- Register" : "<- Login"}
            </Button>
            <Button name='_action' value={action} type='submit'>
              {action === "login" ? "Sign In ->" : "Sign Up ->"}
            </Button>
          </div>
        </Form>
      </div>
    </Layout>
  );
};
export default Login;
