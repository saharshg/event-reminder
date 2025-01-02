import { MouseEventHandler } from "react";

interface ButtonProps {
  name?: string;
  value?: string;
  children: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className='rounded-xl mt-2 transition duration-300 ease-in-out hover:-translate-y-1 bg-sky-500 hover:bg-sky-700 text-orange-200 font-bold py-2 px-4 border-b-4 border-sky-700 hover:border-b-sky-500'
    >
      {children}
    </button>
  );
};

export default Button;
