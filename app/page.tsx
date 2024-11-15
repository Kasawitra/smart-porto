import { H1 } from "@/components/ui/H1";
import { Metadata } from "next";
import Image from "next/image";
import FotoID from "@/assets/FotoID.jpg";
import { H2 } from "@/components/ui/H2";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Home | Smart Web",
};

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/graph.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">
            Hi, I&apos;m Kasawitra 👋🏼
          </H1>
          <p className="text-center sm:text-start">
            I&apos;m Frontend developer from Indonesia! Build website is really
            fun for me.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={FotoID}
            alt="Photo of me"
            height={300}
            width={300}
            className="aspect-square rounded-full border-2 object-cover object-top shadow-md dark:border-foreground"
          />
        </div>
      </section>

      <section className="space-y-3 text-center">
        <H2>Ask the chatbot anything about me</H2>
        <p>
          Click the <Bot className="inline pb-1" /> icon in the top bar to
          activate the AI Chat. you can ask the cha bot any question about me
          and it will find the relevant info on this page. the bot can even
          provide links to page you&apos;re looking for.
        </p>
      </section>
    </section>
  );
}
