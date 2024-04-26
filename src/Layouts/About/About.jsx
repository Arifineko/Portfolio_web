import React from 'react'
import profile from "../../assets/images/profile.png"
import Button from '../../components/Button'

const About = () => {
    return (
        <div className='bg-gray-50 ' >
            <div className='flex flex-col text-gray-600 gap-[48px] py-[96px] px-20 justify-center justify-items-center'>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum adipisci, ab, magni expedita quidem cumque asperiores excepturi praesentium consequatur accusamus dolore architecto laudantium minima repellat impedit error sapiente commodi iusto? Omnis doloribus, optio molestiae labore ipsam, necessitatibus ratione deleniti possimus eligendi recusandae veritatis, quaerat dolores officiis deserunt ducimus consectetur fugit?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum adipisci, ab, magni expedita quidem cumque asperiores excepturi praesentium consequatur accusamus dolore architecto laudantium minima repellat impedit error sapiente commodi iusto? Omnis doloribus, optio molestiae labore ipsam, necessitatibus ratione deleniti possimus eligendi recusandae veritatis, quaerat dolores officiis deserunt ducimus consectetur fugit?</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
