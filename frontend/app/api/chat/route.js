import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {

console.log("🚀 API HIT");
  try {
    const { trip, question } = await req.json();
 
 console.log("Question:", question);

    const prompt = `
You are Mira AI, a friendly and knowledgeable travel assistant.

The user already has this travel itinerary:

${JSON.stringify(trip, null, 2)}

Answer the user's question using the itinerary above whenever possible.

If the answer is not in the itinerary, give helpful travel advice.

Keep answers concise, practical, and friendly.

User Question:
${question}
`;
    
   console.log("Calling Groq...");

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

      console.log("Groq replied!");

    return Response.json({
      answer: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}