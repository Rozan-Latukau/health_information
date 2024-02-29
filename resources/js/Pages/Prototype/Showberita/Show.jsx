import HeaderBerita from "@/Layouts/Authenticated/HeaderBerita";
import Authenticated from "@/Layouts/Authenticated/index";
import { Head } from "@inertiajs/react";

const Show = () => {
    return (
        <Authenticated>
            <Head title="Baca Berita" />
            <div className="w-[90%] mx-auto mt-10">
                <HeaderBerita />
                <div className="mt-5 mb-5">
                    <h1 className="text-[#0C2D57] text-[30px] font-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut cursus gravida felis eu volutpat
                    </h1>
                    <p>30 Januari 2023</p>
                </div>
                <div>
                    <img src="/images/cardartikel.png" alt="#" className="w-full h-[50%]" />
                </div>
                <div className="mt-6">
                    <p className="tracking-wide">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut cursus gravida felis eu volutpat. Aliquam fringilla
                        libero tellus, vel pretium lectus bibendum in.
                        Vestibulum eget iaculis quam. Phasellus mi sapien,
                        maximus at finibus in, convallis nec mi. Vivamus
                        dignissim quam erat, ornare porttitor nunc commodo at.
                        Vestibulum vulputate urna vitae sem mollis, nec
                        ultricies ligula laoreet. Nam ut mauris id massa
                        tincidunt rhoncus. Sed placerat nisl dui, nec tempor
                        turpis pulvinar a. Aenean tristique, ligula at tristique
                        posuere, enim sem varius mauris, ac ultricies diam
                        mauris ut sem. Maecenas volutpat risus quis viverra
                        lobortis. Aliquam et odio nibh. Nam semper elementum mi
                        elementum viverra. Nullam id nulla maximus, pretium quam
                        auctor, scelerisque libero. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Ut cursus gravida felis eu
                        volutpat. Aliquam fringilla libero tellus, vel pretium
                        lectus bibendum in. Vestibulum eget iaculis quam.
                        Phasellus mi sapien, maximus at finibus in, convallis
                        nec mi. Vivamus dignissim quam erat, ornare porttitor
                        nunc commodo at. Vestibulum vulputate urna vitae sem
                        mollis, nec ultricies ligula laoreet. Nam ut mauris id
                        massa tincidunt rhoncus. Sed placerat nisl dui, nec
                        tempor turpis pulvinar a. Aenean tristique, ligula at
                        tristique posuere, enim sem varius mauris, ac ultricies
                        diam mauris ut sem. Maecenas volutpat risus quis viverra
                        lobortis. Aliquam et odio nibh. Nam semper elementum mi
                        elementum viverra. Nullam id nulla maximus, pretium quam
                        auctor, scelerisque libero.
                    </p>
                </div>
            </div>
        </Authenticated>
    );
};
export default Show;
