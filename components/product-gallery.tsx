"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // 제품 이미지 배열 (10개)
  const productImages = Array.from({ length: 10 }, (_, i) => `/product_${i + 1}.png`);

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {productImages.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative aspect-square overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity">
                    <Image
                      src={image}
                      alt={`제품 사진 ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={image}
                      alt={`제품 사진 ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      priority
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
        </div>
      </Carousel>
    </div>
  );
} 