'use client'

import React, { useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick';
import { newsList } from './content'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './syles.module.css'
import RightArrow from '@/shared/icons/RightIcon'
import LeftArrow from '@/shared/icons/LeftIcon'
import { Button, Select } from '@/shared/ui';
import { twMerge } from 'tailwind-merge'
import RightIcon from '@/shared/icons/RightIcon';
import Link from 'next/link';

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
            breakpoint: 1440,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
}

export const NewsSlider = () => {
    const [selectedSlider, setSelectedSlider] = useState<number>(1);
    const [tag, setTag] = useState<string>('IRD')
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

    const handleChange = (value: string) => {
        console.log(value)
        setTag(value)
    }


    return (
        <>
            <div className={
                twMerge(
                    'flex flex-col gap-4',
                    'lg:w-2/12',
                    'sm:w-2/12',
                    'w-4/12'
                )
            }>
                <div>
                    <h3 className='text-secondary text-2xl whitespace-pre'>
                        latest <br />
                        <span className='uppercase text-white text-3xl'>news</span>
                    </h3>
                </div>
                {/* <div>
                        <Button className='flex items-center gap-5 px-2 text-white text-xl w-full'>
                            <RightIcon className='h-4 w-4 stroke-white ' />
                            <span>SFC</span>
                        </Button>
                    </div> */}
                <div>
                    <Select
                        options={[
                            { value: 'SFC', label: 'SFC' },
                            { value: 'HKMA', label: 'HKMA' },
                            { value: 'SFAT', label: 'SFAT' },
                            { value: 'MMT', label: 'MMT' },
                            { value: 'IRD', label: 'IRD' },
                        ]}
                        onChange={handleChange}
                    >
                        <Button className='flex items-center gap-5 px-2 text-white text-xl w-full'>
                            <RightIcon className='h-4 w-4 stroke-white ' />
                            <span>{tag}</span>
                        </Button>
                    </Select>
                </div>
            </div>
            <div className={
                twMerge(
                    'lg:w-10/12',
                    'sm:w-10/12',
                    'w-8/12'
                )
            }>
                <div className="flex">
                    <div className={
                        twMerge(
                            'lg:w-1/12 lg:block',
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
                            'w-full'
                        )
                    }>
                        <Slider ref={sliderRef}  {...settings} beforeChange={handleBeforeChange}>
                            {newsList
                                .filter((item) => item.tag === tag)
                                .map((item, key) => (
                                    <Link key={key} href={item.link} target='_blank'>
                                        <div className=''>
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
                                    </Link>

                                ))}
                        </Slider>
                    </div>
                    <div className={
                        twMerge(
                            'lg:w-1/12 lg:block',
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
            </div>
        </>

    )
}