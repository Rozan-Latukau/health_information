const Berita = ({ name, thumbnail, field, text }) => {
    return (
        <div className="overflow-hidden group mt-[30px] w-[400px]">
            <img
                src={thumbnail}
                className="object-cover h-[244px] rounded-[16px]"
                alt=""
            />
            <div
                className=" text-center mt-5"
            >
                <div>
                    <p className="text-[#FC6736] text-[12px] mb-0">
                        {field}
                    </p>
                    <div className="font-bold text-[22px] text-[#0C2D57]">
                        {name}
                    </div>
                    <p className="text-[#0C2D57] text-[14px] mb-0">
                        {text}
                    </p>
                </div>
            </div>
        </div >
    )
}

export default Berita;
