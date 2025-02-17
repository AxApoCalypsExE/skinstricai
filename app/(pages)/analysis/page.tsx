"use client";

import Header from "@/components/Header";
import React, { useState } from "react";

const Analysis = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <h1 className="uppercase text-sm font-semibold">
            Preparing your analysis...
          </h1>
          <div
            className="w-[300px] h-[300px] border-2 border-[--primary] opacity-50 border-dotted absolute animate-spin"
            style={{ animationDuration: "40s" }}
          />
          <div
            className="w-[350px] h-[350px] border-2 border-[--primary] opacity-25 border-dotted absolute animate-spin"
            style={{ animationDuration: "42s" }}
          />
          <div
            className="w-[400px] h-[400px] border-2 border-[--primary] opacity-15 border-dotted absolute animate-spin"
            style={{ animationDuration: "44s" }}
          />
        </div>
      ) : (
        <Header />
      )}
    </div>
  );
};

export default Analysis;
