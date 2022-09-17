import connectNotion from "../../../util/notion/connectNotion"

export const getLabPosts = async () => {
    const connected = await connectNotion()
    const db = process.env.NOTION_DB_LAB
    const result = await connected.databases.query({database_id: db})

    return result.results

}

const handler = async (req, res) => {
    const data = await getLabPosts()

    res.status(200).json(data)
}

export default handler