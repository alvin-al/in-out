// file = Html5QrcodePlugin.jsx
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";

const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
  const config = {
    fps: 10,
    qrbox: { width: 400, height: 200 },
    disableFlip: true,
    disableFileScan: true,
  };
  if (props.fps) config.fps = props.fps;
  if (props.qrbox) config.qrbox = props.qrbox;
  if (props.aspectRatio) config.aspectRatio = props.aspectRatio;
  if (props.disableFlip !== undefined) config.disableFlip = props.disableFlip;

  return config;
};

const Html5QrcodePlugin = (props) => {
  useEffect(() => {
    // Audio file
    const audio = new Audio("/beep.mp3");

    // when component mounts
    const config = createConfig(props);
    const verbose = props.verbose === false;

    // Success callback is required.
    if (!props.qrCodeSuccessCallback) {
      throw "qrCodeSuccessCallback is required callback.";
    }

    // Override success callback to add beep sound
    const qrCodeSuccessCallbackWithSound = (decodedText, decodedResult) => {
      audio.volume = 0.5;
      audio.play(); // Play beep sound
      props.qrCodeSuccessCallback(decodedText, decodedResult);
    };

    const html5QrcodeScanner = new Html5QrcodeScanner(
      qrcodeRegionId,
      config,
      verbose
    );
    html5QrcodeScanner.render(
      qrCodeSuccessCallbackWithSound,
      props.qrCodeErrorCallback
    );

    // cleanup function when component will unmount
    return () => {
      html5QrcodeScanner.clear().catch((error) => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, []);

  return (
    <div className='rounded-md text-gray-700 bg-blue-200' id={qrcodeRegionId} />
  );
};

export default Html5QrcodePlugin;
