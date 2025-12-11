"use client";
import React from "react";
export default function Mascot() {
  return (
    <div className="mascot" aria-hidden={false}>
      <img src="/download.gif" alt="mascot" />
      <div className="speech">Best of Luck!</div>
    </div>
  );
}
