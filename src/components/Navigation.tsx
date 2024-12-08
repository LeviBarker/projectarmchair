import Link from "next/link";
import ProjectArmchairLogo from "@/components/ProjectArmchairLogo";

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
        <nav className="h-24 w-full flex items-center justify-between px-8 fixed top-0 left-0">
            <ProjectArmchairLogo className="h-16" />
            <ul className="flex items-center gap-2">
                {routes.map(route => (
                    <li key={route.name}>
                        <Link href={route.href} className="font-bold rounded-full text-white hover:bg-stone-950/25 py-3 px-4">{route.name}</Link>
                    </li>
                ))}
                <li>
                    <Link href="#" className="font-bold shadow rounded-full bg-white hover:bg-red-50 text-red-700 py-2 px-4">Donate</Link>
                </li>
            </ul>
        </nav>
    );
}
