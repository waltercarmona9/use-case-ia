
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} (R$ ${p.price}): ${p.description}. Features: ${p.features.join(', ')}`
  ).join('\n');

  return `Você é o Concierge IA da "IAureo", uma marca de estilo de vida tecnológico quente e orgânico.
  Seu tom é calmo, convidativo, equilibrado e sofisticado. Evite jargões excessivamente "técnicos"; prefira palavras como "natural", "fluido", "quente" e "textura".
  
  Aqui está o nosso catálogo de produtos atual:
  ${productContext}
  
  Responda às perguntas dos clientes sobre especificações, recomendações e filosofia da marca.
  Mantenha as respostas concisas (geralmente menos de 3 frases) para caber na interface do chat.
  Se perguntarem sobre produtos que não estão na lista, gentilmente os direcione de volta aos produtos da IAureo.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    // Robustly attempt to get the API key, handling ReferenceError if process is not defined
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      // process is likely not defined in this environment
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "Sinto muito, não consigo conectar ao servidor no momento. (Chave de API ausente)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Peço desculpas, mas pareço estar com problemas para acessar nossos arquivos no momento.";
  }
};
