import Link from 'next/link';

type FooterLink = {
    label: string,
    href: string
}

type FooterLinkGroup = {
    header: string,
    links: FooterLink[]
}

export default function Footer() {

    const linkGroups: FooterLinkGroup[] = [
        {
            header: 'Get Involved',
            links: [
                {
                    label: 'Join the Team',
                    href: '#'
                },
                {
                    label: 'Wish List',
                    href: '#'
                },
                {
                    label: 'Documents',
                    href: '#'
                }
            ]
        },
        {
            header: 'Contact',
            links: [
                {
                    label: 'email: projectarmchair@outlook.com',
                    href: 'mailto:projectarmchair@outlook.com'
                },
                {
                    label: 'phone: +1 (701) 471-4623',
                    href: 'tel:7014714623'
                },
                {
                    label: 'map: Mandan, North Dakota',
                    href: 'https://maps.app.goo.gl/dyYZjsKcWQA4TEc2A'
                }
            ]
        }
    ]

    return (
        <nav className="bg-stone-800 w-full flex items-start justify-start gap-10 p-16 flex-wrap">
            {linkGroups.map(group => (
                <div key={group.header}>
                    <h3 className="font-bold text-xl pb-2">{group.header}</h3>
                    <ul>
                        {group.links.map(link => (
                            <li key={group.header + link.label} className="text-sm">
                                <Link href={link.href}>{link.label}</Link>
                            </li>))}
                    </ul>
                </div>))}
            <div>
                {/*<span className="absolute -left-4 -top-4 text-9xl z-0 font-serif">&#34;</span>*/}
                <h3 className="font-bold text-xl pb-2">Testimonials</h3>
                <blockquote className="border-l-stone-200 border-l-4 pl-8">Lorem ipsum</blockquote>
            </div>
        </nav>
    );
}
