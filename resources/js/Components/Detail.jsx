import React, { useEffect, useRef } from "react";
import { BsBookmarkFill } from "react-icons/bs";

const Detail = () => {
    const details = useRef(null);

    useEffect(() => {
        if (details.current) {
            const elements = details.current.children;
            const marginValue = window.innerWidth <= 768 ? "20px" : "0";

            // Loop through child elements and set margin bottom
            Array.from(elements).forEach((element, index) => {
                element.style.marginBottom = index < 2 ? marginValue : "0";
            });
        }
    }, []);

    return (
        <div className="w-[90%] mx-auto md:mt-[116px] mt-[100px] mb-10">
            <div className="text-center mb-10">
                <h1 className="font-bold md:text-[40px] text-[25px] text text-[#0C2D57]">
                    Lorem Ipsum
                </h1>
                <p className="text-[#0C2D57] text-[14px] md:text-[16px] ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. a
                    libero
                </p>
            </div>
            <div className="flex-col md:flex md:flex-row gap-4 " ref={details}>
                <div className="bg-[#EFECEC] p-5 md:p-10 rounded-md flex flex-col items-center justify-center text-center">
                    <BsBookmarkFill className="text-3xl mb-3" />
                    <p className="font-bold text-[#0C2D57] text-[18px]">
                        Lorem Ipsum
                    </p>
                    <p className="text-[14px]">
                        Easily add, remove, and modify elements on your pages.
                    </p>
                </div>
                <div className="bg-[#EFECEC] p-5 md:p-10 rounded-md flex flex-col items-center justify-center text-center">
                    <BsBookmarkFill className="text-3xl mb-3" />
                    <p className="font-bold text-[#0C2D57] text-[18px]">
                        Lorem Ipsum
                    </p>
                    <p className="text-[14px]">
                        Easily add, remove, and modify elements on your pages.
                    </p>
                </div>
                <div className="bg-[#EFECEC] p-5 md:p-10 rounded-md flex flex-col items-center justify-center text-center">
                    <BsBookmarkFill className="text-3xl mb-3" />
                    <p className="font-bold text-[#0C2D57] text-[18px]">
                        Lorem Ipsum
                    </p>
                    <p className="text-[14px]">
                        Easily add, remove, and modify elements on your pages.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Detail;
