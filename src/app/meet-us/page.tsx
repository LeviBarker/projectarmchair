import Hero from "@/components/Hero";

export default function MeetUs() {

    const people = [
        {
            name: 'Vonda Dahl',
            position: 'President',
            imageUrl: 'https://static.wixstatic.com/media/e4c3dd_a6e08597e8574dc388f8fa1110b8b793~mv2_d_2448_3264_s_4_2.jpg/v1/crop/x_0,y_0,w_2448,h_2525/fill/w_240,h_248,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4c3dd_a6e08597e8574dc388f8fa1110b8b793~mv2_d_2448_3264_s_4_2.jpg'
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
                <div className="md:mt-0 mt-32 flex items-center sm:justify-center justify-start gap-16 flex-wrap pb-8">
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
            <div className="flex flex-col items-center justify-center p-16 text-stone-900 gap-2">
                <h2 className="font-bold text-2xl">Background</h2>
                <p>
                    My name is Vonda Dahl and I am the Literacy Coordinator for Mandan Public Schools in Mandan, North
                    Dakota. I cannot pinpoint the exact moment when the idea for Project Armchair first popped into my
                    brain. I do know that a few weeks into the 2015 school year, I became aware that a homeless shelter
                    for families was just blocks from my new school, where I was a reading interventionist, and that
                    several of our students were living there.
                </p>
                <p>
                    I could not stop thinking about that or about what I might do to help. I eventually dawned on me
                    that as a reading specialist, I could read to kids, possibly help them with their reading skills,
                    and in the process, offer the gift of getting lost in a really good story.
                </p>
                <p>
                    But hearing a story is only half the magic. Why not gift the book to them as well? Any teacher of
                    reading knows that good readers get there by practice, practice, and more practice. And so, with the
                    purchase of $170 in Scholastic books, I walked through the doors of the Welcome House homeless
                    shelter and began a journey that would introduce me to people that I am honored to know and taken me
                    on paths I could not have predicted.
                </p>
                <p>
                    Mason Cooley said that, “Reading gives us someplace to go when we have to stay where we are.” It is
                    my hope that the books our volunteers place into the hands of precious children in challenging
                    circumstances will give them a moment of joy and a measure of courage.
                </p>
                <h2 className="font-bold text-2xl">Mission</h2>
                <p>
                    The volunteer educators of Project Armchair are dedicated to serving the hospitalized and homeless
                    children
                    of our community by reading aloud rich children’s literature to children in crisis. Certified
                    teacher
                    volunteers encourage literacy engagement through choice of text (where applicable), model fluent
                    reading,
                    employ simple cognitive strategies, and gift the book to the child, so that the literacy experience
                    may be
                    replicated. It is the goal of Project Armchair to give children in crisis a reprieve from their
                    crisis
                    through the magic of the literacy journey.
                </p>
                <h2 className="font-bold text-2xl">Vision</h2>
                <p>
                    &#34;The sun streams through tall windows in yellow shafts of warmth. The room is quiet, save for
                    the gentle
                    tick of the mantle clock, and speckles of golden dust float noiselessly in the vacuum sound. The
                    chair is
                    massive, soft, and well-worn; like the hug of an old, fuzzy bear. A child is there, lost in the hug
                    of the
                    chair, mesmerized by the hush of the sanctuary. The book in his lap is a portal to another universe.
                    One
                    without pain, fear, or uncertainty. The child in the enormous chair does not hear the tick of the
                    clock or
                    see the golden specks that float around his head. He is only cognizant of the place he has entered
                    through
                    The Portal. His heart is light and his world at peace. For this magic, sacred moment, all is
                    well.&#34;
                </p>
            </div>
        </>
    )
        ;
}
