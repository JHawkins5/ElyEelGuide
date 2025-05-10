import React from 'react';
import Link from 'next/link';
import './Button.css';

const Button = ({href, children}) => {
    let text = children;

    if (text === "Website") {
        text = "Go to website";
    }

    return (
        <Link className="button" href={href} aria-label={text} title={text}>{text}</Link>
    );
}

export default Button;