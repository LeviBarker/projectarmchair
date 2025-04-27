'use client';

import Link from "next/link";
import ProjectArmchairLogo from "@/components/ProjectArmchairLogo";
import {HeartIcon} from "@heroicons/react/24/solid";
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

    return (
        <nav data-cy="navbar"
             className="gap-4 bg-gradient-to-b from-stone-50 to-95% to-stone-50/80 backdrop-blur-md transition-colors duration-700 h-24 w-full flex items-center md:justify-between justify-start px-8 fixed top-0 left-0 z-10">
            <Menu>
                <MenuButton
                    className="flex items-center justify-center md:hidden hover:bg-stone-800/10 rounded-full h-12 w-12 text-stone-800">
                    <Bars2Icon className="h-6"/>
                </MenuButton>
                <MenuItems anchor={{to: 'bottom start', gap: '4px'}}
                           className="bg-stone-800 rounded-xl z-10 border-4 border-stone-100">
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
                        <Link href={route.href} data-cy={route.name} className="font-bold rounded-full text-stone-800 hover:bg-stone-950/25 py-3 px-4">{route.name}</Link>
                    </li>
                ))}
                <li>
                    <Link href="/donate"
                          data-cy="Donate"
                          className="font-bold shadow rounded-full text-white hover:bg-red-700 bg-gradient-to-b from-[#EE453A] to-[#E7242E] py-2 px-4 flex items-center gap-2">
                        <HeartIcon className="h-4" />
                        <span>Donate</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
