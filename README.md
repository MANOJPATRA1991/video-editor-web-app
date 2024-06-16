# Video Editor Application

This is a video editor application built using React, Next.js and CreativeEditorSDK (CESDK). The application allows users to edit videos and exporting the edited video.

## Folder Structure

The folder structure of the project is as follows:

- `public/`: Contains public assets such as images and fonts.
- `app/`: Contains main page rendering content.
- `src/`: Contains the source code of the application.
  - `components/`: Contains React components used in the application.
    - `VideoEditor/`: Contains the VideoEditor component for video editing.
      - `VideoEditor.tsx`
      - `VideoEditor.module.css`
  - `hooks/`: Contains custom React hooks used in the application.
    - `useVideoEditor.tsx`: Custom hook for managing the video editor functionality.
  - `services/`: Contains service functions for interacting with external APIs or SDKs.
    - `VideoService.tsx`: Service functions for handling video editing operations using CESDK.
  - `cesdk-config.ts`: Configuration file for CESDK initialization.

## Architecture Overview

The application follows a modular architecture with clear separation of concerns. Here's an overview of the architecture:

- **Components**: React components are organized into the `components/` directory. The `VideoEditor` component handles video editing functionalities.

- **Hooks**: Custom React hooks are defined in the `hooks/` directory. The `useVideoEditor.tsx` hook encapsulates the logic for managing the video editor functionality, including CESDK initialization and video editing operations.

- **Services**: Service functions for interacting with CESDK and handling video editing operations are defined in the `services/` directory. The `VideoService.ts` file contains functions for creating the video editor instanc, and exporting edited videos.

- **CESDK Configuration**: The `cesdk-config.ts` file contains the configuration settings required for initializing CESDK, such as API keys and other SDK options.

## Getting Started

To run the application locally:

1. Clone this repository to your local machine.
2. Navigate to the project directory and install dependencies using `npm install` or `yarn install`.
3. Create `.env.local` file and add the following:
  ```bash

  # .env.local
  NEXT_PUBLIC_CESDK_LICENSE_KEY=<your_cesdk_license_key>
  NEXT_PUBLIC_EXPORT_VIDEO_NAME=<export_video_name>
  NEXT_PUBLIC_CESDK_USER_ID=<your_cesdk_user_id>

  ```
3. Start the development server using npm start or yarn start.
4. Open your browser and navigate to http://localhost:3000 to view the application.

## Dependencies

The application relies on the following dependencies:

1. React
2. Next.js
3. CreativeEditorSDK: SDK for video editing functionalities such as trimming and exporting.
  - [https://img.ly/docs/cesdk](https://img.ly/docs/cesdk)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.