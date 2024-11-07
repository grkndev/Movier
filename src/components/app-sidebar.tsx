"use client";
import {
  Sidebar,
  SidebarContent,
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

export function AppSidebar() {
  const [year, setYear] = useState([2000, new Date().getFullYear()]);
  const [adults, setAdults] = useState(false);
  return (
    <Sidebar>
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarHeader className="px-8">
            <Image
              src="/logo.png"
              alt="Logo"
              width={540}
              height={132}
              className="w-full"
            />
          </SidebarHeader>
          <SidebarGroupContent className="gap-4 flex flex-col">
            <SidebarMenu className="gap-4 flex flex-col">
              <SidebarMenuItem className="flex flex-col gap-2">
                <span className="text-base">Kind of content</span>
                <ContentTypeSelect />
              </SidebarMenuItem>

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
    </Sidebar>
  );
}
