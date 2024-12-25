import React from "react";
import { Badge } from "@/components/ui/badge";

export default function SmallTitle({ title }: { title: string }) {
  return (
    <div>
      <Badge
        variant="secondary"
        className="h-8 items-center gap-2 pl-4 pr-6 text-base"
      >
        {title}
      </Badge>
    </div>
  );
}
