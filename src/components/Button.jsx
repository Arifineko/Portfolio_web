import React from 'react';

const Button = (props) => {
    const bgColor = props.bg;
    const textColor = props.text;

    return (
        <button className={`rounded-xl py-[6px] px-4 ${bgColor} ${textColor}`}>{props.content}</button>
    );
}

export default Button;
