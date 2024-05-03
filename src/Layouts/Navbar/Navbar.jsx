import React from 'react'
import Link from '../../components/Link'
import logo from '../../assets/icons/logo.svg'

const Navbar = () => {
    return (
        <nav className='flex justify-between py-4 text-gray-500'
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="400"
            data-aos-offset="0"
        >
            <div>
                <img src={logo} alt="Logo" className='w-[40px]' />
            </div>
            <div className='flex gap-5 items-center'>
                <Link />
            </div>
        </nav>
    )
}

export default Navbar
