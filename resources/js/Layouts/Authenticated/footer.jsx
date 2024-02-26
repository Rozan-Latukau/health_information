import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <div className="bg-[#0C2D57] mt-[116px]">
            <div className="flex justify-between mx-auto w-[90%] text-[#EFECEC] pt-[50px] pb-[50px]">
                <div>
                    <h1 className="font-bold text-[26px] ">RNL Smart</h1>
                    <p className="text-[18px]">Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
                <div className="flex gap-16">
                    <div>
                        <h1 className="font-bold text-[18px]">Perusahaan</h1>
                        <Link href="#">
                            <p className="text-[14px] pt-[16px] pb-[16px]">Tentang Kami</p>
                        </Link>
                        <Link href="#">
                            <p className="text-[14px]">Testimoni</p>
                        </Link>
                    </div>
                    <div>
                        <h1 className="font-bold text-[18px] ">Media Sosial</h1>
                        <Link href="#">
                            <p className="text-[14px] pt-[16px] pb-[16px]">Twitter</p>
                        </Link>
                        <Link href="#">
                            <p className="text-[14px] pb-[16px]">Instagram</p>
                        </Link>
                        <Link href="#">
                            <p className="text-[14px]">Youtube</p>
                        </Link>
                    </div>
                    <div>
                        <h1 className="font-bold text-[18px] ">Lokasi</h1>
                        <p className="text-[14px] pt-[16px]">Jln. Ahmad Yani, Bantul Yogyakarta, 97511</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
