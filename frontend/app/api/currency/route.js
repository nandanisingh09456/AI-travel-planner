export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const from = searchParams.get("from") || "USD";
  const to = searchParams.get("to") || "EUR";
  const amount = searchParams.get("amount") || 1;

  try {
    const response = await fetch(
      `https://open.er-api.com/v6/latest/${from}`
    );

    const data = await response.json();

    const rate = data.rates[to];

    return Response.json({
      from,
      to,
      amount,
      rate,
      converted: (amount * rate).toFixed(2),
    });
  } catch (error) {
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