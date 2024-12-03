import { CohereClientV2 } from 'cohere-ai'

const cohere = new CohereClientV2({
  token: import.meta.env.VITE_API_KEY // Reemplaza con tu clave de Cohere
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
    // Configura el prompt para la traducción
    const prompt = `Translate the following text from ${fromLanguage} to ${toLanguage} ${text}`

    // Realiza la solicitud a Cohere
    const response = await cohere.generate({
      model: 'command-xlarge-nightly',
      prompt,
      maxTokens: 100,
      temperature: 0.5
    })

    if (!response.generations || response.generations.length === 0) {
      throw new Error('No translation received from Cohere')
    }

    return response.generations[0].text.trim()
  } catch (error) {
    console.error('Error translating with Cohere:', error)
    throw new Error('Error while translating text.')
  }
}
