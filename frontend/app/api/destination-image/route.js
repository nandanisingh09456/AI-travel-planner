export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");

    if (!city) {
      return Response.json({
        image:
          "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
      });
    }

    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(
        city + " travel"
      )}&per_page=1`,
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY,
        },
      }
    );

    const data = await response.json();

    console.log("PEXELS RESPONSE:", data);

    if (data.photos && data.photos.length > 0) {
      return Response.json({
        image: data.photos[0].src.large,
      });
    }

    // fallback image
    return Response.json({
      image:
        "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    });
  } catch (error) {
    console.error(error);

    return Response.json({
      image:
        "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    });
  }
}