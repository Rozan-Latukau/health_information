import Berita from "@/Components/CardBerita";

const HeaderBerita = () => {
    return (
        <>
            <div className="bg-[#EFECEC] p-4">
                <div className="flex gap-10 text-[#FC6736]">
                    <div className="font-medium">
                        <a href="#">Terbaru</a>
                    </div>
                    <div className="font-medium">
                        <a href="#">Kesehatan Indonesia</a>
                    </div>
                    <div className="font-medium">
                        <a href="#">Kesehatan Global</a>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <h3 className="text-[#0C2D57] text-[30px] font-bold">Terbaru</h3>
            </div>
            <div className="grid grid-cols-3 gap-[30px]">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Berita
                        key={i}
                        field="Berita"
                        name={`Lorem Ipsum ${i}`}
                        slug="Berita"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. a libero tellus. "
                        thumbnail="/images/cardartikel.png"
                    />
                ))}
            </div>
        </>
    )
}

export default HeaderBerita;
