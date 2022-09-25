import Link from "next/link"
import slugify from "slugify"

import { BeakerIcon, PaperClipIcon } from "@heroicons/react/24/outline"
import getAllPosts from "../../util/notion/getAll"
import LinkTo from "../../components/buttons/LinkTo"

export const getStaticProps = async () => {
    const data = await getAllPosts(process.env.NOTION_DB_LAB)

    const posts = data.map(post => ({
        title: post.properties.Name.title[0].plain_text,
        url: post.url,
        excerpt: post.properties.Excerpt.rich_text[0].plain_text,
        id: post.id
    }))

    return {props: {posts}}
}

const Home = ({posts}) => {

    const postsEl = posts.map(post => {

        const postLink = {
            link: `/lab/${slugify(post.title).toLowerCase()}`,
            content: 'Continue Reading...'
        }

        return (
            <div 
                key={post.id}
                className={`
                    border-b border-zinc-500 
                    mb-4 pb-4
                `}
            >
                <Link href={`/lab/${slugify(post.title).toLowerCase()}`}>
                    <div className="cursor-pointer flex gap-1 flex-wrap items-center text-orange-600 mb-2">
                        <PaperClipIcon className="w-6 h-6"/>
                        <h3 className="text-2xl font-semibold">{post.title}</h3>
                    </div>
                </Link>

                <p className="">{post.excerpt}</p>

                <div className="flex py-4 justify-end">
                    <LinkTo className="cursor-pointer" key={postLink.content} postLink={postLink} />
                </div>
            </div>
        )
    })

    return (
        <div>
            <div 
                className="
                    flex gap-1 items-center
                    border-b border-zinc-500
                    mb-8 pb-4
                "
            >
                <BeakerIcon className="w-6 h-6 text-orange-600"/>
                <h2 
                    className="
                        text-3xl
                        text-orange-600
                    "
                >
                    Lab
                </h2>
            </div>
            <div className="flex flex-col gap-4">
                {postsEl}
            </div>
        </div>
    )
}

export default Home