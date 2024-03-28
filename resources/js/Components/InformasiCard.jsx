import { useState, useRef } from "react";
import PropTypes from "prop-types";

const InformasiCard = ({ pertanyaan, jawaban }) => {
    const [dropdownOpen, setdropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    const triggerDropdown = () => {
        if (dropdownOpen) {
            dropdownTarget.current.classList.remove("hidden");
        } else {
            dropdownTarget.current.classList.add("hidden");
        }
        setdropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <div className="p-4 mt-4 bg-[#D9D9D9]" onClick={triggerDropdown}>
                <p className="text-[14px] md:text-[16px]">{pertanyaan}</p>
            </div>
            <div className="p-4 mt-2 bg-[#D9D9D9] hidden" ref={dropdownTarget}>
                <h3 className="text-[#0C2D57] text-[16px] md:text-[18px] font-bold mb-2">
                    Jawab
                </h3>
                <p className="text-[14px] md:text-[16px]">{jawaban}</p>
            </div>
        </div>
    );
};

InformasiCard.propTypes = {
    pertanyaan: PropTypes.string.isRequired,
    jawaban: PropTypes.string.isRequired,
};

export default InformasiCard;
