import React, { useEffect, useRef, useState } from "react";
import { QrReader } from "react-qr-reader";

function QrCodeScanner({ setInputScanner, setIsOpenScanner }) {
  return (
    <div style={{ width: "20rem", height: "20rem" }}>
      <QrReader
        constraints={{
          facingMode: "environment",
        }}
        onResult={(result, error) => {
          if (!!result) {
            setInputScanner(result?.text);
            setIsOpenScanner(false);
          }
        }}
      />
    </div>
  );
}

export default QrCodeScanner;
