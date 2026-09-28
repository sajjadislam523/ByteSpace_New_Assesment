"use client";

import { useState } from "react";
import { Pagination } from "@/components/ui/Pagination";
import { Tabs } from "@/components/ui/Tabs";

export function PaginationDemo() {
  const [page, setPage] = useState(1);
  return <Pagination page={page} totalPages={5} onPageChange={setPage} />;
}

export function TabsDemo() {
  return (
    <Tabs
      items={[
        {
          value: "about",
          label: "About",
          content: <p className="text-body-m">Course description goes here.</p>,
        },
        {
          value: "lessons",
          label: "Lessons",
          content: <p className="text-body-m">Lesson list goes here.</p>,
        },
        {
          value: "reviews",
          label: "Reviews",
          content: <p className="text-body-m">Student reviews go here.</p>,
        },
      ]}
    />
  );
}
