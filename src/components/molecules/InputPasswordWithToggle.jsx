import { useState } from "react";
import Input from "../atoms/Input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function InputPasswordWithToggle({ placeholder, ...props }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <Input
        type={show ? "text" : "password"}
        placeholder={placeholder}
        {...props}
      />
      <button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
        onClick={() => setShow(!show)}
      >
        {show ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
      </button>
    </div>
  );
}