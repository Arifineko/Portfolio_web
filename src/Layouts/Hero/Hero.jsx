import React from 'react'
import github from "../../assets/icons/github-icon.svg"
import location_icon from "../../assets/icons/location-icon.svg"
import linkedin from "../../assets/icons/linkedin-icon.svg"
import instagram from "../../assets/icons/ig-icon.svg"
import profile from "../../assets/images/profile.png"
import SocialMedia from '../../components/ContactComponents/SocialMedia'


const Hero = () => {
    return (
        <div className='py-[96px] flex justify-center items-center gap-[48px] text-gray-600'>
            <div className='w-[768px] flex flex-col gap-[48px]'
                data-aos="fade-right" data-aos-duration="2000"
            >
                <div>
                    <h1 className='font-bold text-[60px]'>Hi, I'm Arifin👋</h1>
                    <p>I'm an English education student who has an interest in web development, specifically as a front-end developer. Currently, I have a basic understanding in HTML, CSS, and JavaScript, and I am excited to continue learning and growing in this field.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2'>
                        <img src={location_icon} alt="" />
                        <p>Purwokerto, Indonesia</p>
                    </div>

                </div>
                <div className='flex items-center gap-3'>
                    <SocialMedia title="Github" src={github} url="https://www.github.com/Arifineko" />
                    <SocialMedia title="Instagram" src={instagram} url='https://www.instagram.com/arifin_e/' />
                    <SocialMedia title="Linkedin" src={linkedin} url='https://www.linkedin.com/in/arifineko/' />
                </div>
            </div>
            <div className='' data-aos="fade-left" data-aos-duration="2000">
                <img className='w-[300px]' src={profile} alt="" />
            </div>
        </div>
    )
}

export default Hero
