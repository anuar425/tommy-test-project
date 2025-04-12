'use client'

import React, { useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick';
import { newsList } from './content'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './syles.module.css'
import RightArrow from '@/shared/icons/RightIcon'
import LeftArrow from '@/shared/icons/LeftIcon'
import { Button } from '@/shared/ui';
import { twMerge } from 'tailwind-merge'

const CustomArrows = ({ arrowType, className, onClick }: { arrowType: 'next' | 'prev', className: string, onClick: () => void }) => {

    return (
        <Button
            className={twMerge(`h-full w-full flex justify-center items-center bg-secondary/50 rounded-none border border-secondary hover:bg-secondary/80`, className)}
            onClick={onClick}
        >
            {
                {
                    next: <RightArrow className='h-10 w-10 stroke-white' />,
                    prev: <LeftArrow className='h-10 w-10 stroke-white' />,
                }[arrowType]
            }
        </Button>
    )
}


const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

export const NewsSlider = () => {

    const [selectedSlider, setSelectedSlider] = useState<number>(1);
    const sliderRef = useRef<Slider | null>(null);

    const handleBeforeChange = (current: number, next: number) => {
        console.log('beforeChange', current, next)
        setSelectedSlider(next)
    }

    const handleNext = () => {
        console.log('next')
        sliderRef.current?.slickNext()
    }

    const handlePrev = () => {
        console.log('prev')
        sliderRef.current?.slickPrev()
    }


    return (
        <div className="flex">
            <div className={
                twMerge(
                    'lg:w-1/12',
                    'hidden'
                )
            }>
                <CustomArrows
                    arrowType='prev'
                    className={
                        twMerge(
                            `lg:${selectedSlider === 0 && 'hidden'}`,
                        )
                    }
                    onClick={handlePrev}
                />
            </div>
            <div className={
                twMerge(
                    "lg:w-10/12",
                    'w-8/12'
                )
            }>
                <Slider ref={sliderRef}  {...settings} beforeChange={handleBeforeChange}>
                    {newsList.map((item, key) => (
                        <div key={key} className=''>
                            <div className='grid grid-row-3 gap-4 px-8 border-e h-64' >
                                <div className='h-20'>
                                    <h6 className='text-lg h-full line-clamp-3'>{item.title}</h6>
                                </div>
                                <div className='h-24 '>
                                    <p className='line-clamp-4 h-full text-justify'>{item.description}</p>
                                </div>
                                <div className='h-10 flex justify-between items-center'>
                                    <div className={`${styles.tag} uppercase bg-secondary text-primary px-4 py-1 min-w-20 text-center`}>{item.tag}</div>
                                    <p>{item.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={
                twMerge(
                    'lg:w-1/12',
                    'hidden'
                )
            }>
                <CustomArrows
                    arrowType='next'
                    className={` ${settings?.slidesToShow && selectedSlider === newsList.length - settings?.slidesToShow ? 'hidden' : ''}`}
                    onClick={handleNext}
                />
            </div>
        </div>
    )
}