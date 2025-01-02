import {
  Form,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
} from "@remix-run/node";

import "./tailwind.css";
import { getUser, logout, requireUserId } from "./utils/auth.server";
import Button from "./components/button";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='bg-orange-200 font-mono text-sky-300 selection:bg-sky-700 selection:text-orange-200'>
        <div className='flex flex-col h-screen'>
          <header className='flex justify-between'>
            <h1 className='leading text-2xl font-bold'>Event Reminder App</h1>
            {/*
                  <div className="h-[14px] w-[434px]">
                  <img
                    src="/logo.png"
                    alt="Remix"
                    className="block w-full dark:hidden"
                  />
                </div>
                */}
          </header>
          {children}
          <footer className='block fixed right-0 bottom-0'>
            <div className='italic'>
              Made with <span className='text-red-800 text-md'>❤️</span> by{" "}
              <a
                className=' hover:text-sky-700 hover:uppercase'
                href='https://www.saharshgoyal.com'
                target='_blank'
              >
                Saharsh Goyal
              </a>
            </div>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
