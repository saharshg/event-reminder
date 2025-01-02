import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface FormFieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label: string;
}

export function FormField({
  name,
  label,
  type = "text",
  placeholder,
  ...rest
}: FormFieldProps) {
  return (
    <>
      <label className='text-sky-400'>
        {label}
        <input
          {...rest}
          type={type}
          name={name}
          placeholder={placeholder}
          className='w-full p-2 rounded-xl my-2 bg-white border shadow-sm  placeholder-orange-200 focus:outline-none focus:border-sky-700 focus:ring-sky-500 block sm:text-sm focus:ring-1'
        />
      </label>
    </>
  );
}
