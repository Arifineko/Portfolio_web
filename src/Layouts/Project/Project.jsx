import React from 'react'
import CardProject from '../../components/CardProjects/CardProject'
import BookImage from '../../assets/images/project1.png'
import Elecar from '../../assets/images/project2.png'
import Section from '../../components/Section'

const Project = () => {
    return (
        <div className='flex flex-col justify-center text-gray-600 gap-[48px] items-center py-[96px] px-20 bg-gray-50' id='Project'>
            <Section
                name="Projects"
                detail="Some projects that I have built:"
            />
            <CardProject
                image={BookImage}
                name="Book Shelf"
                detail="Bookshelf created as part of a submission for dicoding, Bookshelf allows users to add, edit, and delete books in their personal collection."
            />
            <CardProject
                image={Elecar}
                name="Elecar"
                detail="Elecar is a website dedicated to providing information and resources about electric cars. The site provides an explanation of the different makes and models of electric cars."
                reverse="flex-row-reverse"
            />
        </div>
    )
}

export default Project
