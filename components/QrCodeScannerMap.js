"use client";
import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Link from "next/link";
import { redirect } from "next/navigation";

export function QrCodeScannerMap() {
  const [scanResult, setScanResult] = useState(null);
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    let isScanning = true;
    scanner.render(success, error);
    function success(result) {
      if (isScanning) {
        scanner.clear();
        setScanResult(result);
        isScanning = false;
      }
    }
    function error(result) {
      console.warn(result);
    }
  }, []);
  useEffect(() => {
    if (scanResult) redirect(`/map/${scanResult}`);
  }, [scanResult]);
  return (
    <div>
      <h2>Qr Scanning Code</h2>
      <div>
        <div id="reader"></div>
        <p>Scan the qr code</p>
      </div>
    </div>
  );
}
