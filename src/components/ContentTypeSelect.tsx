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
import { AllKinds, MovieKind } from "@/lib/Db";


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
            {kinds.length > 0 ? "Add more..." : "Select Genre..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search Genre..." />
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
