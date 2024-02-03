import PrimaryButton from "@/Components/PrimaryButton";

const navbar = () => {
    return (
        <header className="bg-[#0C2D57]">
            <nav className="flex justify-between items-center mx-auto w-[90%] h-[70px]">
                <div className="w-auto">
                    <h1 className="text-white font-bold text-[24px]">RNL Smart</h1>
                </div>
                <div className="">
                    <ul className="text-white flex items-center gap-8">
                        <li>
                            <a href="#">Beranda</a>
                        </li>
                        <li>
                            <a href="#">Informasi Kesehatan</a>
                        </li>
                        <li>
                            <a href="#">Artikel</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <PrimaryButton type="submit" variant="orange">Konsultasi</PrimaryButton>
                </div>
            </nav>
        </header>
    )
}
export default navbar;
