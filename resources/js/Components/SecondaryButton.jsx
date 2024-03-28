export default function SecondaryButton({
    type,
    className = "",
    disabled,
    children,
    processing,
    variant = "secondary",
    ...props
}) {
    return (
        <button
            {...props}
            type={type}
            className={
                `rounded-2xl py-[13px] text-center text-[12px] md:text-[14px] ${
                    processing && "opacity-30"
                } btn-${variant}
                ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
