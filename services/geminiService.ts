// Gemini features have been disabled.
// This service is now a placeholder to prevent build errors.

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model'; text: string }[]): Promise<string> => {
  return "Chat features are currently in maintenance mode. Please use email to contact me.";
};