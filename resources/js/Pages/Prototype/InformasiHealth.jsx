import Authenticated from "@/Layouts/Authenticated/index";
import InformasiCard from "@/Components/InformasiCard";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head } from "@inertiajs/react";

const InformasiHealth = () => {
    return (
        <Authenticated>
            <Head title="Informasi Kesehatan" />
            <div className="w-[90%] mx-auto mt-10">
                <h1 className="text-[#0C2D57] text-[40px] font-bold">INFORMASI KESEHATAN</h1>
                <p className="mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur sagittis leo fringilla nibh pretium, a consectetur
                    orci sagittis. Suspendisse rhoncus lobortis est vel
                    pellentesque. Sed quis tellus tincidunt, pretium nunc et,
                    efficitur urna. Etiam ex eros, hendrerit in nulla nec,
                    fringilla scelerisque mi.
                </p>
                <div className="mb-8">
                    {[1, 2, 3, 4].map((i) => (
                        <InformasiCard
                            key={i}
                            pertanyaan="Bagaimana saya bisa memilih psikolog yang tepat untuk saya ?"
                            jawaban="Anda bisa memilih psikolog yang tepat dengan mempertimbangkan kualifikasi, pengalaman, pendekatan terapi yang sesuai dengan kebutuhan Anda, dan perasaan nyaman saat berinteraksi dengan psikolog tersebut. Anda juga dapat meminta rekomendasi dari dokter, teman, atau keluarga yang Anda percayai."
                        />
                    ))}
                </div>
                <h1 className="mb-2 font-bold text-[20px]">Klik ini Untuk Berkonsultasi dibawah ini :</h1>
                <PrimaryButton type="submit" variant="orange">Konsultasi</PrimaryButton>
            </div>
        </Authenticated>
    );
};

export default InformasiHealth;
