import { Client } from "@notionhq/client"

const connectNotion = async () => {
    const secret = process.env.NOTION_SECRET
    
    const notion = new Client({ auth: secret })

    return notion
}

export default connectNotion