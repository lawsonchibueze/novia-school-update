"use client";

import * as React from "react";
import { BarChart2, DollarSign, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeader from "./section-header";

const features = [
  {
    icon: Users,
    tab: "Students",
    title: "Student Management",
    description:
      "Comprehensive student information system for managing enrollments, profiles, and academic records with ease",
    href: "/features/student-management",
    subFeatures: [
      "Digital admission & enrollment processing",
      "Student profile management with medical records",
      "Parent portal access & communication",
      "Student performance tracking & analytics",
      "Behavior & disciplinary record management",
      "Custom ID card generation",
      "Alumni database management",
    ],
    image: "/images/placeholder.jpg",
  },
  {
    icon: GraduationCap,
    tab: "Academics",
    title: "Academic Management",
    description:
      "Streamline curriculum planning, examinations, grading, and report card generation in one unified system",
    href: "/features/academic-management",
    subFeatures: [
      "Curriculum & syllabus planning",
      "Assignment & homework management",
      "Online examination system",
      "Automated grade calculation",
      "Progress report generation",
      "Parent-teacher meeting scheduler",
      "Learning resource management",
    ],
    image: "/images/placeholder.jpg",
  },
  {
    icon: DollarSign,
    tab: "Finance",
    title: "Financial Management",
    description:
      "Complete fee management system with online payments, invoicing, and comprehensive financial reporting",
    href: "/features/finance",
    subFeatures: [
      "Fee structure management",
      "Online payment processing",
      "Automated invoice generation",
      "Payment reminder system",
      "Salary processing",
      "Financial reporting & analytics",
      "Budget planning tools",
    ],
    image: "/images/placeholder.jpg",
  },
  {
    icon: BarChart2,
    tab: "Analytics",
    title: "Analytics & Reports",
    description:
      "Powerful analytics tools for data-driven decisions with customizable reporting and insights",
    href: "/features/analytics",
    subFeatures: [
      "Real-time performance dashboards",
      "Customizable report generation",
      "Attendance analytics",
      "Financial trend analysis",
      "Student performance metrics",
      "Staff productivity tracking",
      "Predictive analytics for enrollment",
    ],
    image: "/images/placeholder.jpg",
  },
];

export function TabbedFeatures() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeader
        title="Additional  Features"
        heading="All-in-One School Management Platform"
        description="Real-time dashboards and comprehensive metrics to monitor key performance indicators and organizational health"
      />
      <Tabs defaultValue="Students" className="w-full max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          {features.map((feature) => (
            <TabsTrigger
              key={feature.tab}
              value={feature.tab}
              className="flex items-center gap-2"
            >
              <feature.icon className="h-4 w-4" />
              <span className="hidden sm:inline">{feature.tab}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {features.map((feature) => (
          <TabsContent key={feature.tab} value={feature.tab}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className="h-6 w-6" />
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="font-semibold">Key Features</h3>
                  <ul className="grid gap-2 text-sm">
                    {feature.subFeatures.map((subFeature) => (
                      <li key={subFeature} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {subFeature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-4">
                    <Link href={feature.href}>Learn More</Link>
                  </Button>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
