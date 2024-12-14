'use client';

import Link from "next/link";
import ProjectArmchairLogo from "@/components/ProjectArmchairLogo";
import {HeartIcon} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";
import {Bars2Icon} from "@heroicons/react/16/solid";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";


export default function Navigation() {

    const routes = [
        {
            name: 'Home',
            href: '/'
        },
        {
            name: 'Meet Us',
            href: '/meet-us'
        },
        {
            name: 'Get Involved',
            href: '/get-involved'
        }
    ]

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (event: Event) => {
        setIsScrolled((event.target as HTMLElement).scrollTop > 50)
    }

    useEffect(() => {
        const appShell = document.getElementById("app-shell");
        appShell?.addEventListener('scroll', handleScroll);
        return () => appShell?.removeEventListener('scroll', handleScroll);
    });

    return (
        <nav style={{backgroundColor: isScrolled ? "#27272a" : ""}}
             className="gap-4 text-white transition-colors duration-700 h-24 w-full flex items-center md:justify-between justify-start px-8 fixed top-0 left-0 z-10">
            <Menu>
                <MenuButton
                    className="flex items-center justify-center md:hidden hover:bg-stone-800/10 rounded-full h-12 w-12">
                    <Bars2Icon className="h-6"/>
                </MenuButton>
                <MenuItems anchor={{to: 'bottom start', gap: '4px'}} className="bg-stone-800 rounded-xl">
                    {routes.map(route => (
                        <MenuItem key={route.name}>
                            <Link href={route.href}
                                  className="block font-bold rounded text-white hover:bg-stone-950/25 py-3 px-4 data-[focus]:bg-stone-700">{route.name}</Link>
                        </MenuItem>
                    ))}
                    <MenuItem>
                        <Link href="/donate"
                              className="font-bold rounded text-white hover:bg-stone-950/25 py-3 px-4 data-[focus]:bg-stone-700 flex items-center gap-1">
                            <HeartIcon className="h-4 text-red-700"/>
                            <span>Donate</span>
                        </Link>
                    </MenuItem>
                </MenuItems>
            </Menu>
            <ProjectArmchairLogo className="h-16" />
            <ul className="hidden md:flex items-center gap-2">
                {routes.map(route => (
                    <li key={route.name}>
                        <Link href={route.href} className="font-bold rounded-full text-white hover:bg-stone-950/25 py-3 px-4">{route.name}</Link>
                    </li>
                ))}
                <li>
                    <Link href="/donate"
                          className="font-bold shadow rounded-full bg-white hover:bg-red-50 text-red-700 py-2 px-4 flex items-center gap-2">
                        <HeartIcon className="h-4" />
                        <span>Donate</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
