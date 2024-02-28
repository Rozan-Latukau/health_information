import PropTypes from "prop-types";

const HealthCard = ({ name, field, teks }) => {
    return (
        <div className="absolute overflow-hidden group mr-[15px]">
            <div className="w-[400px]">
                <div className="bg-[#D9D9D9] p-5 rounded-md">
                    <p className="mb-0 text-md">{teks}</p>
                    <h3 className="text-[22px] text-[#0C2D57] font-bold mt-5 ">
                        {name}
                    </h3>
                    <p className="mb-0 text-[18px] text-[#FC6736] font-medium">
                        {field}
                    </p>
                </div>
            </div>
        </div >
    );
};

HealthCard.propTypes = {
    name: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    teks: PropTypes.string.isRequired,
};

export default HealthCard;
