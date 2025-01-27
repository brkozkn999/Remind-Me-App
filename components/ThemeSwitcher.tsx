'use client'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';

function ThemeSwitcher() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
            <Tabs defaultValue={theme}>
                <TabsList className='border dark:border-natural-800 dark:bg-[#030303]'>
                    <TabsTrigger value='light' onClick={(e) => setTheme('light')}>
                        <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:rotate-90'/>
                    </TabsTrigger>
                    <TabsTrigger value='dark' onClick={(e) => setTheme('dark')}>
                        <MoonIcon className='h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0'/>
                    </TabsTrigger>
                    <TabsTrigger value='system' onClick={(e) => setTheme('system')}>
                        <DesktopIcon className='h-[1.2rem] w-[1.2rem]'/>
                    </TabsTrigger>
                </TabsList>
            </Tabs>
        )
}

export default ThemeSwitcher