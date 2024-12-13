import {HeartIcon} from "@heroicons/react/24/solid";
import Hero from "@/components/Hero";

export default function Donate() {

    return (
        <>
            <Hero>
                <div className="md:mt-0 mt-32 shadow flex flex-col items-start justify-center gap-16 flex-wrap">
                    <div className="max-w-xl p-8 rounded bg-white text-stone-900">
                        <h1 className="text-3xl font-bold pb-4"><HeartIcon className="h-6 text-red-700"/>Donations</h1>
                        Good news: we are now officially a 501 (c)(3) organization! Click on the &#34;donate&#34; button
                        below to give. If you&#39;d rather, checks can be made out to Project Armchair and sent to:
                        <p className="font-mono mt-4 p-4 bg-gray-100 inline-block">
                            Project Armchair<br/>
                            P.O. Box 826<br/>
                            Mandan, ND 58554<br/>
                        </p>
                        <button className="mt-8 bg-purple-100 rounded-full flex gap-1 px-6 py-4 font-bold items-center">
                            Donate via <img alt="Stripe Logo" className="h-10"
                                            src="https://cdn-icons-png.flaticon.com/512/5968/5968382.png"/>
                        </button>
                    </div>
                </div>
            </Hero>
        </>
    )
        ;
}
