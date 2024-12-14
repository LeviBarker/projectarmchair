import {UsersIcon} from "@heroicons/react/16/solid";

export default function GetInvolved() {

    return (
        <>
            <div
                className="min-h-screen md:p-24 p-8 pt-32 flex-wrap flex items-start md:items-center justify-center bg-gradient-to-b from-[#EE453A] to-[#E7242E] text-white">
                <div className="flex flex-col items-start justify-center gap-16 flex-wrap">
                    <div className="max-w-xl p-8 rounded bg-white text-stone-900">
                        <h1 className="text-3xl font-bold pb-4"><UsersIcon className="h-6 text-purple-800"/>Get Involved
                        </h1>
                        Below is a list of book titles that are popular and appropriate for the correlating age group
                        and grade. The primary goal of Project Armchair is to gift high-quality, rich children&#39;s
                        literature to children in crisis. While there are many worthy children&#39;s books available,
                        our focus is on literature that scaffolds emergent readers to higher level of proficiency. The
                        following list meets that criteria.
                    </div>

                </div>
            </div>
        </>
    )
        ;
}