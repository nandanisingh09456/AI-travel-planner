import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const { city } = await req.json();

    const prompt = `
You are an expert travel guide.

Recommend exactly 6 famous restaurants in ${city}.

Return ONLY valid JSON.

{
  "restaurants":[
    {
      "name":"",
      "cuisine":"",
      "price":"",
      "rating":"",
      "description":""
    }
  ]
}

Rules:

- Exactly 6 restaurants
- Include famous local restaurants
- Rating out of 5
- Price examples:
  $
  $$
  $$$
  $$$$
- Description under 25 words
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
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

    const result = JSON.parse(
      completion.choices[0].message.content
    );

    return Response.json(result);

  } catch (err) {
    console.error(err);

    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}