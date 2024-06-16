import { useVideoEditor } from "@/hooks/useVideoEditor";
import { useRef } from "react";

export const VideoEditor = () => {
  const cesdk_container = useRef<HTMLDivElement | null>(null);

  useVideoEditor(cesdk_container);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <div ref={cesdk_container} style={{ width: "100%", height: "100%" }} />
    </div>
  );
};
