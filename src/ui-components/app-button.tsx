import type { ComponentProps } from "react";

const buttonColors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-green-600 hover:bg-green-700",
    yellow: "bg-yellow-500 hover:bg-yellow-600 text-black",
    purple: "bg-purple-600 hover:bg-purple-700",
    pink: "bg-pink-500 hover:bg-pink-600",
    teal: "bg-teal-500 hover:bg-teal-600",
} as const;

type AppButtonProps = ComponentProps<"button"> &
{
    isloading?: boolean,
    color?: ButtonColor
}

type ButtonColor = keyof typeof buttonColors;

const AppButton = ({ title, className, disabled, isloading, color = "blue", ...rest }: AppButtonProps) => {
    return (
        <button
            {...rest}
            disabled={isloading || disabled}
            className={`mt-4 px-4 py-2 rounded-md text-white text-sm transition-all cursor-pointer
        ${isloading || disabled ? "bg-gray-400 !cursor-not-allowed" : buttonColors[color]}
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