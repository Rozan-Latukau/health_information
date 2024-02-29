import { Link } from "@inertiajs/react";

const MenuItem = ({ link, text, isActive }) => {
    return (
        <Link
            href={link ? route(link) : null}
            className={`side-link ${isActive && "active"}`}
            as="button"
        >
            {text}
        </Link>
    );
};

export default MenuItem;
