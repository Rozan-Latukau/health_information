import PropTypes from "prop-types";

const HealthCard = ({ name, field, teks }) => {
    return (
        <div className="absolute overflow-hidden group md:mr-[15px] mr-[10px]">
            <div className="w-auto md:w-[24rem]">
                <div className="bg-[rgb(217,217,217)] p-5 rounded-md">
                    <p className="mb-0 text-[16px] md:text-[14px]">{teks}</p>
                    <h3 className="text-[18px] md:text-[22px] text-[#0C2D57] font-bold mt-5 ">
                        {name}
                    </h3>
                    <p className="mb-0 text-[16px] md:text-[18px] text-[#FC6736] font-medium">
                        {field}
                    </p>
                </div>
            </div>
        </div>
    );
};

HealthCard.propTypes = {
    name: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    teks: PropTypes.string.isRequired,
};

export default HealthCard;
