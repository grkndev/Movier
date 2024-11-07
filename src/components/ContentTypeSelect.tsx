"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Trash } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "./ui/badge";

const AllKinds = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
type MovieKind = (typeof AllKinds)[number];

export function ContentTypeSelect() {
  const [open, setOpen] = React.useState(false);
  const [kinds, setKinds] = React.useState<MovieKind[]>([]);

  return (
    <div className="flex flex-col gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {kinds.length > 0 ? "Add more..." : "Select kind..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No results.</CommandEmpty>
              <CommandGroup>
                {AllKinds.map((mkind) => (
                  <CommandItem
                    key={mkind.id}
                    value={mkind.name}
                    onSelect={() => {
                      if (!kinds.some((k) => k.id === mkind.id)) {
                        setKinds((prev) => [...prev, mkind]);
                      } else {
                        setKinds((prev) =>
                          prev.filter((k) => k.id !== mkind.id)
                        );
                      }
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        kinds.filter((kind) => kind.id === mkind.id).length > 0
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {mkind.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="flex flex-wrap gap-2">
        {kinds.map((kind) => (
          <Badge
            variant={"outline"}
            className="flex flex-row gap-2 w-fit"
            key={`badge#${kind.id}`}
          >
            <span className="font-normal">{kind.name}</span>
            <Trash
              onClick={() => {
                setKinds((prev) => prev.filter((k) => k.id !== kind.id));
              }}
              className="h-3 w-3 "
            />
          </Badge>
        ))}
      </div>
    </div>
  );
}
