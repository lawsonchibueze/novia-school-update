import React from "react";
import SmallTitle from "./small-title";

export default function SectionHeader({
  title,
  heading,
  description,
}: {
  title: string;
  heading: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center pb-6">
      <SmallTitle title={title} />
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        {heading}
      </h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
