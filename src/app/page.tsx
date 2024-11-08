"use client";
import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { AllKinds, MovieKind, SortBy } from "@/lib/Db";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { use, useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGenres, setSelectedGenres] = useState<MovieKind[]>([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [includeAdult, setIncludeAdult] = useState(false);

  const handleDiscover = () => {
    setIsLoading(true);
    setMovies([])
    fetch(
      `/api/discover?page=${page}${
        selectedGenres.length > 0
          ? `&genres=${selectedGenres.map((genre) => genre.id).join(",")}`
          : ""
      }${sortBy ? `&sort_by=${sortBy}` : ""}${
        includeAdult ? `&include_adult=${includeAdult}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
    setIsLoading(false);
  };
  useEffect(() => {
    handleDiscover();
  }, [selectedGenres, page, sortBy, includeAdult]);

  return (
    <div className="w-full p-4 gap-4 flex-col flex">
      <Image
        alt="Logo"
        width={538}
        height={39}
        src={"/logo.png"}
        className="w-36"
      />
      <div className="flex flex-col gap-2 items-start">
        <ScrollArea className="border-none gap-2 w-full whitespace-nowrap rounded-3xl py-2 border">
          {AllKinds.map((kind) => (
            <Button
              onClick={() => {
                if (!selectedGenres.some((k) => k.id === kind.id)) {
                  setSelectedGenres((prev) => [...prev, kind]);
                } else {
                  setSelectedGenres((prev) =>
                    prev.filter((k) => k.id !== kind.id)
                  );
                }
              }}
              variant={"default"}
              size={"lg"}
              key={kind.id}
              className={cn(
                "text-white font-medium my-1 mr-2 rounded-3xl bg-[#1E1D22] hover:bg-[#151518] ",
                selectedGenres.filter((genre) => genre.id === kind.id).length >
                  0 && "bg-[#DC1623] hover:bg-[#912125]"
              )}
            >
              {kind.name}
            </Button>
          ))}
          <ScrollBar className="hidden" orientation="horizontal" />
        </ScrollArea>
        <div className="flex flex-row items-center justify-center gap-4">
          <span className="font-bold text-muted-foreground">Sort by: </span>
          <Select onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className="w-[280px] gap-4 rounded-xl focus:ring-0 ">
              <SelectValue placeholder={"Select a sort"} />
            </SelectTrigger>
            <SelectContent>
              {SortBy.map((sort) => (
                <SelectItem key={sort.id} value={sort.id}>
                  {sort.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <span className="font-bold text-muted-foreground">Adult: </span>
          <Switch onCheckedChange={setIncludeAdult} checked={includeAdult} />
        </div>
        <div className="flex flex-row items-center justify-center gap-1">
          <Button
            disabled={page === 1}
            onClick={() => {
              if (page != 1) {
                setPage(page - 1);
              }
            }}
            size={"icon"}
            variant={"outline"}
          >
            <ChevronLeft />
          </Button>
          <Button size={"icon"} variant={"outline"}>
            {page}
          </Button>
          <Button
            onClick={() => setPage(page + 1)}
            size={"icon"}
            variant={"outline"}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-8 gap-4">
        {isLoading && (
          <>
            <Skeleton className="w-48 aspect-[1/1.5] animate-pulse" />
            <Skeleton className="w-48 aspect-[1/1.5] animate-pulse" />
            <Skeleton className="w-48 aspect-[1/1.5] animate-pulse" />
            <Skeleton className="w-48 aspect-[1/1.5] animate-pulse" />
            <Skeleton className="w-48 aspect-[1/1.5] animate-pulse" />
            <Skeleton className="w-48 aspect-[1/1.5] animate-pulse" />
            <Skeleton className="w-48 aspect-[1/1.5] animate-pulse" />
            <Skeleton className="w-48 aspect-[1/1.5] animate-pulse" />
            <Skeleton className="w-48 aspect-[1/1.5] animate-pulse" />
            <Skeleton className="w-48 aspect-[1/1.5] animate-pulse" />
            <Skeleton className="w-48 aspect-[1/1.5] animate-pulse" />
          </>
        )}
        {!isLoading &&
          movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} delay={index / 10} />
          ))}
      </div>
    </div>
  );
}
