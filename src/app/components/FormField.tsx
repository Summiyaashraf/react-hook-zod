import { FormFieldProps } from "../../../types";


const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
        className="
    w-full 
    sm:w-3/4 
    lg:w-1/2 
    px-4 
    py-2 
    rounded-md 
    border 
    border-sky-900
    bg-sky-200
    text-black 
    focus:outline-none 
    focus:ring-2 
    focus:ring-sky-900
    transition 
    duration-200 
    ease-in-out
  "
/>
{error && <span className="error-message text-lg font-semibold">{error.message}</span>}
  </>
);
export default FormField;