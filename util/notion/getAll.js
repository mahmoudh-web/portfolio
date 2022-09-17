import connectNotion from "./connectNotion";

const getAllPosts = async (db) => {
    const connected = await connectNotion()
    const result = await connected.databases.query({database_id: db})

    return result.results

}

export default getAllPosts