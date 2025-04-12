import { Button } from '@/shared/ui'
import React from 'react'

export const SubscribeForm = () => {
    return (
        <section className='subscribe-form'>
            <form>
                <div className='flex flex-row gap-4'>
                    <input
                        type="email"
                        placeholder='Enter your email address'
                        required
                        className='p-2 px-6 border border-primary text-primary rounded-lg active:border-primary-hover focus:border-primary-hover focus:outline-none w-full'
                    />
                    <Button
                        type='submit'
                        className='px-4 w-fit'
                    >
                        Subscribe
                    </Button>
                </div>
            </form>
        </section>
    )
}

