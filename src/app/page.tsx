import { Inter } from "next/font/google";
import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Free & open-source text similarity API",
};

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 grid grid-cols-2 items-center">
          <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:lg:col-span-1">
            <LargeHeading
              size={"lg"}
              // define .three-d class in globals.css
              className="three-d text-black dark:text-light-gold"
            >
              Easily Determine Text Similarity
            </LargeHeading>
            {/* paragraph */}
            <Paragraph className="max-w-xl lg:text-left">
              With text similarity API, you can easily determine the similarity
              between two pieces of text with a free{" "}
              <Link
                href="/login"
                className="underline underline-offset-2 text-black dark:text-light-gold"
              >
                API key.
              </Link>
            </Paragraph>
          </div>
          {/* image*/}
          <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:lg:col-span-1 relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              className="img-shadow"
              quality={100}
              style={{ objectFit: "contain" }}
              fill
              src={"/typewriter.png"}
              alt="typewriter"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
