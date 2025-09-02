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
                    href: '/join-the-team'
                },
                {
                    label: 'Wish List',
                    href: '/wish-list'
                },
                {
                    label: 'Documents',
                    href: '/documents'
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
                    label: 'phone: +1 701-426-8828',
                    href: 'tel:7014268828'
                },
                {
                    label: 'map: Mandan, North Dakota',
                    href: 'https://maps.app.goo.gl/dyYZjsKcWQA4TEc2A'
                }
            ]
        }
    ]

    return (
        <footer className="bg-stone-800 text-white w-full flex items-start justify-start gap-10 p-16 pb-32 flex-wrap">
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
        </footer>
    );
}
