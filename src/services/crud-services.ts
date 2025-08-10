import type { FormInstance } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

type GetUserApi = {
  loading: (e: boolean) => void;
  form: FormInstance;
};

export const getUserApiCall = async ({ loading, form }: GetUserApi) => {
  try {
    loading(true);
    const response = await axios.get("https://fakestoreapi.com/users/1");
    form.setFieldsValue(response.data);
    toast.success("اطلاعات از سمت سرور بازیابی شد");
    return response.data;
  } catch (error) {
    console.log(error);
  } finally {
    loading(false);
  }
};
