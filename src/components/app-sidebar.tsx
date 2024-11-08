"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { ContentTypeSelect } from "./ContentTypeSelect";
import { Slider } from "./ui/slider";
import {
  SliderRange,
  SliderThumb,
  SliderTrack,
  Root,
} from "@radix-ui/react-slider";
import { useState } from "react";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function AppSidebar() {
  const [year, setYear] = useState([2000, new Date().getFullYear()]);
  const [adults, setAdults] = useState(false);
  return (
    <Sidebar className="pb-8">
      <SidebarHeader className="p-8">
        <Image
          src="/logo.png"
          alt="Logo"
          width={540}
          height={132}
          className="w-full"
        />
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent className="gap-4 flex flex-col">
            <SidebarMenu className="gap-4 flex flex-col">
              <SidebarMenuItem className="flex flex-col gap-2">
                <span className="text-base">Genres</span>
                <ContentTypeSelect />
              </SidebarMenuItem>
              
              <Separator />
              
              <SidebarMenuItem className="flex flex-col gap-2">
                <span className="text-base">
                  Year: {year[0]} — {year[1]}
                </span>
                <Slider
                  defaultValue={[2000, new Date().getFullYear()]}
                  min={2000}
                  max={new Date().getFullYear()}
                  onValueChange={(value) => {
                    setYear(value);
                  }}
                >
                  <SliderTrack>
                    <SliderRange />
                  </SliderTrack>
                  <SliderThumb />
                  <SliderThumb />
                </Slider>
              </SidebarMenuItem>
              
              <Separator />

              <SidebarMenuItem className="flex flex-row items-center gap-2">
                <span className="text-base">Alduts:</span>
                <Switch
                  checked={adults}
                  onCheckedChange={(value) => setAdults(value)}
                />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem className="mt-2 flex flex-row items-center gap-2">
          <span className="text-base font-semibold">Dark Mode:</span>
          <Switch />
        </SidebarMenuItem>
        <SidebarMenuItem className="flex flex-col gap-2">
          <Button>Search</Button>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
}
