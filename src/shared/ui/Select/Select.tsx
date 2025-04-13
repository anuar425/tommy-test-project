'use client'

import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type SelectProps = {
    className?: string,
    options: {
        value: string,
        label: ReactNode,
    }[],
    onChange: (value: string) => void
    children?: ReactNode
}

export const Select = ({ options, onChange, children }: SelectProps) => {

    const [open, setOpen] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement | null>(null)

    const handleOpen = () => {
        setOpen((prev) => !prev)
    }

    const handleChange = (value: string) => {
        onChange(value)
        handleOpen()
    }

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current?.contains(event.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener('click', handler)
        return () => {
            document.removeEventListener('click', handler)
        }

    }, [dropdownRef])


    return (
        <div
            ref={dropdownRef}
            className={
                twMerge(
                    'select',
                    'w-fit relative'
                )
            }>
            <div
                className={
                    twMerge(
                        'select-button',
                    )
                }
                onClick={handleOpen}
            >
                {children}
            </div>
            <div
                className={
                    twMerge(
                        'select-menu',
                        `${open ? 'flex' : 'hidden'}`,
                        'absolute bottom-full flex-col bg-primary border border-secondary min-w-fit w-36 rounded-lg my-4'
                    )
                }>
                {options.map((item) => (
                    <div
                        key={item.value}
                        className={
                            twMerge(
                                'select-options',
                                'px-4 py-2 text-center hover:bg-secondary/30 cursor-pointer'
                            )
                        }
                        onClick={() => handleChange(item.value)}
                    >
                        {item.value}
                    </div>
                ))}
            </div>
        </div >
    )
}