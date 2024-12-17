import {UsersIcon} from "@heroicons/react/16/solid";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function GetInvolved() {

    return (
        <>
            <Hero>
                <div className="md:mt-16 mt-32 max-w-xl p-8 rounded bg-white text-stone-900">
                    <h1 className="text-3xl font-bold pb-4"><UsersIcon className="h-6 text-purple-800"/>Get Involved
                    </h1>
                    <h3 className="font-bold text-xl pt-4">Join Our Team</h3>
                    <p>
                        We are always looking for more volunteers! Please know volunteers must be certified teachers AND
                        there is training involved in order to uphold hospital protocols and standards.
                    </p>
                    <Link href="/apply"
                          className="mt-4 mb-8 font-bold rounded-full bg-red-600 text-white py-3 px-4 inline-flex items-center gap-1">
                        <span>Apply</span>
                    </Link>

                    <h3 className="font-bold text-xl pt-4">Ideas</h3>
                    <p>
                        New ideas are welcome, too: where to volunteer, fundraisers, events, or if you are not a teacher but have talent in an area we are not yet utilizing and would love to share, please let us know. Although we may be restricted by numbers or funds, we would love to hear your proposals!
                    </p>
                </div>
            </Hero>
        </>
    )
        ;
}
