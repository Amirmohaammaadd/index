import type { ComponentProps } from "react";

type AppInputProps = ComponentProps<"input"> & {
    label?: string;
    error?: string;
};

const AppInput = ({ label, error, className, ...rest }: AppInputProps) => {
    return (
        <div className="flex flex-col gap-1 w-[300px]">
            {label && <label className="mb-2 font-medium text-gray-700">{label}</label>}

            <input
                {...rest}
                type="text"
                className={`border px-3 py-2 rounded-md text-sm outline-none transition-all ${error ? "border-red-500" : "border-gray-300"
                    } ${className}`}
            />

            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>);
}

export default AppInput;