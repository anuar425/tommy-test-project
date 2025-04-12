'use client'

import LeftIcon from '@/shared/icons/LeftIcon';
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightIcon from '@/shared/icons/RightIcon';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge'

const data = [
    {
        id: 1,
        name: "Hang Seng",
        value: 19299.18,
        change: 0.25,
        changeType: "positive"
    },
    {
        id: 2,
        name: "Nifty",
        value: 19299.18,
        change: -0.25,
        changeType: "negative"
    },
    {
        id: 3,
        name: "S&P 500",
        value: 19299.18,
        change: 0.25,
        changeType: "positive"
    },
    {
        id: 4,
        name: "NASDAQ",
        value: 19299.18,
        change: -0.25,
        changeType: "negative"
    },
    {
        id: 5,
        name: "FTSE",
        value: 19299.18,
        change: 0.25,
        changeType: "positive"
    },
] as const

const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // variableWidth: true
    swipe: false,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false,
                swipe: true,
            }
        },
    ]
};

export const Ticker = () => {

    const sliderRef = useRef<Slider | null>(null);

    const nextSlide = () => {
        if (!sliderRef.current) return
        sliderRef?.current.slickNext()

    }

    const prevSlide = () => {
        if (!sliderRef.current) return
        sliderRef?.current.slickPrev()
    }

    return (
        <>
            <div
                className={
                    twMerge(
                        '2xl:w-11/12',
                        'lg:w-10/12',
                        'w-full'
                    )
                }
            >
                <Slider ref={sliderRef}  {...settings} className='w-full' >
                    {data.map((item) => (
                        <div key={item.id} className=''>
                            <div className='p-2 border border-primary rounded-lg text-center bg-primary text-white mx-1 text-xs' >
                                <p>{item.name} | {item.value} <span className={`${item.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>{item.change}%</span></p>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
            <div
                className={
                    twMerge(
                        'flex items-center gap-2',
                        "2xl:w-1/12",
                        'lg:w-2/12 block',
                        'hidden',
                    )
                }>
                <button className='flex justify-center items-center stroke-primary/80 hover:stroke-primary-hover min-w-1/2' onClick={prevSlide}>
                    <LeftIcon className='w-2 h-10' />
                </button>
                <button className='flex justify-center items-center stroke-primary/80 hover:stroke-primary-hover min-w-1/2' onClick={nextSlide}>
                    <RightIcon className='w-2 h-10' />
                </button>
            </div>
        </>

    )
}

