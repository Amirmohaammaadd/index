import { useEffect, useState } from "react";

export const ProgressBar = () => {
    const [scrollPercent, setscrollPercent] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const winHeight = window.innerHeight;
            const docuHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;

            const scrollPercent = (scrollY / (docuHeight - winHeight)) * 100;
            setscrollPercent(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        window.removeEventListener;
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div
                id="progress-container"
                className="z-50 h-[4px] sticky top-0 left-0 right-0 max-w-full"
            >
                <div
                    className="progress-fill max-w-full h-full bg-[#097969]"
                    style={{ width: `${scrollPercent}%` }}
                ></div>
            </div>
        </>
    );
};
