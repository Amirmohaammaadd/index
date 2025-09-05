import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const TestPage = () => {

    const name = useSelector((state: RootState) => state.user.name);

    return (
        <div className="p-5">
            <h1>صفحه نمایش</h1>
            <p>اسم وارد شده: {name}</p>
        </div>
    );
}

export default TestPage;