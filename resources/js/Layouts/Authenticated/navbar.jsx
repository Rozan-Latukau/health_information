import React, { useState, useEffect } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import MenuItem from "./menuitem";
import UserMenu from "./menulist";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 0;

            setIsFixed(scrollPosition > threshold);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navbarclass = isFixed ? "fixed top-0" : "relative";

    return (
        <header className={`bg-[#0C2D57] w-full z-50 ${navbarclass}`}>
            <nav className="flex justify-between items-center mx-auto w-[90%] h-[70px]">
                <div className="w-auto">
                    <h1 className="text-white font-bold text-[24px]">
                        RNL Health
                    </h1>
                </div>
                <div className="text-white flex items-center gap-8">
                    {UserMenu.map((menu, index) => (
                        <MenuItem
                            key={`${index}-${menu.text}`}
                            link={menu.link}
                            text={menu.text}
                            isActive={menu.link && route().current(menu.link)}
                        />
                    ))}
                </div>
                <div>
                    <Link href="#">
                        <PrimaryButton type="submit" variant="orange">
                            Konsultasi
                        </PrimaryButton>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
