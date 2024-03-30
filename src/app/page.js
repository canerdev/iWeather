import React from "react";
import Search from "@/components/Form";
import Weather from "@/components/Weather";

export default function Home() {
  return (
    <main>
      {/* <div className="w-48 mx-auto text-white text-center border-red-800 border-4">
        <img src="/assets/Logo.png" alt="Logo" />
      </div> */}
        <img src="/assets/Logo.png" alt="Logo" className="m-auto mt-12"/>
        <Weather></Weather>
    </main>
  );
}
