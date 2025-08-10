import { useState, type ComponentProps } from "react";

type AppPasswordInputProps = ComponentProps<"input"> & {
    label?: string;
    error?: string;
};

const AppPasswordInput = ({ label, error, className, ...rest }: AppPasswordInputProps) => {

    const [showPassword, setShowPassword] = useState(false);


    return (
        <div className="flex flex-col gap-1 w-[300px]">
            {label && <label className="mb-2 font-medium text-gray-700">{label}</label>}

            <div className="relative">
                <input
                    type={showPassword ? "password" : "text"}

                    {...rest}
                    className={`border px-3 w-full py-2 bg-slate-200 rounded-md text-sm outline-none transition-all ${error ? "border-red-500" : "border-gray-300"
                        } ${className}`}
                />

                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute cursor-pointer left-2 top-1/2 -translate-y-1/2 text-sm text-gray-600"
                >
                    {showPassword ? "%" : "$"}
                </button>
            </div>

            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>);
}

export default AppPasswordInput;