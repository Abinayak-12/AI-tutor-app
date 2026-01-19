
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTutorResponse = async (prompt: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are Lumina, a world-class AI academic tutor. You are encouraging, precise, and helpful. You explain complex topics simply and ask follow-up questions to ensure the student understands.",
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Can you try again?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently taking a short break. Please try again in a few moments!";
  }
};
