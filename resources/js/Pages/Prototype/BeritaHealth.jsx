import Authenticated from "@/Layouts/Authenticated/index";
import HeaderBerita from "@/Layouts/Authenticated/HeaderBerita";
import { Head } from "@inertiajs/react";

const BeritaHealth = () => {
    return (
        <Authenticated>
            <Head title="Berita Kesehatan" />
            <div className="w-[90%] mx-auto mt-10">
                <h1 className="text-[#0C2D57] text-[40px] font-bold">
                    Artikel
                </h1>
                <p className="mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sagittis leo fringilla nibh pretium, a consectetur
                    orci sagittis. Suspendisse rhoncus lobortis est vel
                    pellentesque. Sed quis tellus tincidunt, pretium nunc et,
                    efficitur urna. Etiam ex eros, hendrerit in nulla nec,
                    fringilla scelerisque mi.
                </p>
                <HeaderBerita />
            </div>
        </Authenticated>
    );
};

export default BeritaHealth;
