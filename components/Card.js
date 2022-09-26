import Image from "next/image"
import Link from "next/link"
import LinkTo from "./buttons/LinkTo"

const Card = ({post}) => {
    return ( 
        <div className="
                w-full
                border border-zinc-500
                md:first:col-span-2
                lg:first:col-span-3
                flex flex-col
                md:first:flex-row
                group
            "
        >
                {post.image && 
                    <div className="relative h-60 group-first:md:h-96 group-first:md:w-1/2">
                        <Image src={post.image} alt={post.title} layout="fill" objectFit="cover"/>
                    </div>}
            <div className="flex flex-col justify-between p-4 group-first:md:w-1/2">
                <Link href={`/lab/${post.postLink.url}`}>
                    <p className="font-semibold mb-2 text-xl cursor-pointer">{post.title}</p>
                </Link>
                <p>{post.excerpt}</p>
                <div className="flex py-4 justify-end">
                     <LinkTo className="cursor-pointer" key={post.postLink.text} postLink={post.postLink} />
                </div>
            </div>
        </div>
    )
}
 
export default Card