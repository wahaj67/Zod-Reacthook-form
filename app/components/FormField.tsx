import { FormFieldProps } from "@/types";

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
      className="bg-white text-black border-black shadow-lg"
    />
    {error && <span className="error-message">{error.message}</span>}
  </>
);
export default FormField;
