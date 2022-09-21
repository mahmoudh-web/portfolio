import Link from "next/link"

import { BeakerIcon, PaperClipIcon } from "@heroicons/react/24/outline"
import getAllPosts from "../../util/notion/getAll"
import Btn from "../../components/buttons/Btn"

export const getStaticProps = async () => {
    const data = await getAllPosts(process.env.NOTION_DB_LAB)
    return {props: {data}}
}

const Home = ({data}) => {

    const postsEl = data.map((post, i) => {

        const title = post.properties.Name.title[0].text.content
        const postUrl = post.url.split('-').slice(0,-1).join('-').replace('https://www.notion.so/', '').toLowerCase()
        const url = `/lab/${postUrl}`
        let excerpt = ''
        if (post.properties.Excerpt.rich_text.length) {
            excerpt = post.properties.Excerpt.rich_text[0].text.content
        }

        const btn = {
            size: 'xs',
            link: url,
            content: 'Read More...'
        }

        return (
            <div 
                key={post.id}
                className={`
                    ${i === 0 ? 'w-3/5' : 'grow'}
                    border-b border-zinc-500 
                    mb-4 pb-4
                `}
            >
                <Link href={url}>
                    <div className="cursor-pointer flex gap-1 flex-wrap items-center text-orange-600 mb-2">
                        <PaperClipIcon className="w-6 h-6"/>
                        <h3 className="text-2xl font-semibold">{title}</h3>
                    </div>
                </Link>
                <p className="">{excerpt}</p>
                <div className="flex py-4 justify-end">
                    <Btn className="cursor-pointer" key={btn.content} button={btn} />
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
            <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                {postsEl}
            </div>
        </div>
    )
}

export default Home