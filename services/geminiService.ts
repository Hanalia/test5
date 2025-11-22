import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SKILLS, ABOUT_TEXT } from "../constants";

// Initialize the Gemini API client
// Using process.env.API_KEY as per requirements
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Lumina AI", a helpful virtual assistant for a creative developer's portfolio website.
Your goal is to answer visitors' questions about the developer's work, skills, and background.

Here is the context about the developer:
Name: Lumina (Portfolio Owner)
About: ${ABOUT_TEXT}
Skills: ${SKILLS.map(s => s.name).join(', ')}
Projects: ${PROJECTS.map(p => `${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('; ')}

Tone: Professional, concise, slightly witty, and tech-savvy.
Restrictions: Do not answer questions unrelated to the portfolio, web development, or the developer's professional background.
If asked about the tech stack of this site, mention React, TypeScript, Tailwind, Three.js, and the Gemini API.
`;

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model'; text: string }[]): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm currently in demo mode without an API key. Please configure the API_KEY environment variable to chat with me!";
  }

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my neural network right now. Please try again later.";
  }
};