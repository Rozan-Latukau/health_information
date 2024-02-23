import { BsBookmarkFill } from "react-icons/bs";

const Detail = () => {
    return (
        <div className="w-[90%] mx-auto mt-[116px] mb-10">
            <div className="text-center mb-10">
                <h1 className="font-bold text-[40px] text-[#0C2D57]">Lorem Ipsum</h1>
                <p className="text-[#0C2D57] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. a libero </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#EFECEC] p-10 rounded-md flex flex-col items-center justify-center text-center">
                    <BsBookmarkFill className="text-3xl mb-3" />
                    <p className="font-bold text-[#0C2D57] text-[18px]">Lorem Ipsum</p>
                    <p className="text-[14px]">Easily add, remove, and modify elements on your pages.</p>
                </div>
                <div className="bg-[#EFECEC] p-10 rounded-md flex flex-col items-center justify-center text-center">
                    <BsBookmarkFill className="text-3xl mb-3" />
                    <p className="font-bold text-[#0C2D57] text-[18px]">Lorem Ipsum</p>
                    <p className="text-[14px]">Easily add, remove, and modify elements on your pages.</p>
                </div>
                <div className="bg-[#EFECEC] p-10 rounded-md flex flex-col items-center justify-center text-center">
                    <BsBookmarkFill className="text-3xl mb-3" />
                    <p className="font-bold text-[#0C2D57] text-[18px]">Lorem Ipsum</p>
                    <p className="text-[14px]">Easily add, remove, and modify elements on your pages.</p>
                </div>
            </div>
        </div>
    )
}
export default Detail;
