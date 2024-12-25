import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Scissors, Video, RefreshCcw, Music, Wand2 } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./section-header";

const features = [
  {
    title: "Strategic Planning",
    description:
      "Advanced analytics and forecasting tools to develop data-driven business strategies with precision and insight.",
    image: "/images/placeholder.jpg",
  },
  {
    title: "Performance Tracking",
    description:
      "Real-time dashboards and comprehensive metrics to monitor key performance indicators and organizational health.",
    image: "/images/placeholder.jpg",
  },
  {
    title: "Resource Optimization",
    description:
      "Intelligent resource allocation algorithms to maximize efficiency and minimize operational costs.",
    image: "/images/placeholder.jpg",
  },
  {
    title: "Collaboration Hub",
    description:
      "Integrated communication and project management tools fostering seamless team collaboration and workflow integration.",
    image: "/images/placeholder.jpg",
  },
  {
    title: "Customer Insights",
    description:
      "Deep customer behavior analysis and predictive modeling to enhance customer experience and retention strategies.",
    image: "/images/placeholder.jpg",
  },
  {
    title: "Financial Management",
    description:
      "Comprehensive financial tracking, reporting, and predictive financial modeling for informed decision-making.",
    image: "/images/placeholder.jpg",
  },
  {
    title: "Compliance & Security",
    description:
      "Advanced security protocols and compliance management tools ensuring data protection and regulatory adherence.",
    image: "/images/placeholder.jpg",
  },
];

export default function GridFeaturesss() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Features"
        heading="All-in-One School Management Platform"
        description="Real-time dashboards and comprehensive metrics to monitor key performance indicators and organizational health"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {/* AI Video Editing Card */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              {features[0].title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {features[0].description}
            </p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative bg-zinc-50 p-4">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex flex-col gap-4 p-2">
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Toggle sidebar"
                  >
                    <Video className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Auto-cut"
                  >
                    <Scissors className="h-4 w-4 text-red-500" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Scene detection"
                  >
                    <Wand2 className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Color correction"
                  >
                    <RefreshCcw className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Music sync"
                  >
                    <Music className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="ml-16">
                <Image
                  src={features[0].image}
                  width={500}
                  height={300}
                  alt={features[0].title}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Video Generation Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              {features[1].title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {features[1].description}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="ml-16">
                <Image
                  src={features[1].image}
                  width={500}
                  height={300}
                  alt={features[1].title}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        {/* AI Video Editing Card */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              {features[2].title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {features[2].description}
            </p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative bg-zinc-50 p-4">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex flex-col gap-4 p-2">
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Toggle sidebar"
                  >
                    <Video className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Auto-cut"
                  >
                    <Scissors className="h-4 w-4 text-red-500" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Scene detection"
                  >
                    <Wand2 className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Color correction"
                  >
                    <RefreshCcw className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Music sync"
                  >
                    <Music className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="ml-16">
                <Image
                  src={features[2].image}
                  width={500}
                  height={300}
                  alt={features[2].title}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        {/* AI Video Editing Card */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              {features[3].title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {features[3].description}
            </p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative bg-zinc-50 p-4">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex flex-col gap-4 p-2">
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Toggle sidebar"
                  >
                    <Video className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Auto-cut"
                  >
                    <Scissors className="h-4 w-4 text-red-500" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Scene detection"
                  >
                    <Wand2 className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Color correction"
                  >
                    <RefreshCcw className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Music sync"
                  >
                    <Music className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="ml-16">
                <Image
                  src={features[3].image}
                  width={500}
                  height={300}
                  alt={features[3].title}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        {/* AI Video Editing Card */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              {features[0].title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {features[0].description}
            </p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative bg-zinc-50 p-4">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex flex-col gap-4 p-2">
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Toggle sidebar"
                  >
                    <Video className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Auto-cut"
                  >
                    <Scissors className="h-4 w-4 text-red-500" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Scene detection"
                  >
                    <Wand2 className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Color correction"
                  >
                    <RefreshCcw className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Music sync"
                  >
                    <Music className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="ml-16">
                <Image
                  src={features[0].image}
                  width={500}
                  height={300}
                  alt={features[0].title}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              {features[4].title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {features[4].description}
            </p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative bg-zinc-50 p-4">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex flex-col gap-4 p-2">
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Toggle sidebar"
                  >
                    <Video className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Auto-cut"
                  >
                    <Scissors className="h-4 w-4 text-red-500" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Scene detection"
                  >
                    <Wand2 className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Color correction"
                  >
                    <RefreshCcw className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Music sync"
                  >
                    <Music className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="ml-16">
                <Image
                  src={features[4].image}
                  width={500}
                  height={300}
                  alt={features[4].title}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              {features[5].title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {features[5].description}
            </p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative bg-zinc-50 p-4">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex flex-col gap-4 p-2">
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Toggle sidebar"
                  >
                    <Video className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Auto-cut"
                  >
                    <Scissors className="h-4 w-4 text-red-500" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Scene detection"
                  >
                    <Wand2 className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Color correction"
                  >
                    <RefreshCcw className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Music sync"
                  >
                    <Music className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="ml-16">
                <Image
                  src={features[5].image}
                  width={500}
                  height={300}
                  alt={features[5].title}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              {features[6].title}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {features[6].description}
            </p>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative bg-zinc-50 p-4">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="flex flex-col gap-4 p-2">
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Toggle sidebar"
                  >
                    <Video className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Auto-cut"
                  >
                    <Scissors className="h-4 w-4 text-red-500" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Scene detection"
                  >
                    <Wand2 className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Color correction"
                  >
                    <RefreshCcw className="h-4 w-4" />
                  </button>
                  <button
                    className="rounded-lg p-2 hover:bg-accent"
                    aria-label="Music sync"
                  >
                    <Music className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="ml-16">
                <Image
                  src={features[6].image}
                  width={500}
                  height={300}
                  alt={features[6].title}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
