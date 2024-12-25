"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ErrorLayoutProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ErrorLayout({ icon, title, description }: ErrorLayoutProps) {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md p-6 flex flex-col items-center text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-red-500 text-white flex items-center justify-center">
          {icon}
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild variant="default">
            <Link href="/">Go to Homepage</Link>
          </Button>
          <Button variant="outline" onClick={() => router.back()}>
            Go Back
          </Button>
        </div>
        <div className="pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} novia
          <span className="text-blue-600"> SchoolPro.</span> All rights
          reserved.
        </div>
      </Card>
    </div>
  );
}
