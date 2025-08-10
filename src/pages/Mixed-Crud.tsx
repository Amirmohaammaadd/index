import { Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import AppButton from "../ui-components/app-button";

type UserData = {
    username: string
    password: string
    // isActive: boolean
    // province: number | null
    // city: number | null
    // email: string
}

const MixedCrudPage = () => {
    const { control, handleSubmit } = useForm<UserData>();

    const onSubmit = (data: UserData) => console.log(data);

    return (<>
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 mx-auto flex flex-col gap-10 mt-10">
            <Controller
                name="username"
                control={control}
                rules={{ required: "این قسمت را خالی نگذارید" }}
                render={({ field, fieldState }) => (
                    <div className="!space-y-2">
                        <Input {...field} placeholder="نام کاربری" />
                        {fieldState.error && (
                            <span className="text-red-500 text-sm">{fieldState.error.message}</span>
                        )}
                    </div>
                )}
            />

            <Controller
                name="password"
                control={control}
                rules={{ required: "این قسمت را خالی نگذارید" }}
                render={({ field, fieldState }) => (
                    <div className="!space-y-2">
                        <Input.Password {...field} placeholder="رمز عبور" 
                        />
                        {fieldState.error && (
                            <span className="text-red-500 text-sm">{fieldState.error.message}</span>
                        )}
                    </div>
                )}
            />

            <AppButton title="ارسال" type="submit" color="green" className="w-full" />

        </form>
    </>);
}

export default MixedCrudPage;