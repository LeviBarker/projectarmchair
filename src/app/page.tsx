import {BookOpenIcon} from "@heroicons/react/24/solid";

export default function Home() {
    return (
        <>
            <div
                className="min-h-screen bg-gradient-to-b from-[#EE453A] to-[#E7242E] flex items-center justify-center lg:pt-0 pt-32 px-8 text-white">
                <div className="lg:flex gap-3">
                    <div className="max-w-lg relative">
                        <BookOpenIcon
                            className="animation-delay-600ms animate-fade-in-and-up absolute -top-6 -left-6 h-32 z-0 text-red-400"/>
                        <h1 className="animation-delay-200ms animate-fade-in-and-up text-5xl font-bold pb-4">Teachers
                            reading aloud to children in <em className="italic">crisis</em>.</h1>
                        <p className="animation-delay-400ms animate-fade-in-and-up">
                            Project Armchair reaches out to children who are in need of a moment&#39;s reprieve from
                            challenging situations. Through the power of rich literature, it is our hope that children
                            in crisis will experience a bright, joyful moment and relive that moment through future
                            readings of the gifted book.
                        </p>
                    </div>
                    <div className="z-6">
                        <video className="lg:mt-0 mt-8 w-[560px] rounded-xl shadow" controls={true} crossOrigin="anonymous" playsInline={true}
                               preload="auto" loop={true} tabIndex={-1} autoPlay={false}
                               src="https://video.wixstatic.com/video/e4c3dd_d61698dff1a24cdeb588c0729cc0fab2/360p/mp4/file.mp4"></video>
                    </div>
                </div>
                <BookOpenIcon className="z-0 text-red-300 animate-fade-in-and-up absolute bottom-8 right-8 h-12 rotate-6" />
                <BookOpenIcon className="z-0 text-red-400 animate-fade-in-and-up animation-delay-200ms absolute bottom-12 right-32 h-12 rotate-12" />
                <BookOpenIcon className="z-0 text-red-500 animate-fade-in-and-up animation-delay-400ms absolute bottom-10 right-56 h-10 -rotate-6" />
                <BookOpenIcon className="z-0 text-red-400 animate-fade-in-and-up animation-delay-600ms absolute bottom-24 right-44 h-12 rotate-12" />
                <BookOpenIcon className="z-0 text-red-300 animate-fade-in-and-up animation-delay-800ms absolute bottom-28 right-16 h-16 -rotate-12" />
            </div>
        </>
    );
}
