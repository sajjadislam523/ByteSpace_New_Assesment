"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ReactNode } from "react";
import { Tabs } from "@/components/ui/Tabs";

const tabs = [
  { value: "about", label: "About" },
  { value: "lessons", label: "Lessons" },
  { value: "reviews", label: "Reviews" },
] as const;

type CourseTab = (typeof tabs)[number]["value"];
type Panels = Record<CourseTab, ReactNode>;

type CourseTabsViewProps = {
  panels: Panels;
  value: CourseTab;
  onValueChange?: (value: string) => void;
};

export function CourseTabsView({ panels, value, onValueChange }: CourseTabsViewProps) {
  return (
    <Tabs
      items={tabs.map((tab) => ({ ...tab, content: panels[tab.value] }))}
      value={value}
      onValueChange={onValueChange}
    />
  );
}

function isCourseTab(value: string | null): value is CourseTab {
  return tabs.some((tab) => tab.value === value);
}

export function CourseTabs({ panels }: { panels: Panels }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const param = searchParams.get("tab");
  const value = isCourseTab(param) ? param : "about";

  function changeTab(next: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (next === "about") params.delete("tab");
    else params.set("tab", next);
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return <CourseTabsView panels={panels} value={value} onValueChange={changeTab} />;
}
