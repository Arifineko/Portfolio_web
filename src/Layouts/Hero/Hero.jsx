import React from 'react'
import github_icon from "../../assets/icons/github-icon.svg"
import location_icon from "../../assets/icons/location-icon.svg"
import inbox_icon from "../../assets/icons/inbox-icon.svg"
import figma_icon from "../../assets/icons/figma-icon.svg"
import profile from "../../assets/images/profile.png"


const Hero = () => {
    return (
        <div className='py-[96px] flex justify-between items-center gap-[48px] text-gray-600'>
            <div className='w-[768px] flex flex-col gap-[48px]'>
                <div>
                    <h1 className='font-bold text-[60px]'>Hi, I'm Arifin👋</h1>
                    <p>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <img src={location_icon} alt="" />
                        <p>Purwokerto, Indonesia</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>Available for new projects</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <button><img src={github_icon} alt="" /></button>
                    <button><img src={figma_icon} alt="" /></button>
                    <button><img src={inbox_icon} alt="" /></button>
                </div>
            </div>
            <div className=''>
                <img className='w-[300px]' src={profile} alt="" />
            </div>
        </div>
    )
}

export default Hero
