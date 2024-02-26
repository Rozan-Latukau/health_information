import React, { useState, useEffect } from 'react';
import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 0;

            setIsFixed(scrollPosition > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarclass = isFixed ? "fixed top-0" : "relative";

    return (
        <header className={`bg-[#0C2D57] w-full z-50 ${navbarclass}`}>
            <nav className="flex justify-between items-center mx-auto w-[90%] h-[70px]">
                <div className="w-auto">
                    <h1 className="text-white font-bold text-[24px]">RNL Health</h1>
                </div>
                <div>
                    <ul className="text-white flex items-center gap-8">
                        <li>
                            <a href="#">Beranda</a>
                        </li>
                        <li>
                            <Link href={route('prototype.informasiHealth')}>Informasi Kesehatan</Link>
                        </li>
                        <li>
                            <a href="#">Berita</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <PrimaryButton type="submit" variant="orange">Konsultasi</PrimaryButton>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
