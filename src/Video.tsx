import { useEffect, useRef, useState } from "react";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [detectedText, setDetectedText] = useState<string | null>(null);

  useEffect(() => {
    const getVideo = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(stream);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    getVideo();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const captureImage = () => {
    if (!canvasRef.current) return;
    if (!videoRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    if (!context) return;
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(async (blob) => {
      if (blob) {
        const formData = new FormData();
        formData.append("language", "eng");
        formData.append("file", blob, "image.png");
        formData.append("filetype", "png");

        const response = await fetch("https://api.ocr.space/parse/image", {
          method: "POST",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }

        const result = await response.json();

        setDetectedText(
          result.ParsedResults[0]?.ParsedText || "No text detected",
        );
      }
    }, "image/png");
  };

  return (
    <div>
      <video ref={videoRef} autoPlay />
      <button
        className="w-full p-2 my-2 bg-slate-200 rounded-xl"
        onClick={captureImage}
      >
        Capture Image
      </button>
      <canvas className="w-full" ref={canvasRef}></canvas>
      {canvasRef.current && <p>Detected Text: {detectedText}</p>}
    </div>
  );
}
