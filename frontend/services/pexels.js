export async function getDestinationImage(query) {
  const response = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1`,
    {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
      },
    }
  );

  const data = await response.json();

  return (
    data.photos?.[0]?.src?.large ||
    "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
  );
}