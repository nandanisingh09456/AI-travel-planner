import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    if (!process.env.GROQ_API_KEY) {
      throw new Error("GROQ_API_KEY is missing");
    }

    const { city } = await req.json();

    if (!city) {
      return Response.json(
        { error: "City is required" },
        { status: 400 }
      );
    }

    const prompt = `
You are an expert travel guide.

Recommend exactly 6 famous restaurants in ${city}.

Return ONLY valid JSON in this exact structure:

{
  "restaurants": [
    {
      "name": "",
      "cuisine": "",
      "price": "",
      "rating": "",
      "description": ""
    }
  ]
}

Rules:
- Exactly 6 restaurants
- Include famous local restaurants
- Rating out of 5
- Price must be one of: $, $$, $$$, $$$$
- Description under 25 words
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.3,
      response_format: {
        type: "json_object",
      },
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const content = completion.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("Groq returned an empty response");
    }

    const result = JSON.parse(content);

    console.log("RESTAURANT RESULT:");
    console.log(JSON.stringify(result, null, 2));

    return Response.json(result);
  } catch (err) {
    console.error("RESTAURANT API ERROR:", err);

    return Response.json(
      {
        error: err?.message || "Restaurant API failed",
      },
      {
        status: 500,
      }
    );
  }
}