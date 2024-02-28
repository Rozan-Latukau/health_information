import { Link } from "@inertiajs/react";
import PropTypes from "prop-types";

const Berita = ({ name, thumbnail, field, text, slug }) => {
    return (
        <div className="overflow-hidden group mt-[30px] ">
            <img
                src={thumbnail}
                className="object-cover h-[244px] rounded-[16px]"
                alt=""
            />
            <div
                className=" text-center mt-5"
            >
                <div>
                    <p className="text-[#FC6736] text-[12px] mb-0">
                        {field}
                    </p>
                    <div className="font-bold text-[22px] text-[#0C2D57]">
                        {name}
                    </div>
                    <p className="text-[#0C2D57] text-[14px] mb-0">
                        {text}
                    </p>
                </div>
            </div>
            <Link href="#" className="inset-0 z-50"></Link>
        </div >
    )
}

Berita.propTypes = {
    name: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};


export default Berita;
