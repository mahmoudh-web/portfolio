import { useEffect, useState } from "react"

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/lab/allLab')
    const data = await res.json()

    return {props: {data}}
}

const Home = ({data}) => {

    const postsEl = data.map(post => {

        const title = post.properties.Name.title[0].text.content
        const url = post.url.replace('https://www.notion.so/', '')

        return (
            <div 
                key={post.id}
                className="cursor-pointer"
            >
                <p>{title}</p>
                <p>{url}</p>
            </div>
        )
    })

    return (
        <div>
            <h2>Lab</h2>
            {postsEl}
        </div>
    )
}

export default Home