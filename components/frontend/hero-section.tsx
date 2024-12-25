// import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";
import SmallTitle from "./small-title";

export default function HeroSections() {
  return (
    <Card>
      <CardContent className="p-8 md:p-4 bg-gradient-to-b from-white to-blue-100/50">
        <section className="w-full py-12 md:py-12 lg:py- xl:py-12">
          <div className="container max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <SmallTitle title=" Welcome to SchoolPro" />

              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Transform School Administration With <br />
                <span className="text-blue-800">Novia </span>{" "}
                <span>SchoolPro</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                SchoolPro brings together every aspect of school management into
                one powerful solution, designed for efficiency and simplicity.
              </p>
              <div className="space-x-4">
                <Button>Start free trial</Button>
                <Button variant="outline">Explore features</Button>
              </div>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
