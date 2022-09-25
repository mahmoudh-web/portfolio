import connectNotion from "./connectNotion";

const getChildren = async (page) => {
    const connected = await connectNotion()
    const result = await connected.blocks.children.list({block_id: page})

    return result.results
}

export default getChildren