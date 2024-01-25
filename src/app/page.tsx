import {MaxWidthWrapper} from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";
import {ArrowDownToLine, CheckCircle, HeartIcon, Leaf} from "lucide-react";

//lucid-react for icons
const perks = [
    {
        name: "Love",
        Icon: HeartIcon,
        description: "All products are made with love and care."
    },
    {
        name: "Quality",
        Icon: CheckCircle,
        description: "We ensure the highest quality."
    },
    {
        name: "Sustainability",
        Icon: Leaf,
        description: "We care about the environment. All packaging is sustainable."
    }
]

export default function Home() {
    return (
        <>
            <MaxWidthWrapper>
                <div className={"py-20 mx-auto text-center flex flex-col items-center max-w-3xl"}>

                    <h1 className={"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"}>
                      <span className={"whitespace-nowrap"}>  A Marketplace Full of Heart <img
                        className={"sm:w-14 sm:h-14 inline w-8 h-8"}
                        src={"/nav/icons/gingerbread.png"}/>: {" "}
                          </span>
                        <br/>
                        <span className={"text-blue-600 relative"}>
    Munich&apos;s Best   <img className={"sm:right-5 sm:w-16 sm:h-16 sm:bottom-7 inline relative bottom-5 right-4 w-8 h-8 rotate-45"} src={"/nav/icons/bavarianHat.png"}/>
  </span><br/> Just a Click Away. </h1>
                    <p className={"mt-6 text-lg max-w-prose text-muted-foreground"}>Welcome to Munich Marketplace.
                        Discover Bavarian charm, shop with heart. Your journey into tradition starts now.</p>
                    <div className={"flex flex-col sm:flex-row gap-4 mt-6"}>
                        <Link href={"/products"} className={buttonVariants()}>Browse Trending</Link>
                        <Button variant={"ghost"}>Our quality promise &rarr;</Button>
                    </div>
                </div>
                {/*TODO: Items */}
            </MaxWidthWrapper>

            <section className={"border-t border-gray-200 bg-gray-50"}>
                <MaxWidthWrapper className={"py-20"}>
                    <div
                        className={"grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"}>
                        {perks.map(perk => <div key={perk.name}
                                                className={"text-center md:flex md:items-start md:text-left lg:block lg:text-center"}>
                            <div className={"md:flex-shrink-0 flex justify-center"}>
                                <div
                                    className={"h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900"}>
                                    {<perk.Icon className={"w-1/3 h-1/3"}></perk.Icon>}
                                </div>
                            </div>
                            <div className={"mt-6 md:ml-4 md:mt-0 lg:mt-6 lg:ml-0"}>
                                <h3 className={"text-base font-medium text-gray-900"}>{perk.name}</h3>
                                <p className={"mt-3 text-sm text-muted-foreground "}>{perk.description}</p>
                            </div>
                        </div>)}
                    </div>
                </MaxWidthWrapper>
            </section>
        </>
    )
}
