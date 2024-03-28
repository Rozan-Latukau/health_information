import PrimaryButton from "@/Components/PrimaryButton";

const Jumbotron = () => {
    return (
        <div className="group overflow-hidden flex items-center">
            <img
                src="/images/jumbotron.png"
                className="h-80 md:w-auto md:h-[500px] lg:h-auto object-cover"
            />
            <div className="absolute justify-center flex ">
                <div className="text-white md:ps-[200px] md:pe-[200px] text-center">
                    <h3 className="text-[18px] md:text-[20px] lg:text-[40px] font-bold">
                        Selamat Datang
                    </h3>
                    <h1 className=" text-[20px] md:text-[60px] lg:text-[80px] font-custom ">
                        RNL Health
                    </h1>
                    <p className="mb-6 text-[12px] md:text-[18px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur sagittis leo fringilla nibh pretium, a
                        consectetur orci sagittis. Suspendisse rhoncus lobortis
                        est vel pellentesque. Sed quis tellus tincidunt, pretium
                        nunc et, efficitur urna. Etiam ex eros, hendrerit in
                        nulla nec, fringilla scelerisque mi.
                    </p>
                    <PrimaryButton type="button" variant="orange">
                        Informasi Kesehatan
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};
export default Jumbotron;
