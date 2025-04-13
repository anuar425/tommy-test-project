'use client'

import LeftIcon from '@/shared/icons/LeftIcon';
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightIcon from '@/shared/icons/RightIcon';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge'
import { getTickers } from './api';
import { GetTickerResponse } from './api/tickerApi';

const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    // variableWidth: true
    swipe: false,
    adaptiveHeight: true,
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
    const [tickers, setTickers] = useState<GetTickerResponse[]>([])
    const sliderRef = useRef<Slider | null>(null);

    const nextSlide = () => {
        if (!sliderRef.current) return
        sliderRef?.current.slickNext()

    }

    const prevSlide = () => {
        if (!sliderRef.current) return
        sliderRef?.current.slickPrev()
    }

    useEffect(() => {
        (async () => {
            try {
                const tickers = await getTickers()
                setTickers(tickers)
            } catch (error) {
                console.log([])
                console.log(`Error use effect:${error}`)
            }
        })()
    }, [])

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
                    {tickers.map((item, index) => (
                        <div key={index} className=''>
                            <div className='p-2 border border-primary rounded-lg text-center bg-primary text-white mx-1 text-xs min-w-fit' >
                                <p className='text-nowrap'>{item.name} | {item.price} {item.currency} <span className={`${item.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>{item.precent}%</span></p>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
            <div
                className={
                    twMerge(
                        'items-center gap-2',
                        "2xl:w-1/12",
                        'lg:w-2/12 lg:flex',
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

