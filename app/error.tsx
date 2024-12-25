"use client";

import { ErrorLayout } from "@/components/frontend/error-layout";
import { ServerCrashIcon } from "lucide-react";

export default function Error({}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorLayout
      icon={<ServerCrashIcon className="w-10 h-10" />}
      title="500 - Server Error"
      description="Sorry, something went wrong on our server. Please try again later."
    />
  );
}
