import Link from "next/link"

const HeroBanner = () => {
    return ( 
        <div 
            className="
                flex
                w-full
                p-8
                justify-center
            "
        >
                <div className="flex flex-col w-full items-start gap-4 max-w-screen-md bg-zinc-900 text-neutral-200 p-8">
                    <h3 className="bg-orange-600 px-4 py-2 font-semibold w-max">Latest Project</h3>
                    <div className="w-full">
                        <p className="text-xl font-semibold">Grocery Price Comparison Site</p>
                        <p className="shrink">Inspired by the increasing cost of living crisis, the site is an online comparison for grocery items in UK supermarkets.</p>
                        <Link href='#'>
                            <p className="cursor-pointer self-end hover:font-semibold underline">Find Out More...</p>
                        </Link>
                    </div>
                </div>
        </div>
    )
}
 
export default HeroBanner