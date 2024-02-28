import Authenticated from "@/Layouts/Authenticated/index";
import Jumbotron from "@/Components/Jumbotron";
import About from "@/Components/About";
import Detail from "@/Components/Detail";
import HealthCard from "@/Components/HealthCard";
import Flickity from "react-flickity-component";
import Berita from "@/Components/CardBerita";
import { Head } from "@inertiajs/react";
import SecondaryButton from "@/Components/SecondaryButton";

const Home = () => {
    const flcikityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
        autoPlay: 2000,
    };
    return (
        <>
            <Authenticated>
                <Head title="Home">
                    <link
                        rel="stylesheet"
                        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                    />
                </Head>
                <Jumbotron />
                <About />
                <div className="bg-[#0C2D57] pt-14 pb-14 mt-[116px]">
                    <div className="w-[90%] mx-auto">
                        <div className="text-center text-white">
                            <h1 className="font-bold text-[40px]">
                                Lorem Ipsum
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. a libero{" "}
                            </p>
                        </div>
                        <div className="mt-14">
                            <Flickity
                                options={flcikityOptions}
                            >
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <HealthCard
                                        key={i}
                                        name={`Lorem Ipsum ${i}`}
                                        field="Konsultasi"
                                        teks="Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. a libero
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. a libero
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. a libero"
                                    />
                                ))}
                            </Flickity>
                        </div>
                    </div>
                </div>
                <Detail />
                <div className="bg-[#EFECEC] pt-14 pb-14 mt-[116px]">
                    <div className="w-[90%] mx-auto">
                        <div className="text-[#0C2D57]">
                            <h1 className="font-bold text-[40px]">Berita</h1>
                            <div className="flex justify-between items-end">
                                <p>Berita Mengenai Kesehatan secara global</p>
                                <SecondaryButton
                                    type="button"
                                    variant="secondary"
                                    className="w-[150px]"
                                >
                                    Selengkapnya
                                </SecondaryButton>
                                {/* <div className="flex">
                                    <BsCaretLeftFill className="text-3xl" />
                                    <BsCaretRightFill className="text-3xl" />
                                </div> */}
                            </div>
                            <div className="grid grid-cols-3 gap-[30px]">
                                {[1, 2, 3].map((i) => (
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
                            {/* <div className="flex justify-end mt-10">
                                <SecondaryButton
                                    type="button"
                                    variant="secondary"
                                    className="w-[150px]"
                                >
                                    Selengkapnya
                                </SecondaryButton>
                            </div> */}
                        </div>
                    </div>
                </div>
            </Authenticated>
        </>
    );
};

export default Home;
