import { useEffect, useState, MutableRefObject } from "react";
import { createEditor } from "@/services/VideoService";

import type CreativeEditorSDK from "@cesdk/cesdk-js";

/**
 * Custom hook for managing the CreativeEditorSDK instance and video block ID in a React component.
 * @param {MutableRefObject<HTMLDivElement | null>} editorRef MutableRefObject referencing the HTMLDivElement where the editor will be rendered.
 * @returns {{ cesdk: CreativeEditorSDK | null, videoBlockId: number }} An object containing the CreativeEditorSDK instance (cesdk) and the video block ID.
 */
export const useVideoEditor = (
  editorRef: MutableRefObject<HTMLDivElement | null>
) => {
  const [cesdk, setCesdk] = useState<CreativeEditorSDK | null>(null);
  const [videoBlockId, setVideoBlockId] = useState<number>(-1);

  useEffect(() => {
    if (!editorRef.current) {
      return;
    }

    let cleanedUp = false;
    let editorInstance: CreativeEditorSDK | null;
    let videoBlockId: number;

    const create = async () => {
      [editorInstance, videoBlockId] = await createEditor(editorRef.current!, cleanedUp);
      setCesdk(editorInstance);
      setVideoBlockId(videoBlockId);
    };

    create();

    const cleanup = () => {
      cleanedUp = true;
      editorInstance?.dispose();
      setCesdk(null);
    };

    return cleanup;
  }, [editorRef]);

  return { cesdk, videoBlockId };
};
