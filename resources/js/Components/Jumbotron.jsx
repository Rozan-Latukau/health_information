import PrimaryButton from "@/Components/PrimaryButton";

const Jumbotron = () => {
    return (
        <div className="absolute group overflow-hidden flex items-center">
            <img
                src="/images/jumbotron.png"
                className="w-auto h-auto object-cover"
            />
            <div className="absolute justify-center flex">
                <div className="text-white w-[75%] text-center">
                    <h3 className="text-[40px] font-bold">Selamat Datang</h3>
                    <h1 className="text-[100px] font-custom ">RNL Smart</h1>
                    <p className="text-[20px] mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur sagittis leo fringilla nibh pretium, a
                        consectetur orci sagittis. Suspendisse rhoncus lobortis
                        est vel pellentesque. Sed quis tellus tincidunt, pretium
                        nunc et, efficitur urna. Etiam ex eros, hendrerit in
                        nulla nec, fringilla scelerisque mi.
                    </p>
                    <PrimaryButton
                        type="button"
                        variant="orange"
                        className="w-[180px] h-[48px]"
                    >
                        Informasi Kesehatan
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};
export default Jumbotron;
