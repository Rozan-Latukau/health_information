import Navbar from "@/Layouts/Authenticated/navbar";

const Authenticated = ({ auth, children }) => {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                <Navbar auth={auth} />
                <main>{children}</main>
            </div>
        </>
    )
}

export default Authenticated;
