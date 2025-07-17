import {HeartIcon} from "@heroicons/react/24/solid";
import Hero from "@/components/Hero";
import Link from "next/link";
import {SparklesIcon} from "@heroicons/react/16/solid";
import Image from "next/image";

export default function Donate() {

    return (
        <Hero data-cy="page content">
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
                    <div className="mt-8 flex items-center gap-4 justify-stretch flex-wrap flex-col">
                        <Link href="/wish-list"
                              className="whitespace-nowrap hover:bg-amber-300 inline-flex bg-amber-100 px-8 h-16 rounded-full gap-1 font-bold items-center">
                            <SparklesIcon className="h-5 text-amber-500"/>
                            <span>Donate a Book</span>
                        </Link>
                        <span className="text-stone-500 sm:inline hidden">or</span>
                        <Link href="https://www.paypal.com/donate/?hosted_button_id=KDM49TQ8XC9WU"
                              className="whitespace-nowrap hover:bg-amber-300 inline-flex bg-amber-100 px-8 h-16 rounded-full gap-1 font-bold items-center">
                            <Image src="/PayPal.png" alt="PayPal logo" height={18} width={18}/>
                            <span>Donate with PayPal</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Hero>
    );
}
