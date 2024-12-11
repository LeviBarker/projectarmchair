import {BookOpenIcon} from "@heroicons/react/24/solid";

export default function Home() {
    return (
        <>
            <div className="h-screen bg-gradient-to-b from-[#EE453A] to-[#E7242E] flex items-center justify-center">
                <div className="flex gap-3">
                    <div className="max-w-lg relative">
                        <BookOpenIcon
                            className="animation-delay-600ms animate-fade-in-and-up absolute -top-6 -left-6 h-32 z-0 text-red-400"/>
                        <h1 className="animation-delay-200ms animate-fade-in-and-up text-3xl font-bold pb-4">Teachers
                            reading aloud to children in <em className="italic">crisis</em>.</h1>
                        <p className="animation-delay-400ms animate-fade-in-and-up">
                            Project Armchair reaches out to children who are in need of a moment&#39;s reprieve from
                            challenging situations. Through the power of rich literature, it is our hope that children
                            in crisis will experience a bright, joyful moment and relive that moment through future
                            readings of the gifted book.
                        </p>
                    </div>
                    <div>
                        <div>Video</div>
                    </div>
                </div>
                {/*<BookOpenIcon className="opacity-15 absolute bottom-8 right-8 h-12 rotate-6" />*/}
                {/*<BookOpenIcon className="opacity-15 absolute bottom-12 right-32 h-12 rotate-12" />*/}
                {/*<BookOpenIcon className="opacity-15 absolute bottom-10 right-56 h-10 -rotate-6" />*/}
                {/*<BookOpenIcon className="opacity-20 absolute bottom-24 right-44 h-12 rotate-12" />*/}
                {/*<BookOpenIcon className="opacity-30 absolute bottom-28 right-16 h-16 -rotate-12" />*/}
            </div>
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
                    The volunteer educators of Project Armchair are dedicated to serving the hospitalized and homeless children of our community by reading aloud rich children’s literature to children in crisis. Certified teacher volunteers encourage literacy engagement through choice of text (where applicable), model fluent reading, employ simple cognitive strategies, and gift the book to the child, so that the literacy experience may be replicated. It is the goal of Project Armchair to give children in crisis a reprieve from their crisis through the magic of the literacy journey.
                </p>
            </div>
        </>
    );
}
