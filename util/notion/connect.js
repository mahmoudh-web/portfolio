import { Client } from "@notionhq/client"
// import * as dotenv from 'dotenv'
// dotenv.config({path: '../../.env'})

const connectNotion = async () => {
    const secret = process.env.NOTION_SECRET
    
    const notion = new Client({ auth: process.env.NOTION_SECRET })

    return notion
}

export default connectNotion