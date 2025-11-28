import { GoogleGenAI, Type } from "@google/genai";
import { MarketingIdea } from "../types";

// Initialize the client strictly according to guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingContent = async (businessDescription: string): Promise<MarketingIdea> => {
  const prompt = `
    Agisci come un esperto senior di marketing digitale e servizi pubblicitari.
    L'utente ha un'attività descritta come: "${businessDescription}".
    
    Genera:
    1. 3 Slogan pubblicitari accattivanti in italiano.
    2. 5 Hashtag strategici per Instagram/LinkedIn.
    3. 1 Breve consiglio strategico (massimo 2 frasi) per migliorare la loro visibilità.
    
    Rispondi rigorosamente in formato JSON.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            slogans: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Lista di 3 slogan pubblicitari"
            },
            hashtags: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Lista di 5 hashtag"
            },
            strategyTip: {
              type: Type.STRING,
              description: "Un consiglio strategico breve"
            }
          },
          required: ["slogans", "hashtags", "strategyTip"]
        }
      }
    });

    const text = response.text;
    if (!text) {
        throw new Error("No response text from AI");
    }
    
    return JSON.parse(text) as MarketingIdea;

  } catch (error) {
    console.error("Error generating marketing content:", error);
    throw error;
  }
};