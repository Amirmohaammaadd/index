import { useForm } from "react-hook-form";
import AppButton from "../ui-components/app-button";
import AppInput from "../ui-components/app-input";

type UserData = {
    userName: string,
    password: string
}

const HomePage = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<UserData>({
        mode: "onChange"
    })

    const getData = (data: UserData) => {
        console.log(data);
    }

    const resetData = () => {
        reset({ password: "12345", userName: "tsethj" })
    }

    return (
        <div className="p-10">

            <form onSubmit={handleSubmit(getData)} className="flex-col flex">

                <AppInput
                    className={`${errors.userName && "border-red-500"}`}
                    {...register("userName",
                        {
                            required: "این قسمت را خالی نگدارید",
                            minLength: { value: 5, message: "حداقل 5 کارکتر نیاز است" }
                        }

                    )} label="نام کاربری" placeholder="نام کاربری را وارد کنید" />

                {errors.userName && <div className="text-red-600 text-xs mt-2">{errors.userName.message}</div>}


                <AppInput {...register("password", {
                    required: "این قسمت را خالی نگدارید",
                    minLength: { value: 5, message: "حداقل 5 کارکتر نیاز است" }
                })} label="رمز عبور" placeholder="رمز عبور را وارد کنید" className={`${errors.password && "border-red-500"}`} />


                {errors.password && <div className="text-red-600 text-xs mt-2">{errors.password.message}</div>}


                <AppButton type="submit" className="w-[300px]" title="ارسال" />

                <AppButton type="submit" className="w-[300px]" title="پر کن" onClick={resetData} />

            </form>

        </div>);
}

export default HomePage;