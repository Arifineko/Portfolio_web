import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const navigation = [
    { name: 'About', href: 'About' },
    { name: 'Project', href: 'Project' },
    { name: 'Contact', href: 'Contact' },
]

const Link = () => {
    return (
        <ul className='flex gap-5'>
            {navigation.map(item => (
                <li key={item.name}>
                    <ScrollLink
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={80} // Adjust this offset based on your header height
                        duration={1100}
                        className='text-gray-500 font-normal hover:text-gray-800 transition-colors duration-300 cursor-pointer'
                        activeClass='text-gray-800 font-bold'
                    >
                        {item.name}
                    </ScrollLink>
                </li>
            ))}
        </ul>
    )
}

export default Link;
