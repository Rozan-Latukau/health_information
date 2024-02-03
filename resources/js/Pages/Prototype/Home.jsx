import Authenticated from "@/Layouts/Authenticated/index";
import { Head } from "@inertiajs/react";

const Home = () => {
    return (
        <>
            <Head title="Home" />
            <Authenticated>
            </Authenticated>
        </>
    )
}

export default Home;
