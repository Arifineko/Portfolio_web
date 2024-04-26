import React from 'react'
import Button from '../../components/Button'
import ligth_mode from '../../assets/icons/ligth-mode.svg'
import Link from '../../components/Link'

const Navbar = () => {
    return (
        <nav className='flex justify-between py-4 text-gray-500'>
            <div>
                Logo
            </div>
            <div className='flex gap-5 items-center'>
                <ul className='flex gap-5'>
                    <Link />
                </ul>
                <div className='flex gap-5'>
                    <img src={ligth_mode} alt="" className='cursor-pointer' />
                    <Button content={'Dwonload CV'} bg="bg-gray-900" text="text-white" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
