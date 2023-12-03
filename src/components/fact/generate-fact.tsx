"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { env } from "@/env.mjs";
import html2canvas from "html2canvas";

export default function GenerateFact() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const containerRef = useRef(null);

  const handleGenerate = () => {
    if (cooldown === 0) {
      setLoading(true);
      fetch(`${env.NEXT_PUBLIC_APP_URL}/api/fact`)
        .then(async (res) => setFact(await res.text()))
        .catch((err) => console.error(err))
        .finally(() => {
          setLoading(false);
          setCooldown(20);
        });
    }
  };

  const handleSave = () => {
    if (containerRef.current) {
      html2canvas(containerRef.current).then((canvas) => {
        const dataURL = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = dataURL;
        a.download = "generated_fact.png";
        a.click();
      });
    }
  };

  useEffect(() => {
    if (cooldown > 0) {
      const interval = setInterval(() => {
        setCooldown((prev) => Math.max(0, prev - 1));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [cooldown]);

  return (
    <section className="container mx-auto my-10 lg:my-24">
      <h1 className="head-text text-center">Know Facts about Climate Change</h1>
      <div className="flex flex-col justify-center items-center p-5">
        <div className="relative w-[700px] h-[700px] border rounded-md p-5" ref={containerRef}>
          <Image
            src="/bg/team.png"
            alt="Earth"
            width={700}
            height={700}
            className="rounded-md"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2 font-heading text-4xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl">
            <h1>{fact}</h1>
          </div>
        </div>
        <div className="mt-3">
          <Button disabled={loading || cooldown > 0} onClick={handleGenerate}>
            {loading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? 'Please wait' : `Generate${cooldown > 0 ? ` (${cooldown}s)` : ''}`}
          </Button>
          <Button onClick={handleSave} className="ml-2">
            Save
          </Button>
        </div>
      </div>
    </section>
  );
}
