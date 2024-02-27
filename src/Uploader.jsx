import { useState } from "react";
import Compressor from "@uppy/compressor";
import Uppy from "@uppy/core";
import ImageEditor from "@uppy/image-editor";
import { Dashboard } from "@uppy/react";
import Webcam from "@uppy/webcam";

export default function Uploader() {
  const [uppy] = useState(() => {
      return new Uppy({
        debug: true,
        allowMultipleUploadBatches: false,
        restrictions: {
          maxNumberOfFiles: 1,
          maxFileSize: 15_485_760,
          allowedFileTypes: [
            "image/*",
            ".jpg",
            ".jpeg",
            ".jpe",
            ".png",
            ".gif",
            ".heif",
            ".heic",
            ".webp",
          ],
        },
      })
        .use(Webcam)
        .use(ImageEditor, {
          quality: 9,
          actions: {
            cropSquare: false,
            cropWidescreenVertical: false,
            revert: true,
            rotate: true,
            granularRotate: true,
            flip: true,
            zoomIn: true,
            zoomOut: true,
            cropWidescreen: true,
          },
        })
        .use(Compressor)
    }
  );

  return (
    uppy && (
      <Dashboard
        uppy={uppy}
        width={800}
        proudlyDisplayPoweredByUppy={false}
        plugins={["Webcam", "ImageEditor"]}
      />
    )
  );
}

