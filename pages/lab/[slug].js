import Image from "next/image";
import slugify from "slugify";
import getAllPosts from "../../util/notion/getAll";
import getChildren from "../../util/notion/getChildren";
import text from "../../util/notion/blocks/text";
import list from "../../util/notion/blocks/list";
import ArticleHeader from "../../components/slices/ArticleHeader";
import ArticleText from "../../components/slices/ArticleText";
import ArticleCode from "../../components/slices/ArticleCode";
import ArticleList from "../../components/slices/ArticleList";

export const getStaticPaths = async () => {
    const data = await getAllPosts(process.env.NOTION_DB_LAB)

    const paths = []

    data.forEach(post => {
        paths.push({
            params: {
                slug: slugify(post.properties.Name.title[0].plain_text).toLowerCase(),
            }
        })
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params: { slug }}) => {
    const data = await getAllPosts(process.env.NOTION_DB_LAB)

    const page = data.find(post => {
        const resultPost = slugify(post.properties.Name.title[0].plain_text).toLowerCase()
        return resultPost === slug 
    })

    const blocksList = await getChildren(page.id)
    const pageTitle = page.properties.Name.title[0].plain_text


    const blocks = []
    for await (let block of blocksList) {
        // headers, text, code
        if (
            block.type === 'heading_1' || 
            block.type === 'heading_2' || 
            block.type === 'heading_3' ||
            block.type === 'paragraph' ||
            block.type === 'code'
        ) {
            blocks.push(text(block.type, block[`${block.type}`].rich_text[0].plain_text, block.id))
        }

        //images
        if (block.type === 'image') {
            blocks.push(text(block.type, block[`${block.type}`].external.url, block.id))
        }

        //unordered list
        if (block.type === 'bulleted_list_item' && block.has_children) {
            const items = await getChildren(block.id)
            const itemsList = items.map(item => item[`${item.type}`].rich_text[0].plain_text)
            blocks.push(list(block.type, block.id, itemsList))
        }

        //ordered list
        if (block.type === 'numbered_list_item' && block.has_children) {
            const items = await getChildren(block.id)
            const itemsList = items.map(item => item[`${item.type}`].rich_text[0].plain_text)
            blocks.push(list(block.type, block.id, itemsList))
        }
    }
    
    return {props: {blocks, pageTitle}}
}



const Post = ({blocks, pageTitle}) => {

    const blocksEl = blocks.map(block => {
        
    //     //headings
        if (block.type.startsWith('heading_')) {
            const size = block.type.split('_').pop()
            return <ArticleHeader key={block.id} content={block.content} size={size} />
        }
        
        // text
        if (block.type === 'paragraph') {
            return <ArticleText key={block.id} content={block.content} />
        }
        
        // code
        if (block.type === 'code') {
            return <ArticleCode key={block.id} content={block.content} />
        }
        
        // image
        if (block.type === 'image') {
            return (
                <div key={block.id} className="w-full">
                    <Image alt='' src={block.content} layout="responsive" width={100} height={100}/>
                </div>
            )
        }

        // lists
        if (block.type === 'bulleted_list_item') {
            return <ArticleList key={block.id} list={block.items} type="ul" />
        }

        if (block.type === 'numbered_list_item') {
            return <ArticleList key={block.id} list={block.items} type="ol" />
        }
    })

    return (
        <div className="w-full">
                <h2 className="text-3xl font-bold">{pageTitle}</h2>
                {blocksEl}
        </div>
    )
}
 
export default Post;