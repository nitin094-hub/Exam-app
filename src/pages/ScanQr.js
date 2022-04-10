import React, { useEffect, useRef, useState } from "react";
import { QrReader } from "react-qr-reader";

function ScanQr() {
  const [scannedResult, setScannerResult] = useState(null);

  return (
    <>
      <div style={{ width: "10rem", height: "10rem" }}>
        {!scannedResult && (
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setScannerResult(result?.text);
              }
            }}
          />
        )}
      </div>
      <h1>{scannedResult}</h1>
    </>
  );
}

export default ScanQr;
