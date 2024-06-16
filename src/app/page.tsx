"use client";

import { VideoEditor } from "@/components/VideoEditor/VideoEditor";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <VideoEditor />
    </main>
  );
}
