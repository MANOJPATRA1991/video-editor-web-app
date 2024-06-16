import { _RequiredCreateConfiguration } from "@cesdk/cesdk-js";

// CESDK configuration file
export const config: Partial<_RequiredCreateConfiguration> = {
  license: process.env.NEXT_PUBLIC_CESDK_LICENSE_KEY,
  userId: process.env.NEXT_PUBLIC_CESDK_USER_ID,
  locale: "en",
  callbacks: {
    onUpload: "local",
  },
  theme: "dark",
  ui: {
    elements: {
      panels: {
        settings: true,
      },
      navigation: {
        action: {
          download: true,
          load: true,
          export: true,
        },
      },
    },
  },
};
