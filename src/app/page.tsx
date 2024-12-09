import {BookOpenIcon} from "@heroicons/react/24/solid";

export default function Home() {
    return (
        <div className="h-screen bg-gradient-to-b from-[#EE453A] to-[#E7242E] flex items-center justify-center">
            <div className="flex gap-3">
                <div className="max-w-lg relative">
                    <BookOpenIcon className="absolute -top-6 -left-6 h-32 z-0 opacity-30"/>
                    <h1 className="text-3xl font-bold pb-4">Teachers reading aloud to children in <em className="italic">crisis</em>.</h1>
                    <p>
                        Project Armchair reaches out to children who are in need of a moment&#39;s reprieve from challenging situations. Through the power of rich literature, it is our hope that children in crisis will experience a bright, joyful moment and relive that moment through future readings of the gifted book.
                    </p>
                </div>
                <div>
                    <div>Video</div>
                </div>
            </div>
        </div>
    );
}
