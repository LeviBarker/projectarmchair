import {BookOpenIcon} from "@heroicons/react/24/outline";
import {ChevronDownIcon} from "@heroicons/react/16/solid";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {

    const FAQs = [
        {
            title: "Background",
            showImage: true,
            content: "My name is Vonda Dahl and I am the Literacy Coordinator for Mandan Public Schools in Mandan, North Dakota. I cannot pinpoint the exact moment when the idea for Project Armchair first popped into my brain. I do know that a few weeks into the 2015 school year, I became aware that a homeless shelter for families was just blocks from my new school, where I was a reading interventionist, and that several of our students were living there.\n" +
                "\n" +
                "I could not stop thinking about that or about what I might do to help. I eventually dawned on me that as a reading specialist, I could read to kids, possibly help them with their reading skills, and in the process, offer the gift of getting lost in a really good story.\n" +
                "\n" +
                "But hearing a story is only half the magic. Why not gift the book to them as well? Any teacher of reading knows that good readers get there by practice, practice, and more practice. And so, with the purchase of $170 in Scholastic books, I walked through the doors of the Welcome House homeless shelter and began a journey that would introduce me to people that I am honored to know and taken me on paths I could not have predicted.\n" +
                "\n" +
                "Mason Cooley said that, “Reading gives us someplace to go when we have to stay where we are.” It is my hope that the books our volunteers place into the hands of precious children in challenging circumstances will give them a moment of joy and a measure of courage."
        },
        {
            title: "Mission",
            content: "The volunteer educators of Project Armchair are dedicated to serving the hospitalized and homeless children of our community by reading aloud rich children’s literature to children in crisis. Certified teacher volunteers encourage literacy engagement through choice of text (where applicable), model fluent reading, employ simple cognitive strategies, and gift the book to the child, so that the literacy experience may be replicated. It is the goal of Project Armchair to give children in crisis a reprieve from their crisis through the magic of the literacy journey."
        },
        {
            title: "Vision",
            content: "EFG"
        }
    ]

    return (
        <>
            <Hero>
                <div className="lg:mt-0 mt-32 lg:flex gap-3">
                    <div className="max-w-lg relative">
                        <BookOpenIcon
                            className="animation-delay-600ms animate-fade-in-and-up absolute -top-6 -left-6 h-32 z-0 text-red-200"/>
                        <h1 className="animation-delay-200ms animate-fade-in-and-up text-5xl font-bold pb-4">Teachers
                            reading aloud to children in <em className="italic text-red-500">crisis</em>.</h1>
                        <p className="animation-delay-400ms animate-fade-in-and-up">
                            Project Armchair reaches out to children who are in need of a moment&#39;s reprieve from
                            challenging situations. Through the power of rich literature, it is our hope that children
                            in crisis will experience a bright, joyful moment and relive that moment through future
                            readings of the gifted book.
                        </p>
                    </div>
                    <div className="relative" style={{zIndex: 9}}>
                        <video className="lg:mt-0 mt-8 w-[560px] rounded-xl shadow"
                               poster="https://static.wixstatic.com/media/e4c3dd_8e7d6ce21335478e933e2f293da5e927~mv2.jpg/v1/fill/w_1960,h_912,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Young%2520Girl%2520Reading_edited.jpg"
                               controls={true} crossOrigin="anonymous" playsInline={true}
                               preload="auto" loop={true} tabIndex={-1} autoPlay={false}
                               src="https://video.wixstatic.com/video/e4c3dd_d61698dff1a24cdeb588c0729cc0fab2/360p/mp4/file.mp4"></video>
                    </div>
                </div>
                <BookOpenIcon
                    className="md:inline hidden z-0 text-teal-300 animate-fade-in-and-up-right absolute bottom-8 right-8 h-12 rotate-6"/>
                <BookOpenIcon
                    className="md:inline hidden z-0 text-red-400 animate-fade-in-and-up-left animation-delay-200ms absolute bottom-12 right-32 h-12 rotate-12"/>
                <BookOpenIcon
                    className="md:inline hidden z-0 text-red-500 animate-fade-in-and-up-right animation-delay-400ms absolute bottom-10 right-56 h-10 -rotate-6"/>
                <BookOpenIcon
                    className="md:inline hidden z-0 text-teal-400 animate-fade-in-and-up-left animation-delay-600ms absolute bottom-24 right-44 h-12 rotate-12"/>
                <BookOpenIcon
                    className="md:inline hidden z-0 text-red-300 animate-fade-in-and-up-right animation-delay-800ms absolute bottom-28 right-16 h-16 -rotate-12"/>
            </Hero>
            <div className="flex items-center justify-start p-8 bg-red-600">
                <div className="w-full">
                    <h2 className="font-bold text-4xl pb-4 text-white w-full text-center underline">FAQ</h2>
                    <div className="w-full">
                        {FAQs.map(FAQ => (
                            <Disclosure key={FAQ.title} as="div"
                                        className="p-4 bg-gray-100 text-stone-800 rounded shadow block mb-4">
                                <DisclosureButton className="py-2 group flex justify-between items-center w-full font-bold">
                                    {FAQ.title}
                                    <ChevronDownIcon className="h-5 group-data-[open]:rotate-180"/>

                                </DisclosureButton>
                                <DisclosurePanel className="text-stone-600">
                                    {FAQ.showImage && (<figure className="float-right p-4">
                                        <Image
                                            src="https://static.wixstatic.com/media/e4c3dd_5d3b6d93bc164e3abb4c780918066706~mv2.jpg/v1/fill/w_812,h_530,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e4c3dd_5d3b6d93bc164e3abb4c780918066706~mv2.jpg"
                                            alt="Original logo"
                                            width={300}
                                            height={200}
                                        />
                                        <figcaption>
                                            <small>Created by art teacher Ali Hein</small>
                                        </figcaption>
                                    </figure>)}
                                    {FAQ.content}
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </div>
                </div>


            </div>
        </>
    );
}
