import { Client } from "@notionhq/client"

const notion = new Client({ auth: process.env.NOTION_SECRET })
const databaseId = process.env.NOTION_DB

export default function handler(req, res) {

    async function addItem(text) {
        try {
          const response = await notion.pages.create({
            parent: { database_id: databaseId },
            properties: {
              title: { 
                title:[
                  {
                    "text": {
                      "content": text
                    }
                  }
                ]
              },
              tags: {
                title:[
                    {
                        'text': {
                            "content" : 'test'
                        }
                    }
                ]
              }
            },
          })
          console.log(response)
          console.log("Success! Entry added.")
        } catch (error) {
          console.error(error.body)
        }
    }
      
    addItem("Yurts in Big Sur, California 2")
        .then(res.status(200).json({ data: 'page added' }))
    
}

