import type { ComponentProps } from "react";

type AppButtonProps = ComponentProps<"button"> & { isloading?: boolean }

const AppButton = ({ title, className, disabled, isloading, ...rest }: AppButtonProps) => {
    return (
        <button
            {...rest}
            disabled={isloading || disabled}
            className={`mt-4 px-4 py-2 rounded-md text-white text-sm transition-all cursor-pointer
        ${isloading || disabled ? "bg-gray-400 !cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
        ${className}
      `}
        >  {isloading ?
            <div className="flex items-center justify-center gap-2">

                <span>
                    لطفا شکیبا باشید
                </span>

                <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />

            </div> : (title || "تایید")}
        </button>
    );
}

export default AppButton;