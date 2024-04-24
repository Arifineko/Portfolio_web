import React from 'react';
import { NavLink } from "react-router-dom";

const navigation = [
    { name: 'About', href: '/About' },
    { name: 'Project', href: '/Project' },
    { name: 'Contact', href: '/Contact' },
]

const Link = () => {
    return (
        <li className='flex gap-5'>
            {navigation.map(item => (
                <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => {
                        return (
                            (isActive ? 'text-gray-800 font-bold' : 'text-gray-500 font-normal')
                        )
                    }}
                >
                    {item.name}
                </NavLink>
            ))}
        </li>
    )
}

export default Link;
