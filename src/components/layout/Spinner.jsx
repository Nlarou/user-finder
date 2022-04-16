import preloader from "./assets/Preloader-wow.gif";
import React from "react";

export default function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        className="text-center mx-auto"
        width={700}
        src={preloader}
        alt="Loading..."
      />
    </div>
  );
}
