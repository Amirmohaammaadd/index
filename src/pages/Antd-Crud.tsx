import { Button, ConfigProvider, Form, Input, Segmented, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import { useState } from "react";
import { Rules } from "../constant/Rules";
import { city, province, segmentValue } from "../constant/Data";
import { getUserApiCall } from "../services/crud-services";

type UserData = {
    userName: string
    password: string
    isActive: boolean
    province: number | null
    city: number | null
    email: string
}

const AntdCrudPage = () => {
    const [customForm] = useForm()
    const [loading, setLoading] = useState(false)

    const [userData, setUserData] = useState<UserData>({
        password: "",
        userName: "",
        isActive: false,
        province: null,
        city: null,
        email: ""
    })

    const getValue = (_: any, data: UserData) => {
        setUserData({
            userName: data.userName,
            password: data.password,
            isActive: data.isActive ?? false,
            province: data.province,
            city: data.city,
            email: data.email
        });
    }

    const submitForm = () => {
        console.log(userData);
    }

    // const getUser = () => {
    //     privateApi
    //         .get("/get")
    //         .then((response) => {
    //             console.log("Server Response:", response); 
    //         })
    //         .catch((error) => {
    //             console.error("Error:", error);
    //         });
    // }

    // const getUser = async () => {
    //     try {
    //         const response = await privateApi.get("/users/1");
    //         console.log("Server Response:", response);
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };

    // useEffect(() => {
    //     getUser()
    // }, [])

    return (
        <div className="h-full flex flex-col gap-4 justify-center items-center">
            <Form
                labelCol={{ span: 24 }}
                form={customForm}
                onFinish={submitForm}
                onValuesChange={getValue}
                initialValues={{ isActive: false }}
                className="border border-slate-300 rounded-md !p-10 w-1/2 grid grid-cols-2 gap-6"
            >
                <Form.Item
                    rules={[Rules().require]}
                    name={"userName"}
                    label={"نام کاربری"}
                >
                    <Input placeholder="نام کاربری را وارد کنید" maxLength={20} />
                </Form.Item>

                <Form.Item
                    rules={[Rules().require]}
                    name={"password"}
                    label={"رمزعبور"}
                >
                    <Input.Password placeholder="رمز عبور را وارد کنید" maxLength={20} />
                </Form.Item>

                <Form.Item
                    rules={[Rules().require]}
                    name={"email"}
                    label={"ایمیل"}
                >
                    <Input placeholder="ایمیل را وارد کنید" maxLength={20} />
                </Form.Item>

                <Form.Item
                    rules={[Rules().require]}
                    name={"province"}
                    label={"استان"}
                >
                    <Select
                        onClick={() => customForm.setFieldValue("city", null)}
                        showSearch
                        filterOption={(input, option) =>
                            (option?.label ?? "").toString().toLowerCase().includes(input.toLowerCase())
                        }
                        options={province.sort((a, b) => a.label.localeCompare(b.label, "fa"))}
                        placeholder={"استان را انتخاب کنید"} />
                </Form.Item>

                <Form.Item
                    rules={[Rules().require]}
                    name={"city"}
                    label={"شهر"}
                >
                    <Select
                        disabled={userData.province === null}
                        showSearch
                        filterOption={(input, option) =>
                            (option?.label ?? "").toString().toLowerCase().includes(input.toLowerCase())
                        }
                        options={city.sort((a, b) => a.label.localeCompare(b.label, "fa"))}
                        placeholder={"شهر را انتخاب کنید"} />
                </Form.Item>

                <ConfigProvider
                    direction="rtl"
                    theme={{
                        components: {
                            Segmented: {
                                trackBg: "#fcf9fa",
                                itemSelectedBg: userData.isActive ? "#00c951" : "#e7000b",
                                itemSelectedColor: "#fff",
                            },
                        },
                    }}
                >
                    <Form.Item name={"isActive"} label={"وضعیت"} rules={[Rules().require]}>
                        <Segmented
                            size="large"
                            value={userData.isActive}
                            onChange={(value) =>
                                setUserData((prev) => ({ ...prev, isActive: value }))
                            }
                            options={segmentValue}
                            className="border border-zinc-300"
                        />
                    </Form.Item>
                </ConfigProvider>

                <div className="col-span-2">
                    <Button
                        htmlType="submit"
                        className="w-full mt-5"
                        variant="solid"
                        color="red"
                    >
                        ارسال
                    </Button>

                    <Button
                        loading={loading}
                        onClick={() => getUserApiCall({ loading: setLoading, form: customForm })}
                        className="w-full mt-5"
                        variant="solid"
                        color="blue"
                    >
                        ویرایش
                    </Button>
                </div>
            </Form>
        </div>
    );
}

export default AntdCrudPage;