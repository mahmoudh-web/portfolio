import Link from "next/link"
import slugify from "slugify"
import Card from "../../components/Card"

import { BeakerIcon, PaperClipIcon } from "@heroicons/react/24/outline"
import getAllPosts from "../../util/notion/getAll"
import LinkTo from "../../components/buttons/LinkTo"
import Filter from "../../components/Filter"
import { useState, useEffect } from "react"

export const getStaticProps = async () => {
    const data = await getAllPosts(process.env.NOTION_DB_LAB)

    const postData = []

    const posts = data.map(post => {
        
        const title = post.properties.Name.title[0].plain_text
        const url = slugify(title).toLowerCase()
        const tags = []

        post.properties.Tags.multi_select.forEach(tag => {
            postData.push(tag.name)
            tags.push(tag.name)
        })

        return {
            title: title,
            postLink: {
                url: url,
                text: 'Continue Reading...',
            },
            excerpt: post.properties.Excerpt.rich_text[0].plain_text,
            id: post.id,
            image: post.properties.Image.url,
            tags: tags
        }
    })

    const allTags = [...new Set(postData)].sort()

    return {props: {posts, allTags}}
}

const Home = ({posts, allTags}) => {

    const [filters, setFilters] = useState([])
    const [postsEl, setPostsEl] = useState(setPosts(posts))

    useEffect(() => {
        if (!filters.length) {
            setPostsEl(setPosts(posts))
        }

        if (filters.length) {
            const filteredPosts = posts.filter(post => post.tags.some(tag => filters.includes(tag)))
            setPostsEl(setPosts(filteredPosts))
        }
    }, [filters, posts])

    function setPosts(filteredPosts) {
        const render = filteredPosts.map(post => {
            return (
                <Card key={post.id} post={post} />
            )
        })

        return render
    }

    const handleFilters = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        const index = filters.indexOf(e.target.value)
        if (index > -1) {
            const newFilters = filters.filter(filter => filter != e.target.value)
            setFilters(newFilters)
        } else {
            setFilters(prev => [...prev, e.target.value])
        }
    }

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
            <Filter tags={allTags} filters={filters} onclick={handleFilters}/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
                {postsEl}
            </div>
        </div>
    )
}

export default Home