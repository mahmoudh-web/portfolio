import connectNotion from "../../../util/notion/connectNotion"

const handler = async (req, res) => {
    const connected = await connectNotion()
    const db = process.env.NOTION_DB_LAB
    const result = await connected.databases.query({database_id: db})

    res.status(200).json(result.results)
}

export default handler