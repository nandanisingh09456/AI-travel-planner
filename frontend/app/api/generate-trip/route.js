import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const {
      city,
      days,
      budget,
      travelers,
      startDate,
      travelStyle,
    } = await req.json();

    const prompt = `
You are an expert travel planner.

Create a ${days}-day travel itinerary.

Trip Details:
- Destination: ${city}
- Budget: ${budget}
- Travelers: ${travelers}
- Start Date: ${startDate}
- Travel Style: ${travelStyle}

IMPORTANT:
Return ONLY a valid JSON object.
Do NOT use markdown.
Do NOT wrap the response in \`\`\`.
Do NOT include explanations.

The JSON must exactly follow this structure:

{
  "tripTitle": "",
  "summary": "",
  "estimatedBudget": "",
  "days": [
    {
      "day": 1,
      "morning": "",
      "afternoon": "",
      "evening": "",
      "food": ""
    }
  ],
  "hotels": [
    {
      "name": "",
      "rating": "",
      "price": "",
      "description": ""
    }
  ],
  "flights": [
    {
      "airline": "",
      "from": "",
      "to": "",
      "departure": "",
      "arrival": "",
      "duration": "",
      "price": ""
    }
  ]
}

Recommend exactly 3 hotels near the destination.

For each hotel include:
- Hotel name
- Rating
- Approximate price per night
- Short description

Also recommend exactly 3 flights.

For each flight include:
- Airline
- Departure city
- Destination city
- Departure time
- Arrival time
- Flight duration
- Approximate ticket price

If live prices are unavailable, provide realistic estimates.`;


    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
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

    let content = completion.choices[0].message.content;

    // Remove markdown if the model adds it
    content = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const trip = JSON.parse(content);
    console.log("========== AI RESPONSE ==========");
console.log(JSON.stringify(trip, null, 2));
console.log("================================");

    return Response.json(trip);
  } catch (error) {
    console.error("Groq Error:", error);

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