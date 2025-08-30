import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearchedQuery } from '@/redux/jobSlice'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "Full Stack Developer",
    "Mobile App Developer",
    "DevOps Engineer",
    "Software Engineer",
    "Game Developer",
    "Embedded Systems Developer",
    "UI/UX Designer",
    "Web Designer",
    "Interaction Designer",
    "Product Designer",
    "Motion Designer",
    "Machine Learning Engineer",
    "AI Engineer",
    "Data Analyst",
    "Business Intelligence Analyst",
    "Big Data Engineer",
    "Cloud Engineer",
    "Site Reliability Engineer (SRE)",
    "System Administrator",
    "Network Engineer",
    "IT Support Specialist",
    "Cybersecurity Analyst",
    "Penetration Tester (Ethical Hacker)",
    "Security Engineer",
    "Information Security Analyst",
    "Security Operations Center (SOC) Analyst",
    "Product Manager",
    "Technical Project Manager",
    "Scrum Master",
    "Business Analyst",
    "IT Consultant"
]


const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div >
            <Carousel className='w-full max-w-xl mx-auto my-20'>
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                                <Button onClick={() => searchJobHandler(cat)} variant='outline' className=' rounded-full'>{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel
