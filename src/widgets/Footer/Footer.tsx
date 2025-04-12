import RightIcon from '@/shared/icons/RightIcon'
import { Button } from '@/shared/ui'
import React from 'react'
import { NewsSlider } from '../NewsSlider'
import { twMerge } from 'tailwind-merge'


export const Footer = () => {
    return (
        <section className='bg-primary text-white py-10'>
            <div className={
                twMerge(
                    'container mx-auto flex  ',
                    'lg:justify-between lg:items-center lg:p-0 lg:gap-0',
                    'px-8 gap-8'
                )
            }>
                <div className={
                    twMerge(
                        'flex flex-col gap-4',
                        'lg:w-2/12',
                        'w-4/12'
                    )
                }>
                    <div>
                        <h3 className='text-secondary text-2xl whitespace-pre'>
                            latest <br />
                            <span className='uppercase text-white text-3xl'>news</span>
                        </h3>
                    </div>
                    <div>
                        <Button className='flex items-center gap-5 px-2 text-white text-xl w-full'>
                            <RightIcon className='h-4 w-4 stroke-white' />
                            <span>SFC</span>
                        </Button>
                    </div>
                </div>
                <div className={
                    twMerge(
                        'lg:w-10/12',
                        'w-full'
                    )
                }>
                    <NewsSlider />
                </div>
            </div>
        </section>
    )
}