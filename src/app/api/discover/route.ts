export const revalidate = 60;
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const params = {
    include_adult: searchParams.get("include_adult") || false,
    page: searchParams.get("page") || 1,
    primary_release_year: searchParams.get("primary_release_year") || null,
    sort_by: searchParams.get("sort_by") || null,
    year: searchParams.get("year") || null,
  };

  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=${
    params.include_adult
  }&include_video=true&language=tr-TR&page=${params.page}${
    params.primary_release_year &&
    `&primary_release_year=${params.primary_release_year}`
  }${params.sort_by && `&sort_by=${params.sort_by}`}${
    params.year && `&year=${params.year}`
  }`;

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
