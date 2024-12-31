import React, { useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

const Html5QrcodePlugin = ({ onScanSuccess }) => {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode("qr-code-scanner");

    html5QrCode
      .start(
        { facingMode: "environment" }, // Kamera belakang
        { fps: 10, qrbox: 250 }, // Pengaturan scanner
        onScanSuccess
      )
      .catch((error) => console.error("Error starting QR scanner:", error));

    return () => {
      // Pastikan elemen masih ada sebelum membersihkan
      const scannerElement = document.getElementById("qr-code-scanner");
      if (scannerElement) {
        html5QrCode
          .stop()
          .then(() => html5QrCode.clear())
          .catch((error) => console.error("Error stopping QR scanner:", error));
      }
    };
  }, [onScanSuccess]);

  return <div id='qr-code-scanner'></div>;
};

export default Html5QrcodePlugin;
