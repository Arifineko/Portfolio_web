import React from 'react'



const Button = (props) => {
    return (
        <button className={`rounded-xl py-[6px] px-4 bg-${props.bg} text-${props.text}`}>{props.content}</button>
    )
}

export default Button
