import { useVideoEditor } from "@/hooks/useVideoEditor";
import { useRef } from "react";
import styles from './VideoEditor.module.css';

export const VideoEditor = () => {
  const cesdk_container = useRef<HTMLDivElement | null>(null);

  useVideoEditor(cesdk_container);

  return (
    <div className={styles.cesdk}>
      <div ref={cesdk_container} className={styles.container} />
    </div>
  );
};
