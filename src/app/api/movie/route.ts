export const revalidate = 60;
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const params = {
    id: searchParams.get("id") || null,
  };

  const url = `https://api.themoviedb.org/3/movie/${params.id}?language=tr-TR`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB}` || "",
    },
  };

  const res = await fetch(url, options)
    .then((res) => res.json())
    .catch((e) => {
      return Response.json({ error: e });
    });
  return Response.json(res);
}
