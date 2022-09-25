import Image from "next/image"
import LinkTo from "./buttons/LinkTo"

const Card = ({post}) => {
    return ( 
        <div className="w-1/3 border border-zinc-500 flex flex-col justify-between">
            {post.image && <Image src={post.image} alt={post.title} width={100} height={100}/>}
            <div className="flex flex-col justify-between p-2 h-full">
                <p className="font-semibold mb-2">{post.title}</p>
                <p>{post.excerpt}</p>
                <div className="flex py-4 justify-end">
                     <LinkTo className="cursor-pointer" key={post.postLink.text} postLink={post.postLink} />
                </div>
            </div>
        </div>
    )
}
 
export default Card