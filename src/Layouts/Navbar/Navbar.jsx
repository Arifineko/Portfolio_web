import React from 'react'
import Button from '../../components/Button'
import ligth_mode from '../../assets/icons/ligth-mode.svg'
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
                <div className='flex gap-5'>
                    <img src={ligth_mode} alt="" className='cursor-pointer' />
                    <Button content={'Dwonload CV'} bg="bg-gray-900" text="text-white" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
