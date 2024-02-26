import Navbar from "@/Layouts/Authenticated/navbar";
import Footer from "@/Layouts/Authenticated/footer";

const Authenticated = ({ auth, children }) => {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                <Navbar auth={auth} />
                <main>{children}</main>
                <Footer auth={auth} />
            </div>
        </>
    )
}

export default Authenticated;
