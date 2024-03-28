import { useState } from "react";

const HeaderBerita = () => {
    const [clickBerita, setclickBerita] = useState(false);

    return (
        <>
            <div>
                <h1 className="text-[#0C2D57] text-[20px] md:text-[26px] lg:text-[35px] font-bold">
                    Berita
                </h1>
                <p className="mb-10 text-[14px] md:text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sagittis leo fringilla nibh pretium, a consectetur
                    orci sagittis. Suspendisse rhoncus lobortis est vel
                    pellentesque. Sed quis tellus tincidunt, pretium nunc et,
                    efficitur urna. Etiam ex eros, hendrerit in nulla nec,
                    fringilla scelerisque mi.
                </p>
                <div className="bg-[#EFECEC] p-4">
                    <div className="flex gap-10 items-center text-center text-[#FC6736]">
                        <div className="font-medium text-[14px] md:text-[16px]">
                            <a href="#">Terbaru</a>
                        </div>
                        <div className="font-medium text-[14px] md:text-[16px]">
                            <a href="#">Kesehatan Indonesia</a>
                        </div>
                        <div className="font-medium text-[14px] md:text-[16px]">
                            <a href="#">Kesehatan Global</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-[#0C2D57] text-[18px] md:text-[22px] font-bold">
                        Terbaru
                    </h3>
                </div>
            </div>
        </>
    );
};

export default HeaderBerita;
