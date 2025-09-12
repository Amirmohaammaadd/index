import { useQuery } from "@tanstack/react-query";
import { Button, Drawer, Form, List, Switch, Spin } from "antd";
import axios from "axios";
import { useState } from "react";

type FilterData = {
    priceFilter: boolean;
    categoryId: boolean;
};

type Product = {
    id: number;
    title: string;
    slug: string;
    price: number;
};

const getInitialFilters = () => {
    const params = new URLSearchParams(window.location.search);
    return {
        priceFilter: params.get("price") === "100",
        categoryId: params.get("categoryId") === "11",
    };
};

const fetchProducts = async (filters: FilterData) => {
    const params = new URLSearchParams();
    if (filters.priceFilter) params.set("price", "100");
    if (filters.categoryId) params.set("categoryId", "11");

    const url =
        filters.priceFilter || filters.categoryId
            ? `https://api.escuelajs.co/api/v1/products/?${params.toString()}`
            : `https://api.escuelajs.co/api/v1/products`;

    const res = await axios.get(url);
    return res.data as Product[];
};

const SearchProducts = () => {
    const [form] = Form.useForm<FilterData>();
    const [openDrawer, setOpenDrawer] = useState(false);
    const [filterValue, setFilterValue] = useState(getInitialFilters());

    const { data: products, isLoading } = useQuery({
        queryKey: ["products", filterValue],
        queryFn: () => fetchProducts(filterValue),
    });

    const handleFilterChange = (_: any, values: FilterData) => {
        setFilterValue(values);

        const params = new URLSearchParams();
        if (values.priceFilter) params.set("price", "100");
        if (values.categoryId) params.set("categoryId", "11");
        window.history.replaceState(null, "", "?" + params.toString());
    };

    return (
        <>
            <Button
                className="mt-5"
                style={{ backgroundColor: "orange", color: "#fff" }}
                onClick={() => setOpenDrawer(prev => !prev)}
            >
                اعمال فیلترها
            </Button>

            <Drawer
                title="Search Drawer"
                placement="bottom"
                closable
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
            >
                <Form
                    form={form}
                    className="flex flex-col justify-center items-center w-full"
                    onValuesChange={handleFilterChange}
                    initialValues={filterValue}
                >
                    <Form.Item name="priceFilter" label="قیمت دار:">
                        <Switch />
                    </Form.Item>

                    <Form.Item name="categoryId" label="دارای عنوان:">
                        <Switch />
                    </Form.Item>
                </Form>
            </Drawer>

            <div className="md:w-1/2 mx-auto mt-5">
                {isLoading ? (
                    <div className="flex justify-center items-center h-32">
                        <Spin size="large" />
                    </div>
                ) : (
                    <List
                        bordered
                        dataSource={products}
                        renderItem={item => (
                            <List.Item>
                                {item.title} - ${item.price}
                            </List.Item>
                        )}
                    />
                )}
            </div>
        </>
    );
};

export default SearchProducts;