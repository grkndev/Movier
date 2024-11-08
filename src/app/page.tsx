"use client";
import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
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
import { Switch } from "@/components/ui/switch";
import { AllKinds, MovieKind, SortBy } from "@/lib/Db";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedGenres, setSelectedGenres] = useState<MovieKind[]>([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
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
          <Switch />
        </div>
      </div>
      <Separator className="my-4" />
      <div className="grid grid-cols-8 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <MovieCard movie={{}} key={index} delay={index/10} />
        ))} 
      </div>
    </div>
  );
}
