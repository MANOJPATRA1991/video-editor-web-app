import { _RequiredCreateConfiguration } from "@cesdk/cesdk-js";

// CESDK configuration file
export const config: Partial<_RequiredCreateConfiguration> = {
  license: process.env.NEXT_PUBLIC_CESDK_LICENSE_KEY,
  userId: "guides-user",
  locale: "en",
  callbacks: {
    onUpload: "local",
  },
  ui: {
    elements: {
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
