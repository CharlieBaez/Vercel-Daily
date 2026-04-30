//import { getSiteContent } from "@/lib/api/content";
import Image from "next/image";

export type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  img:{
    src:string;
    alt:string;
    width:number;
    height:number;
  }
}
export const Hero = async ({eyebrow, title, description, img}: HeroProps) => {
  
  return (
    <section className="bg-(--dark) text-(--light)">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-(--light)">
            {description}
          </p>
        </div>
        <Image alt={img.alt} width={img.width} height={img.height} src={img.src} />
      </div>
    </section>
  );
}