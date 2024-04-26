import React from 'react'
import CardProject from '../../components/CardProjects/CardProject'
import BookImage from '../../assets/images/project1.png'
import Elecar from '../../assets/images/project2.png'
import Section from '../../components/Section'

const Project = () => {
    return (
        <div className='flex flex-col justify-center text-gray-600 gap-[48px] items-center py-[96px] px-20 bg-gray-50'>
            <Section
                name="Projects"
                detail="Some projects that I have built:"
            />
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
