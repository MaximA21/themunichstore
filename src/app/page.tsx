import {MaxWidthWrapper} from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {Button, buttonVariants} from "@/components/ui/button";


export default function Home() {
    return (
        <MaxWidthWrapper>
            <div className={"py-20 mx-auto text-center flex flex-col items-center max-w-3xl"}>
                <h1 className={"text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"}>
                    A Marketplace Full of Heart:{" "}
                    <span className={"text-blue-600"}>
    Munich's Best
  </span>, Just a Click Away. </h1>
                <p className={"mt-6 text-lg max-w-prose text-muted-foreground"}>Welcome to Munich Marketplace.
                    Discover Bavarian charm, shop with heart. Your journey into tradition starts now.</p>
                <div className={"flex flex-col sm:flex-row gap-4 mt-6"}>
                    <Link href={"/products"} className={buttonVariants()}>Browse Trending</Link>
                    <Button variant={"ghost"}>Our quality promise &rarr;</Button>
                </div>
            </div>
            {/*TODO: Items */ }
        </MaxWidthWrapper>
    )
}
