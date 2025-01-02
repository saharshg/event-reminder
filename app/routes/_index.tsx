import type { MetaFunction } from "@remix-run/node";
import { LoaderFunction, redirect } from "@remix-run/node";
import { requireUserId } from "~/utils/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Event Reminder App" },
    { name: "description", content: "Welcome to Event Reminder app!" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request);
  return redirect("/home");
};

export default function Index() {
  return null;
}
