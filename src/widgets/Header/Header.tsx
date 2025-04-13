import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.png'
import menuIcon from '@/public/icons/menu-icon.png'
import searchIcon from '@/public/icons/search-icon.png'
import translateIcon from '@/public/icons/translate-icon.png'
import linkedinIcon from '@/public/icons/linkedin-icon.png'
import { twMerge } from 'tailwind-merge'

export const Header = () => {
    return (
        <div className={
            twMerge(
                'container mx-auto flex py-8 bg-primary text-light',
                'xl:px-0',
                'lg:gap-0',
                'px-8 gap-8'
            )
        } >
            <div className={
                twMerge(
                    'flex gap-8',
                    'lg:w-4/12',
                    'w-1/12'
                )
            }>
                <button className='flex gap-4 items-center'>
                    <Image src={menuIcon} alt='menu' height={50} width={50} className='h-8 w-8' />
                    <span
                        className={
                            twMerge(
                                'hidden',
                                'lg:block'
                            )
                        }
                    >
                        Menu
                    </span>
                </button>
                <button className={
                    twMerge(
                        'flex gap-4 items-center',
                        'lg:flex',
                        'hidden'
                    )
                }>
                    <Image src={searchIcon} alt='search' height={50} width={50} className='h-8 w-8' />
                    <span
                        className={
                            twMerge(
                                'hidden',
                                'lg:block'
                            )
                        }
                    >
                        Search
                    </span>
                </button>
            </div>
            <div className={
                twMerge(
                    'flex justify-center items-center',
                    'lg:w-4/12',
                    'w-11/12'
                )
            }>
                <div>
                    <Image src={logo} alt="Logo" height={40} />
                </div>
            </div>
            <div className={
                twMerge(
                    'gap-8 justify-end',
                    'lg:flex lg:w-4/12',
                    'hidden'
                )
            }>
                <button>
                    <Image src={translateIcon} alt='translate' height={50} width={50} className='h-8 w-8' />
                </button>
                <button>
                    <Image src={linkedinIcon} alt='linkedin' height={50} width={50} className='h-8 w-8' />
                </button>
            </div>
        </div>
    )
}

