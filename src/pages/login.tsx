import { useForm } from "react-hook-form";
import AppInput from "../ui-components/app-input";
import AppPasswordInput from "../ui-components/app-password-input";
import AppButton from "../ui-components/app-button";
import axios from "axios";
import { useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth-context";
import dev_1 from '../../src/assets/pics/dev-1.jpg'
import svgLogo from '../../src/assets/pics/1.svg'

type LoginUserData = {
    password: string,
    username: string
}

// john@mail.com = usename
// changeme = password

const LoginPage = () => {

    const { login } = useAuth();

    const { handleSubmit, register, formState: { errors } } = useForm<LoginUserData>()
    const [loading, setLoading] = useState(false)

    useLayoutEffect(() => {
        localStorage.clear()
    }, [])

    const loginApiCall = async (data: LoginUserData) => {

        try {
            setLoading(true)
            const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login",
                {
                    email: data.username,
                    password: data.password
                }
            )
            if (response.status === 201) {
                login(response.data.access_token);
            }

        } catch (error) {

            console.log(error);
            toast.error("خطا در برقراری ارتباط با سرور")

        } finally {
            setLoading(false)
        }
    }

    return (

        <div className="h-screen flex justify-center items-center bg-slate-200">
            <div className="h-full flex items-center justify-center w-full md:w-3/5 lg:w-2/5 lg:px-14">
                <form onSubmit={handleSubmit(loginApiCall)}
                    className="border border-slate-200 p-10 rounded-md flex flex-col bg-slate-100 gap-5 w-[80%] mx-auto shadow-2xl">

                    <img src={svgLogo} alt="None" className="size-[150px] mb-5 mx-auto aspect-square" />

                    <AppInput
                        hasStar
                        error={errors.username?.message}
                        placeholder="نام کاربری را وارد کنید"
                        label="نام کاربری" {...register("username",
                            { required: "این قسمت را خالی نگذارید" }
                        )} />

                    <AppPasswordInput
                        hasStar
                        error={errors.password?.message}
                        placeholder="رمز عبور را وارد کنید"
                        label="رمز عبور" {...register("password",
                            { required: "این قسمت را خالی نگذارید" }
                        )} />

                    <AppButton isloading={loading} type="submit" color="teal" title="ورود" className="w-full" />
                </form>
            </div>

            <div className="w-3/5 h-full hidden lg:flex">
                <img src={dev_1} className="size-full" />
            </div>
        </div>
    );
}

export default LoginPage;