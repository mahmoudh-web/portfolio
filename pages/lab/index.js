import Link from "next/link"
import slugify from "slugify"
import Card from "../../components/Card"

import { BeakerIcon, PaperClipIcon } from "@heroicons/react/24/outline"
import getAllPosts from "../../util/notion/getAll"
import LinkTo from "../../components/buttons/LinkTo"
import Filter from "../../components/Filter"

export const getStaticProps = async () => {
    const data = await getAllPosts(process.env.NOTION_DB_LAB)

    const postData = []

    const posts = data.map(post => {
        post.properties.Tags.multi_select.forEach(tag => {
            postData.push(tag.name)
        })
        
        const title = post.properties.Name.title[0].plain_text
        const url = slugify(title).toLowerCase()

        return {
            title: title,
            postLink: {
                url: url,
                text: 'Continue Reading...',
            },
            excerpt: post.properties.Excerpt.rich_text[0].plain_text,
            id: post.id,
            image: post.properties.Image.url
        }
    })

    const tags = [...new Set(postData)].sort()

    return {props: {posts, tags}}
}

const Home = ({posts, tags}) => {

    const postsEl = posts.map(post => {

        return (
            <Card key={post.id} post={post}/>
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
            <Filter tags={tags}/>
            <div className="flex gap-4">
                {postsEl}
            </div>
        </div>
    )
}

export default Home