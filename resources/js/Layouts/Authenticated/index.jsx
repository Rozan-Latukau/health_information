import Navbar from "@/Layouts/Authenticated/navbar";
import Footer from "@/Layouts/Authenticated/footer";

const Authenticated = ({ auth, children }) => {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* Awal Navbar */}
                <Navbar auth={auth} />
                {/* Akhir Navbar */}
                {/* Awal Content */}
                <main>{children}</main>
                <Footer auth={auth} />
                {/* Akhir Content */}
            </div>
            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, dalam maintanance responsif
                </div>
            </div>
        </>
    )
}

export default Authenticated;
