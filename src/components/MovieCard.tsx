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
export default function MovieCard({
  movie,
  delay,
}: {
  movie: any;
  delay: number;
}) {
  return (
    <BlurFade delay={delay}>
      <Dialog>
        <DialogTrigger>
          <Card className="hover:scale-105 transition-transform duration-300 overflow-hidden shadow-xl w-48 aspect-[1/1.5]">
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
        <DialogContent className="text-white h-[500px] max-w-3xl  bg-zinc-950 p-0 ring-0 border-none overflow-hidden shadow-none">
          <DialogTitle className="hidden" aria-label="hidden" />
          <DialogDescription className="hidden" aria-label="hidden" />

          <div className="absolute m-4 flex flex-row gap-2">
            <Badge
              variant={"secondary"}
              className="py-0.5 px-2 font-medium text-xs text-secondary-foreground"
            >
              Dram
            </Badge>
            <Badge
              variant={"secondary"}
              className="py-0.5 px-2 font-medium text-xs text-secondary-foreground"
            >
              Suç
            </Badge>
            <Badge
              variant={"secondary"}
              className="py-0.5 px-2 font-medium text-xs text-secondary-foreground"
            >
              Gerilim
            </Badge>
          </div>
          <div className="h-[400px] w-full ">
            <div className="absolute bg-gradient-to-b from-transparent to-90%  from-10% to-zinc-950 w-full h-[400px]" />
            <div className="-z-10 bg-[url(https://image.tmdb.org/t/p/original/uGmYqxh8flqkudioyFtD7IJSHxK.jpg)] h-full bg-cover bg-center" />
          </div>
          <div className="z-10 p-4 bottom-5 absolute gap-4 flex flex-col justify-start items-start">
            <div className="flex flex-col gap-2 ">
              <h6 className="text-xs">O, artık yalnız değil.</h6>
              <div className="flex flex-row items-center justify-center gap-4">
                <h1 className="text-primary font-bold text-3xl">
                  Joker: İkili Delilik
                </h1>
                <div>
                  <p className="text-opacity-50 text-white text-xs">{138}dk</p>
                </div>
                <div className="flex flex-row gap-1">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <p className="text-xs text-yellow-500">
                    {Number(5.682).toFixed(1)}
                  </p>
                </div>
              </div>
            </div>
            <p className="opacity-50 text-xs">
              Joker: Folie à Deux, Türkçe adıyla Joker: İkili Delilik, 2024
              yapımı aksiyon, dram ve müzikal türünde bir devam filmi. Todd
              Phillips'in yönetmenliğinde çekilen film, 2019'da vizyona giren ve
              büyük başarı elde eden Joker filminin devamı niteliğinde. Başrolde
              yine Joaquin Phoenix, Arthur Fleck karakterine hayat veriyor. Ona
              Harley Quinn rolüyle Lady Gaga eşlik ediyor. Ayrıca Brendan
              Gleeson, Catherine Keener, Zazie Beetz ve Steve Coogan da önemli
              rollerde yer alıyor. Joker olarak kimliğine büründükten sonra
              Arthur'un, Arkham Akıl Hastanesi'nde yaşadığı süreç ve içsel
              mücadelesini merkeze alıyor. Bu zorlu dönemde Harley Quinn ile
              tanışması, ona hem romantik bir bağ hem de sanatsal bir keşif
              sunuyor.​ Film 4 Ekim 2024'te vizyona girdi ve IMDb puanı şu an
              8.0 civarında. Yönetmenliğini Todd Phillips üstlenirken, senaryo
              Todd Phillips ve Scott Silver'a ait.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </BlurFade>
  );
}
