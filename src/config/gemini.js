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
  return output;
}



async function getSkincareAdvice(userInput) {
  const response = await fetch("https://generative-ai.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": "YOUR_API_KEY"
    },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: `Answer this skincare question in an informative and non-prescriptive way: ${userInput}, and if you think this question is not related to that` }]
      }]
    })
  });

  const data = await response.json();
  const aiText = data.candidates[0]?.content?.parts[0]?.text || "No response generated.";

  const disclaimer = "\n\n**Disclaimer:** This response is for informational purposes only and does not constitute medical advice. For personalized treatment, please consult a certified dermatologist.";
  
  return aiText + disclaimer;
}