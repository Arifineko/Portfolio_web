import React from 'react'
import Link from '../../components/Link'
import logo from '../../assets/icons/logo.svg'

const Navbar = () => {
    return (
        <nav className='flex justify-between py-4 text-gray-500'>
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
