import { config } from "@/cesdk-config";
import type CreativeEditorSDK from "@cesdk/cesdk-js";
import type { ExportOptions } from "@cesdk/cesdk-js";

/**
 * Callback function triggered when exporting a video using CreativeEditorSDK.
 * @param {Blob[]} blobs An array of Blob objects representing the exported video data.
 * @param {ExportOptions} _ Export options (unused in this function).
 * @returns {void}
 */
const onExport = (blobs: Blob[], _: ExportOptions) => {
  try {
    const blob = blobs[0];
    const url = URL.createObjectURL(blob);
    if (typeof window !== "undefined") {
      const a = document.createElement("a");
      a.href = url;
      a.download = process.env.NEXT_PUBLIC_EXPORT_VIDEO_NAME!;
      a.click();
    }
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error exporting video:", error);
  }
};

/**
 * Creates a CreativeEditorSDK instance and initializes it with the provided configuration.
 * @param {HTMLDivElement} editorElement The HTML div element where the editor will be rendered.
 * @param {boolean} cleanedUp Flag indicating whether the editor should be cleaned up immediately after creation.
 * @returns {Promise<[CreativeEditorSDK | null, number]>} A promise resolving to an array containing the editor instance (or null if creation failed) and the video block ID.
 */
export const createEditor = async (
  editorElement: HTMLDivElement,
  cleanedUp: boolean = false
): Promise<[CreativeEditorSDK | null, number]> => {
  config.callbacks!.onExport = onExport;
  try {
    const CreativeEditorSDK = (await import("@cesdk/cesdk-js")).default;
    const editorInstance = await CreativeEditorSDK.create(
      editorElement,
      config
    );

    if (cleanedUp) {
      editorInstance.dispose();
      return [null, -1];
    }

    await Promise.all([
      editorInstance.addDefaultAssetSources(),
      editorInstance.addDemoAssetSources({ sceneMode: "Video" }),
    ]);
    const videoBlockId = await editorInstance.createVideoScene();

    return [editorInstance, videoBlockId];
  } catch (e) {
    console.error("Error creating editor: ", e);
    return [null, -1];
  }
};
