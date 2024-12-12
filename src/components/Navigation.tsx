'use client';

import Link from "next/link";
import ProjectArmchairLogo from "@/components/ProjectArmchairLogo";
import {HeartIcon} from "@heroicons/react/24/solid";
import {useEffect, useState} from "react";


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
        <nav style={{backgroundColor: isScrolled ? "#27272a" : ""}} className="text-white transition-colors duration-700 h-24 w-full flex items-center justify-between px-8 fixed top-0 left-0 z-10">
            <ProjectArmchairLogo className="h-16" />
            <ul className="hidden md:flex items-center gap-2">
                {routes.map(route => (
                    <li key={route.name}>
                        <Link href={route.href} className="font-bold rounded-full text-white hover:bg-stone-950/25 py-3 px-4">{route.name}</Link>
                    </li>
                ))}
                <li>
                    <Link href="#" className="font-bold shadow rounded-full bg-white hover:bg-red-50 text-red-700 py-2 px-4 flex items-center gap-2">
                        <HeartIcon className="h-4" />
                        <span>Donate</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
