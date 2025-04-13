import React from 'react'
import { twMerge } from 'tailwind-merge'
import linkedinLogo from '@/public/icons/linkedin-icon.png'
import Image from 'next/image'


export const Hero = () => {
    return (
        <section className='hero mb-16'>
            <div className={`${twMerge('bg-[url(/images/banner.png)] bg-cover bg-center bg-black/30 h-96 flex flex-col justify-end')} `}>
                <div className={
                    twMerge(
                        ' bg-gradient-to-t from-black/90 to-transparent',
                        'lg:h-36 p-0',
                        'h-40 px-8'
                    )
                }>
                    <div className='container mx-auto '>
                        <h1 className='text-secondary text-4xl whitespace-pre'>
                            latest news<br />
                            <span className='uppercase text-white text-5xl'>& insights</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className={
                twMerge(
                    'bg-primary flex items-center',
                    'lg:h-20',
                    'h-48'
                )}>
                <div className={
                    twMerge(
                        'container mx-auto flex ',
                        'xl:p-0 ',
                        'lg:justify-between lg:items-center lg:gap-0 lg:flex-row',
                        'flex-col gap-4 justify-between px-8'
                    )
                }>
                    <p className={
                        twMerge(
                            'uppercase text-white text-lg',
                            'lg:text-left',
                            'text-center'
                        )
                    }>STAY INFORMED ON THE MOST PRESSING LEGAL AND REGULATORY NEWS</p>
                    <div className={
                        twMerge(
                            'flex items-center gap-2 text-light',
                            'lg:items-start lg:justify-baseline',
                            'items-center justify-center'
                        )
                    }>
                        <Image src={linkedinLogo} alt='linked-in' className='h-8 w-8' />
                        <p className='uppercase text-lg'>Follow us on LinkedIn</p>
                    </div>
                </div>
            </div>
        </section>
    )
}