import PropTypes from "prop-types";

const HealthCard = ({ name, field, thumbnail }) => {
    return (
        <div className="absolute overflow-hidden group mr-[30px]">
            <img
                src={thumbnail}
                className="object-cover h-[500px]"
                alt=""
            />
            <div
                className="absolute bottom-0 h-[100px] left-0 right-0 bg-gradient-to-t from-black  flex justify-center text-center items-center px-7 "
            >
                <div>
                    <div className="font-medium text-[35px] text-white">
                        {name}
                    </div>
                    <p className="mb-0 text-md text-[#FC6736] font-light">
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
    thumbnail: PropTypes.string.isRequired,
};

export default HealthCard;
