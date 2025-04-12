import React from 'react'
import RightIcon from '@/shared/icons/RightIcon'
import { Ticker } from '@/widgets/Ticker'
import { SubscribeForm } from '@/widgets/SubscribeForm'
import { Button } from '@/shared/ui'
import { twMerge } from 'tailwind-merge'

export const BottomHeader = () => {
    return (
        <div className={
            twMerge(
                'container mx-auto  gap-4 py-8 flex',
                'xl:px-0',
                'lg:flex-row lg:items-center',
                'px-8 flex-col items-start',
                ''
            )
        }
        >
            <div
                className={
                    twMerge(
                        'flex items-center gap-4',
                        '2xl:w-7/12',
                        'xl:w-6/12',
                        'lg:w-6/12 lg:justify-baseline',
                        'w-full justify-between'
                    )
                }>
                <div
                    className={
                        twMerge(
                            'flex items-center',
                            '2xl:w-2/12',
                            'xl:w-3/12',
                            'lg:w-4/12',
                            'w-fit'
                        )
                    }
                >
                    <Button
                        variant='textButton'
                        className='w-auto'
                    >
                        <div className='flex gap-4 justify-center items-center text-nowrap' >
                            <span>Top Securites</span>
                            <RightIcon className='h-4 w-4 stroke-primary' height={50} width={50} />
                        </div>
                    </Button>

                </div>
                <div className={
                    twMerge(
                        'flex items-center',
                        '2xl:w-10/12',
                        'xl:w-9/12',
                        'lg:w-8/12',
                        'sm:w-9/12',
                        'w-7/12'
                    )
                }>
                    <Ticker />
                </div>
            </div>
            <div
                className={
                    twMerge(
                        'justify-center items-center gap-4 flex',
                        '2xl:w-5/12',
                        'xl:w-6/12',
                        'lg:w-6/12',
                        'w-full'
                    )}>
                <div className='w-full'>
                    <SubscribeForm />
                </div>
                <div className='w-fit'>
                    <Button
                        variant='primary'
                        className='uppercase px-8 w-fit text-nowrap'
                    >
                        Log-in
                    </Button>
                </div>
            </div>

        </div>
    )
}