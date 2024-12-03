import { CohereClientV2 } from 'cohere-ai'

const cohere = new CohereClientV2({
  token: import.meta.env.VITE_API_KEY
})

export async function translate({
  text,
  fromLanguage,
  toLanguage
}: {
  text: string
  fromLanguage: string
  toLanguage: string
}): Promise<string> {
  try {
    const prompt = `Translate the following text from ${fromLanguage} to ${toLanguage} text: ${text}`
    const response = await cohere.chat({
      model: 'command-r-plus',
      messages: [
        {
          role: 'system',
          content: 'You are a translator'
        },
        {
          role: 'user',
          content: prompt
        }
      ]
    })

    if (!response.message.content) {
      throw new Error('No translation received from Cohere')
    }
    return response.message.content[0].text
  } catch (error) {
    console.error('Error translating with Cohere:', error)
    throw new Error('Error while translating text.')
  }
}
