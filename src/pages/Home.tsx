import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useState } from "react";
import { useNavigate } from "react-router";
import { setUserData, counterSlice, changeBool } from "../store/counterSlice";
import { Button } from "antd";

const HomePage = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // ---------- with way one export ----------
    const { increment, decrement, incrementByAmount } = counterSlice.actions
    const count = useSelector((state: RootState) => state.count.value);

    // ---------- with way second export ----------

    const handleSubmit = () => {
        dispatch(setUserData(inputValue));
        navigate("/test");
    };

    // ---------- boolean Data ----------

    const isBool = useSelector((state: RootState) => state.data.value)

    const changeData = () => {
        dispatch(changeBool())
        console.log(isBool);
    }

    return (
        <div className="p-10">

            <div className="p-10 flex flex-col gap-7 items-center justify-center">
                <p>Count: {count}</p>
                <button className="p-3 bg-red-500 text-white rounded-md" onClick={() => dispatch(increment())}>+1</button>
                <button className="p-4 bg-red-500 text-white rounded-md" onClick={() => dispatch(decrement())}>-1</button>
                <button className="p-3 bg-red-500 text-white rounded-md" onClick={() => dispatch(incrementByAmount(5))}>+5</button>
            </div>

            <Button onClick={changeData}>
                Test
            </Button>

            <div className="p-5">
                <h1>صفحه ورود داده</h1>
                <input
                    type="text"
                    placeholder="اسمت رو وارد کن"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border p-2"
                />
                <button onClick={handleSubmit} className="ml-2 p-2 bg-blue-500 text-white">
                    ارسال
                </button>
            </div>

            {/* Home page */}
        </div>);
}

export default HomePage;