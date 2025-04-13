'use client'

import { twMerge } from 'tailwind-merge'
import { NewsSlider } from '../NewsSlider'


export const Footer = () => {


    return (
        <section className='bg-primary text-white py-10'>
            <div className={
                twMerge(
                    'container mx-auto flex',
                    'xl:p-0',
                    'lg:justify-between lg:items-center lg:gap-0',
                    'px-8 gap-8'
                )
            }>

                <NewsSlider />

            </div>
        </section>
    )
}