import Hero from "@/components/Hero";

export default function MeetUs() {

    const people = [
        {
            name: 'Vonda Dahl',
            position: 'President',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/projectarmchair-37a48.firebasestorage.app/o/Vonda%20headshot.png?alt=media'
        },
        {
            name: 'Jerri Carlson',
            position: 'Vice President',
            imageUrl: 'https://static.wixstatic.com/media/e4c3dd_146104d84cc943d3a8d7900b6ee05cd2~mv2.png/v1/crop/x_54,y_26,w_94,h_97/fill/w_131,h_136,al_c,lg_1,q_85,enc_avif,quality_auto/e4c3dd_146104d84cc943d3a8d7900b6ee05cd2~mv2.png'
        },
        {
            name: 'Annette Kost',
            position: 'Secretary',
            imageUrl: 'https://static.wixstatic.com/media/e4c3dd_11062035fd974c09858339e85acd3861~mv2.jpeg/v1/crop/x_0,y_16,w_1536,h_1595/fill/w_240,h_248,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image.jpeg'
        },
        {
            name: 'Jill Vollmers',
            position: 'Treasurer',
            imageUrl: 'https://static.wixstatic.com/media/e4c3dd_9fd65e11396049358bf66760d49b1714~mv2.jpg/v1/fill/w_248,h_248,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4c3dd_9fd65e11396049358bf66760d49b1714~mv2.jpg'
        },
        {
            name: 'Ashley Patterson',
            position: 'Member-at-Large',
            imageUrl: 'https://static.wixstatic.com/media/e4c3dd_d2cbfe328f5444f5893dd8bea2881a1b~mv2.jpeg/v1/fill/w_234,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4c3dd_d2cbfe328f5444f5893dd8bea2881a1b~mv2.jpeg'
        },
        {
            name: 'Sharon Johnson',
            position: 'Member-at-Large',
            imageUrl: 'https://static.wixstatic.com/media/e4c3dd_8508cdac921c4771a9034c4143d0d610~mv2.jpg/v1/fill/w_252,h_252,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4c3dd_8508cdac921c4771a9034c4143d0d610~mv2.jpg'
        }
    ]

    return (
        <>
            <Hero>
                <div className="lg:mt-0 mt-32 flex items-center sm:justify-center justify-start gap-16 flex-wrap pb-8">
                    {people.map((person, index) => (
                        <div key={person.name} style={{animationDelay: `${(index + 1) * 100}ms`}}
                             className="flex items-center gap-4 animate-fade-in-and-up">
                            <div style={{backgroundImage: `url(${person.imageUrl})`}}
                                 className="bg-center bg-contain shadow border-stone-100 border-4 w-24 h-24 rounded-full"></div>
                            <div>
                                <h2 className="text-xl font-bold text-nowrap">{person.name}</h2>
                                <h3>{person.position}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </Hero>
        </>
    )
        ;
}
