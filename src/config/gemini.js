const API_KEY = 'AIzaSyCwkNmi498KsOBs_hOGRXGrpAEAUN8Ky3c';

export default async function getAiResponse(prompt) {
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: 'text/plain',
  };

  const data = {
    generationConfig,
    contents: [
      {
        role: 'user',
        parts: [{ text: prompt }],
      },
    ],
  };

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();
  const output = result?.candidates?.[0]?.content?.parts?.[0]?.text;
  console.log(output);
  return output;
}
