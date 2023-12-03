"use client";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Tilt from "react-parallax-tilt";
import { featureConfig } from "@/config/feature";
import Image from "next/image";

export const CardGroup = () => {
  return (
    <div className="my-4 lg:my-16">
      <h1 className="head-text lg:text-left text-center">Features</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 my-5">
        {featureConfig.features.map((feat, id) => {
          return (
            <Tilt
              key={id}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable
              glareColor="#0ecf5b"
              glareMaxOpacity={0.2}
              glarePosition="all"
              glareBorderRadius="8px"
            >
              <Card className="card h-full">
                <CardHeader>
                  <Image
                    src={feat.imageUrl}
                    alt={feat.name}
                    width={600}
                    height={400}
                    className="rounded-md"
                  />
                  <h1 className="font-heading text-xl">{feat.name}</h1>
                </CardHeader>
                <CardContent>
                  <p className="my-2 text-lg">{feat.desc}</p>
                </CardContent>
              </Card>
            </Tilt>
          );
        })}
      </section>
    </div>
  );
};
