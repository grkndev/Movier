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
export default function MovieCard() {
  return (
    <BlurFade className="">
      <Dialog>
        <DialogTrigger>
          <Card className="hover:scale-105 transition-transform duration-300 overflow-hidden shadow-xl w-40 aspect-[1/1.5]">
            <Image
              alt="mo"
              width={2000}
              height={3000}
              src={
                "https://image.tmdb.org/t/p/original/tXF2p2hthwXDXvCyXcwWuJKgaHD.jpg"
              }
            />
          </Card>
        </DialogTrigger>
        <DialogContent className="max-w-3xl p-0">
          <div className="h-[400px] w-full">
            <div className="absolute bg-gradient-to-b from-transparent to-black w-full h-[400px]" />
            <div className="-z-10 bg-[url(https://image.tmdb.org/t/p/original/uGmYqxh8flqkudioyFtD7IJSHxK.jpg)] h-full bg-cover bg-center" />
          </div>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </BlurFade>
  );
}
