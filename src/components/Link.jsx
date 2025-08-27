import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const navigation = [
    { name: 'Project', href: 'Project' },
    { name: 'Contact', href: 'Contact' },
]

const Link = () => {
    return (
        <ul className='flex gap-1 py-2.5 px-2 rounded-full bg-gray-900'>
            {navigation.map(item => (
                <li key={item.name}>
                    <ScrollLink
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={80} // Adjust this offset based on your header height
                        duration={1100}
                        className='text-white font-normal rounded-3xl p-2 py-2 hover:text-gray-500 transition-colors duration-300 cursor-pointer'
                        activeClass='text-black font-bold bg-white p-2 py-2 rounded-full'
                    >
                        {item.name}
                    </ScrollLink>
                </li>
            ))}
        </ul>
    )
}

export default Link;
