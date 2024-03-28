import React, { useState, useEffect } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import MenuItem from "./menuitem";
import UserMenu from "./menulist";
import { FiMenu } from "react-icons/fi";
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

    const [click, setclick] = useState(false);

    return (
        <header className={`bg-[#0C2D57] w-full z-50 ${navbarclass}`}>
            <nav className="flex justify-between  items-center mx-auto w-[90%] h-[70px]">
                <div className="w-auto">
                    <h1 className="text-white font-bold text-[16px] md:text-[24px] ">
                        RNL Health
                    </h1>
                </div>
                <FiMenu
                    className="text-3xl text-white md:hidden z-10"
                    onClick={() => setclick(!click)}
                />
                <div
                    className={`md:flex gap-8 fixed md:relative left-0 top-0 bottom-0 w-64 md:w-auto bg-[#0C2D57] shadow-md z-10 transition-all ease-in-out duration-75 ${
                        click ? "left-0" : "hidden"
                    }`}
                >
                    <div className="h-full text-white justify-center space-y-5 md:space-y-0 md:flex md:flex-row flex-col flex items-center gap-2 md:gap-8 ">
                        {UserMenu.map((menu, index) => (
                            <MenuItem
                                key={`${index}-${menu.text}`}
                                link={menu.link}
                                text={menu.text}
                                isActive={
                                    menu.link && route().current(menu.link)
                                }
                            />
                        ))}
                        <div className="relative">
                            <Link href="#">
                                <PrimaryButton type="submit" variant="orange">
                                    Konsultasi
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
