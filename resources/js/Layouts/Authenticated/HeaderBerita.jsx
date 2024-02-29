const HeaderBerita = () => {
    return (
        <>
            <div >
                <h1 className="text-[#0C2D57] text-[35px] font-bold">
                    Berita
                </h1>
                <p className="mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sagittis leo fringilla nibh pretium, a consectetur
                    orci sagittis. Suspendisse rhoncus lobortis est vel
                    pellentesque. Sed quis tellus tincidunt, pretium nunc et,
                    efficitur urna. Etiam ex eros, hendrerit in nulla nec,
                    fringilla scelerisque mi.
                </p>
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
                    <h3 className="text-[#0C2D57] text-[22px] font-bold">Terbaru</h3>
                </div>
            </div>
        </>
    )
}

export default HeaderBerita;
