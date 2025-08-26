import axios from "axios";
import toast from "react-hot-toast";

const privateApi = axios.create({
  //   baseURL: import.meta.env.VITE_API_BASE_URL || "URL",
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// privateApi.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

privateApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const res = error.response;

    if (!res) {
      toast.error("خطا در ارتباط با سرور");
      return Promise.reject(error);
    }

    if (res.status >= 500) {

      toast.error("متاسفانه مشکلی در سمت سرور وجود دارد");

    } else if (res.status === 401) {

      toast.error("ورود غیرمجاز، لطفا مجددا وارد شوید");

    } else if (res.status === 403) {

      toast.error("شما مجوز انجام این عملیات را ندارید");

    } else if(res.status === 404){

      toast.error("Endpoint یا مسیر درخواستی نامعتبر است");

    }else if (res.status >= 400) {

      const msg = res.data?.message || "خطا در داده‌های ارسالی";

      toast.error(msg);
    }

    return Promise.reject(error);
  }
);

export default privateApi;
