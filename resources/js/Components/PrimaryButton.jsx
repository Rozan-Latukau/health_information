import PropTypes from "prop-types";

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["orange", 'light-outline', 'white-outline']),
    processing: PropTypes.bool,
    children: PropTypes.node,
}

export default function PrimaryButton({
    type,
    className = "",
    disabled,
    children,
    processing,
    variant = "orange",
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center ${processing && 'opacity-30'} btn-${variant}
                ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
