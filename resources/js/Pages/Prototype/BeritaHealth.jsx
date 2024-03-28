import Authenticated from "@/Layouts/Authenticated/index";
import HeaderBerita from "@/Layouts/Authenticated/HeaderBerita";
import Berita from "@/Components/CardBerita";
import { Head } from "@inertiajs/react";

const BeritaHealth = () => {
    return (
        <Authenticated>
            <Head title="Berita Kesehatan" />
            <div className="w-[90%] mx-auto mt-10">
                <HeaderBerita />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px] md:gap-[30px]">
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
            </div>
        </Authenticated>
    );
};

export default BeritaHealth;
