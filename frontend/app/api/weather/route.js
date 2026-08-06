export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const city = searchParams.get("city");

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );

    const data = await response.json();

    return Response.json({
      temperature: data.main.temp,
      condition: data.weather[0].main,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      icon: data.weather[0].icon,
    });

  } catch (err) {
    return Response.json({
      error: err.message,
    });
  }
}