import React from 'react'
import Button from '../../components/Button'
import CardProject from '../../components/CardProjects/CardProject'
import BookImage from '../../assets/images/project1.png'
import Elecar from '../../assets/images/project2.png'
import javaScript from '../../assets/icons/js-icon.svg'

const Project = () => {
    return (
        <div className='flex flex-col justify-center text-gray-600 gap-[48px] items-center py-[96px] px-20 bg-gray-50'>
            <div className='flex flex-col justify-center items-center gap-4'>
                <div>
                    <Button
                        content="Projects"
                        bg="bg-gray-200"
                    />
                </div>
                <p>The skills, tools and technologies I am really good at:</p>
            </div>
            <CardProject
                image={BookImage}
                name="Book Shelf"
                detail="Laborum earum repudiandae in sapiente vel magni, corporis consequatur quidem mollitia ex! Eaque maiores quibusdam non dolorum minus ex tempore culpa placeat!"
            />
            <CardProject
                image={Elecar}
                name="Elecar"
                detail="Laborum earum repudiandae in sapiente vel magni, corporis consequatur quidem mollitia ex! Eaque maiores quibusdam non dolorum minus ex tempore culpa placeat!"
                reverse="flex-row-reverse"
            />
        </div>
    )
}

export default Project
