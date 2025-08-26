import { useEffect, useState } from "react";
import privateApi from "../services/api-config";
import { Skeleton } from "antd";
import type { Product } from "../types/product.type";

const ProductsPage = () => {

    const [loading, setLoading] = useState(false)
    const [productData, setProductData] = useState<Product[]>([])

    const getProductsApiCall = async () => {
        try {
            setLoading(true)
            const { status, data } = await privateApi.get("/products");

            if (status === 200) {
                setProductData(data);
            }

        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProductsApiCall()
    }, [])
    return (

        <div className="flex flex-col justify-center items-center p-3 py-10" >
            <div className="grid grid-cols-4 gap-x-14 gap-y-10 ">

                {loading ?
                    <>
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="w-[300px] bg-white p-3 shadow-lg rounded-md flex flex-col gap-5"
                            >
                                <Skeleton.Image className="!w-full !h-[150px]" active />
                                <Skeleton active paragraph={{ rows: 3, width: ["60%", "100%", "90%"] }} />
                                <Skeleton active paragraph={{ rows: 1, width: "40%" }} />
                            </div>
                        ))}
                    </> :
                    <>
                        {productData.map((product) =>
                            <div className="w-[300px] bg-white p-3 shadow-lg rounded-md flex flex-col gap-5">
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="w-full h-[150px] object-cover rounded-md"
                                />
                                <h3 className="text-lg font-semibold truncate">{product.title}</h3>
                                <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>
                                <p className="text-md font-semibold mt-auto">قیمت: {product.price.toLocaleString()} تومان</p>
                            </div>
                        )}
                    </>
                }
            </div>
        </div>


    );
}

export default ProductsPage;