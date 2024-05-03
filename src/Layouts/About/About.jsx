import React from 'react'
import profile from "../../assets/images/profile.png"
import Button from '../../components/Button'

const About = () => {
    return (
        <div className='bg-gray-50 ' id='About'>
            <div className='flex flex-col text-gray-600 gap-[48px] py-[96px] px-20 justify-center items-center lg:justify-items-center lg:justify-center'>
                <div className='flex justify-center'>
                    <Button
                        bg="bg-gray-200"
                        content="About me"
                    />
                </div>
                <div className='flex gap-10'>
                    <div>
                        <img className='w-[450px]' src={profile} alt="" />
                    </div>
                    <div className='w-[580px]'>
                        <h1 className='text-[30px] text-gray-900 font-semibold mb-8'>Curious about me? Here you have it:</h1>
                        <div className='flex flex-col gap-8'>
                            <p>Hello! I am Arifin, an English education student who has an interest in web development, specifically as a front-end developer. Currently, I have a basic understanding in HTML, CSS, and JavaScript, and I am excited to continue learning and growing in this field.
                            </p>
                            <p>I am committed to continuously developing my skills and making them a strong foundation for a future in web development. I believe that my command of English will also help me communicate well in team collaboration and in understanding the resources available in English.
                            </p>
                            <p>I am always looking for opportunities to learn and collaborate with professionals in this field. If you have any suggestions, projects or learning opportunities that you would like to share, please contact me. I am excited to continue learning and growing in web development.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default About
