import {SparklesIcon} from "@heroicons/react/16/solid";

export default function WishList() {

    const wishList = [
        {
            grade: "Preschool",
            books: [
                "(Board books are best for young hands to handle and are easy to clean)"
            ]
        },
        {
            grade: "Kindergarten",
            books: [
                "Pig the Pug by Aaron Blabey",
                "Smelly Socks by Robert Munsch",
                "Stephanie’s Ponytail by Robert Munsch",
                "Alligator Baby by Robert Munsch",
                "I Love Lemonade by Mark and Rowan Sommerset",
                "Baa Baa Smart Sheep by Mark and Rowan Sommerset",
                "Dragons Love Tacos by Adam Rubin and Daniel Salmieri",
                "Thelma the Unicorn by Aaron Blabey",
                "One Big Pair of Underwear by Laura Gehl and Tom Lichtenheld",
                "Ellison the Elephant by Eric Drachman and James Muscarello",
                "Leo the Lightning Bug by Eric Drachman and James Muscarello",
                "Pinkalicious books by Victoria Kann and Elizabeth Kann",
                "Goldalicious books by Victoria Kann",
                "Bad Case of the Stripes by David Shannon",
                "Splat the Cat by Rob Scotton",
                "If You Give A Mouse a Cookie by Laura Numeroff",
                "The Snowy Day by Ezra Jack Keats",
                "The Mitten by Jan Brett",
                "Fly Guy by Tedd Arnold"
            ]
        },
        {
            grade: "First Grade",
            books: [
                "The Pigeon Needs a Bath by Mo Willems",
                "We Are in a Book by Mo Willems",
                "Don’t Let Pigeon Stay Up Late by Mo Willems",
                "Knuffle Bunny by Mo Willems",
                "There is a Bird on Your Head by Mo Willems",
                "Pete the Cat: I Love My White Shoes by James Dean and Eric Litwin",
                "Pete the Cat and His Four Groovy Buttons by James Dean and Eric Litwin",
                "Pete the Cat: Go, Go, Go by James Dean and Eric Litwin",
                "Pete the Cat: Pete’s Big Lunch by James Dean and Eric Litwin",
                "There Was an Old Lady Who Swallowed a Fly by Lucille Colandro and Jared Lee",
                "Duck! Rabbit! By Amy Krouse Rosenthal",
                "Dragons Love Tacos aby Adam Rubin and Daniel Salmieri",
                "The Pout Pout Fish by Deborah Diesen and Dan Hanna",
                "Pinkalicious by Victoria Kann and Elizabeth Kann",
                "Silverlicious by Victoria Kann",
                "Peanut Butter and Cupcake by Terry Border",
                "Frog on a Log by Kes Gray and Jim Field",
                "The Gruffalo by Julia Donaldson",
                "Ribbit! By Rodrigo Folgueira and Poly Bernatene",
                "A Loud Winter’s Nap by Katy Hudson",
                "The Year of Billy Miller by Kevin Henkes",
                "What If You Had Animal Hair by Sandra Markle and Howard McWilliam",
                "What if You Had Animal Teeth by Sandra Markle and Howard McWilliam",
                "What If You Had Animal Ears by Sandra Markle and Howard McWilliam",
                "Don’t Push the Button by Bill Cotter",
                "I Love You Stinky Face by Lisa McCourt and Cyd Moore",
                "I Ain’t Gonna Paint No More by Karen Beaumont and David Catrow",
                "What Do You Do With An Idea by Kobi Yamada and Mae Besom",
                "This Book Just Ate My Dog by Richard Byme",
                "I Don’t Want to Be a Frog Dev Petty and Mike Boldt",
                "Interrupting Chicken by David Ezra Stein",
                "Boys Don’t Fly by Cassie Ehrenberg and Ryan Ehrenberg",
                "Dinosaurs Love Underpants by Claire Freedman and Ben Cart"
            ]
        },
        {
            grade: "Second Grade",
            books: [
                "The Sandwich Swap by Queen Rania of Jordan, Kelly DiPucchio, and Tricia Tusa",
                "Holler Loudly by Cynthia Leitich Smith and Barry Gott",
                "Bear’s Loose Tooth by Karma Wilson and Jane Chapman",
                "Pig Kahuna by Jennifer Sattler",
                "Knuffle Bunny by Mo Willems",
                "Knuffle Bunny, Too by Mo Willems",
                "The Watermelon Seed by Greg Pizzoli",
                "Not Your Typical Dragon by Dan Bar-el and Tim Bowers",
                "Peanut Butter and Cupcake by Terry Border",
                "Mother Bruce by Ryan T. Higgins",
                "The Princess and the Pony by Kate Beaton",
                "The Ninjabread Man by C.J. Leigh and Chris Gall",
                "The Day the Crayons Came Home by Drew Daywalt",
            ]
        },
        {
            grade: "Third & Fourth Grade",
            books: [
                "Who Would Win by Jerry Pallotta and Rob Bolster",
                "My Weirdest School series by Dan Gutman and Jim Paillot",
                "Roald Dahl books",
                "The One and Only Ivan by Katherine Applegate",
                "Because of Winn-Dixie by Kate DiCamillo",
                "The Tale of Despereaux by Kate DiCamillo",
                "Nate the Great books by Marjorie Weinman Sharmat and Marc Simont",
                "Diary of a Wimpy Kid books by Jeff Kinney"
            ]
        },
        {
            grade: "Fifth Grade",
            books: [
                "Wonder by R.J. Palacio",
                "Bridge to Terabithia by Katherine Patterson and Donna Diamond",
                "Esperanza Rising by Kristin Kemp",
                "Spy School by Stuart Gibbs",
                "I Survived by Lauren Tarshis",
                "Dork Diaries by Rachel Renee Russell",
                "Jacky Ha Ha by James Patterson",
                "Babysitters Club by Ann M. Martin and Raina Telgemeier",
                "Sisters by Raina Telgemeier",
                "Maniac McGee by Jerry Spinelli",
                "Wings of Fire by Tui T. Sutherland",
                "Smile by Raina Telgemeier",
            ]
        }
    ]

    return (
        <>
            <div
                className="min-h-screen md:p-24 p-8 pt-32 flex-wrap flex items-start md:items-center justify-center bg-gradient-to-b from-[#EE453A] to-[#E7242E] text-white">
                <div className="flex flex-col items-start justify-center gap-16 flex-wrap">
                    <div className="max-w-xl p-8 rounded bg-white text-stone-900">
                        <h1 className="text-3xl font-bold pb-4"><SparklesIcon className="h-6 text-amber-500"/>Wish List
                        </h1>
                        Below is a list of book titles that are popular and appropriate for the correlating age group
                        and grade. The primary goal of Project Armchair is to gift high-quality, rich children&#39;s
                        literature to children in crisis. While there are many worthy children&#39;s books available,
                        our focus is on literature that scaffolds emergent readers to higher level of proficiency. The
                        following list meets that criteria.
                        <br/>
                        <br/>
                        Thank you.
                        <br/>
                        <br/>
                        <strong className="font-bold">PLEASE NOTE: BOOKS MUST BE NEW TO COMPLY WITH HOSPITAL
                            CRITERIA</strong>
                    </div>


                    {wishList.map((list, index) => (
                        <div key={list.grade} style={{animationDelay: `${(index + 1) * 100}ms`}}
                             className="flex items-center gap-4 animate-fade-in-and-up">
                            <div>
                                <h2 className="text-xl font-bold text-nowrap">{list.grade}</h2>
                                <ul>
                                    {list.books.map(book => (<li key={book}>{book}</li>))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
        ;
}
