import Image from "next/image";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import BlurFade from "@/components/ui/blur-fade";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";
import { Suspense, useState } from "react";
export default function MovieCard({
  movie,
  delay,
}: {
  movie: any;
  delay: number;
}) {
  const [data, setData] = useState<any>(null);
  const getMovieData = async () => {
    const res = await fetch(`/api/movie?id=${movie.id}`);
    const data = await res.json();
    setData(data);
  };
  return (
    <BlurFade delay={delay}>
      <Dialog>
        <DialogTrigger onClick={() => getMovieData()}>
          <Card className="hover:scale-105 transition-transform duration-300 overflow-hidden shadow-xl w-48 aspect-[1/1.5]">
            <Image
              alt="mo"
              width={2000}
              height={3000}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          </Card>
        </DialogTrigger>
        <DialogContent className="text-white h-[500px] max-w-3xl  bg-zinc-950 p-0 ring-0 border-none overflow-hidden shadow-none">
          <DialogTitle className="hidden" aria-label="hidden" />
          <DialogDescription className="hidden" aria-label="hidden" />

          <Suspense fallback={<p>Loading</p>}>
            {data && (
              <BlurFade>
                <div className="absolute m-4 flex flex-row gap-2">
                  {data.genres.map((genre: { id: number; name: string }) => (
                    <Badge
                      key={genre.id}
                      variant={"secondary"}
                      className="py-0.5 px-2 font-medium text-xs text-secondary-foreground"
                    >
                      {genre.name}
                    </Badge>
                  ))}
                </div>
                <div className="h-[400px] w-full ">
                  <div className="absolute bg-gradient-to-b from-transparent to-90%  from-10% to-zinc-950 w-full h-[400px]" />
                  <Image
                    alt="backdrop"
                    width={2000}
                    height={3000}
                    src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                    className={`-z-10 h-full bg-cover bg-center`}
                  />
                </div>
                <div className="z-10 p-4 bottom-5 absolute gap-4 flex flex-col justify-start items-start">
                  <div className="flex flex-col gap-2 ">
                    <h6 className="text-xs">{data.tagline}</h6>
                    <div className="flex flex-row items-center justify-center gap-4">
                      <h1 className="text-primary font-bold text-3xl">
                        {data.title}
                      </h1>
                      <div>
                        <p className="text-opacity-50 text-white text-xs">
                          {data.runtime}dk
                        </p>
                      </div>
                      <div className="flex flex-row gap-1">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <p className="text-xs text-yellow-500">
                          {Number(data.vote_average).toFixed(1)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="opacity-50 text-xs">{data.overview}</p>
                </div>
              </BlurFade>
            )}
          </Suspense>
        </DialogContent>
      </Dialog>
    </BlurFade>
  );
}
