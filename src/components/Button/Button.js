import React from 'react';
import Link from 'next/link';
import './Button.css';

const Button = ({href, children}) => {
    return (
        <Link className="button" href={href}>{children}</Link>
    );
}

export default Button;