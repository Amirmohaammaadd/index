import { useForm } from "react-hook-form";
import AppInput from "../ui-components/app-input";
import AppButton from "../ui-components/app-button";
import AppPasswordInput from "../ui-components/app-password-input";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

type UserData = {
    username: string
    password: string
    // isActive: boolean
    // province: number | null
    // city: number | null
    // email: string
}

const RhfCrudPage = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm<UserData>()
    const [loading, setLoading] = useState(false)

    const [userData, setUserData] = useState<UserData>({
        password: "",
        username: "",
        // isActive: false,
        // province: null,
        // city: null,
        // email: ""
    })

    const getData = (data: UserData) => {
        setUserData({
            username: data.username,
            password: data.password,
            // isActive: data.isActive ?? false,
            // province: data.province,
            // city: data.city,
            // email: data.email
        })
    }

    const getUserApiCall = async () => {
        try {
            setLoading(true);
            const response = await axios.get<UserData>("https://fakestoreapi.com/users/1");
            reset({
                // password: response.data.password,
                // username: response.data.username
                ...response.data
            })
            toast.success("اطلاعات از سمت سرور بازیابی شد");
            return response.data;
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        console.log(userData)
    }, [userData])


    return (
        <div className="h-full flex flex-col gap-4 justify-center items-center">

            <form onSubmit={handleSubmit(getData)} className="space-y-5 w-1/2 lg:w-1/4">

                <AppInput
                    error={errors.username?.message}
                    {...register("username", { required: "این قسمت را خالی نگذارید" })}
                    label="نام کاربری"
                    placeholder="نام کاربری را وارد کنید" />

                <AppPasswordInput
                    error={errors.password?.message}
                    {...register("password", { required: "این قسمت را خالی نگذارید" })}
                    label="رمز عبور"
                    placeholder="رمز عبور را وارد کنید" />

                <AppButton title="ارسال" type="submit" className="w-full" />

                <AppButton
                    isloading={loading}
                    onClick={getUserApiCall}
                    className="w-full"
                    color="red"
                    title="ویرایش"
                />
            </form>
        </div>);
}

export default RhfCrudPage;